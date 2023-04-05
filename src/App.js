import React from 'react';
import './App.css';
import {useForm} from 'react-hook-form'

function App() {
  const {register,handleSubmit ,formState:{errors}}=useForm()
  console.log(errors)
  const onSubmit =(data)=>{
    console.log(data)
  }
  return (
    <>
    <div className="App">
     <div className='container'>
    <div className='card'>
    <form action="" className='form'onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="fullname">Full Name</label><br/>
          <input
            type="text"
            className="form-control"
            id="fullname"
            placeholder="Enter Your Full Name"
            {...register("fullname",{required:"This field is required",
            minLength:{
              value:4,
              message:"Please Enter atleast 4 characters"
            }})}
            name='fullname'
          /><br/>
          { errors?.fullname && (
             <div className='small'>{errors.fullname.message}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail Address</label><br/>
          <input
            type="text"
            className="form-control"
            id="email"
            placeholder="Enter Your E-mail Address"
            {...register("emailAddress",{
              required:"This field is required",
              pattern:{
                value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ ,
                message: "Please Enter Valid Email Address"
              }
            })}
            name='emailAddress'
          />
           { errors?.emailAddress && (
             <div className='small'>{errors.emailAddress.message}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label><br/>
          <input
            type="text"
            className="form-control"
            id="phone"
            placeholder="Enter Your Phone Number"
            {...register("phone",{
              required:"This field is required",
              pattern:{
                value:/^\d{10}$/,
                message:"Please Enter Valid Number"
              }
            })}
            name='phoneno'
          />
          { errors?.phoneno && (
             <div className='small'>{errors?.phoneno.message}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label><br/>
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="Enter Your Password"
            {...register("password",{
              required:"This field is required",
              pattern :{
                value: /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                message :"(UpperCase, LowerCase, Number/SpecialChar and min 8 Chars)"
              }
            })}
            name='password'
          />
           { errors?.password && (
             <div className='small'>{errors.password.message}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="state">Choose Your State</label><br/>
          <select className="form-control" id="state"{...register("state",
          {
            required:"This field is required"
          }
          )} name='state'>
            <option value="">--- Select Your State ---</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Assam">Assam</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Punjab">Punjab</option>
          </select>
          { errors?.state && (
             <div className='small'>{errors.state.message}</div>
          )}
        </div>
        <div className="form-radio">
          <label htmlFor="gender" className="mr-4">Choose Your Gender : </label><br/>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="male"
              value="male"
              name="gender"
              {...register("male",{ required:"This field is required"})}
            />
            <label className="form-check-label" htmlFor="male">male</label><br/>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="female"
              value="female"
              name="gender"
              {...register("female",{ required:"This field is required"})}
            />
            <label className="form-check-label" htmlFor="female">female</label><br/>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="other"
              value="other"
              name="gender"
              {...register("other",{ required:"This field is required"})}
            />
            <label className="form-check-label" htmlFor="other">other</label><br/>
            { errors?.gender && (
             <div className='small'>{errors.gender.message}</div>
          )}
        </div>
        <div className='form-condition'>
          <input type='checkbox' id='tnc' {...register("tnc",{required:"Please Read T&C",})} name='tnc'/>
          <label htmlFor='tnc'> I agree all terms & conditions</label>
          { errors?.tnc && (
             <div className='small'>{errors.tnc.message}</div>
          )}
       </div>
        </div>
        <button className="btn btn-primary">Create New Account</button>
      </form>
    </div>
     </div>
    </div>
    </>
)
}
export default App;
