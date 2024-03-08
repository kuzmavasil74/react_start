const MailBox = ({ boxUsers, boxTitle, mailBoxCount = 0 }) => {
  return (
    <div>
      <h2>{boxTitle}</h2>
      {mailBoxCount === 0 ? (
        <p>
          <b>
            We appologize for the inconvenience. There are currently no boxes
            available to order.
          </b>
        </p>
      ) : (
        <p>Number of active mailboxes: {mailBoxCount}</p>
      )}
      <ul>
        {boxUsers.map((user) => {
          return <li key={user.id}>{user.userEmail}</li>
        })}
      </ul>
    </div>
  )
}

export default MailBox
