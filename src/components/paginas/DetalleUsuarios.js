import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Sidebar from '../ui/Sidebar';

const DetalleUsuarios = () => {
    // validación y leer los datos del formulario
    const formik = useFormik({
        initialValues: {
            id: '',
            identification: '',
            name: '',
            birthtDay: '',
            monthBirthtDay: '',
            address: '',
            cellPhone: '',
            email: '',
            password: '',
            password_c: '',
            zone: '',
            type: '',
        },
        validationSchema: Yup.object({
            id: Yup.number()
                .min(1, 'Debes agregar un número')
                .required('El id es obligatorio'),
            identification: Yup.number()
                .min(1, 'Debes agregar un número')
                .required('la identificación es obligatoria'),
            name: Yup.string()
                .min(3, 'El nombre debe tener al menos 3 caracteres')
                .required('El Nombre del usuario es obligatorio'),
            cellPhone: Yup.number()
                .min(1, 'Debes agregar un número de celular')
                .required('el celular es obligatorio'),
            email: Yup.string()
                .min(1, 'Debes agregar el correo')
                .required('el correo es obligatorio'),
            password: Yup.string()
                .min(1, 'Debes agregar la contraseña')
                .required('la contraseña es obligatoria'),
            password_c: Yup.string()
                .min(1, 'Debes confirmar la contraseña')
                .required('confirmar la contraseña es obligatorio'),
            zone: Yup.string()
                .min(1, 'Debes agregar la zona')
                .required('la zona es obligatoria'),
            type: Yup.string()
                .min(1, 'Debes confirmar el tipo de usuario')
                .required('el tipo es obligatorio'),

        }),
        onSubmit: datos => {

            Swal.fire({
                title: 'Quieres crear el usuario?',
                text: "Si continuas el usuario quedará creado",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, crearlo!'
            }).then((result) => {
                if (result.isConfirmed) {
                    try {
                        console.log(datos);
                        fetch(`http://localhost:8080/api/user/new`, {
                            method: "POST",
                            body: JSON.stringify(datos),
                            headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json",
                            },
                        })
                            .then((res) => res.json())
                            .then((data) => {
                                console.log(data);
                            });

                        Swal.fire(

                            'Se creo correctamente.',
                            'success'


                        );
                        navigate('/usuarios');
                    } catch (error) {
                        console.log(error)
                    }

                }
            })

        }
    });



    return (
        <>
            <div className="md:flex min-h-screen" >
                <Sidebar />
                <div className="md:w-2/5 xl:w-4/5 p-6">
                    <h1 className="text-3xl font-light mb-4">Agregar usuarios</h1>

                    <div className="flex justify-center mt-10">
                        <div className="w-full max-w-3xl">
                            <form
                                onSubmit={formik.handleSubmit}
                            >
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Id</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="id"
                                        type="number"
                                        placeholder="id "
                                        value={formik.values.id}
                                        onChange={formik.handleChange}

                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Identificacion</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="identification"
                                        type="number"
                                        placeholder="identificacion"
                                        value={formik.values.identification}
                                        onChange={formik.handleChange}

                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Nombre</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="name"
                                        type="text"
                                        placeholder="nombre"
                                        value={formik.values.name}
                                        onChange={formik.handleChange}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Fecha cumpleaños</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="birthtDay"
                                        type="date"
                                        placeholder=" "
                                        value={formik.values.birthtDay}
                                        onChange={formik.handleChange}

                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Mes cumpleaños</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="monthBirthtDay"
                                        type="number"
                                        placeholder="mes"
                                        value={formik.values.monthBirthtDay}
                                        onChange={formik.handleChange}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Dirección</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="address"
                                        type="txt"
                                        placeholder="direccion "
                                        value={formik.values.address}
                                        onChange={formik.handleChange}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Celular</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="cellPhone"
                                        type="number"
                                        placeholder="Telefono Celular"
                                        value={formik.values.cellPhone}
                                        onChange={formik.handleChange}
                                    />
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">E-mail</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="email"
                                        type="text"
                                        placeholder="Correo Electrónico"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                    />
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Contraseña</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="password"
                                        type="password"
                                        placeholder="Contraseña"
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                    />
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Confirmar Contraseña</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="password_c"
                                        type="password"
                                        placeholder="Confirmacion Contraseña"
                                        value={formik.values.password_c}
                                        onChange={formik.handleChange}
                                    />

                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Zona</label>
                                    <select
                                        className="bg-white shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline  "
                                        id="zone"
                                        value={formik.values.zone}
                                        onChange={formik.handleChange}
                                    >
                                        <option value="ZONA 1">ZONA 1</option>
                                        <option value="ZONA 2">ZONA 2</option>
                                        <option value="ZONA 3">ZONA 3</option>
                                        <option value="ZONA 4">ZONA 4</option>
                                        <option value="ZONA 5">ZONA 5</option>
                                    </select>

                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Tipo Usuario</label>

                                    <select
                                        className="bg-white shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline  "
                                        id="type"
                                        value={formik.values.type}
                                        onChange={formik.handleChange}
                                    >
                                        <option value="ASE">Asesor Comercial</option>
                                        <option value="COORD">Coordinador</option>
                                        <option value="ADM">Administrador</option>
                                    </select>


                                </div>
                                <input
                                    type="submit"
                                    className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold"
                                    value="Agregar usuario"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetalleUsuarios;