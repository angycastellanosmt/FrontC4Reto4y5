import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormularioProductos from "../ui/FormularioProductos";
import Sidebar from '..ui/Sidebar';



const Productos = () => {

   /*const [ productos, traerProductos] = useState([]);
   fetch("http://localhost:8080/api/gadget/all")
   .then((res)=> res.json())
   .then((data)=>{
      //console.log(data);
      traerProductos(data);
   });*/
   const [productos, guardarProductos] = useState([]);
   const getAll = async () => {
      fetch("http://localhost:8080/api/gadget/all")
         .then((res) => res.json())
         .then((data) => {
            //console.log(data);
            guardarProductos(data);
         });
   }
   useEffect(() => {
      getAll();
   }, [])

   return (
      <>
         <div className="md:flex min-h-screen" >
            <Sidebar />
            <div className="md:w-2/5 xl:w-4/5 p-6">
               <h1 className="text-3xl font-light mb-4">Productos</h1>
               <Link to="/nuevo-producto" className="  bg-blue-800 hover:bg-blue-700, inline-block mb-5 p-2 text-white uppercase font-bold">
                  Agregar Producto
            </Link>
               {productos.map(producto => (
                  <FormularioProductos
                     key={producto.id}
                     producto={producto}
                  />

               ))}
            </div>
         </div>
      </>
   );
}

export default Productos;