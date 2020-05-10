import React, { useState } from "react";
import "./App.css";
import Form from "./Form";
import MemberCard from "./MemberCard";

function App() {
  //   const [teams, setTeams] = useState([
  //     {

  //       name: "",
  //       email: "",
  //     },
  //   ]);

  //   const addMember = (newMember) => {
  //     setTeams({ ...teams, newMember });
  //   };
  //   console.log("teams", teams);
  //   return (
  //     <div className="App">
  //       <h1>Build Your Team!</h1>
  //       <Form addMember={addMember} teams={teams} setTeams={setTeams} />
  //       <MemberCard teams={teams} />
  //     </div>
  //   );
  // }

  const [member, setMember] = useState([]);

  const addNewMember = (mem) => {
    const newMember = {
      id: Date.now(),
      name: mem.name,
      email: mem.email,
      role: mem.role,
    };
    setMember([...member, newMember]);
  };

  return (
    <div className="container">
      <h1 className="header">Build Your Team</h1>
      <Form addNewMember={addNewMember} />
      <MemberCard member={member} />
    </div>
  );
}

export default App;
