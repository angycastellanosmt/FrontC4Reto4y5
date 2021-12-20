import React from 'react';
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
    return (
        <div className="md:w-2/6 xl:w-1/5 h-screen bg-gray-800">
            <div className="p-6">
                <p className="uppercase text-white text-2xl tracking-wide text-center font-bold">El Mercader Ltda</p>

                <p className="mt-3 text-gray-600">Accede a las siguientes opciones:</p>

                <nav className="mt-10">
                    <NavLink className="p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900" activeClassName="text-yellow-500" exact="true" to="/">Salir</NavLink>
                    <NavLink className="p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900" activeClassName="text-yellow-500" exact="true" to="/ordenes">Ordenes</NavLink>
                    <NavLink className="p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900" activeClassName="text-yellow-500" exact="true" to="/productos">Productos</NavLink>
                    <NavLink className="p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900" activeClassName="text-yellow-500" exact="true" to="/usuarios">Usuarios</NavLink>
                </nav>
            </div>
        </div>
    );
}

export default Sidebar;