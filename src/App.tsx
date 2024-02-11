import Message from "./components/message/Message";
import ListGroup from "./components/ListGroup/ListGroup";
import { Alert } from "./components/ChildrenProp/Alert";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";

function App() {
  return (
    <>
      <div>
        {/* <ListGroup />
        <Message /> */}
        <Alert>
          <span> Hello</span> Epretari
        </Alert>
      </div>
    </>
  );
}

export default App;
