import React, { createFactory } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from '@material-ui/core';


function Data1(props) {
    return(
        <TableContainer component={Paper}>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>no</TableCell>
                        <TableCell align="middle">process1</TableCell>
                        <TableCell align="middle">process2</TableCell>
                        <TableCell align="middle">process3</TableCell>
                        <TableCell align="right">pass</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableCell>{props.name}</TableCell>
                    <TableCell align="middle">{props.process1}</TableCell>
                    <TableCell align="middle">{props.process2}</TableCell>
                    <TableCell align="middle">{props.process3}</TableCell>
                    <TableCell align="right">{props.pass}</TableCell>
                </TableBody>
            </Table>
        </TableContainer>
        /*
        <div>
            
            <h2>{props.name}</h2>
            <img src={props.image} alt="profile"/>
            <p>{props.process1}</p>
            <p>{props.process2}</p>
            <p>{props.process3}</p>
            <p>{props.pass}</p>
        </div>
        */
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