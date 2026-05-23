const Notification = ({ message, type }) => {
    if (message === null) {
        return null
    }

    return (
        <div className={`notification ${type === 'error' ? 'notification--error' : 'notification'}`}>
            {message}
        </div>
    )
}

export default Notification