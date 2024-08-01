import { useParams } from "react-router-dom";

const MailboxDetails = (props) => {
    const { mailboxId } = useParams();
    const selectedBox = props.mailboxes.find(
        (mailbox) => mailbox._id === Number(mailboxId)
    );
    return (
        <>
        <h2>Mailbox {mailboxId}:</h2>
        <dl>
            <dt><strong>Boxholder:</strong> {selectedBox.boxHolder}</dt>
            <dt><strong>Box Size:</strong> {selectedBox.boxSize}</dt>
        </dl>
        </>
    )
};

export default MailboxDetails;