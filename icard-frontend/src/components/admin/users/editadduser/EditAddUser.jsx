import React from 'react'
import { Form, Button, Checkbox } from 'semantic-ui-react'
import { useFormik } from 'formik'
import * as Yup from "yup"
import "./EditAddUser.scss"

const initialValues = () => {
    return {
        username: "",
        email: "",
        first_name: "",
        last_name: "",
        is_active: true,
        is_staff: false,
        password: ""
    }
}

const newSchema = () => {

    return {
        username: Yup.string().required(true),
        email: Yup.string().email(true).required(true),
        first_name: Yup.string(),
        last_name: Yup.string(),
        is_active: Yup.bool().required(true),
        is_staff: Yup.bool().required(true),
        password: Yup.string().required(true)
    }

}

export const EditAddUser = () => {

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(newSchema),
        validateOnChange: false,
        onSubmit: (formValue) => {
            console.log("Formulario enviado: ", formValue)
        }
    })

    return (

        <Form className='add-edit-user-form' onSubmit={formik.handleSubmit}>
            <Form.Input name="username" placeholder="Nombre de usuario" value={formik.values.username} onChange={formik.handleChange}/>
            <Form.Input name="email" placeholder="Correo Electrónico" value={formik.values.email} onChange={formik.handleChange}/>
            <Form.Input name="first_name" placeholder="Nombre" value={formik.values.first_name} onChange={formik.handleChange}/>
            <Form.Input name="last_name" placeholder="Apellidos" value={formik.values.last_name} onChange={formik.handleChange}/>
            <Form.Input name="password" type="password" placeholder="Contraseña" value={formik.values.password} onChange={formik.handleChange}/>

            <div className='add-edit-user-form__active'>
                <Checkbox toggle />
                Usuario activo
            </div>

            <div className='add-edit-user-form__staff'>
                <Checkbox toggle />
                Usuario administrador
            </div>

            <Button type='submit' content="Crear" primary fluid />
        </Form>

    )

}
