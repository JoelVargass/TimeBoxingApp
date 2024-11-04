const TaskList = () => {
  // Simulated data
  const tasks = [
    {
      id: 1,
      name: 'TAREA 1',
      activities: [
        {
          name: 'Actividad 1',
          description: 'Descripción de la actividad 1',
          priority: 'Alta',
          creationDate: '2024-11-04',
          startTime: '08:00 AM',
          endTime: '10:00 AM',
        },
        {
          name: 'Actividad 2',
          description: 'Descripción de la actividad 2',
          priority: 'Media',
          creationDate: '2024-11-03',
          startTime: '11:00 AM',
          endTime: '01:00 PM',
        },
      ],
    },
  ];

  return (
    <div className="flex-1 mr-4">
      {tasks.map((task) => (
        <div key={task.id} className="mb-4">
          <h2 className="text-lg font-bold mb-2">{task.name}</h2>
          <div className="space-y-4">
            {task.activities.map((activity, index) => (
              <div key={index} className="p-4 bg-gray-100 rounded shadow">
                <p className="font-semibold">{activity.name}</p>

                {/* Descripción */}
                <div className="mt-2">
                  <p className="mt-1 text-gray-800">{activity.description}</p>
                </div>

                {/* Estado */}
                <div className="mt-2">
                  <label className="block text-sm font-medium text-gray-700">Estado</label>
                  <select className="mt-1 block w-full p-2 border rounded-md">
                    <option value="PENDING">Pendiente</option>
                    <option value="IN_PROGRESS">En Progreso</option>
                    <option value="COMPLETED">Completada</option>
                    <option value="CANCELLED">Cancelada</option>
                  </select>
                </div>

                {/* Prioridad */}
                <div className="mt-2">
                  <label className="block text-sm font-medium text-gray-700">Prioridad</label>
                  <p className="mt-1 text-gray-800">{activity.priority}</p>
                </div>

                {/* Fecha de creación */}
                <div className="mt-2">
                  <label className="block text-sm font-medium text-gray-700">Fecha de creación</label>
                  <p className="mt-1 text-gray-800">{activity.creationDate}</p>
                </div>

                {/* Hora de inicio */}
                <div className="mt-2">
                  <label className="block text-sm font-medium text-gray-700">Hora de inicio</label>
                  <p className="mt-1 text-gray-800">{activity.startTime}</p>
                </div>

                {/* Hora de fin */}
                <div className="mt-2">
                  <label className="block text-sm font-medium text-gray-700">Hora de fin</label>
                  <p className="mt-1 text-gray-800">{activity.endTime}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
