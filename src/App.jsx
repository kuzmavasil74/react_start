import MailBox from './components/MailBox/MailBox'

import meestExpressUsers from './MeestExpres.json'
import novaPoshtaUsers from './NewPost.json'
import ukrPoshtaUsers from './UKRPost.json'

function App() {
  return (
    <div>
      <MailBox
        users={meestExpressUsers}
        boxTitle="Meest Express"
        mailBoxCount={3}
      />
      <MailBox
        users={novaPoshtaUsers}
        boxTitle="Nova Poshta"
        mailBoxCount={5}
      />
      <MailBox users={ukrPoshtaUsers} boxTitle="UKR Poshta" />
    </div>
  )
}

export default App
