import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "../components/sidebar";
import Main1 from "./Main1";
import Main2 from "./Main2";
import Main3 from "./Main3";

const Center = styled.div`
  height: 92vh;
  display: flex;
  flex-direction: row;
`
const Another = styled.div`
  height: 100vh;
  flex-grow: 2;
`

function Main() {
    return (
      <div>
        <Center>
          <Sidebar/>
          <Another>
            <Routes>
              <Route path="/" element={<Main1 />} />
              <Route path="/graph" element={<Main2 />} />
              <Route path="/state" element={<Main3 />} />
            </Routes>
          </Another>
        </Center>
      </div>
    );
  };
  
  export default Main;