import React,{ Suspense, useEffect, useState } from 'react';
import Customer from './components/Customer/Customer'
import Table from'@material-ui/core/Table'
import TableHead from'@material-ui/core/TableHead'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import TableBody from'@material-ui/core/TableBody'
import Paper from '@material-ui/core/Paper'
import {makeStyles} from '@material-ui/core/styles'
import CircularProgress from'@material-ui/core/CircularProgress'
import CustomerAdd from'./components/Customer/CustomerAdd'


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

  //게시판 페이징
  


  const [completed,setCompleted]=useState({progress:0})
  const [customer,setCustomer]=useState([])
  const [reset,setReset]=useState(true)
  const progressFunc =()=>{

   if(completed.progress<=100){
     completed.progress=parseInt(completed.progress+1)
   }else{
     completed.progress=1
   }
   setCompleted({progress:completed.progress})
  }
  
  useEffect(() => {
    var inter=setInterval(() => {
      progressFunc()
    }, 150);
    axios
    .get('/api/customers')
    .then(res=>{setCustomer(res.data)
               console.log(customer)})
    .catch(err=>console.log(err))
    completed.progress=0
    clearInterval(inter)
    
  }, [reset])

  


  const classes =useStyle();
  return (
    <Suspense fallback={(<div>loading....</div>)}>
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
                <TableCell>기능</TableCell>
              </TableRow>
          </TableHead>
          <TableBody>
            {customer.map((value,index)=>
              
                <Customer key={index} number={index+1}
                          id={value.id} name={value.name}
                          img={value.image} birthday={value.birthday}
                          gender={value.gender} job={value.job}
                          reset={reset} setReset={setReset}
                          />
            )}
            <TableRow>
              <TableCell colSpan="6" align="center">
                  <CircularProgress className={classes.progress} variant="determinate" value={completed.progress}/>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
      <div style={{display:'flex',flexDirection:'column', alignItems:'center',width:'100%'}} >
      <CustomerAdd reset={reset} setReset={setReset}/>
      </div>
    </Suspense>
   
  );
}

export default App;
