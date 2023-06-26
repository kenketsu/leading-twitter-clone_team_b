import React, { useState } from "react";
import signUpApi from "../../api/accountsApi";

function signup() {
  const [users, setUsers] = useState([]);
  const [newUsername, setNewUsername] = useState(""); // 初期値として空文字を入れる
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newRepassword, setNewRepassword] = useState("");
  // const [newUser, setNewUser] = useState("");

  const addUser = async () => {
    try {
      // eslint-disable-next-line no-alert
      window.alert("ok");
      const user = await signUpApi.createUser(
        newUsername,
        newEmail,
        newPassword,
        newRepassword
      );
      window.alert("sucsess");
      setUsers([...users, user]); // スプレッド演算子
      setNewUsername("");
      setNewEmail("");
      setNewPassword("");
      setNewRepassword("");
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
            value={newUsername}
            key="username"
            onChange={(e) => setNewUsername(e.target.value)}
            placeholder="ユーザー名"
          />
          {/* <label>First Name</label> */}
        </div>

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            value={newEmail}
            key="email"
            onChange={(e) => setNewEmail(e.target.value)}
            placeholder="email"
          />
          {/* <label>Email address</label> */}
        </div>

        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            value={newPassword}
            key="password"
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="password"
          />
          {/* <label>Password</label> */}
        </div>

        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            value={newRepassword}
            key="repassword"
            onChange={(e) => setNewRepassword(e.target.value)}
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
