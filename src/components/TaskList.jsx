import Tasks from "./Tasks";
const TaskList = ({ tareas, setTarea, eliminarTarea }) => {
  return (
    <div className="md:w1/2 lg:w-2/5 mx-5 mb-10 md:h-screen overflow-scroll">
      <h2 className="font-black text-3xl text-center mb-10">
        {tareas && tareas.length
          ? "Mis tareas pendientes"
          : "No hay tareas pendientes"}
      </h2>
      {tareas.map((tarea) => {
        return <Tasks key={tarea.id} tarea={tarea} setTarea={setTarea} eliminarTarea={eliminarTarea} />;
      })}
    </div>
  );
};

export default TaskList;
