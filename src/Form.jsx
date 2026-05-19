import React, { useState } from "react";
import { useFormStatus } from "react-dom";

const Form = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [number, setnumber] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  const [isShow, setisShow] = useState(false);

  const submithandle = (e) => {
    e.preventDefault();
    setisShow(true);
  };

  return (
    <div>
      <div className="mainForm">
        <div class="form-container">
          <h2>Register Form</h2>

          <form>
            <div className="input-box">
              <input
                type="text"
                placeholder="Name"
                onChange={(e) => {
                  setname(e.target.value);
                }}
              />
            </div>

            <div className="input-box">
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
            </div>

            <div className="input-box">
              <input
                type="number"
                placeholder="Number"
                onChange={(e) => {
                  setnumber(e.target.value);
                }}
              />
            </div>

            <div className="input-box">
              <input
                type="password"
                placeholder="Enter Password"
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
            </div>

            <div className="input-box">
              <input
                type="password"
                placeholder="Confirm Password"
                onChange={(e) => {
                  setcpassword(e.target.value);
                }}
              />
            </div>

            <button className="btn" onClick={submithandle}>
              Submit
            </button>
          </form>
        </div>
      </div>

      {isShow && (
        <table className="table-container container-fluid">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Number</th>
            <th>Password</th>
            <th>Confirm Password</th>
          </tr>

          <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{number}</td>
            <td>{password}</td>
            <td>{cpassword}</td>
          </tr>
        </table>
      )}
    </div>
  );
};

export default Form;
