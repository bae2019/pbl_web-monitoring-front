import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Sidebar1 from "../components/sidebar1";
import Fac11 from "./Fac11";
import Fac12 from "./Fac12";
import Fac13 from "./Fac13";

const Center = styled.div`
  height: 92vh;
  display: flex;
  flex-direction: row;
`
const Another = styled.div`
  height: 100vh;
  flex-grow: 2;
`

const Fac1 = () => {
    return (
      <div>
        <div>
          <Center>
            <Sidebar1/>
            <Another>
              <Routes>
                <Route exact path="/" element={<Fac11 />} />
                  <Route exact path="wkctr1" element={<Fac12 />} />
                  <Route exact path="wkctr2" element={<Fac13 />} />
              </Routes>
            </Another>
          </Center>
        </div>
        <div className="margin_short" />
      </div>
    );
  };
  
  export default Fac1;