import React,{useState} from 'react'
function App(){
  const [formdata, setFormdata] = useState({
    name:"",
    email:"",
    password:"",
    gender:"",
    age:"",
    DOB:"",
    skills:[],
    country:"",
    course:"",
    experience:0,
    time:"",
    address:"",
    photo:null,
    terms:false
  });

const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox" && name === "terms") {
      setFormdata({
        ...formdata,
        [name]: checked,
      });
    } else if (type === "file") {
      setFormdata({
        ...formdata,
        [name]: files[0],
      });
    } else {
      setFormdata({
        ...formdata,
        [name]: value,
      });
    }
  };
    const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Reg Data:");
    console.log(formdata);

    alert("Reg Successful!");
  };
  const handleSkills = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setFormdata({
        ...formdata,
        skills: [...formdata.skills, value],
      });
    } else {
      setFormdata({
        ...formdata,
        skills: formdata.skills.filter(
          (skill) => skill !== value
        ),
      });
    }
  };
  const handleReset = () => {
    setFormdata({
      name: "",
      email: "",
      password: "",
      age: "",
      DOB: "",
      gender: "",
      course: "",
      skills: [],
      country:"",
      photo:null,
      time:"",
      address:"",
      experience:0,
      terms:false
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Registration form</h2>
      <div>
        <label>Name: </label>
        <input type="text" name="name" placeholder='name' value={formdata.name} onChange={handleChange} required></input>
      </div>
      <br/>
      <div>
        <label>Email: </label>
        <input type="email" name="email" placeholder='email' value={formdata.email} onChange={handleChange} required></input>
      </div>
      <br/>
      <div>
        <label>password: </label>
        <input type="password" name="password" placeholder='password' value={formdata.password} onChange={handleChange} required></input>
      </div>
      <br/>


      <div>
        <label>Gender: </label>
        <input type="radio" name="gender" value="Female" checked={formdata.gender==="Female"} onChange={handleChange}></input>
        <label>Female</label>

        <input type="radio" name="gender" value="Male" checked={formdata.gender==="Male"} onChange={handleChange}></input>
        <label>Male</label>
      </div>


      <br/>
      <div>
        <label>DOB: </label>
        <input type="date" name="DOB" placeholder='DOB' value={formdata.DOB} onChange={handleChange} required></input>
      </div>
      <br/>
      <div>
        <label>Age: </label>
        <input type="number" name="age" placeholder='age' min="18" max="100"value={formdata.age} onChange={handleChange} required></input>
      </div>
      <br/>

      <div>
        <label>Select Course</label>
        <select name="course" value={formdata.course} onChange={handleChange}>
          <option value="">Select course</option>
          <option value="Java">Java</option>
          <option value="Python">Python</option>
          <option value="React">React</option>
          <option value="Node.js">Node.js</option>
        </select>
      </div>

      <div>
        <label>Skills</label>

        <input type="checkbox" name="skills" value="HTML" checked={formdata.skills.includes("HTML")} onChange={handleSkills}></input>
        <label>HTML</label>

        <input type="checkbox" name="skills" value="CSS" checked={formdata.skills.includes("CSS")} onChange={handleSkills}></input>
        <label>CSS</label>

        <input type="checkbox" name="skills" value="JS" checked={formdata.skills.includes("JS")} onChange={handleSkills}></input>
        <label>JS</label>

        <input type="checkbox" name="skills" value="React" checked={formdata.skills.includes("React")} onChange={handleSkills}></input>
        <label>React</label>
      </div>

      <div>
        <label>Country</label>
        <select name="country"  value={formdata.country} onChange={handleChange}>
          <option value="">Select country</option>
          <option value="UK">UK</option>
          <option value="US">US</option>
          <option value="India">India</option>
          <option value="Canada">Canada</option>
          <option value="Australia">Australia</option>
          <option value="Germany">Germany</option>
        </select>
      </div>

      <div>
        <label>Address</label>
        <textarea name="address" rows="4" value={formdata.address} onChange={handleChange}></textarea>
      </div>


      <div>
        <label>Time</label>
        <input type="time" name="time" value={formdata.time} onChange={handleChange}></input>
      </div>

      <div>
        <label>Experience</label>
        <input type="range" name="experience" min="0" max="20" value={formdata.experience} onChange={handleChange}></input>
        <span>{formdata.experience}</span>
      </div>

      <div>
        <label>upload photo</label>
        <input type="file" name="photo" accept="image/*" onChange={handleChange}></input>
      </div>

      <div>
        <input type="checkbox" name="terms" checked={formdata.terms} onChange={handleChange} required></input>
        <label>I agree to the terms and conditions</label>
      </div>

      <button type='submit'>Submit</button>
      <br/>
      <button type='reset' onClick={handleReset}>Reset</button>
    </form>
  )
}
export default App;