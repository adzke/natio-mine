import React, {useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { getAuthToken } from '../api-functions/api-call'

export const Login = () => {

    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')


    const clearForm = () => {
        setUsername('')
        setPassword('')
    }

    const submitForm = () => {
        clearForm()
        getAuthToken(username, password)

    }

    return (
        <div className='login-box' >
            <div className='textFieldContainer'>
                <TextField 
                onChange={(e) => {
                    setUsername(e.target.value)
                  }}
                value={username}
                InputLabelProps={{
                    style: { color: '#B3B3B3', fontSize: 14 },
                }} id="standard-basic" label="Username" variant="standard" />
            </div>
            <div className='textFieldContainer'>
                <TextField
                onChange={(e) => {setPassword(e.target.value)}}
                value={password}
                type="password"
                InputLabelProps={{
                    style: { color: '#B3B3B3', fontSize: 14 },
                }} id="standard-basic" label="Password" variant="standard" />
            </div>
            <div className='buttonContainer'>
                <Button onClick={submitForm} sx={{ backgroundColor: '#555555' }} className='loginButton' variant="contained">Login</Button>
            </div>

        </div>
    )
}
