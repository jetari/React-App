import Message from "./components/message/Message";
import ListGroup from "./components/ListGroup/ListGroup";
import { Alert } from "./components/ChildrenProp/Alert";
import Button from "./components/Button/Button";
import { LikeIcon } from "./components/Like/LikeIcon";
// import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
// import "./App.css";

function App() {
  // const [alertVisible, setAlertVisiblity] = useState(false);

  return (
    <>
      <div>

        <ListGroup />
        <LikeIcon />
        {/* <Message /> */}
        {/* {alertVisible && (
          <Alert onClose={() => setAlertVisiblity(false)}>My Alert</Alert>
        )}
        <Button color="primary" onClick={() => setAlertVisiblity(true)}>
          My Button
        </Button> */}
      </div>
    </>
  );
}

export default App;
