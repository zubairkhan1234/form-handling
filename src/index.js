import React, {useState} from 'react';
import ReactDOM from 'react-dom';
function App() {

  const [fullName, setFullName] = useState({
    fname: '',
    lname: ''
  })

  const [showResult, setShowResult] = useState({
    fname: "",
    lname: ""
  })



  const formName = (e) => {

    var value = e.target.value
    var name = e.target.name
    // console.log(e.target.name)
    // console.log(e.target.value)

    setFullName((preval) => {

      if (name === 'fname') {
        return ({

          fname: value,
          lname: preval.lname
        });

      } else if (name === 'lname') {
        return ({

          fname: preval.fname,
          lname: value
        });

      }
    })

  }

  const formsubmit = (e) => {

    e.preventDefault()
    setShowResult(fullName)
    alert("Your form has been submitted")



  }
  return (
    <>

      <form onSubmit={formsubmit}>
        <input type="text"
          onChange={formName}
          placeholder="First Name"
          value={fullName.fname}
          name="fname" />
        <input type="text"
          onChange={formName}
          placeholder="Last Name"
          value={fullName.lname}
          name="lname" />
        <button type="submit">Submit</button>
      </form>
      <h1>This is {showResult.fname} {showResult.lname}</h1>


    </>
  )

}


ReactDOM.render(<App />, document.querySelector('#root'))