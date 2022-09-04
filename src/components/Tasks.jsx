const Tasks = ({ tarea, setTarea, eliminarTarea }) => {
  const { titulo, fecha, descripcion, id } = tarea;
  return (
    <div className="bg-white shadow-md px-5 py-10 rounded-lg mt-5 mr-5">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Titulo: <span className="font-normal normal-case">{titulo}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha: <span className="font-normal normal-case">{fecha}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Descripción:{" "}
        <span className="font-normal normal-case">{descripcion}</span>
      </p>

      <div className="flex justify-between">
        <button
          className="bg-green-600 hover:bg-green-700 py-2 px-10 rounded-md text-white font-bold"
          type="button"
          onClick={()=> setTarea(tarea)}
        >
          Actualizar
        </button>
        <button
          className="bg-red-600 hover:bg-red-700 py-2 px-10 rounded-md text-white font-bold"
          type="button"
          onClick={()=>eliminarTarea(id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Tasks;
