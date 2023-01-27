import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper
  } from '@material-ui/core';
  import Mainchart from '../components/mainchart'
  
  const factory = Array(20)    //임시 데이터 생성
      .fill()
      .map(() => ({
      'id' : Math.floor(Math.random()*10),
      'date' : '2023-01-15',
      'time' : '15:08',
      'process1' : Math.floor(Math.random()*100),
      'process2' : Math.floor(Math.random()*100),
      'process3' : Math.floor(Math.random()*100),
      'process4' : Math.floor(Math.random()*100),
      'process5' : Math.floor(Math.random()*100),
      'process6' : Math.floor(Math.random()*100),
      'pass' : Math.floor(Math.random()*1000),
      'nonpass' : Math.floor(Math.random()*100)
  }));
  
  const Fac6 = () => {
      return (
        <div>
          <div className="TextBox">
          [ 공장2 장치별 데이터 전체 일람 ]
        </div>
        <div className="MainTable">
          {
            <TableContainer component={Paper}>
              <Table size="small">
                  <TableHead>
                      <TableRow>
                          <TableCell align="left">일자</TableCell>
                          <TableCell align="left">시간</TableCell>
                          <TableCell align="middle">공정1 통과량</TableCell>
                          <TableCell align="middle">공정2 통과량</TableCell>
                          <TableCell align="middle">공정3 통과량</TableCell>
                          <TableCell align="middle">공정4 통과량</TableCell>
                          <TableCell align="middle">공정5 통과량</TableCell>
                          <TableCell align="middle">공정6 통과량</TableCell>
                          <TableCell align="middle">총 생산량</TableCell>
                          <TableCell align="middle">불량품 수</TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                    {factory.map(({id, date, time, process1, process2, process3, process4, process5, process6, pass, nonpass}, i) => (
                      <TableRow key={id}>
                        <TableCell align="middle">{date}</TableCell>
                        <TableCell align="middle">{time}</TableCell>
                        <TableCell align="middle">{process1}</TableCell>
                        <TableCell align="middle">{process2}</TableCell>
                        <TableCell align="middle">{process3}</TableCell>
                        <TableCell align="middle">{process4}</TableCell>
                        <TableCell align="middle">{process5}</TableCell>
                        <TableCell align="middle">{process6}</TableCell>
                        <TableCell align="middle">{pass}</TableCell>
                        <TableCell align="middle">{nonpass}</TableCell>
                    </TableRow>
                    ))}
                  </TableBody>
              </Table>
          </TableContainer>
          }
        </div>
        <div className="HorizontalLine"></div>
        <div className="TextBox">
          [ 공정별 데이터 추이 그래프 ]
        </div>
        <div className="MainTable"><Mainchart /></div>
        <div className="margin_short" />
        </div>
      );
    };
    
    export default Fac6;