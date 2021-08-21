import "./App.css";
// import { useState } from "react";
// import LoginControl from "./components/LoginControl";
// import DigitalWatch from "./components/DigitalWatch";
// import Welcome from "./components/Welcome";
// import NumberList from "./components/NumberList";
import NameForm from "./components/NameForm";
// import FlavorForm from "./components/FlavorForm";
// import Reservation from "./components/Reservation";
import Calculator from "./components/Calculator";

// const numbers = ["yash", "jay", "vivek", "saurin", "hhh"];

function App() {
  // const [test, setTest] = useState("ttt");
  return (
    <div>
      {/* <Welcome name="aysh" />
      <Welcome name="Jay" />
      <Welcome name="Yash" /> */}
      {/* <DigitalWatch setTest={setTest} name={test} /> */}
      {/* <LoginControl /> */}
      {/* <NumberList numbers={numbers} /> */}
      {/* <NameForm /> */}
      {/* <FlavorForm /> */}
      {/* <Reservation /> */}
      <Calculator />
    </div>
  );
}

export default App;
