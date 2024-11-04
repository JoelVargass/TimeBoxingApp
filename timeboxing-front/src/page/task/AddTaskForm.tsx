import { useState } from 'react';
import { FiPlusCircle } from "react-icons/fi";

const AddTaskForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex-1 ml-4">
      <button onClick={openModal} className="flex items-center gap-2 mb-4">
        <h2 className="text-lg font-bold">Agregar Tarea</h2>
        <FiPlusCircle className="text-green-500 text-2xl font-bold" />
      </button>

      <div className="p-4 bg-gray-50 rounded shadow space-y-2">
        <div className="p-2 bg-white rounded shadow flex justify-between items-center">
          <span>Tarea 1</span>
          <div className="text-sm">
            <span className="text-red-500 cursor-pointer mr-2">Eliminar</span>|
            <span className="text-blue-500 cursor-pointer ml-2">Editar</span>
          </div>
        </div>
        <div className="p-2 bg-white rounded shadow flex justify-between items-center">
          <span>Tarea 2</span>
          <div className="text-sm">
            <span className="text-red-500 cursor-pointer mr-2">Eliminar</span>|
            <span className="text-blue-500 cursor-pointer ml-2">Editar</span>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md shadow-lg w-1/3">
            <h2 className="text-lg font-semibold mb-4">Crear Nueva Tarea</h2>
            <form>
              {/* Nombre de la tarea */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Nombre de la Tarea</label>
                <p className="mt-1 text-gray-800">Ejemplo de Tarea</p>
              </div>

              {/* Prioridad */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Prioridad</label>
                <p className="mt-1 text-gray-800">Alta</p>
              </div>

              {/* Descripción */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Descripción</label>
                <p className="mt-1 text-gray-800">Esta es una descripción de ejemplo.</p>
              </div>

              {/* Fecha de creación */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Fecha de creación</label>
                <p className="mt-1 text-gray-800">2024-11-04</p>
              </div>

              {/* Estado */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Estado</label>
                <select className="mt-1 block w-full p-2 border rounded-md">
                  <option value="PENDING">Pendiente</option>
                  <option value="IN_PROGRESS">En Progreso</option>
                  <option value="COMPLETED">Completada</option>
                  <option value="CANCELLED">Cancelada</option>
                </select>
              </div>

              {/* Botones */}
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={closeModal}
                  className="text-gray-600 mr-4"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                >
                  Crear
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddTaskForm;
