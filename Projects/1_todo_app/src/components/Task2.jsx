function Task2() {
  let todoWork = "take a medicine ";
  let todoDate = "05/12/2023";
  return (
    <div classname="container ">
      <div class="row kg-row">
        <div class="col-6">{todoWork}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Task2;
