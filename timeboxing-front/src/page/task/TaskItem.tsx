import  { useState } from 'react';

const TaskItem = () => {
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [isActivityModalOpen, setIsActivityModalOpen] = useState(false);


  const openTaskModal = () => setIsTaskModalOpen(true);
  const closeTaskModal = () => setIsTaskModalOpen(false);
  const openActivityModal = () => setIsActivityModalOpen(true);
  const closeActivityModal = () => setIsActivityModalOpen(false);

  return (
    <div className="mb-6 p-4 border rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-bold mb-2">TAREA 1</h2>

      
      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">Prioridad:</label>
        <select className="mt-1 block w-full p-2 border rounded-md bg-gray-50">
          <option value="alta">Alta</option>
          <option value="media">Media</option>
          <option value="baja">Baja</option>
        </select>
      </div>

      
      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">Descripción:</label>
        <p className="p-2 bg-gray-50 rounded-md shadow">Esta es la descripción de la tarea.</p>
      </div>

      
      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">Tiempo de Inicio:</label>
        <p className="p-2 bg-gray-50 rounded-md shadow">10:00 AM</p>
      </div>

      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Estado:</label>
        <select className="mt-1 block w-full p-2 border rounded-md bg-gray-50">
          <option value="PENDING">Pendiente</option>
          <option value="IN_PROGRESS">En Progreso</option>
          <option value="COMPLETED">Completada</option>
          <option value="CANCELLED">Cancelada</option>
        </select>
      </div>

      
      <h3 className="text-lg font-semibold mb-2">Actividades</h3>
      <div className="space-y-4">
        
        <div className="p-3 border rounded-lg bg-gray-50 shadow-md">
          <p className="font-medium">Actividad 1</p>
          <p className="text-sm text-gray-600">Descripción de la actividad.</p>
          <p className="text-sm text-gray-600">Inicio: 11:00 AM</p>
          <select className="mt-1 block w-full p-2 border rounded-md bg-white">
            <option value="PENDING">Pendiente</option>
            <option value="IN_PROGRESS">En Progreso</option>
            <option value="COMPLETED">Completada</option>
            <option value="CANCELLED">Cancelada</option>
          </select>
        </div>

        
        <div className="p-3 border rounded-lg bg-gray-50 shadow-md">
          <p className="font-medium">Actividad 2</p>
          <p className="text-sm text-gray-600">Descripción de la actividad.</p>
          <p className="text-sm text-gray-600">Inicio: 12:00 PM</p>
          <select className="mt-1 block w-full p-2 border rounded-md bg-white">
            <option value="PENDING">Pendiente</option>
            <option value="IN_PROGRESS">En Progreso</option>
            <option value="COMPLETED">Completada</option>
            <option value="CANCELLED">Cancelada</option>
          </select>
        </div>
      </div>

      
      <div className="mt-4">
        <button onClick={openTaskModal} className="bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600">
          Agregar Tarea
        </button>
        <button onClick={openActivityModal} className="bg-green-500 text-white px-4 py-2 rounded-md shadow ml-2 hover:bg-green-600">
          Agregar Actividad
        </button>
      </div>

      
      {isTaskModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md shadow-lg w-1/3">
            <h2 className="text-lg font-semibold mb-4">Crear Nueva Tarea</h2>
            <input type="text" placeholder="Nombre de la Tarea" className="w-full mb-2 p-2 border rounded-md" />
            <textarea placeholder="Descripción" className="w-full mb-2 p-2 border rounded-md"></textarea>
            <input type="datetime-local" className="w-full mb-2 p-2 border rounded-md" />
            <select className="w-full mb-4 p-2 border rounded-md">
              <option value="PENDING">Pendiente</option>
              <option value="IN_PROGRESS">En Progreso</option>
              <option value="COMPLETED">Completada</option>
              <option value="CANCELLED">Cancelada</option>
            </select>
            <div className="flex justify-end">
              <button onClick={closeTaskModal} className="text-gray-600 mr-4">Cancelar</button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Crear</button>
            </div>
          </div>
        </div>
      )}

      
      {isActivityModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md shadow-lg w-1/3">
            <h2 className="text-lg font-semibold mb-4">Crear Nueva Actividad</h2>
            <input type="text" placeholder="Título de la Actividad" className="w-full mb-2 p-2 border rounded-md" />
            <textarea placeholder="Descripción" className="w-full mb-2 p-2 border rounded-md"></textarea>
            <input type="datetime-local" className="w-full mb-2 p-2 border rounded-md" />
            <select className="w-full mb-4 p-2 border rounded-md">
              <option value="PENDING">Pendiente</option>
              <option value="IN_PROGRESS">En Progreso</option>
              <option value="COMPLETED">Completada</option>
              <option value="CANCELLED">Cancelada</option>
            </select>
            <div className="flex justify-end">
              <button onClick={closeActivityModal} className="text-gray-600 mr-4">Cancelar</button>
              <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">Crear</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
