import React, {useState} from "react";
import Checkbox from "../components/checkbox";
import Styled from "../components/Styled";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import { ko } from 'date-fns/esm/locale';
import "react-datepicker/dist/react-datepicker.css"
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper
  } from '@material-ui/core';
  
  const stt = ['양품', '불량품'];
  const factory = Array(20)    //임시 데이터 생성
      .fill()
      .map(() => ({
        'id' : Math.floor(Math.random()*10),
        'create_dt_01' : '2023-01-15 15:31',
        'data_a_01' : Math.floor(Math.random()*100),
        'data_b_01' : Math.floor(Math.random()*100),
        'quality_01' : stt[Math.floor(Math.random()*10%2)],
        'create_dt_02' : '2023-01-15 15:31',
        'data_a_02' : Math.floor(Math.random()*100),
        'data_b_02' : Math.floor(Math.random()*100),
        'quality_02' : stt[Math.floor(Math.random()*10%2)],
        'create_dt_03' : '2023-01-15 15:31',
        'data_a_03' : Math.floor(Math.random()*100),
        'data_b_03' : Math.floor(Math.random()*100),
        'quality_03' : stt[Math.floor(Math.random()*10%2)],
        'create_dt_04' : '2023-01-15 15:31',
        'data_a_04' : Math.floor(Math.random()*100),
        'data_b_04' : Math.floor(Math.random()*100),
        'quality_04' : stt[Math.floor(Math.random()*10%2)],
        'create_dt_05' : '2023-01-15 15:31',
        'data_a_05' : Math.floor(Math.random()*100),
        'data_b_05' : Math.floor(Math.random()*100),
        'quality_05' : stt[Math.floor(Math.random()*10%2)],
        'create_dt_06' : '2023-01-15 15:31',
        'data_a_06' : Math.floor(Math.random()*100),
        'data_b_06' : Math.floor(Math.random()*100),
        'err_dt' : '2023-01-15 15:31',
        'err_cd' : Math.floor(Math.random()*100),
        'err_prc_cd' : "공정" + String(Math.floor(Math.random()*10/5+1)),
    }));
    const MyDatePicker = styled(DatePicker)`
    margin-top:10px;
    margin-bottom:10px;
    width:60%;
    height:30px;
    font-size:20px;
    background-color:white;
    color:gray;
    border: 1px solid;
  `
  
  const Fac12 = () => {
    const [startdt, setstartdt] = useState(new Date());
    const [enddt, setenddt] = useState(new Date());
    const [ps1, setps1] = useState(false);
    const [ps2, setps2] = useState(false);
    const [ps3, setps3] = useState(false);
    const [ps4, setps4] = useState(false);
    const [ps5, setps5] = useState(false);
    const [ps6, setps6] = useState(false);
      return (
        <div>
          <div className = "pagename">
            제 1 공 장
          </div>
          <div className="HorizontalLine" />
          <div className="TextBox">
          [ 설비1 세부 데이터 ]
        </div>
        <div className="boxbox">
          <div>
            <div className="boxcheck">
              시작일자 : 
            </div>
            <div className="boxcheck">
              종료일자 : 
            </div>
          </div>
          <div>
            <MyDatePicker
              selected={startdt}
              onChange={date => setstartdt(date)}
              locale={ko}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              timeCaption="시간"
              dateFormat="yyyy년 MM월 dd일 aa h시 mm분"
              maxDate={new Date()}
               />
            <MyDatePicker
              selected={enddt}
              onChange={date => setenddt(date)}
              locale={ko}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              timeCaption="시간"
              dateFormat="yyyy년 MM월 dd일 aa h시 mm분"
              maxDate={new Date()}
               />
          </div>
          <div className="v-line"></div>
          <div>
            <div className="boxcheck">
              <Checkbox checked={ps1} onChange={setps1}>
                공 정 1
              </Checkbox>
              <Checkbox checked={ps3} onChange={setps3}>
                공 정 3
              </Checkbox>
              <Checkbox checked={ps5} onChange={setps5}>
                공 정 5
              </Checkbox>
            </div>
            <div className="boxcheck">
              <Checkbox checked={ps2} onChange={setps2}>
                공 정 2
              </Checkbox>
              <Checkbox checked={ps4} onChange={setps4}>
                공 정 4
              </Checkbox>
              <Checkbox checked={ps6} onChange={setps6}>
                공 정 6
              </Checkbox>
            </div>
          </div>
          <div className="v-line"></div>
          <div>
            <Styled>조 회</Styled>
            
          </div>
        </div>
        <div className="MainTable">
          {
            <TableContainer component={Paper}>
              <Table size="small">
                  <TableHead>
                      <TableRow>
                      <TableCell align="left">생성일자</TableCell>
                      <TableCell align="middle">1공정 data1</TableCell>
                      <TableCell align="middle">1공정 data2</TableCell>
                      <TableCell align="middle">1공정</TableCell>
                      <TableCell align="middle">2공정 data1</TableCell>
                      <TableCell align="middle">2공정 data2</TableCell>
                      <TableCell align="middle">2공정</TableCell>
                      <TableCell align="middle">에러발생일시</TableCell>
                      <TableCell align="middle">에러발생공정</TableCell>
                      <TableCell align="middle">에러코드</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                  {factory.map(({id, create_dt_01, data_a_01, data_b_01, quality_01, create_dt_02, data_a_02, data_b_02, quality_02, err_dt, err_cd, err_prc_cd, wkctr}, i) => (
                      <TableRow key={id}>
                      <TableCell align="middle">{create_dt_01}</TableCell>
                      <TableCell align="middle">{data_a_01}</TableCell>
                      <TableCell align="middle">{data_b_01}</TableCell>
                      <TableCell align="middle">{quality_01}</TableCell>
                      <TableCell align="middle">{data_a_02}</TableCell>
                      <TableCell align="middle">{data_b_02}</TableCell>
                      <TableCell align="middle">{quality_02}</TableCell>
                      <TableCell align="middle">{err_dt}</TableCell>
                      <TableCell align="middle">{err_prc_cd}</TableCell>
                      <TableCell align="middle">{err_cd}</TableCell>
                  </TableRow>
                    ))}
                  </TableBody>
              </Table>
          </TableContainer>
          }
        </div>
        <div className="HorizontalLine"></div>
        <div className="margin_short" />
        <div className="margin_last">
          2023 Hustar PBL project with SL
        </div>
        </div>
      );
    };
    
    export default Fac12;