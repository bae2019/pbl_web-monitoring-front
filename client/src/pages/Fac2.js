import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Sidebar2 from "../components/sidebar2";
import Fac21 from "./Fac21";
import Fac22 from "./Fac22";
import Fac23 from "./Fac23";

const Center = styled.div`
  height: 92vh;
  display: flex;
  flex-direction: row;
`
const Another = styled.div`
  height: 100vh;
  flex-grow: 2;
`

const Fac2 = () => {
    return (
      <div>
        <div>
          <Center>
            <Sidebar2/>
            <Another>
              <Routes>
                <Route path="/" element={<Fac21 />} />
                  <Route path="wkctr3" element={<Fac22 />} />
                  <Route path="wkctr4" element={<Fac23 />} />
              </Routes>
            </Another>
          </Center>
        </div>
        <div className="margin_short" />
      </div>
    );
  };
  
  export default Fac2;