import React from 'react'
import { styled } from 'styled-components';
import { RadioGroup , Radio} from '@material-ui/core';
import Timer from './Timer';
import { useEffect } from 'react';
import Records from './records.json'
import JsonData from './JsonData';



import {
    BoldLink,
    TextArea,
    FieldContainer_RF2,
    TimerBox,
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
    
   
    
    
    
    
    return (
        <>
<br/>
<FieldContainer_RF> 

    <BoxContainer> You have total 10 numbers of Questions.</BoxContainer>


<BoxContainer >
    <br/>
    <TimerBox> 
    <Timer/> 
    </TimerBox>

</BoxContainer>

<br/>
<h1 style={{color:"red" , padding:"34px 0px 0px"}}> Rendering 100 questions from a server!! </h1>
<div style={{color:"blue" , padding:"34px"}}>

<JsonData/>



</div>

</FieldContainer_RF>
<br/>

</>
)
  
  }
