import { useState, useEffect } from "react";
import AlertError from "./AlertError";

const Form = ({ Tareas, setTareas, tarea, setTarea }) => {
  const [titulo, setTitulo] = useState("");
  const [fecha, setFecha] = useState("");
  const [descripcion, setdescripcion] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(tarea).length > 0) {
      setTitulo(tarea.titulo);
      setFecha(tarea.fecha);
      setdescripcion(tarea.descripcion);
    }
  }, [tarea]);

  const generarID = () => {
    const id = Math.random().toString(20).substr(2);
    return id;
  };

  const limpiarFormulario = ()=>{
        //    Limpiar formulario
        setTitulo("");
        setFecha("");
        setdescripcion("");
  }

  //  Validación formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if ([titulo, fecha, descripcion].includes("")) {
      setError(true);
      return;
    } else {
      setError(false);

      // Objeto de tareas
      const objetoTareas = {
        titulo,
        fecha,
        descripcion,
      };

      if (tarea.id) {
        //Editando la tarea

        Swal.fire({
          title: "¿Desea aplicar los cambios?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Aplicar",
          cancelButtonText: "Cancelar",
        }).then((result) => {
          if (result.isConfirmed) {

            objetoTareas.id = tarea.id;
            const tareasActualizadas = Tareas.map((tareaState) =>
              tareaState.id === tarea.id ? objetoTareas : tareaState
            );

            setTareas(tareasActualizadas);
            setTarea({});
            Swal.fire("Tarea actualizada", "😎", "success");
            limpiarFormulario();
          }
        });
      } else {
        //Nueva tarea
        (objetoTareas.id = generarID()), setTareas([...Tareas, objetoTareas]);
        Swal.fire("Tarea creada", "😎", "success");
        limpiarFormulario();
      }

  
    }
  };

  return (
    <div className="md:w1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center mb-10">
        Creación de tareas
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        <div className="mb-5">
          <label
            htmlFor="titulo"
            className="block text-gray-700 uppercase font-bold"
          >
            Titulo
          </label>
          <input
            id="titulo"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-slate-400"
            type="text"
            placeholder="Titulo de la tarea"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="Fecha"
            className="block text-gray-700 uppercase font-bold"
          >
            Titulo
          </label>
          <input
            id="Fecha"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-slate-400"
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="descripcion"
            className="block text-gray-700 uppercase font-bold"
          >
            Descripción
          </label>
          <textarea
            id="descripcion"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-slate-400"
            type="text"
            placeholder="Descripción de la tarea"
            value={descripcion}
            onChange={(e) => setdescripcion(e.target.value)}
          />
        </div>

        {!tarea.id ? (
          <input
            type="submit"
            className="bg-blue-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-blue-700 transition-colors cursor-pointer"
            value="Crear tarea"
          />
        ) : (
          <input
            type="submit"
            className="bg-purple-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-purple-700 transition-colors cursor-pointer"
            value="Actualizar tarea"
          />
        )}
        {error && (
          <AlertError>
            <p> faltan campos por diligenciar</p>
          </AlertError>
        )}
      </form>
    </div>
  );
};

export default Form;
