import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Routes from './routes'
import GlobalStyles from './styles/global'

const App: React.FC = () => (
  <>
    <Routes />
    <GlobalStyles />
    <ToastContainer />
  </>
)

export default App
