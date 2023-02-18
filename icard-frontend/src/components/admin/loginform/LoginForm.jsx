import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import "./LoginForm.scss"

export function initialValuesForm(){ 

    return {
        email: "",
        password: ""
    }

}

export const LoginForm = () => {

    const formik = useFormik({

        initialValues: initialValuesForm(),

        onSubmit: (formValue) => {
            console.log("email enviado")
            console.log(formValue)
        }
        
    })

    return (
        <Form className="login-form-admin">
            <Form.Input name="email" placeholder="Correo" value={formik.values.email} onChange={formik.handleChange}/>
            <Form.Input name="password" type="password" placeholder="Contraseña" value={formik.values.password} onChange={formik.handleChange}/>
            <Button type="submit" content="Iniciar sesión" primary fluid/> 
        </Form>
    )

}
