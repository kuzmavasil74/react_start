import MailBox from '../MailBox/MailBox'

const MeestExpressUsers = [
  { id: '1', userEmail: 'alex@example.com' },
  { id: '2', userEmail: 'ivan_23@example.com' },
  { id: '3', userEmail: 'vasyl_43@example.com' },
]
const NewPostUsers = [
  { id: '11', userEmail: 'oleh_45@example.com' },
  { id: '22', userEmail: 'boris3@example.com' },
  { id: '33', userEmail: 'misha_2@example.com' },
]
const UKRPostUsers = [
  { id: '111', userEmail: 'vanja_2@example.com' },
  { id: '222', userEmail: 'petja_2@example.com' },
  { id: '333', userEmail: 'martin_3@example.com' },
]

function App() {
  return (
    <div>
      <MailBox
        boxUsers={MeestExpressUsers}
        boxTitle="Meest Express"
        mailBoxCount={3}
      />
      <MailBox boxUsers={NewPostUsers} boxTitle="New Post" mailBoxCount={5} />
      <MailBox boxUsers={UKRPostUsers} boxTitle="UKR Post" />
    </div>
  )
}

export default App
