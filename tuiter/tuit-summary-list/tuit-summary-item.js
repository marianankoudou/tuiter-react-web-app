import React from "react";

const TuitSummaryItem = (
 {
   tuit = {
     "topic": "Space",
     "userName": "SpaceX",
     "time": "2h",
     "title": `Tesla CyberTruck lands on Mars and
               picks up the Curiosity rover on its 6' bed`,
     "image": "tesla.png"
   }
 }
) => {
 return(
  <ul class="list-group">
   <li class="list-group-item disabled" aria-disabled="true">
   <div className="row">
     <div className="col">
       <div>{tuit.userName} . {tuit.time}</div>
       <div className="fw-bolder">{tuit.topic}</div>
       <div class="col-6">
       <div>{tuit.title}</div>
     </div>
     <div className="col-6">
       <img width={70} className="float-end rounded-3" src={`/images/${tuit.image}`}/>
     </div>
   </div>
   </div>
  </li>
  </ul>
 );
};
export default TuitSummaryItem;
