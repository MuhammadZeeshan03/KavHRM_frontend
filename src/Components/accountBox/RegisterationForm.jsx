import React, { useContext,useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import zxcvbn from 'zxcvbn';
import { Button, Checkbox, Input, Link, Radio, RadioGroup } from '@material-ui/core';
import { FormControl,FormControlLabel,FormLabel  } from '@mui/material';
import { useRadioGroup } from '@mui/material/RadioGroup';
import { useFormik } from "formik";
import {GoogleLogin} from 'react-google-login';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Icon  from './icon';
import useStyles from './styles';
import * as yup from "yup";
import axios from "axios";
import { AUTH } from '../../Components/constants/actionTypes';
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
import { Marginer } from "./../marginer/index";
import { AccountContext } from "./accountContext";
import './validity.css';
import { nodeName } from "jquery";
import validator from 'validator'






function RegisterationForm(props) {

  const [ password, setPassword] = useState('');
  const testResult = zxcvbn(password);
  
const num = testResult.score * 100/4;
  


const [errorMessage, setErrorMessage] = useState('')
const [success, setSuccess] = useState(null);
const [error, setError] = useState(null);
  
const onSubmit = async (values) => {
  const { confirmPassword, ...data } = values;

  const response = await axios
    .post("http://127.0.0.1:8000/Kavtech/register/", data)
    .catch((err) => {
      if (err && err.response) setError(err.response.data.message);
      setSuccess(null);
    });

  if (response && response.data) {
    setError(null);
    setSuccess(response.data.message);
    formik.resetForm();
  }
};




  const changePasswordColor =   () => ( {
    width : `${num}%`,
    background :  funcProgressColor(),
    height : ' 6px'
  })

  const funcProgressColor = () => {
    switch(testResult.score) {
      case 0:
        return '#828282';
      case 1:
        return '#EA1111';
      case 2:
        return '#FFAD00';
      case 3:
        return '#9bc158';
      case 4:
        return '#00b500';
        default:
          return nodeName;
      
    }
  }

  const [show, setShow] = useState(false);
  // const { switchToSignin } = useContext(AccountContext);
  const handleShowHide =() =>{
    setShow(!show);
    //  PasswordStrength meter
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName:"",
      email: "",
      password: "",
      
    },
    validateOnBlur: true,

  });
  
  return (
 
<>
<br/>
<br/>
<FieldContainer_RF>
<FieldContainer_RF2>
<br/>
<br/>
<BoxContainer>
  
  <FormContainer onSubmit={formik.handleSubmit}>    

  <Label>First Name:   
<br/>
<Input_RF
 type='text'
 name="firstName"
placeholder="Enter Your Last Name"
 />
</Label>
<br/>

<Label>Last Name:   
<br/>
<Input_RF 
 type='text'
 name="lastName"
placeholder="Enter Your Last Name"
value={formik.values.lastName}
onChange={formik.handleChange}
onBlur={formik.handleBlur} 
required />
</Label>
<br/>
<Label>Email:   

<br/>
 <Input_RF 
 type={'email'}
 name="email"
placeholder="Enter Your Email"
value={formik.values.email}
onChange={formik.handleChange}
onBlur={formik.handleBlur} 
required />
</Label>
<br/>


<Label>Date of Birth:   
<br/>
 <Input_RF 
 type={'date'}
 name="DoB"
placeholder="Enter Your Date of Birth"
value={formik.values.DoB}
onChange={formik.handleChange}
onBlur={formik.handleBlur} 
required />
</Label>

<br/>

<h3>Education:</h3>
<Label>Bachlors:  
  <br/> 
 <Input_RF2
 type={'text'} 
 name="firstName"
placeholder="Degree"

required />
 <Input_RF
 type={'text'} 
 name="firstName"
placeholder="Institute"
required />
</Label>
<br/>

<Label>Masters:  
  <br/> 
 <Input_RF2
 type={'text'} 
 name="M_degree"
placeholder="Degree"

/>
 <Input_RF
 type={'text'} 
 name="firstName"
placeholder="Institute"

/>
</Label>
<br/>
<Label>PHD:  
  <br/> 
 <Input_RF2
 type={'text'} 
 name="P_degree"
placeholder="Degree"

/>
 <Input_RF
 type={'text'} 
 name="firstName"
placeholder="Institute"
/>
</Label>
<br/>




<Label>Experience: 
  <br/>
  <select>
  <option value="Fresher">Fresher</option>
  <option value="junior">1-2 years</option>
  <option selected value="senior">2-5 years</option>
  <option value="seniorMost">Above 5 years</option>
</select>
        <br/>  
</Label>
<br/>


<Label>Job Openings(Apply For): 
  <br/>
  <Checkbox type="checkbox" value="IT" name="job_opening" /> IT/Infrastructure
  <br/>
        <Checkbox type="checkbox" value="data_eng" name="job_opening" /> Data Engineering
        <br/>
        <Checkbox type="checkbox" value="data_sci" name="job_opening" /> Data Science
        <br/>  
        <Checkbox type="checkbox" value="management" name="job_opening" /> management
        <br/>  
</Label>
<br/>

<Label>CV/Resume:  
  <br/> 
 <Input_RF
 type={'file'} 
 name="file"
placeholder="Enter Your First Name"
required />
</Label>
<br/>

<Label>Test Schedule:
  <br/>

  <FormControl>

  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="female"
    name="radio-buttons-group"
  >
    <FormControlLabel value="now" control={<Radio />} label="now" />
    <FormControlLabel value="later" control={<Radio />} label="later" />

  </RadioGroup>
</FormControl>


  </Label>




        <br/>
        <br/>
        <br/>


  </FormContainer>
 
</BoxContainer>
</FieldContainer_RF2>
</FieldContainer_RF>
<br/>
<br/>
<br/>
</>
  );
}

export default RegisterationForm
