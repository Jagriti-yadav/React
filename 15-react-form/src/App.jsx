import {useForm} from 'react-hook-form'

function App(){

  const {
    register,
    handleSubmit,
    formState : {errors, isSubmitting},
  }=useForm();


  //simulating the API request
  //the form will submit after the delay of 5 sec(assuming that may be api request has been done and data is going to be fetch in this time period)
  //during this 5sec duration user may hit the submit button multiple times (should be fixed so that user can hit the submit button only once until the is going to fetch from backend)
  //we can use isSubmitting which checks whether our form in isSubmitting phase.(either this value is going to be true or false)
  
  async function onSubmit(data){
    await new Promise((resolve)=>setTimeout(resolve,5000))
    console.log("hello, submitted form ",data);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name</label>
      {/* i have added the classname (when error occurs) but did not added the css */}
      <input className = {errors.firstname ? 'input-error':""} type="text" {...register('firstname', {
        required:true,
        minLength:{
          value:3,
          message:"min length must be atleast 3"
        },
        maxLength:{
          value:10,
          message:"max length must be upto 10"
        }
      })}></input>
        {errors.firstname && <p>{errors.firstname.message}</p>}
<br/>
<br/>
      <label>Middle name</label>
      <input type="text" {...register('middlename')}></input>
      <br/>
      <br/>
      <label>Last Name</label>
      <input type="text" {...register('lastname',{
        required:true,
        pattern:{
          value:/^[A-Za-z ]+$/,
          message:'lastname is not as per the rules'
        }
      })}></input>
      <br/>
      <br/>
      <button type='submit' disabled={isSubmitting} >{isSubmitting ? "Submitting..." : "Submit"}</button>

    </form>
  )
}
export default App;