 

import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';


// const INITIAL_STATE = {
//     items: [
//         { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//         { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//         { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//         { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
// };

const getInitialContacts = () => {
  const savedContacts = localStorage.getItem('contacts');
  return savedContacts ? JSON.parse(savedContacts) : [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
};


const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: getInitialContacts(),
  },
  reducers: {
    addContact: {
      reducer(state, action) {
            state.items.push(action.payload);
            localStorage.setItem('contacts', JSON.stringify(state.items));
      },
      prepare({ name, number }) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
        state.items = state.items.filter(contact => contact.id !== action.payload);
        localStorage.setItem('contacts', JSON.stringify(state.items));
    },
  },
});


export const { addContact, deleteContact } = contactsSlice.actions;


export const selectContacts = state => state.contacts.items;

export default contactsSlice.reducer;

