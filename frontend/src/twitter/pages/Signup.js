import React,{ useState } from 'react';
import signUpApi from '../../api/accountsApi'

function Signup() {
  const [users, setUsers] = useState([])
  const [newUser, setNewUser] = useState('')

  const addUser = async (e) => {
    e.preventDefault()
    try {
      const user = await signUpApi.createUser(newUser)
      setUsers([...users, user])
      setNewUser('')
    } catch (error) {
      // console.error(error)
    }
  }

return (
  <main className="form-signup">
    <form>
      <h1 className="h3 mb-3 fw-normal">Sign Up</h1>

      <div className="form-floating">
        <input type="text"
        className="form-control"
        placeholder="ユーザー名" />
        {/* <label>First Name</label> */}
      </div>

      <div className="form-floating">
        <input type="email"
        className="form-control"
        placeholder="email" />
        {/* <label>Email address</label> */}
      </div>

      <div className="form-floating">
        <input type="password"
        className="form-control"
        placeholder="password" />
        {/* <label>Password</label> */}
      </div>

      <div className="form-floating">
        <input type="password"
        className="form-control"
        placeholder="Re password" />
        {/* <label>Password Confirm</label> */}
      </div>

      <button className="w-100 btn btn-lg btn-primary"
      type="submit"
      onClick={addUser}
      >
        Submit
      </button>
    </form>
  </main>
)
}

export default Signup;
