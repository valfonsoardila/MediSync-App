import BaseRoutes from "./routes/BaseRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <BaseRoutes />
      </Router>
    </div>
  );
}

export default App;
