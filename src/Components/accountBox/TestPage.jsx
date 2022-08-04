import React from 'react'
import { styled } from 'styled-components';
import {
    BoldLink,
    TextArea,
    FieldContainer_RF2,
  
    BoxContainer,
    FieldContainer_RF,
    FieldError,
    FormContainer,
    FormSuccess,
    Input_RF,
    Input_RF2,
    Label,
    MutedLink,
    SubmitButton,
    FormError,
    Validity
  } from "./common";
export default function TestPage() {


  const users = [
    {
        Question:"question1",
        Options_a :"a",
        Options_b :"b",
        Options_c :"c",
        Options_d :"d",
    

    }
   ,
   {
    Question:"question2",
    Options_a:"a",
    Options_b:"b",
    Options_c:"c",
    Options_d:"d",


} ];    

    return (
        <div>


<br/>
<FieldContainer_RF> 
     <BoxContainer> You have total 10 numbers of Questions.</BoxContainer>
<BoxContainer >Each Question has 1 number.</BoxContainer>

<br/>
<div style={{color:"blue" , padding:"34px"}}>
<h1 >
    Questions 1
    </h1>

    <ul>
        How are You
        <li>
        a
        </li>
        <li>
        b
        </li>
        <li>
        c
        </li>
        <li>
        d
        </li>
    </ul>
    <h1 >
    Questions 2
    </h1>

    <ul>
        Hello
        <li>a</li>
        <li>b</li>
        <li>c</li>
        <li>d</li>
    </ul>


    <h1 >Questions 3</h1><ul>Hey
        <li>a</li>
        <li>b</li>
        <li>c</li>
        <li>d</li>
    </ul>



</div>

</FieldContainer_RF>


            {/* <h1>{doubled}</h1> */}
            <ul>
            <li> {users.Question}</li>
            {/* <li> {users.Question}</li> */}
            <li> {users.Options_c}</li>
            <li> {users.Options_d}</li>
            </ul>
        </div>
//     <div>
//         <h1>Names!
// {
// 
//     </div>
//   
)
  
  }
