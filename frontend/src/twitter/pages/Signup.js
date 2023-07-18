import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import signUpApi from "../../api/accountsApi";

function signup() {
  const [users, setUsers] = useState([]);
  const [newUsername, setNewUsername] = useState(""); // 初期値として空�?字を入れる
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newRepassword, setNewRepassword] = useState("");
  const navigate = useNavigate();
  // const [newError, setNewError] = useState([]); // error

  const addUser = async (e) => {
    e.preventDefault();
    try {
      const user = await signUpApi.createUser(
        newUsername,
        newEmail,
        newPassword,
        newRepassword
      );
      navigate("/home");
      setUsers([...users, user]); // スプレ�?ド演算�?
      setNewUsername("");
      setNewEmail("");
      setNewPassword("");
      setNewRepassword("");
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      // window.alert(error.response.data.email);
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
            // eslint-disable-next-line react/no-unknown-property
            autoComplete="username"
            value={newUsername}
            key="username"
            onChange={(e) => setNewUsername(e.target.value)}
            placeholder="ユーザー�?"
          />
        </div>

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            // eslint-disable-next-line react/no-unknown-property
            autoComplete="email"
            value={newEmail}
            key="email"
            onChange={(e) => setNewEmail(e.target.value)}
            placeholder="email"
          />
        </div>

        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            // eslint-disable-next-line react/no-unknown-property
            autoComplete="new-password"
            value={newPassword}
            key="password"
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="password"
          />
        </div>

        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            // eslint-disable-next-line react/no-unknown-property
            autoComplete="new-password"
            value={newRepassword}
            key="repassword"
            onChange={(e) => setNewRepassword(e.target.value)}
            placeholder="Re password"
          />
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