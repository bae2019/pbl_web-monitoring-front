import './App.css';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, Button, ButtonGroup
} from '@material-ui/core';
import Mainchart from './components/mainchart.js'
import Menubar from './components/menubar';

const stt = ['작동중', '작동 중지', '이상 발생']

const factory = Array(6)    //임시 데이터 생성
  .fill()
  .map(() => ({
    'id' : Math.floor(Math.random()*10),
    'name' : '공장',
    'state' : stt[(Math.floor(Math.random()*10/3))],
    'process1' : Math.floor(Math.random()*100),
    'process2' : Math.floor(Math.random()*100),
    'process3' : Math.floor(Math.random()*100),
    'process4' : Math.floor(Math.random()*100),
    'process5' : Math.floor(Math.random()*100),
    'process6' : Math.floor(Math.random()*100),
    'pass' : Math.floor(Math.random()*1000),
    'nonpass' : Math.floor(Math.random()*10)
  }));

function App() {
  return (
    <div className="white-background">
      <div className="TitleBox">
        <img className="Logoimg" alt="SL_logo" src="image/logo_l.png"/>
        <h2>PBL middleware monitoring web </h2>
      </div>
      <div className="menubar">
        <Menubar />
      </div>
      <div className="TextBox">
        [ 장치별 현황 및 종합 데이터 ]
      </div>
      <div className="MainTable">
        {
          <TableContainer component={Paper}>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">공장</TableCell>
                        <TableCell align="middle">상태</TableCell>
                        <TableCell align="middle">공정1 통과량</TableCell>
                        <TableCell align="middle">공정2 통과량</TableCell>
                        <TableCell align="middle">공정3 통과량</TableCell>
                        <TableCell align="middle">공정4 통과량</TableCell>
                        <TableCell align="middle">공정5 통과량</TableCell>
                        <TableCell align="middle">공정6 통과량</TableCell>
                        <TableCell align="middle">총 생산량</TableCell>
                        <TableCell align="middle">불량률</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                  {factory.map(({id, name, state, process1, process2, process3, process4, process5, process6, pass, nonpass}, i) => (
                    <TableRow key={id}>
                      <TableCell align="middle">{name + String(i + 1)}</TableCell>
                      <TableCell align="middle">{state}</TableCell>
                      <TableCell align="middle">{process1}</TableCell>
                      <TableCell align="middle">{process2}</TableCell>
                      <TableCell align="middle">{process3}</TableCell>
                      <TableCell align="middle">{process4}</TableCell>
                      <TableCell align="middle">{process5}</TableCell>
                      <TableCell align="middle">{process6}</TableCell>
                      <TableCell align="middle">{pass}</TableCell>
                      <TableCell align="middle">{nonpass + '%'}</TableCell>
                  </TableRow>
                  ))}
                </TableBody>
            </Table>
        </TableContainer>
        }
      </div>
      <div className="HorizontalLine"></div>
      <div className="TextBox">
        [ 상세 report ]
        <div className="buttonbox">
          <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button variant="outlined" color="primary">공 장 1</Button>
            <Button variant="outlined" color="primary">공 장 2</Button>
            <Button variant="outlined" color="primary">공 장 3</Button>
            <Button variant="outlined" color="primary">공 장 4</Button>
            <Button variant="outlined" color="primary">공 장 5</Button>
            <Button variant="outlined" color="primary">공 장 6</Button>
          </ButtonGroup>
        </div>
      </div>
      <div className="MainTable">
        {
          <TableContainer component={Paper}>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">일자</TableCell>
                        <TableCell align="middle">시간</TableCell>
                        <TableCell align="middle">공정1 data</TableCell>
                        <TableCell align="middle">공정2 data</TableCell>
                        <TableCell align="middle">공정3 data</TableCell>
                        <TableCell align="middle">공정4 data</TableCell>
                        <TableCell align="middle">공정5 data</TableCell>
                        <TableCell align="middle">공정6 data</TableCell>
                        <TableCell align="middle">총 생산량</TableCell>
                        <TableCell align="middle">불량품 수</TableCell>
                        <TableCell align="middle">양품비율</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                  {factory.map(({id, process1, process2, process3, process4, process5, process6, pass, nonpass}, i) => (
                    <TableRow key={id}>
                      <TableCell align="middle">{'2023-01-20'}</TableCell>
                      <TableCell align="middle">{'18:35'}</TableCell>
                      <TableCell align="middle">{process1}</TableCell>
                      <TableCell align="middle">{process2}</TableCell>
                      <TableCell align="middle">{process3}</TableCell>
                      <TableCell align="middle">{process4}</TableCell>
                      <TableCell align="middle">{process5}</TableCell>
                      <TableCell align="middle">{process6}</TableCell>
                      <TableCell align="middle">{pass}</TableCell>
                      <TableCell align="middle">{nonpass}</TableCell>
                      <TableCell align="middle">{98}</TableCell>
                  </TableRow>
                  ))}
                </TableBody>
            </Table>
        </TableContainer>
        }
      </div>
      <div className="margin_short" />
      <div className="MainTable"><Mainchart /></div>
      <div className="margin_last">
        2023 Hustar PBL project with SL
      </div>
    </div>
  );
}

export default App;
