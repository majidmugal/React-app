// import React, { useState } from "react";

// const Form2 = () => {
//   const [formData, setformData] = useState({
//     name: "",
//     email: "",
//     mobile: "",
//     password: "",
//     cpassword: "",
//   });
//   const [isShow, setIsShow] = useState(false);
//   const [alldata, setalldata] = useState([]);

//   const changeHandle = (e) => {
//     setformData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const submitHandle = (e) => {
//     e.preventDefault();
//     setalldata([...alldata, formData]);
//     setIsShow(true);
//     setformData({
//       name: "",
//       email: "",
//       mobile: "",
//       password: "",
//       cpassword: "",
//     });
//   };

//   return (
//     <div>
//       <div className="mainForm">
//         <div className="form-box">
//           <h2>Register Form</h2>

//           <form>
//             <div className="input-box">
//               <label>Name</label>
//               <input
//                 value={formData.name}
//                 type="text"
//                 name="name"
//                 placeholder="Enter your name"
//                 onChange={(e) => changeHandle(e)}
//               />
//             </div>

//             <div className="input-box">
//               <label>Email</label>
//               <input
//                 value={formData.email}
//                 type="email"
//                 name="email"
//                 placeholder="Enter your email"
//                 onChange={(e) => changeHandle(e)}
//               />
//             </div>

//             <div className="input-box">
//               <label>Mobile</label>
//               <input
//                 value={formData.mobile}
//                 type="tel"
//                 name="mobile"
//                 placeholder="Enter mobile number"
//                 onChange={(e) => changeHandle(e)}
//               />
//             </div>

//             <div className="input-box">
//               <label>Password</label>
//               <input
//                 value={formData.password}
//                 type="password"
//                 name="password"
//                 placeholder="Enter password"
//                 onChange={(e) => changeHandle(e)}
//               />
//             </div>

//             <div className="input-box">
//               <label>Confirm Password</label>
//               <input
//                 value={formData.cpassword}
//                 type="password"
//                 name="cpassword"
//                 placeholder="Confirm password"
//                 onChange={(e) => changeHandle(e)}
//               />
//             </div>

//             <button type="submit" className="btn" onClick={submitHandle}>
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>

//       {isShow && (
//         <div className="table-container">
//           <table>
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Mobile</th>
//                 <th>password</th>
//                 <th>cpassword</th>
//               </tr>
//             </thead>

//             <tbody>
//               {alldata.map((ele, ind) => {
//                 return (
//                   <tr key={ind}>
//                     <td>{ind + 1}</td>
//                     <td>{ele.name}</td>
//                     <td>{ele.email}</td>
//                     <td>{ele.mobile}</td>
//                     <td>{ele.password}</td>
//                     <td>
//                       <span className="status active">{ele.cpassword}</span>
//                     </td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Form2;
