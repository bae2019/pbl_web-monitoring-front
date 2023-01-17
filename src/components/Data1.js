import React from "react";

function Data1(props) {
    return(
        <div>
            <h2>{props.name}</h2>
            <img src={props.image} alt="profile"/>
            <p>{props.process1}</p>
            <p>{props.process2}</p>
            <p>{props.process3}</p>
            <p>{props.pass}</p>
        </div>
    )
}

Data1.defaultProps = {
    name: '공장 정보 없음',
    process1 : '프로세스1 정보 없음',
    process2 : '프로세스2 정보 없음',
    process3 : '프로세스3 정보 없음',
    pass : '양품 정보 없음'
}

export default Data1;