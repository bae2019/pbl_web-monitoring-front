import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import SidebarItem1 from "./sidebaritem1";

function Sidebar1() {

  const menus = [
    { name: "통합 데이터", path: "/" },
    { name: "설비1 세부 데이터", path: "wkctr1" },
    { name: "설비2 세부 데이터", path: "wkctr2" },
  ];

  const Side = styled.div`
  display: flex;
  border-right: 1px solid #e0e0e0;
  flex-direction: column;
  padding-right: 20px;
  align-items: end;
  text-align: right;
  justify-content: center;
  width: 150px;
`
  const Menu = styled.div`
  margin-top: 30px;
  width: 110px;
  display: flex;
  font-size: 20px;
  flex-direction: column;
`
  return (
    <div className="sidebar">
        <Side>
            <Menu>
                {menus.map((menu, index) => {
                return (
                    <NavLink
                        exact
                        style={{color: "gray", textDecoration: "none"}}
                        to={menu.path}
                        key={index}
                        activeStyle={{color: "black", fontWeight: "bold"}}
                    >
                    <SidebarItem1
                        menu={menu}
                        
                    />
                    <div className="margin_short" />
                    </NavLink>
                );
                })}
            </Menu>
        </Side>
    </div>
  );
}

export default Sidebar1;