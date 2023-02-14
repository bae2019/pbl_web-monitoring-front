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
  
  const Fac32 = () => {
      return (
        <div>
          <div className = "pagename">
            제 3 공 장
          </div>
          <div className="HorizontalLine" />
          <div className="TextBox">
          [ 설비5 세부 데이터 ]
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
    
    export default Fac32;