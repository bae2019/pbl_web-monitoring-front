import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
    Paper
  } from '@material-ui/core';

const factory = Array(6)    //임시 데이터 생성
    .fill()
    .map(() => ({
    'id' : Math.floor(Math.random()*10),
    'name' : '공장',
    'wkctr' : '설비',
    'prd_amt' : Math.floor(Math.random()*100),
    'fair_prd_amt' : Math.floor(Math.random()*100),
    'err_prd_amt' : Math.floor(Math.random()*100),
    'err_rto' : "0.5%",
    'prd_dt' : Math.floor(Math.random()*100),
}));

const Main1 = () => {
    return (
      <div>
        <div>
          <div className = "pagename">
            M A I N
          </div>
          <div className="HorizontalLine" />
          <div className="TextBox">
          [ 설비별 생산량 종합 데이터 ]
        </div>
        <div className="MainTable">
          {
            <TableContainer component={Paper}>
              <Table size="small">
                  <TableHead>
                      <TableRow>
                          <TableCell align="left">공장</TableCell>
                          <TableCell align="middle">설비</TableCell>
                          <TableCell align="middle">총생산량</TableCell>
                          <TableCell align="middle">양품</TableCell>
                          <TableCell align="middle">불량품</TableCell>
                          <TableCell align="middle">불량률</TableCell>
                          <TableCell align="middle">생산일자</TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                    {factory.map(({id, name, wkctr, prd_amt, fair_prd_amt, err_prd_amt, err_rto, prd_dt}, i) => (
                      <TableRow key={id}>
                        <TableCell align="middle">{name + String(Math.floor((i+2) / 2))}</TableCell>
                        <TableCell align="middle">{wkctr + String(i + 1)}</TableCell>
                        <TableCell align="middle">{prd_amt}</TableCell>
                        <TableCell align="middle">{fair_prd_amt}</TableCell>
                        <TableCell align="middle">{err_prd_amt}</TableCell>
                        <TableCell align="middle">{err_rto}</TableCell>
                        <TableCell align="middle">{prd_dt}</TableCell>
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
      </div>
    );
  };
  
  export default Main1;