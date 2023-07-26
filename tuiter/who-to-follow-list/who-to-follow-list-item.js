import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

<head>
 <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.min.js"></script> 
    <script src="https://kit.fontawesome.com/d1249e2875.js" crossorigin="anonymous"></script>
    <script type="text/JavaScript"></script>
</head>
const WhoToFollowListItem = (
 {
   who = { userName: 'C#', handle: 'csharp', avatarIcon: 'python.png' }
 }
) => {
 return(
  <li className="list-group-item">
   <div className="row">
     <div className="col-2">
       <img className="rounded-circle" height={48} src={`/images/${who.avatarIcon}`}/>
     </div>
     <div className="col-8">
       <div className="fw-bold">{who.userName}</div>
       <div>@{who.handle}</div>
     </div>
     <div className="col-2">
       <button className="btn btn-primary rounded-pill float-end">Follow</button>
     </div>
   </div>
  </li>
 );
};
export default WhoToFollowListItem;