import React from 'react';
import { Link } from 'react-router-dom';
import ActualizarUsuario from '../paginas/ActualizarUsario';
import Swal from 'sweetalert2';


const FormularioUsarios = ({ usuario }) => {

    const { id, identification, name, birthtDay, monthBirthtDay, address, cellPhone, email, password, zone, type } = usuario;

    //Traigo los usuarios que tengo en base de datos

    const [usuarios, guardarUsuarios] = useState([]);
    const getAll = async () => {
        fetch("http://localhost:8080/api/user/all")
            .then((res) => res.json())
            .then((data) => {
                //console.log(data);
                guardarUsuarios(data);
            });
    }
    useEffect(() => {
        getAll();
    }, [])

    const actualizarUsuario = id => {
        {
            usuarios.map(usuario => (
                <ActualizarUsuario
                    key={usuario.id}
                    usuario={usuario}
                />))
        }
    }

    const borrarUsuario = id => {

        Swal.fire({
            title: 'Está seguro de querer borrar el usuario?',
            text: "Esto no se podrá deshacer",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, borrar'
        }).then((result) => {
            if (result.isConfirmed) {
                try {
                    console.log(id);
                    fetch(`http://localhost:8080/api/user/${id}`, {
                        method: "DELETE",
                        headers: {
                            Accept: "aplication/json",
                            "Content-Type": "aplication/json",
                        },
                    }).then((data) => {
                        console.log(data);
                    });
                    Swal.fire(
                        'Borrado!',
                        'Se borró correctamente.',
                        'success'
                    );
                } catch (error) {
                    console.log(error)
                }

            }
        })
    }
    // aqui voy
    return (
        <div className="container">
            <Row>
                <Col sm="7">
                    <h4>Listado de Usuarios</h4>
                    <table border="1" className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th>Id</th>
                                <th>Identificacion</th>
                                <th>Nombre</th>
                                <th>Cumpleaños</th>
                                <th>Mes cumpleaños</th>
                                <th>Direccion</th>
                                <th>Celular</th>
                                <th>Correo</th>
                                <th>Zona</th>
                                <th>Tipo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usuarios.map((usuario) => {
                                return (
                                    <tr key={usuario.id}>
                                        <td>{usuario.identification}</td>
                                        <td>{usuario.name}</td>
                                        <td>{usuario.birthtDay}</td>
                                        <td>{usuario.monthBirthtDay}</td>
                                        <td>{usuario.address}</td>
                                        <td>{usuario.cellPhone}</td>
                                        <td>{usuario.email}</td>
                                        <td>{usuario.password}</td>
                                        <td>{usuario.zone}</td>
                                        <td>{usuario.type}</td>
                                        <td>
                                            <button
                                                onClick={() => borrarUsuario(usuario.id)}
                                                type="submit"
                                                className="btn btn-primary"
                                            >
                                                Borrar
                      </button>
                                            <Link to={`/actualizar-producto/${usuario.id}`} className="  bg-blue-800 hover:bg-blue-700, inline-block mb-5 p-2 text-white uppercase font-bold">
                                                Actualizar Producto
                            </Link>
                                        </td>

                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </Col>
            </Row>
        </div>


    );
}

export default FormularioUsarios;