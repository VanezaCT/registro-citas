import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import EditCalendarRoundedIcon from '@mui/icons-material/EditCalendarRounded';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../styles/formik.scss'
import { useState } from 'react';


const StyledButton = styled(IconButton)(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
}));
const StyledDay = styled(PickersDay)(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    color:
        theme.palette.mode === 'light'
            ? theme.palette.secondary.dark
            : theme.palette.secondary.light,
    width: 300
}));

// Function validate Input




const AppFormik = () => {

    const [fechaSeleccionada, cambiarFecha] = useState(new Date())

    const [userName, setUserName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [leyenda, setLeyenda] = React.useState("");
    const [errorTitulo, setErrorTitulo] = React.useState(false);

    console.log(fechaSeleccionada, userName, email,phone);

   

    return (
        <div>
            <form className='datePicker'  >
                <LocalizationProvider dateAdapter={AdapterDayjs} >
                    <DemoContainer components={['DateTimePicker', 'DateTimePicker']}
                        sx={{
                            '& .MuiTextField-root': { m: 0, width: '38ch', marginTop: 3 },
                        }} >
                        <h1>Registra tu cita</h1>
                        <DatePicker 
                            id='date'
                            label="Seleccione el Dia/Mes de su cita"
                            slots={{
                                openPickerIcon: EditCalendarRoundedIcon,
                                openPickerButton: StyledButton,
                                day: StyledDay,
                            }}
                            slotProps={{
                                openPickerIcon: { fontSize: 'small' },
                                openPickerButton: { color: 'secondary' },
                                textField: {
                                    variant: 'filled',
                                    color: 'secondary',
                                },
                            }} 
                            onChange={cambiarFecha}
                            />

                        <TimePicker
                            id='hour'
                            label="Seleccione la Hora de su cita"
                            slots={{
                                openPickerIcon: AccessTimeIcon,
                                openPickerButton: StyledButton,
                            }}
                            slotProps={{
                                openPickerIcon: { fontSize: 'small' },
                                openPickerButton: { color: 'secondary' },
                                textField: {
                                    variant: 'filled',
                                    color: 'secondary',
                                    width: 300
                                },
                            }} 
                            onChange={cambiarFecha}
                            />

                        <TextField
                        onChange={(e)=>{
                            setUserName(e.target.value)
                                { userName.length < 8 ? (
                                    setErrorTitulo(true),
                                setLeyenda("complete el su nombre y apaellido") ):
                                ( 
                                        setErrorTitulo(false),
                                        setLeyenda("")
                                )}
                        }}
                            id="userName"
                            label="Nombres y Apellidos"
                            error={errorTitulo}
                            helperText={ leyenda}
                            variant="filled"
                            color="secondary"
                        />

                        <TextField
                        onChange={(e)=>{
                            setEmail(e.target.value)
                            {
                                !email.includes('@' && '.')?
                                (
                                    setErrorTitulo(true),
                                    setLeyenda("ingrese un correo adecuado")
                                ):
                                    (
                                        setErrorTitulo(false),
                                        setLeyenda(" ")
                                    )
                            }
                        }}
                            id="email"
                            label="Ingresa tu correo"
                            error={errorTitulo}
                            helperText={leyenda}
                            variant="filled"
                            color="secondary"
                        />


                        <TextField
                            onChange={(e) => {
                                setPhone(e.target.value)
                                {
                                    phone.length >8?
                                        (
                                            setErrorTitulo(true),
                                            setLeyenda("ingrese un correo adecuado")
                                        ) :
                                        (
                                            setErrorTitulo(false),
                                            setLeyenda(" ")
                                        )
                                }
                            }}
                            id="number"
                            label="Ingresa tu numero de celular"
                            error={errorTitulo}
                            helperText={leyenda}
                            type='tel'
                            variant="filled"
                            color="secondary"
                            pattern="^-?[0-9]\d*\.?\d*$"
                           
                        />

                        <Button
                            color="secondary"
                            variant="contained"
                            style={{ width: 150 }}
                            type='submit'>
                            Registrar</Button>
                            
                    </DemoContainer>
                </LocalizationProvider>
            </form>
        </div>
    )
}
export default AppFormik;


