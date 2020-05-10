import React from "react";

// const MemberCard = (props) => {
//   console.log("member props", props.teams);
//   console.log("member new props", props.teams.newMember);
//   return (
//     <div className="member-list">
//       {props.teams.newMember
//         ? props.teams.newMember.map((member) => {
//             return <h1>{member.name}</h1>;
//           })
//         : null}
//     </div>
//   );
// };

const MemberCard = (props) => {
  return (
    <div>
      {props.member.map((member) => (
        <div key={member.id}>
          <h2>{member.name}</h2>
          <p>{member.email}</p>
          <p>{member.role}</p>
        </div>
      ))}
    </div>
  );
};
export default MemberCard;
