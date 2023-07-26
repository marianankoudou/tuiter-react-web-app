import React from "react";
import whoArray from './who.json';
import WhoToFollowListItem from "./who-to-follow-list-item";
import 'bootstrap/dist/css/bootstrap.min.css';

const WhoToFollowList = () => {
 return(
  <table className="table table-striped">
   <div className="list-group">
     <li className="list-group-item">
       <h3>Who to follow</h3>
     </li>
     {
       whoArray.map(who =>
         <WhoToFollowListItem
           key={who._id}
           who={who}/>
       )
     }
   </div>
   </table>
 );
};
export default WhoToFollowList;