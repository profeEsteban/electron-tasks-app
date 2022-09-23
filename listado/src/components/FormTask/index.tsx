import { useEffect, useState } from "react";

function FormTask() {
  const [editTitle, setEditTitle] = useState(false)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const save = () => {
    console.log("title: ", title)
    console.log("description: ", description)
  }
  return (
    <div id="newTaskForm">
      <h3>Formulario:</h3>
      {editTitle ? <div>
        <label htmlFor="title">Titulo</label>
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          type="text" name="title" id="title" />
      </div>
        :
        <h4>Titulo: {title}</h4>
      }
      <button
      onClick={e => setEditTitle(!editTitle)}
      >{editTitle ? "Salir de edicion" : "Editar"}</button>

      <label htmlFor="description">Description</label>
      <input
        value={description}
        onChange={e => setDescription(e.target.value)}
        type="text" name="description" id="description" />
      <button onClick={save}>Crear</button>
    </div>
  )
}

export default FormTask;