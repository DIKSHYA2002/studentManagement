
import React, { useEffect, useState } from 'react';
import './App.css';
function App() {
  
  const [studentArr, setstudentArr] = useState([]);
  const [present , setpresent] = useState(0);
  const [inputData, setinputData] = useState({
    name:"",
    rollNumber: "",
  })
  let { name ,rollNumber,} = inputData; 
  function changehandle(e) {
    let exists = false;
    studentArr.map((info,ind)=>{
      if(studentArr[ind].rollNumber  == document.getElementsByName("rollNumber")[0].value)
      {
          exists= true;
      }
     
    })
    e.preventDefault();

    if(exists==false )
    {
    setstudentArr([...studentArr, { rollNumber,name}]);
    }
  
  }
  
  
 
  function time() {
    const date = new Date();
    const showTime = date.getHours() 
        + ':' + date.getMinutes();
    return showTime;
  }
  function change(e) {
    setinputData({ ...inputData, [e.target.name]: e.target.value })
  }
  function addcheckin(e) {
     document.getElementsByClassName(`checkin${e.target.className}`)[0].innerText= time();
     document.getElementsByClassName(`${e.target.className}`)[1].disabled=false;
     let newpresent = present + 1;
     setpresent(newpresent );
    
  }
  function addcheckOut(e) {
   
    document.getElementsByClassName(`checkout${e.target.className}`)[0].innerText= time();
    let newpresent = present - 1;
    setpresent(newpresent );
  }
 function deletes(e)
 {
     const student = studentArr.filter( stud => stud.rollNumber !== e.target.className);
     setstudentArr(student);
 }
 
  return (
    <>
    <div className="App">
      <div className='texthead'>
      Student Attendence Management System
        </div><br></br>
      <form >
        
        <input type="number" min='1'   name='rollNumber' placeholder="ROLL NUMBER" onChange={change} required></input>
        <input type="text"   name='name' placeholder="name" onChange={change}></input>
        <button onClick={changehandle}>ADD</button>
      </form >
      <div>
        <div className='absentpresent'>
          <div className='present'>present :{present}/{studentArr.length}</div> 
         
          
        </div>
      </div>
      <table border="1" cellPadding="10">
        <thead>
        <tr>
        <th>Roll Number</th>
        <th>Name of the Student</th>
        <th>CheckIn Time</th>
        <th>Checkout Time</th>
        </tr>
        </thead>
        <tbody>
        {
         
            studentArr.map((info,ind)=>{

            return <tr>
              
              <td>{info.rollNumber}</td>
              <td>{info.name}</td>
              <td >
                <a className={"checkin" + info.rollNumber}></a>                
                <button className={info.rollNumber} onClick={addcheckin}>CheckIn</button></td>
              <td>
              <a className={"checkout" +info.rollNumber}></a>
              <button className={info.rollNumber} onClick={addcheckOut}>CheckOut</button></td>
              <td><button className={info.rollNumber} onClick={deletes}>delete</button></td>
            </tr>
           
          })
        }
        
        </tbody>
       
      </table>

    </div>
  
    </>
   
  );
}

export default App;
