import './App.css';
import { Login } from './components/login.jsx';
import Alert from '@mui/material/Alert';
import { useReactiveVar } from "@apollo/client";
import { rvShowAlert, rvAlertText } from './state/alert-state.ts'


function App() {

  const showAlert = useReactiveVar(rvShowAlert)
  const alertText = useReactiveVar(rvAlertText)

  const closeAlert = () => {
    rvShowAlert(false)
    rvShowAlert('')
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
        <Login />
      </header>
    </div>
  );
}

export default App;
