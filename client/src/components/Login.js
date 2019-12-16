import React from "react";
import axios from 'axios';

const Login = ({history}) => {
  const [credentials, setCredentials] = React.useState({
    username: "",
    password: ""
  });

  const handleChanges = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  // make a post request to retrieve a token from the api
const login = e => {
  e.preventDefault();
  axios
    .post("http://localhost:5000/api/login", credentials)
    .then(res => {
      console.log ("From the login post res: ", res);
      localStorage.setItem("token", res.data.payload);
      history.push('/bubble-page');
    })
    .catch(err => console.log("Login post error: ", err.response));
}

  // when you have handled the token, navigate to the BubblePage route

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Please Login</p>

      <form onSubmit={login}>
        <input 
          placeholder="Username"
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChanges}
        />
        <input
          placeholder="Password"
          type="text"
          name="password"
          value={credentials.username}
          onChange={handleChanges}
        />
        <button>Log In</button>
      </form>
    </>
  );
};

export default Login;
