import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
    Paper
  } from '@material-ui/core';

const stt = ['정상', '주의', '위험'];
const factory = Array(6)    //임시 데이터 생성
    .fill()
    .map(() => ({
    'id' : Math.floor(Math.random()*10),
    'name' : '공장',
    'wkctr' : '설비',
    'err_cnt' : Math.floor(Math.random()*100),
    'err_dt' : Math.floor(Math.random()*100),
    'err_cd' : Math.floor(Math.random()*100),
    'err_st' : stt[Math.floor(Math.random()*10%3)]
}));

const Main3 = () => {
    return (
      <div>
        <div>
          <div className = "pagename">
            M A I N
          </div>
          <div className="HorizontalLine" />
          <div className="TextBox">
          [ 설비 현황 ]
        </div>
        <div className="MainTable">
          {
            <TableContainer component={Paper}>
              <Table size="small">
                  <TableHead>
                      <TableRow>
                        <TableCell align="left">공장</TableCell>
                        <TableCell align="middle">설비</TableCell>
                        <TableCell align="middle">에러 발생 횟수</TableCell>
                        <TableCell align="middle">최근 에러 발생일</TableCell>
                        <TableCell align="middle">최근 에러 코드</TableCell>
                        <TableCell align="middle">위험도</TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                    {factory.map(({id, name, wkctr, err_cnt, err_dt, err_cd, err_st}, i) => (
                      <TableRow key={id}>
                        <TableCell align="middle">{name + String(Math.floor((i+2) / 2))}</TableCell>
                        <TableCell align="middle">{wkctr + String(i + 1)}</TableCell>
                        <TableCell align="middle">{err_cnt}</TableCell>
                        <TableCell align="middle">{err_dt}</TableCell>
                        <TableCell align="middle">{err_cd}</TableCell>
                        <TableCell align="middle">{err_st}</TableCell>
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
  
  export default Main3;