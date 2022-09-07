function Home() {

  function save(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div>
      <input id="title" type="text" />
      <input id="description" type="text" />
      <button onClick={e => save()}>Guardar</button>
      <ul id="tareas">
      </ul>
    </div>
  )
}

export default Home;