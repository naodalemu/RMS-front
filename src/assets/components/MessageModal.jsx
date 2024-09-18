import classes from './MessageModal.module.css';

function MessageModal({ isItError, message, closeMessageBackdrop }) {
    return (
        <div className={classes.backdrop} onClick={closeMessageBackdrop}>
            <div className={classes.MessageContainer} onClick={(e) => e.stopPropagation()}>
                { isItError ? 
                    <div style={{ color: 'brown' }}>{message}</div> : <div style={{ color: 'darkgreen' }}>{message}</div>
                }
            </div>
        </div>
    )
}

export default MessageModal;