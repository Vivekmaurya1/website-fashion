// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/header/header';
// import Home from './pages/home/home';

function App() {
  return (
    <>
    <Header/>
    {/* <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router> */}
    </>
  );
}

export default App;
