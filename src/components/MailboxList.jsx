import { Link } from 'react-router-dom';

const MailBoxList = (props) => {
   return (
   <>
   <h2>Mailboxes</h2>
   <ul>
        {props.mailboxes.map((currentMailbox) => (
        <li key={currentMailbox.boxHolder} class='mail-box'>
            <Link to={`/mailboxes/${currentMailbox._id}`}>
            {currentMailbox.boxHolder}
            </Link>
        </li>
        ))}
   </ul>
   </>
   );
}

export default MailBoxList;

