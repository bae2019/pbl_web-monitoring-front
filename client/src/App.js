import { Route, Routes, Link } from "react-router-dom";
import './App.css';
import { Button } from '@material-ui/core';
import Main from './pages/Main';
import Fac1 from './pages/Fac1';
import Fac2 from './pages/Fac2';
import Fac3 from './pages/Fac3';

function App() {
  return (
    <div className="white-background">
      <div className="TitleBox">
        <img className="Logoimg" alt="SL_logo" src="image/logo_l.png"/>
        <h2>PBL middleware monitoring web </h2>
      </div>
      <div className="menubar">
        <Button>
            <Link to = "/">M A I N</Link>
        </Button>
        <Button>
            <Link to = "/fac1">제 1 공 장</Link>
        </Button>
        <Button>
            <Link to = "/fac2">제 2 공 장</Link>
        </Button>
        <Button>
            <Link to = "/fac3">제 3 공 장</Link>
        </Button>
      </div>
      <Routes>
        <Route path = "/*" element = {<Main />}></Route>
          <Route path = "/fac1/*" element = {<Fac1 />}></Route>
          <Route path = "/fac2/*" element = {<Fac2 />}></Route>
          <Route path = "/fac3/*" element = {<Fac3 />}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
