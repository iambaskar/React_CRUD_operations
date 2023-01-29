import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./styles.css";
import { Create } from "./Create";
import { Read } from "./Read";
import { Delete } from "./Delete";

export default function App() {
  return (
    <div className="App">
      <h1>React CRUD operations</h1>
      <>
        <Router>
          <div>
            <button>
              <Link to="/create">CREATE</Link>
            </button>
            <button>
              <Link to="/read">READ</Link>
            </button>
            <button>
              <Link to="/update">UPDATE</Link>
            </button>
            <button>
              <Link to="/delete">DELETE</Link>
            </button>
          </div>
          <Routes>
            <Route exact path="/create" element={<Create />} />
            <Route exact path="/read" element={<Read />} />
            <Route exact path="/delete" element={<Delete />} />
          </Routes>
        </Router>
      </>
    </div>
  );
}
