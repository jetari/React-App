import "./ListGroup.css";
import styled from "styled-components";

function ListGroup() {
    let states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia"]
    // states = []
  return (
    // <></> is a fragment, it's a way to return multiple elements without adding a div
    <>
      <h1>List of States </h1>
      {states.length === 0 && <h2> No States avaliable</h2>}
      <ul className="list-group">
        {states.map((states, index) => (
          <li
            className="list-group-item"
            key={states}
            onClick={() => console.log(states, index)}
          >
            {states}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
