import React,{ Suspense, useEffect, useState } from 'react';
import Customer from './components/Customer/Customer'
import Table from'@material-ui/core/Table'
import TableHead from'@material-ui/core/TableHead'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import {makeStyles} from '@material-ui/core/styles'
import CircularProgress from'@material-ui/core/CircularProgress'
import axios from'axios'

const useStyle=makeStyles({
  root:{
    with :"100%",
    marginTop : "150px",
    overflowX:"auto"
  },
  table:{
    minWidth:"1080px"
  },
  progress:{
    marginTop:"20px"
   
  }
})

function App() {

  
  const [completed,setCompleted]=useState(0)
  const [customer,setCustomer]=useState([])

  const progressFunc =()=>{

   if(completed<=100){
     setCompleted(completed+1)
   }else{
     setCompleted(0)
   }
  }
  
  
  
  useEffect(() => {

    setInterval(() => {
      progressFunc()
    }, 200);

    axios
    .get('/api/customers')
    .then(res=>setCustomer(res.data))
    .catch(err=>console.log(err))

  }, [])
 
  
  const classes =useStyle();
  return (
    <Suspense fallback={(<div>loading....</div>)}>
      {completed}
      <Paper className={classes.root}>
        <Table className={classes.table}>
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
            {customer.map((value,index)=><Customer key={index} number={index+1} id={value.id} name={value.name} img={value.img} birth={value.birth} gender={value.gender} job={value.job} />)}
          </TableHead>
        </Table>
      </Paper>
    </Suspense>
   
  );
}

export default App;
