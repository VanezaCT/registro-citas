import * as React from 'react';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../styles/formik.scss'
import { useState } from 'react';




const AppFormik = (props) => {

   
    // cambio de estado datos 
    // const [date, setDate] = useState(new Date([0]))
    // const [hour, setHour] = useState(new Date())
    // const [userName, setUserName] = React.useState("");
    // const [email, setEmail] = React.useState("");
    // const [phone, setPhone] = React.useState("");
    
    // console.log(fechaSeleccionada, userName, email, phone);

    // manejo de errores input
    const [errorDate, setErrorDate] = React.useState(false);
    const [errorHour, setErrorHour] = React.useState(false);
    const [errorUserName, setErrorUserName] = React.useState(false);
    const [errorEmail, setErrorEmail] = React.useState(false);
    const [errorPhone, setErrorPhone] = React.useState(false);


    // funciones de validacion de datos
    // const validateDate = (e) => {
    //     setDate(e.target.value)
    //     { date.getDate ==='' ? setErrorDate(true) : setErrorDate(false) } //falta corregir
    // }

    // const validateHour = (e) => {
    //     setHour(e.target.value)
    //     { hour.length === '' ? setErrorHour(true) : setErrorHour(false) } //falta corregir
    // }

    // const validateUserName = (e) => {
    //     setUserName(e.target.value)
    //     { userName.length < 8 ? setErrorUserName(true) : setErrorUserName(false) }
    // }

    // const validateEmail = (e) => {
    //     setEmail(e.target.value)
    //     { !email.includes('@' && '.') ? setErrorEmail(true) : setErrorEmail(false) }
    // }

    // const validatePhone = (e) => {
    //     setPhone(e.target.value)
    //     { phone.length > 8 ? setErrorPhone(true) : setErrorPhone(false) }
    // }


    const valorInitial = {
        date: ' ',
        hour: '',
        userName: '',
        email: '',
        phone: ''
    }
    const [values, setValues] = useState(valorInitial);

    // capturar datos

    const capturarDatosInput = e =>{
        const {name,value} = e.target
        // console.log(name,value);
        setValues({...values,[name]:value})
        
    }

    const capturarValor=(e) => {
        e.preventDefault()
        props.addCitas(values)
        console.log(values);
    }

    return (
        <div>
            <form className='datePicker' onSubmit={capturarValor}>

                <h1>Registra tu cita</h1>

                <TextField
                    // id="date"
                    name='date'
                    label="Fecha"
                    type="date"
                    variant='filled'
                    color='secondary'
                    InputLabelProps={{
                        shrink: true,
                    }}
                    error={errorDate}
                    style={{ marginTop: 15, width: 250 }}
                    onChange={capturarDatosInput}
                />

                <TextField
                    // id="time"
                    name='hour'
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
                    onChange={capturarDatosInput}
                />
                <TextField
                    // onChange={validateUserName}
                    name='userName'
                    onChange={capturarDatosInput}
                    label="Nombres y Apellidos"
                    error={errorUserName}
                    variant="filled"
                    color="secondary"
                    style={{ marginTop: 15, width: 250 }}
                />
                <TextField
                    // onChange={validateEmail}
                    name='email'
                    onChange={capturarDatosInput}
                    label="Ingresa tu correo"
                    error={errorEmail}
                    variant="filled"
                    color="secondary"
                    style={{ marginTop: 15, width: 250 }}
                />
                <TextField
                    // onChange={validatePhone}
                    name='phone'
                    onChange={capturarDatosInput}
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
                    // onClick={() => 
                    // alert(JSON.stringify(capturarValor))}
                    >
                    Registrar</Button>
            </form>
        </div>
    )
}
export default AppFormik;


