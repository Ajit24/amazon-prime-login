// import axios from "axios";
// import { useState } from "react";

// export function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   function handleLoginSubmit(email, password) {
//     let user = {
//       email,
//       password,
//     };
    
//      axios.post('http://localhost:8000/login', user).then((res) => {
    
//         console.log(res.data);
//       })
//       .catch((error) => {
//         if (error.response) {
//           console.log(error.response.status);
//           console.log(error.response.data);
//         }
//       });
//   }

//   return (
//     <div>
//       <h1>Login here</h1>
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           handleLoginSubmit(email, password);
//         }}
//       >
//         <input
//           type="email"
//           placeholder="email here"
//           onChange={(e) => {
//             setEmail(e.target.value);
//           }}
//         />
//         <input
//           type="password"
//           placeholder="password here"
//           onChange={(e) => {
//             setPassword(e.target.value);
//           }}
//         />
//         <input type="submit" />
//       </form>
//     </div>
//   );
// }


// use in navbar -------------- 