import { Route, Routes } from "react-router-dom";
import './App.css';
import Menubar from './components/menubar';
import Main from './pages/Main';
import Fac1 from './pages/Fac1';
import Fac2 from './pages/Fac2';
import Fac3 from './pages/Fac3';
import Fac4 from './pages/Fac4';
import Fac5 from './pages/Fac5';
import Fac6 from './pages/Fac6';

function App() {
  return (
    <div className="white-background">
      <div className="TitleBox">
        <img className="Logoimg" alt="SL_logo" src="image/logo_l.png"/>
        <h2>PBL middleware monitoring web </h2>
      </div>

      <div className="menubar">
        <Menubar />
      </div>

      <Routes>
        <Route path = "/" element = {<Main />}></Route>
          <Route path = "/fac1" element = {<Fac1 />}></Route>
          <Route path = "/fac2" element = {<Fac2 />}></Route>
          <Route path = "/fac3" element = {<Fac3 />}></Route>
          <Route path = "/fac4" element = {<Fac4 />}></Route>
          <Route path = "/fac5" element = {<Fac5 />}></Route>
          <Route path = "/fac6" element = {<Fac6 />}></Route>
      </Routes>

      <div className="margin_last">
        2023 Hustar PBL project with SL
      </div>
    </div>
  );
}

export default App;
