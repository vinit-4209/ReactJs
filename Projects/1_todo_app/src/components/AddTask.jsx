function AddTask() {
  return (
    <div classname="container ">
      <div class="row kg-row">
        <div class="col-6">
          <input type="text" placeholder="Enter the Task" />
        </div>
        <div class="col-4">
          <input type="date" />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-primary">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTask;
