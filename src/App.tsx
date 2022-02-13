import "./App.css";
import { Greet } from "./components/Greet";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Status from "./components/Status";

function App() {
  return (
    <div className="App">
      <Status status="error" />
      <Heading>Heading Shh</Heading>
      <Oscar>
        <Heading>Oscar goes to decarpiooo 😀</Heading>
      </Oscar>

      <Greet name="SHarath" isLoggedIn={true} />
    </div>
  );
}

export default App;
