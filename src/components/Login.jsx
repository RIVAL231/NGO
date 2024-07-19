import React from 'react';


export function Login() {
  return (
    <div className="card">
        <h2 >Login</h2>
      <form className="form">
        <div className="form-group">
          <div className="label-container">
            <label htmlFor="email1">Your email</label>
          </div>
          <input id="email1" type="email" placeholder="name@gmail.com" required />
        </div>
        <div className="form-group">
          <div className="label-container">
            <label htmlFor="password1">Your password</label>
          </div>
          <input id="password1" type="password" required />
        </div>
        <div className="form-group flex-row">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember me</label>
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}
