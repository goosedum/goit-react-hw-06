import { FaUserCircle } from 'react-icons/fa';
import { AiFillPhone } from 'react-icons/ai';

import css from './Contact.module.css';

import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

const Contact = ({ contactId, name, phone }) => {
  const dispatch = useDispatch();
  
  const handleClick = contactId => {
    // 1. Створення команди
    const action = deleteContact(contactId);
    // 2. Доставка команди в Store
    dispatch(action);
  };

  return (
    <>
      <div className={css.profile}>
        <p className={css.name}>
          <FaUserCircle />
          {name}
        </p>
        <a href={`tel:${phone}`} className={css.phone}>
          <AiFillPhone />
          {phone}
        </a>
      </div>

      <button onClick={() => handleClick(contactId)} className={css.button}>
        Delete
      </button>
    </>
  );
};

export default Contact;
