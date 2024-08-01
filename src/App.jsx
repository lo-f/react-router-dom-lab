import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar.jsx'
import MailBoxList from './components/MailboxList.jsx';
import MailboxForm from './components/MailboxForm.jsx';
import MailboxDetails from './components/MailboxDetails.jsx';
import './App.css'


const initialState = [];

const App = () => {
  const [mailboxes, setMailboxes] = useState(initialState);

  const addMailbox = (newMailboxData) => {
    newMailboxData._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, newMailboxData]);
  };

  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={<main><h1>Post Office</h1></main>}/>
      <Route path='/mailboxes' element={<MailBoxList mailboxes={mailboxes} />}/>
      <Route path='/new-mailbox' element={<MailboxForm addMailbox={addMailbox}/>}/>
      <Route path='/mailboxes/:mailboxId' element={<MailboxDetails mailboxes={mailboxes}/>}/>
      <Route path='*' element={<h2>sad, such empty...</h2>} />
    </Routes>
    </>
  );
};

export default App;
