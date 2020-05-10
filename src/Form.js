import React, { useState } from "react";

// const Form = (props) => {
//   const [member, setMember] = useState([
//     {
//       name: "",
//       email: "",
//     },
//   ]);

//   const changeHandler = (event) => {
//     console.log(event.target.value);
//     setMember({
//       ...member,
//       [event.target.name]: event.target.value,
//     });
//   };

//   return (
//     <form
//       onSubmit={(event) => {
//         event.preventDefault();
//         props.addMember(member);
//         setMember({ name: "", email: "" });
//         console.log(member);
//       }}
//     >
//       <label htmlFor="name">Name:</label>
//       <input
//         id="name"
//         type="text"
//         name="name"
//         placeholder="First and Last Name"
//         value={member.name || ""}
//         onChange={changeHandler}
//       />
//       <div>
//         <br />
//         <label htmlFor="name">Email:</label>
//         <input
//           id="email"
//           type="text"
//           name="email"
//           placeholder="Enter Email Here"
//           value={member.email || ""}
//           onChange={changeHandler}
//         />
//       </div>
//       <br />
//       <div>
//         {/* <label htmlFor="role">Role:</label>
//         <select
//           id="role"
//           name="role"
//           placeholder="Choose a Role"
//           value={member.role || ""}
//           onChange={changeHandler}
//         >
//           <option value="Front End">Front End Developer</option>
//           <option value="Back End">Backend Developer</option>
//           <option value="Full Stack">Full Stack Developer</option>
//     </select> */}
//       </div>
//       <br />
//       <div>
//         <label htmlFor="Submit" />
//         <button type="submit" id="submit">
//           Submit
//         </button>
//       </div>
//     </form>
//   );
// };

const Form = (props) => {
  const [member, setMember] = useState({
    id: Date.now(),
    name: "",
    email: "",
    role: "",
  });

  const handleChanges = (event) => {
    setMember({
      ...member,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addNewMember(member);
    setMember({ name: "", email: "", role: "" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Members' Name</label>
        <br />
        <input
          type="text"
          id="name"
          placeholder="First and Last Name"
          name="name"
          value={member.name}
          onChange={handleChanges}
          required
        />
        <br />
        <label htmlFor="email">Members' Email</label>
        <br />
        <input
          type="email"
          id="email"
          placeholder="Email Address"
          name="email"
          value={member.email}
          onChange={handleChanges}
          required
        />
        <br />
        <label htmlFor="role">Members' Role</label>
        <br />
        <select
          name="role"
          id="role"
          value={member.role}
          onChange={handleChanges}
        >
          <option value="BackenD">Backend Engineer</option>
          <option value="Frontend">Frontend Engineer</option>
          <option value="UX">UX Designer</option>
          <option value="Fullstack">Full Stack Engineer</option>
        </select>
        <br />
        <button type="submit" id="addMember">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
