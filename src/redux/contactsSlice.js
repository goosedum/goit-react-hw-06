 

import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';




const getInitialContacts = () => {
  const savedContacts = localStorage.getItem('contacts');
  return savedContacts ? JSON.parse(savedContacts) : [
    { id: 'id-1', name: 'Gososedum', number: '909090' },
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

