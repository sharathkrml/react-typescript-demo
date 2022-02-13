import "./App.css";
import { Greet } from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

function App() {
  const PersonName: { firstName: string; lastName: string } = {
    firstName: "Iron",
    lastName: "Man",
  };
  const nameList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Princess",
      last: "Diana",
    },
  ];
  return (
    <div className="App">
      <Greet name="Sharath" count={100} isLoggedIn={true} />
      <Person name={PersonName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
