import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { getAuthToken, getProfile } from '../api-functions/api-call'
import { useReactiveVar } from '@apollo/client';
import { rvAuthorisedUser } from '../state/login-state';

export const Login = () => {

    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const authUser = useReactiveVar(rvAuthorisedUser)

    const clearForm = () => {
        setUsername('')
        setPassword('')
    }

    const submitForm = async () => {
        clearForm()
       const authUser =  await getAuthToken(username, password)
        if (authUser.authorisedUser) {
            await getProfile(authUser.authorisedUser?.token)
        }
        

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
                    onChange={(e) => { setPassword(e.target.value) }}
                    value={password}
                    type="password"
                    InputLabelProps={{
                        style: { color: '#B3B3B3', fontSize: 14 },
                    }} id="standard-basic" label="Password" variant="standard" />
            </div>
            <div className='buttonContainer'>
                <Button onClick={submitForm} sx={{ backgroundColor: '#555555', ":hover": { backgroundColor: '#7D7D7D' } }} className='loginButton' variant="contained">Login</Button>
            </div>

        </div>
    )
}
