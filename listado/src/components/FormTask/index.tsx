function FormTask() {


  return (
    <form id="newTaskForm" action="submit">
      <h4>Formulario:</h4>
      <label htmlFor="title">Titulo</label>
      <input type="text" name="title" id="title" />
      <label htmlFor="description">Description</label>
      <input type="text" name="description" id="description" />
      <button type="submit">Crear</button>
    </form>
  )
}

export default FormTask;