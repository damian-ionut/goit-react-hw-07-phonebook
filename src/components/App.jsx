import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from './App.module.css';
import { fetchContacts } from '../redux/contactOperations';
import { selectError, selectIsLoading } from '../redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1 className={css.phonebookTitle}> Phonebook</h1>
      <ContactForm />
      <h2 className={css.contactsTitle}>Contacts</h2>
      <Filter />
      {isLoading && !error && (
        <div className={css.loader}></div>
      )}
      <ContactList />
    </div>
  );
};