// //login component for users already signed up
// import { Component } from "react";

// export default class Login extends Component {
//     //email should find users data
//     constructor(props) {
//         super(props);
//         this.state = {};
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleInputChange = this.handleInputChange.bind(this);

//         // console.log("props: ", this.props.myData[0]);
//     }

//     handleInputChange(e) {
//         const text = e.currentTarget.value;
//         this.setState({
//             //this will get the current target's name and set the text
//             [e.currentTarget.name]: text,
//         });
//     }

//     //compare db email with input email
//     handleSubmit() {
//         console.log("Submit the form in login");
//         fetch("/login", {
//             method: "POST",
//             body: JSON.stringify(this.state),
//             headers: { "Content-Type": "application/json" },
//         })
//             .then((result) => result.json())
//             .then((userData) => {
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

//     render() {
//         return (
//             <div className="center-section">
//                 <h3>Please login below</h3>
//                 <div className="error">{this.state.error}</div>
//                 <div>
//                     <input
//                         type="email"
//                         name="email"
//                         onChange={this.handleInputChange}
//                         placeholder="Email"
//                     />
//                 </div>
//                 <div>
//                     <input
//                         type="password"
//                         name="password"
//                         onChange={this.handleInputChange}
//                         placeholder="Password"
//                     />
//                 </div>

//                 <button className="reglogbtn" onClick={this.handleSubmit}>
//                     Login now
//                 </button>
//             </div>
//         );
//     }
// }
