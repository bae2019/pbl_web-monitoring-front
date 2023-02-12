import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Sidebar3 from "../components/sidebar3";
import Fac31 from "./Fac31";
import Fac32 from "./Fac32";
import Fac33 from "./Fac33";

const Center = styled.div`
  height: 92vh;
  display: flex;
  flex-direction: row;
`
const Another = styled.div`
  height: 100vh;
  flex-grow: 2;
`

const Fac3 = () => {
    return (
      <div>
        <div>
          <Center>
            <Sidebar3/>
            <Another>
              <Routes>
                <Route path="/" element={<Fac31 />} />
                  <Route path="wkctr5" element={<Fac32 />} />
                  <Route path="wkctr6" element={<Fac33 />} />
              </Routes>
            </Another>
          </Center>
        </div>
        <div className="margin_short" />
      </div>
    );
  };
  
  export default Fac3;