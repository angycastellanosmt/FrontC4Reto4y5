import React from 'react';
import Sidebar from '../ui/Sidebar';


const DetalleOrdenes = () => {
  return (
    <>
      <div className="md:flex min-h-screen" >
        <Sidebar />
        <div className="md:w-2/5 xl:w-4/5 p-6">
          <h1 className="text-3xl font-light mb-4">Detalle Ordenes</h1>
        </div>
      </div>
    </>
  );
}

export default DetalleOrdenes;