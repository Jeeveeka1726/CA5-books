import React, { useState } from 'react'
import "../App.css"
import { useNavigate } from 'react-router-dom'

export default function Form() {

    const [formData,setFormData] = useState({
        firstname : "",
        password : "",
        email : "",
        repeatpassword : ""
        })

    const [formError,setFormError] = useState({})
    const [fSubmit,setFSubmit] = useState(false)
    const navigate = useNavigate();

    const handleInput = (e) => {
        let{name,value} = e.target
        setFormData({
            ...formData,
            [name] : value
        })
    }

    const formSubmit=(e)=>{
        e.preventDefault();
        let errors = validate(formData)
        setFormError(errors)

        let errorKey = Object.keys(errors);
        if (errorKey.length == 0){
            setFSubmit(true)
            navigate('/Books');
        }else{
            setFSubmit(false)
        }
    }

    const validate = (data) => {
        let error = {}
        if(data.firstname.trim() == "" || data.firstname.trim().length>30 || data.firstname.trim().length <3){
           error.firstname = "Please Enter your name between 3-30 letters"
        }

        if(data.password.trim() == "" || data.password.trim().length<10){
            error.password = "Password should have atleast 10 letters"
        }else if (!/[!@#$%^&(),."]/.test(data.email)) {
            error.password = "Include a special character";
        }

        if(data.email.trim() == ""){
           error.email = "Please enter the correct email"
        }else if (!/@/.test(data.email)) {
            error.email = "Include @";
          }

        if(data.repeatpassword.trim() == "" || data.repeatpassword.trim() != data.password.trim()){
            error.repeatpassword = "Password doesn't match"
        }

        return error;
    }

  return (
    <>
    <div className='flex justify-center items-center h-96 ml-10'>
      <form className='flex flex-col bg-black p-20 border-2 rounded mt-32 w-72 border-white text-yellow-400 shadow-xl shadow-yellow-500' onSubmit={formSubmit}>
        <label htmlFor="firstname">Name : </label>
        <input className='w-40' type="text" name='firstname' placeholder='Enter Your Name' onChange={handleInput}/>
        {formError.firstname ? <p className='text-red-400 mt-2 mb-1'>{formError.firstname}</p> : ""}

        <label htmlFor="email">Email : </label>
        <input className='w-40' type="text" name='email' placeholder='Enter Your Email' onChange={handleInput} />
        {formError.email ? <p className='text-red-400 mt-2 mb-1'>{formError.email}</p> : ""}

        <label htmlFor="password">Password : </label>
        <input className='w-40' type="password" name='password' placeholder='Enter Your Password' onChange={handleInput}/>
        {formError.password ? <p className='text-red-400 mt-2 mb-1'>{formError.password}</p> : ""}

        <label htmlFor="repeatpassword">Confirm Your Password : </label>
        <input className='w-40' type="password" name='repeatpassword' placeholder='Enter Your Password' onChange={handleInput}/>
        {formError.repeatpassword ? <p className='text-red-400 mt-2 mb-1'>{formError.repeatpassword}</p> : ""}

        <input className='mt-7 bg-yellow-500 text-black' type="submit" value={"Register"} />
      </form>
    </div>
    </>
    
  )
}