import "./App.css";

import { Routes, Route } from "react-router-dom";
import Header from "./component/header/header";
import Home from "./pages/home/home";

function App() {
  return (
    <main>
      {/* <Header /> */}
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;
