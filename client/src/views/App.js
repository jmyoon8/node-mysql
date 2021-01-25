import React,{ Suspense, useState } from 'react';
import Customer from './components/Customer/Customer'
import Table from'@material-ui/core/Table'
import TableHead from'@material-ui/core/TableHead'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import {makeStyles} from '@material-ui/core/styles'



function App() {

  const useStyle=makeStyles({
    root:{
      with :"100%",
      marginTop : "150px",
      overflowX:"auto"
    },
    table:{
      minWidth:"1080px"
    }
  })
  
  const classes =useStyle();
  const [customerInfo,setCustomerInfo]=useState([
    {id:"jm",img:"http://placeimg.com/50/50/any",name:"YoonJaeJin",birth:"19910812",gender:"male",job:"developer"},
    {id:"jj",img:"http://placeimg.com/50/50/any",name:"YoonJaeMin",birth:"1991018",gender:"male",job:"developer"},
    {id:"jj",img:"http://placeimg.com/50/50/any",name:"YoonJaeMin",birth:"1991018",gender:"male",job:"developer"}
  ])
  
  return (
    <Suspense fallback={(<div>loading....</div>)}>
      <Paper className={classes.root}>
        <Table classNam={classes.table}>
          <TableHead>
              <TableRow>
                <TableCell>번호</TableCell>
                <TableCell>아이디</TableCell>
                <TableCell>이미지</TableCell>
                <TableCell>성별</TableCell>
                <TableCell>이름</TableCell>
                <TableCell>생일</TableCell>
                <TableCell>직업</TableCell>
              </TableRow>
            {customerInfo.map((value,index)=><Customer key={index} number={index+1} id={value.id} name={value.name} img={value.img} birth={value.birth} gender={value.gender} job={value.job} />)}
          </TableHead>
        </Table>
      </Paper>
    </Suspense>
   
  );
}

export default App;
