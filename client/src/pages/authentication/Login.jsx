import React, { useState } from 'react'
import styled from "styled-components"
import {Button, TextField }  from "@mui/material"

const Component = styled.div`
/* display: flex; */
/* justify-content: center; */
/* border:2px solid black; */
width:381px;
margin:auto;
margin-top:50px;
box-shadow: 5px 2px 15px 2px rgb(0 0 0/0.8);
/* border-radius:9px; */

`;

const Image = styled.img`
display:flex;
margin:auto;
/* border:2px solid green; */
height:200px;
/* padding-top:20px; */
width:380px;

`;
const InputBx = styled.div`
display:flex;
/* border:2px solid navy; */
flex:1;
flex-direction: column;
gap:15px;
/* margin-bottom:40px; */
& > button:nth-child(4){
    margin-bottom: -10px;
    /* color:red; */
}

& > button:nth-child(5){
    margin-bottom: 30px;
}

/* & input {
    height:15px;
    margin:auto;
} */
`;


const Para = styled.p`
    font-size:18px;
    text-align: center;
    color : gray;
`;


const Login = () => {
    const [account,setAccount]= useState('singup')
    const accountToggle = ()=>{
        if(account==='signup'){
            setAccount('login')
        }
        else{
            setAccount('signup')
        }
    }

    const inpChange = (e)=>{
    console.log(e.target.value)
    }
    return (
    
    <>
        <Component>
        <div>
            <Image src='https://cdn.logojoy.com/wp-content/uploads/2018/05/30164225/572.png'
                alt='error loading img'
            />
        </div>

        {

            account==='signup' ?


        <InputBx>
            <TextField variant='standard' label="ENTER NAME" onChange={(e)=>inpChange(e)}/>
            <TextField variant='standard' label="ENTER USER NAME" onChange={(e)=>inpChange(e)}/>
            <TextField variant='standard' label='ENTER PASSWORD' onChange={(e)=>inpChange(e)}/>
            <Button style={{backgroundColor:'seagreen'}}variant='contained'>Signup</Button>
            <Para>OR</Para>
            <Button variant='contained'onClick={()=>accountToggle()}>Already have an account</Button>
        </InputBx>

        :

        <InputBx>
            <TextField variant='standard' label="ENTER USER NAME"/>
            <TextField variant='standard' label='ENTER PASSWORD'/>
            <Button style={{backgroundColor:'seagreen'}}variant='contained'>Login</Button>
            <Para>OR</Para>
            <Button variant='contained' onClick={()=>accountToggle()}>Crete an account</Button>
        </InputBx>
        }

            
        </Component>
    </>
  )
}

export default Login