function Task1() {
  let todoWork = "Go to college";
  let todoDate = "05/12/2023";
  return (
    <div classname="container">
      <div class="row kg-row">
        <div class="col-6">{todoWork}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger kg-btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Task1;
