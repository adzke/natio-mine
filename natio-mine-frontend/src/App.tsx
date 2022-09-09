import './App.css';
import { Login } from './components/login';
import Alert from '@mui/material/Alert';
import { useReactiveVar } from "@apollo/client";
import { rvAlertProps, rvShowAlert } from './state/alert-state'
import { rvUserAuthenticated } from './state/login-state';
import { GameArea } from './components/game-area';


function App() {

  const showAlert = useReactiveVar(rvShowAlert)
  const alertProps = useReactiveVar(rvAlertProps)
  const userAuthenticated = useReactiveVar(rvUserAuthenticated)

  const closeAlert = () => {
    rvShowAlert(false)
    rvAlertProps({alertMessage: ''})
  }
  return (
    <div className="App">
      <div className='alertHolder'>
        {showAlert ?
          <Alert onClose={() => { closeAlert() }} severity={alertProps?.alertType}>{alertProps?.alertMessage}</Alert>
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
