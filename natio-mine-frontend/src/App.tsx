import './App.css';
import { Login } from './components/login';
import Alert from '@mui/material/Alert';
import { useReactiveVar } from "@apollo/client";
import { rvShowAlert, rvAlertText } from './state/alert-state'
import { rvUserAuthenticated } from './state/login-state';
import { GameArea } from './components/game-area';


function App() {

  const showAlert = useReactiveVar(rvShowAlert)
  const alertText = useReactiveVar(rvAlertText)
  const userAuthenticated = useReactiveVar(rvUserAuthenticated)

  const closeAlert = () => {
    rvShowAlert(false)
    rvAlertText('')
  }
  return (
    <div className="App">
      <div className='alertHolder'>
        {showAlert ?
          <Alert onClose={() => { closeAlert() }} severity="error">{alertText}</Alert>
          :
          null
        }
      </div>
      <header className="App-header">
        {userAuthenticated ?
        <GameArea/>
        :
          <Login />
        }

      </header>
    </div>
  );
}

export default App;
