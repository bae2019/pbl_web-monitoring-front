import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import SidebarItem from "./sidebaritem";

function Sidebar() {

  const menus = [
    { name: "설비별 생산량 종합 데이터", path: "/" },
    { name: "생산량 추이", path: "/graph" },
    { name: "설비 현황", path: "/state" }
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
  width: 130px;
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

export default Sidebar;