import react from "react";

function Plan(props) {
  return (
    <>
      <li className="shadow p-2 my-2 col-sm-9">{props.value}</li>
      <br />
      <button
        className="btn btn-danger my-2 col-sm-2 offset"
        onClick={() => {
          props.sendData(props.id);
        }}
      >
        {" "}
        Delete{" "}
      </button>
    </>
  );
}

export default Plan;

// applying an event to any button e.g delete
// handleDelete = e=>{
//     console.log("Deleted");
//   }
// we will pass this function with the help of props in plan.js
