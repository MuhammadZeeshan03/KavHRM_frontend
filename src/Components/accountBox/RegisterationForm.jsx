import React, { useContext,useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Checkbox, Link, Radio, RadioGroup } from '@material-ui/core';
import { FormControl,FormControlLabel,FormLabel  } from '@mui/material';
import { useFormik } from "formik";
import axios from "axios";
import {
  FieldContainer_RF,
  BoxContainer_RF,
  FormContainer_RF,
  Input,
  Label_RF,
  SubmitButton
}
 from "./common";
import { Marginer } from "./../marginer/index";
import { AccountContext } from "./accountContext";
import './validity.css';


function RegisterationForm(props) {
const onSubmit = async (values) => {
  const {...data} = values;


const response = await axios
    .post("http://127.0.0.1:8000/Kavtech/profile/", data)

    
    .catch((err) => {
      console.log(err)
});

  if (response && response.data) {
    formik.resetForm();
  }
};
//Redirection
//Redirection

const formik = useFormik({
    initialValues: {
      
      first_name: "",
      last_name:"",
      email: "",
      birth_date:"",
      sched_test:"",
      job_openings:"",
      experience:"",
      b_degree:"",
      b_institute:"",
      m_degree:"",
      m_institute:"",
      phd_degree:"",
      phd_institute:"",

  },
  validateOnBlur: true,
    onSubmit,

  });
  
  
  
  return (
 
<>

<br/>
<br/>


<FieldContainer_RF>

<br/>
<br/>
<BoxContainer_RF>
  
  <FormContainer_RF onSubmit={formik.handleSubmit}>   

 <Label_RF>First Name:   <br/>
          <Input
          type='text'
          name="first_name"
          placeholder="Enter Your Last Name"
          value={formik.values.first_name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          required/></Label_RF><br/> 
          <Label_RF>Last Name:   
          <br/>
          <Input 
          type='text'
          name="last_name"
          placeholder="Enter Your Last Name"
          value={formik.values.last_name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          required />
          </Label_RF>
          <br/>
          <Label_RF>Email:   

          <br/>
          <Input 
          type={'email'}
          name="email"
          placeholder="Enter Your Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          required />
          </Label_RF>
          <br/>


          <Label_RF>Date of Birth:   
          <br/>
          <Input 
          type='date'
          name="DoB"
          placeholder="Enter Your Date of Birth"

          value={formik.values.DoB}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          required />
          </Label_RF>

          <br/>
          <Label_RF>Education  <h7 style={{color:"red"}}>*</h7></Label_RF>
          
          <Label_RF>Bachelors:  
            <br/> 

          <Input
          type='text'
          name="b_degree"
          onChange={formik.handleChange}
          value={formik.values.b_degree}
          placeholder="Degree"
          required />
          <Input
          type='text' 
          name="b_institute"
          onChange={formik.handleChange}
          value={formik.values.b_institute}
          placeholder="Institute" required />
          </Label_RF>
          <br/>






          <Label_RF>Masters:  
            <br/> 
          <Input
          type={'text'} 
          name="m_degree"
          placeholder="Degree"
          />
          <Input
          type={'text'} 
          name="m_institute"
          placeholder="Institute"

          />
          </Label_RF>
          <br/>
          <Label_RF>PHD:  
            <br/> 
          <Input
          type='text' 
          name="phd_degree"
          placeholder="Degree"

          />
          <Input
          type={'text'} 
          name="phd_institute"
          placeholder="Institute"
          />
          </Label_RF>
          <br/>


          <Label_RF>Experience: 
            <br/>
            <select name="experience" onChange={formik.handleChange}  value={formik.values.experience}>
            <option  value="Fresher" selected>Fresher</option>
            <option  value="1-2 years">1-2 years</option>
            <option   value="2-5 Years">2-5 years</option>
            <option  value="Above 5 years">Above 5 years</option>
          </select>
          <br/>  
          </Label_RF>
          <br/>



            <Label_RF>Job Openings(Apply For): 
              <br/>
              <Checkbox type="checkbox" onChange={formik.handleChange} value="IT" required name="job_openings" /> IT/Infrastructure
              <br/> 
                    <Checkbox type="checkbox" onChange={formik.handleChange} value={formik.values.job_openings} name="job_openings"/> Data Engineering
                    <br/>
                    <Checkbox type="checkbox" onChange={formik.handleChange} value="data_science" name="job_openings" /> Data Science
                    <br/>  
                    <Checkbox type="checkbox" onChange={formik.handleChange} value="management" name="job_openings" /> management
                    <br/>   
            </Label_RF>
            <br/>

            <Label_RF>CV/Resume:  
              <br/> 
            <Input
            type={'file'} 
            name="file"
            placeholder="Enter Your First Name"
            required />
            </Label_RF>
            <br/>

            <Label_RF>Test Schedule:
              <br/>

              <FormControl required>

              <RadioGroup aria-labelledby="demo-radio-buttons-group-label" 
                defaultValue="now" 
                name="radio-buttons-group">
                <FormControlLabel onChange={formik.handleChange} value="now" name="sched_test" control={<Radio />} label="now" />
                <FormControlLabel onChange={formik.handleChange}  value="later" name="sched_test" control={<Radio />} label="later" />

            <SubmitButton type="submit"> submit</SubmitButton>


            </RadioGroup>
            </FormControl>
            </Label_RF>
                    {/* <br/>
                    <br/>
                    <br/>
            <br/>
            {formik.values.first_name}
            <br/>
            {formik.values.last_name}
            <br/>
            {formik.values.email}
            <br/>
            {formik.values.DoB}
            <br/>
            {formik.values.job_openings}
            <br/>
            {formik.values.b_degree}

            {formik.values.experience}
            <br/>
            {formik.values.b_institute}
            <br/>
            {formik.values.sched_test}
            <br/> */}

</FormContainer_RF>
</BoxContainer_RF>

</FieldContainer_RF>

<br/>
<br/>
<br/>
</>
  );
 }

export default RegisterationForm
