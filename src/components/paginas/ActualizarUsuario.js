import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import Swal from 'sweetalert2';
import Sidebar from '../ui/Sidebar';


const ActualizarUsuario = () => {

    // Hook para redireccionar
    const navigate = useNavigate();

    const { id } = useParams();
    //console.log({id});

    const [productosActualizar, guardarUsuariosActualizar] = useState([]);


    const getAll = async () => {
        fetch("http://localhost:8080/api/gadget/all")
            .then((res) => res.json())
            .then((data) => {
                //console.log(data);
                guardarUsuariosActualizar(data);
            });
    }
    useEffect(() => {
        getAll();
    }, [])

    const { id, identification, name, birthtDay, monthBirthtDay, address, cellPhone, email, password, zone, type } = usuarioActualizar;


    const formik = useFormik({
        initialValues: {
            id: id,
            identification: "",
            name: "",
            birthtDay: "",
            monthBirthtDay: "",
            address: "",
            cellPhone: "",
            email: "",
            password: "",
            zone: "",
            type: "",
        },
        onSubmit: datos => {
            Swal.fire({
                title: 'Quieres actualizar el usuario?',
                text: "Esto no podrá deshacerse!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, actualizarlo'
            }).then((result) => {
                if (result.isConfirmed) {
                    try {
                        console.log(datos);
                        fetch(`http://localhost:8080/api/user/update`, {
                            method: "PUT",
                            body: JSON.stringify(datos),
                            headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json",
                            },
                        })
                            .then((res) => res.json())
                            .then((data) => {
                                //console.log(data);             
                            });

                        Swal.fire(
                            'Actualizado!',
                            'Se actualizó correctamente.',
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
                    <h1 className="text-3xl font-light mb-4">Actualizar Usuarios</h1>

                    <div className="flex justify-center mt-10">
                        <div className="w-full max-w-3xl">
                            <form
                                onSubmit={formik.handleSubmit}
                            >
                                <div className="mb-4">
                                    <p className="font-bold text-2xl text-yellow-600 mb-4">{id} </p>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Identificacion</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="identification"
                                        type="number"
                                        placeholder="Identificacion"
                                        value={formik.values.identification || identification}
                                        onChange={formik.handleChange}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Nombre</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="name"
                                        type="text"
                                        placeholder="Nombre"
                                        value={formik.values.name || name}
                                        onChange={formik.handleChange}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Fecha nacimiento</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="birthtDay"
                                        type="date"
                                        placeholder="Fecha nacimiento"
                                        value={formik.values.birthtDay || birthtDay}
                                        onChange={formik.handleChange}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Mes cumpleaños</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="monthBirthtDay"
                                        type="number"
                                        placeholder="Mes cumpleaños"
                                        value={formik.values.monthBirthtDay || monthBirthtDay}
                                        onChange={formik.handleChange}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Direccion</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="address"
                                        type="text"
                                        placeholder="Direccion"
                                        value={formik.values.address || address}
                                        onChange={formik.handleChange}
                                    />
                                </div>


                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Celular</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="cellPhone"
                                        type="number"
                                        placeholder="Celular"
                                        value={formik.values.cellPhone || cellPhone}
                                        onChange={formik.handleChange}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Correo</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="email"
                                        type="email"
                                        placeholder="Correo"
                                        value={formik.values.email || email}
                                        onChange={formik.handleChange}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Contraseña</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="password"
                                        type="password"
                                        placeholder="Contraseña"
                                        value={formik.values.password || password}
                                        onChange={formik.handleChange}
                                    />
                                </div>

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

                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Tipo</label>
                                <select
                                    className="bg-white shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline  "
                                    id="zone"
                                    value={formik.values.type}
                                    onChange={formik.handleChange}
                                >
                                    <option value="ASE">Asesor Comercial</option>
                                    <option value="COORD">Coordinador</option>
                                    <option value="ADM">Administrador</option>

                                </select>


                                <input
                                    type="submit"
                                    className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold"
                                    value="Actualizar Usuario"
                                />




                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ActualizarUsuario;