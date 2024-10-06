const MessageAccess = ({ type, message }) => {
    if (!message) return null

    const messageStyle = {
        color: type === "error" ? "red" : "green"
    }

    return (
        <div className="text-center" style={messageStyle}>{message}</div>
    )
}

export default MessageAccess