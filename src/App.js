import "./App.css";
import Navbar from "./Navbar";
import Textarea from "./Textarea";
import Alert from "./Alert";

function App() {
  return (
    <>
      <Navbar/>
      <div className="container px-105">
        <Alert/>
      <Textarea/>
      </div>
    </>
  );
}

export default App;
