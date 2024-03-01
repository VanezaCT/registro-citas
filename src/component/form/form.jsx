import * as React from 'react';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../styles/formik.scss'
import { useState } from 'react';




const AppFormik = () => {

    const valorInitialDay= new Date([0])
    // cambio de estado datos 
    const [date, setDate] = useState(new Date([0]))
    const [hour, setHour] = useState(new Date())
    const [userName, setUserName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");
    
    // console.log(fechaSeleccionada, userName, email, phone);

    // manejo de errores input
    const [errorDate, setErrorDate] = React.useState(false);
    const [errorHour, setErrorHour] = React.useState(false);
    const [errorUserName, setErrorUserName] = React.useState(false);
    const [errorEmail, setErrorEmail] = React.useState(false);
    const [errorPhone, setErrorPhone] = React.useState(false);


    // funciones de validacion de datos
    const validateDate = (e) => {
        setDate(e.target.value)
        { date.getDate ==='' ? setErrorDate(true) : setErrorDate(false) } //falta corregir
    }

    const validateHour = (e) => {
        setHour(e.target.value)
        { hour.length === '' ? setErrorHour(true) : setErrorHour(false) } //falta corregir
    }

    const validateUserName = (e) => {
        setUserName(e.target.value)
        { userName.length < 8 ? setErrorUserName(true) : setErrorUserName(false) }
    }

    const validateEmail = (e) => {
        setEmail(e.target.value)
        { !email.includes('@' && '.') ? setErrorEmail(true) : setErrorEmail(false) }
    }

    const validatePhone = (e) => {
        setPhone(e.target.value)
        { phone.length > 8 ? setErrorPhone(true) : setErrorPhone(false) }
    }





    // capturar datos

    const capturarValor=() => {
   
        
        const day= date.getDate()+'/'+date.getMonth()+'/'+date.getFullYear()
        const hours = hour.getHours() + ':' + hour.getMinutes()
             return{
            date: day,
            hour: hours,
            userName: userName,
            email: email,
            phone: phone
        }
    }


    // prueb
  
    return (
        <div>
            <form className='datePicker'>

                <h1>Registra tu cita</h1>

                <TextField
                    id="date"
                    label="Fecha"
                    type="date"
                    variant='filled'
                    color='secondary'
                    InputLabelProps={{
                        shrink: true,
                    }}
                    error={errorDate}
                    style={{ marginTop: 15, width: 250 }}
                />

                <TextField
                    id="time"
                    label="Alarm clock"
                    type="time"
                    variant='filled'
                    color='secondary'
                    InputLabelProps={{
                        shrink: true,
                    }}
                    // inputProps={{
                    //     step: 300, // 5 min
                    error={errorHour}
                    style={{ marginTop: 15, width: 250 }}
                />
                <TextField
                    onChange={validateUserName}
                    label="Nombres y Apellidos"
                    error={errorUserName}
                    variant="filled"
                    color="secondary"
                    style={{ marginTop: 15, width: 250 }}
                />
                <TextField
                    onChange={validateEmail}
                    label="Ingresa tu correo"
                    error={errorEmail}
                    variant="filled"
                    color="secondary"
                    style={{ marginTop: 15, width: 250 }}
                />
                <TextField
                    onChange={validatePhone}
                    label="Ingresa tu numero de celular"
                    error={errorPhone}
                    type='tel'
                    variant="filled"
                    color="secondary"
                    pattern="^-?[0-9]\d*\.?\d*$"
                    style={{ marginTop: 15, width: 250 }}
                />
                <Button
                    color="secondary"
                    variant="contained"
                    style={{ width: 150, marginTop: 15 }}
                    type='submit'
                    onClick={() => 
                    alert(JSON.stringify(capturarValor()))
                    }>
                    Registrar</Button>
            </form>
        </div>
    )
}
export default AppFormik;


