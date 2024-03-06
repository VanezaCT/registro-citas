import React from 'react';
import AppFormik from './form';
import db from '../../firebase-config';
// import { collection, doc, setDoc } from "firebase/firestore"; 
import { collection, addDoc, setDoc,doc } from "firebase/firestore"; 
import { set } from 'react-hook-form';




const RegisterForm = () => {

    const addCitas = async (citasObject)=>{
        
    //  await db.collection('Registro-citas').doc().set(citasObject)
        // console.log(citasObject);

        // const docData = (citasObject)
    //    await setDoc(doc(db, 'Citas','registro'),docData)
        await setDoc(doc(db, "Registro-Citas", "Nueva-cita"), citasObject);
        console.log('cita registrada');
    }

    return (
        <AppFormik addCitas={addCitas}/>
    );
}

export default RegisterForm;
