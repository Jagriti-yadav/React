function AddToDo(){
  return( 
    <div class="container">

    <div class="row">
      <div class="col-5">
        <input type="text" placeholder="Write your task here"></input>
      </div>
      <div class="col-5">
        <input type="date"></input>
      </div>
      <div class="col-2">
        <button type="button" class="btn btn-success">Add</button>
      </div>
    </div>
    </div>
  );
}
export default AddToDo;