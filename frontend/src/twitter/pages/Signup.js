import React, { useState } from "react";
import signUpApi from "../../api/accountsApi";

function signup() {
  const [users, setUsers] = useState({
    username: "",
    email: "",
    password: "",
    repassword: "",
  });
  const [newUser, setNewUser] = useState(""); // 初期値として空文字を入れる

  const addUser = async () => {
    try {
      const user = await signUpApi.createUser(newUser);
      setUsers([...users, user]); // スプレッド演算子
      setNewUser("");
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  return (
    <main className="form-signup">
      <form>
        <h1 className="h3 mb-3 fw-normal">Sign Up</h1>

        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            value={users}
            key="username"
            onChange={(e) => setUsers(e.target.value)}
            placeholder="ユーザー名"
          />
          {/* <label>First Name</label> */}
        </div>

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            value={users}
            key="email"
            onChange={(e) => setUsers(e.target.value)}
            placeholder="email"
          />
          {/* <label>Email address</label> */}
        </div>

        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            value={users}
            key="password"
            onChange={(e) => setUsers(e.target.value)}
            placeholder="password"
          />
          {/* <label>Password</label> */}
        </div>

        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            value={users}
            key="repassword"
            onChange={(e) => setUsers(e.target.value)}
            placeholder="Re password"
          />
          {/* <label>Password Confirm</label> */}
        </div>

        <button
          className="w-100 btn btn-lg btn-primary"
          type="submit"
          onClick={addUser}
        >
          Submit
        </button>
      </form>
    </main>
  );
}

export default signup;
