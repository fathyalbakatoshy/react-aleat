import "./App.css";
import Alert from "./components/ui/Alert/alert";
import { BellRing } from "lucide-react";

function App() {
  return (
    <>
      <Alert
        icon={<BellRing />}
        title="Something went wrong"
        discription={
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis veniam totam maiores est nesciunt at harum minima, doloribus exercitationem magnam reprehenderit dolorum! Fugit officiis est veniam quis, delectus eligendi nihil!"
        }
        type={"alert-danger"}
      />
    </>
  );
}

export default App;
