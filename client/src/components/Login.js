// import "./Login.css";

// function Login() {

//     handleSubmit() {
//         console.log("Submit the form in login");
//         fetch("/login", {
//             method: "POST",
//             body: JSON.stringify(this.state),
//             headers: { "Content-Type": "application/json" },
//         })
//             .then((result) => result.json())
//             .then((userData) => {
//                 console.log("USER DATA HANDLE SUBMIT: ", userData);
//                 if (userData.success !== true) {
//                     this.setState({
//                         error: "Invalid input!",
//                     });
//                 } else {
//                     location.replace("/");
//                 }
//             })
//             .catch(() => {
//                 this.setState({
//                     error: "Invalid input!!",
//                 });
//             });
//     }

//     return (
//         <div className="login-cmp">
//             <h3>Please login below</h3>
//             <div className="error">{this.state.error}</div>
//             <div>
//                 <input
//                     type="email"
//                     name="email"
//                     onChange={this.handleInputChange}
//                     placeholder="Email"
//                 />
//             </div>
//             <div>
//                 <input
//                     type="password"
//                     name="password"
//                     onChange={this.handleInputChange}
//                     placeholder="Password"
//                 />
//             </div>

//             <button className="reglogbtn" onClick={this.handleSubmit}>
//                 Login now
//             </button>
//         </div>
//     );
// }

// export default Login;
