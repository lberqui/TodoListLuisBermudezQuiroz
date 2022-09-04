import { useEffect, useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

function App() {
  const [Tareas, setTareas] = useState([]);
  const [tarea, setTarea] = useState({});

  useEffect(() => {
    
    const obtenerTareasLocalStorage = () => {
      const tareasLocalStorage =
        JSON.parse(localStorage.getItem("Tareas")) ?? [];
      setTareas(tareasLocalStorage);
    };
    
    obtenerTareasLocalStorage();
  }, []);

  useEffect(() => {
    localStorage.setItem("Tareas", JSON.stringify(Tareas));
  }, [Tareas]);

  const eliminarTarea = (id) => {
    Swal.fire({
      title: "¿Seguro que desea eliminar la tarea?",
      text: "¡No podrás revertir los cambios!⛔",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "¡Si, eliminar!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        const actualizarTarea = Tareas.filter((tarea) => tarea.id !== id);
        setTareas(actualizarTarea);
        Swal.fire("Tarea eliminada!", "Tarea eliminada.✔️", "success");
      }
    });
  };

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form
          tarea={tarea}
          Tareas={Tareas}
          setTareas={setTareas}
          setTarea={setTarea}
        />
        <TaskList
          tareas={Tareas}
          setTarea={setTarea}
          eliminarTarea={eliminarTarea}
        />
      </div>
    </div>
  );
}

export default App;
