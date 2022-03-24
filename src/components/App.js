import Layout from './Layout'
import Header from './Header'
import Speakers from './Speakers'
import { AuthProvider } from '../contexts/AuthContext'

function App () {
  return (
    <AuthProvider initialLoggedInUser="Icarus">
      <Layout startingTheme="light">
        <div>
          <Header />
          <Speakers />
        </div>
      </Layout>
    </AuthProvider>
  )
}

export default App