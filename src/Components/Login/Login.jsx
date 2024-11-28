import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { loginAsncy, loginGoogle } from '../../Services/Actions/loginAction';
import './Login.css'

const Login = () => {

    const { isLogin, user, isError } = useSelector(state => state.loginRedux)

    const [inputConForm, setInputConForm] = useState({
        email : '',
        password : '',
      })
    
      const dispatch = useDispatch();
      const navigate = useNavigate();
    
      const handleConForm = (e) => {
        const { name, value } = e.target;
    
        setInputConForm({...inputConForm, [name] : value})
      }
    
      const handleConSubmit = (e) => {
        e.preventDefault();

        dispatch(loginAsncy(inputConForm))
    
        setInputConForm({
          email : '',
          password : '',
        })
      }


      const handleGoogle = () => {
        dispatch(loginGoogle())
      }

      useEffect(() => {
        if(isLogin && user){
          navigate('/')
        }
      }, [isLogin, user])
    
  return (
    <>
    <div className='login-form'>
      <Container>
        <h1 className='text-center mt-5 mb-5'>Login Form</h1>
        {isError ? <h1>Somthing Wrong</h1> : ''}
        <form className='p-5 bg-light rounded-4' onSubmit={handleConSubmit}>
          <div className="row mb-4">
            <label for="email" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="email" name='email' value={inputConForm.email} onChange={handleConForm}/>
            </div>
          </div>
          <div className="row mb-4">
            <label for="password" className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
              <input type="password" className="form-control" id="password" name='password' value={inputConForm.password} onChange={handleConForm}/>
            </div>
          </div>
          
          <button type="submit" className="btn btn-primary me-4">Loginn</button>
          <button type='submit' className="btn btn-primary" onClick={handleGoogle}>GOOGLE</button>
        </form>
      </Container>
    </div>
    </>
  )
}

export default Login