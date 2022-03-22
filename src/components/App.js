import Layout from './Layout'
import Header from './Header'
import Speakers from './Speakers'

function App () {
  return (
    <Layout startingTheme="light">
      <div>
        <Header />
        <Speakers />
      </div>
    </Layout>
  )
}

export default App