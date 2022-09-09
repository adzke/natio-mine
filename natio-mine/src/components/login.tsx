import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const Login = () => {
    return (
        <div className='login-box'>
            <div className='textFieldContainer'>
                <TextField InputLabelProps={{
                    style: { color: '#B3B3B3', fontSize: 14 },
                }} id="standard-basic" label="Username" variant="standard" />
            </div>
            <div className='textFieldContainer'>
                <TextField InputLabelProps={{
                    style: { color: '#B3B3B3', fontSize: 14 },
                }} id="standard-basic" label="Password" variant="standard" />
            </div>
            <div className='buttonContainer'>
                <Button sx={{ backgroundColor: '#555555' }} className='loginButton' variant="contained">Login</Button>
            </div>

        </div>
    )
}
