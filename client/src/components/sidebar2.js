import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import SidebarItem from "./sidebaritem";

function Sidebar2() {

  const menus = [
    { name: "통합 데이터", path: "/" },
    { name: "설비3 세부 데이터", path: "wkctr3" },
    { name: "설비4 세부 데이터", path: "wkctr4" },
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
                    <SidebarItem
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

export default Sidebar2;