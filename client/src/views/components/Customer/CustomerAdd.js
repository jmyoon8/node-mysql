import axios from 'axios'
import React, { useState } from 'react'



function CustomerAdd(props) {

    const [userName,setUserName]=useState("")
    const [file,setFile]=useState("")
    const [fileName,setFileName]=useState("")
    const [birthday,setBirthday]=useState("")
    const [job, setJob]=useState("")
    const [gender,setGender]=useState("")
    let reset=props.reset
    let setReset=props.setReset
    
    const nameHandler=(e)=>{
        setUserName(e.target.value)
    }
    const birthdayHandler=(e)=>{
        setBirthday(e.target.value)
    }
    const genderHandler=(e)=>{
        setGender(e.target.value)
    }
    const jobHandler=(e)=>{
        setJob(e.target.value)
    }
    const fileHandler=(e)=>{
        console.log(e.target.files[0])
        console.log(e.target.value)
        setFile(e.target.files[0])
        setFileName(e.target.value)
    }
    
    const submit= async (e)=>{
        e.preventDefault();
        
        //이미지를 전송하기 위해선 form데이터를 사용해야한다.
        const formData= new FormData();
        formData.append('image',file)
        formData.append('imageName',fileName)
        formData.append('name',userName)
        formData.append('birthday',birthday)
        formData.append('gender',gender)
        formData.append('job',job)
        
        //데이터 형식
        const config ={
            headers:{
                'content-type':'multipart/form-data'
            }
        }
       
        
        await axios.post('/api/customers/customerAdd',formData,config).then(res=>{
            console.log(res.data)
            //정보 추가제거
            reset?setReset(false):setReset(true)
            //정보 초기화
            setFileName("")
            setFile("")
            setUserName("")
            setBirthday("")
            setGender("")
            setJob("")
            
       

        }).catch(err=>alert(err))
     
       
    }
    return (
        <div style={{display:'flex',justifyContent:"center",alignItems:'center',width:'100%'}}>
            <form onSubmit={submit}> 
                {/*사진에서는 value는 파일명 file은 파일의정보를 담고있다.  */}
                사진 : <input type="file" name="file" value={fileName} onChange={fileHandler}/> 
                이름 : <input type="text" name="name" value={userName} onChange={nameHandler}/>
                생일 : <input type="text" name="birthday" value={birthday} onChange={birthdayHandler}/>
                성별 : <input type="text" name="gender" value={gender} onChange={genderHandler}/>
                직업 : <input type="text" name="job" value={job} onChange={jobHandler}/>
                <button type="submit">추가하기</button>
            </form>            
        </div>
    )
}

export default CustomerAdd
