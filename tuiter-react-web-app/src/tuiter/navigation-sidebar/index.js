import React from "react";
import { Link, useLocation } from "react-router-dom";

<head>
 <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.min.js"></script> 
    <script src="https://kit.fontawesome.com/d1249e2875.js" crossorigin="anonymous"></script>
    <script type="text/JavaScript"></script>
</head>

const NavigationSidebar = () => {
 const { pathname } = useLocation();
 const [ignore, tuiter, active] = pathname.split("/");
 const links = ["home","explore",  "notifications", "messages", "bookmarks", "lists", "profile",  "more"];
 return (
  <div className="col">
      <div className="list-group">
        <th>
        <Link to={"/tuiter/home "} className={`list-group-item
        ${active === "home" ? "active" : ""}`}>Home</Link>
        </th>
        <th className="list-group">
          <Link to={"/tuiter/explore "} className={`list-group-item
          ${active === "explore" ? "active" : ""}`}>Explore</Link>
          </th>
          <div>
          <Link to={"/tuiter/notifications "} className={`list-group-item
             ${active === "notifications" ? "active" : ""}`}>Notifications</Link>
          </div>
          <div>
          <Link to={"/tuiter/messages "} className={`list-group-item
             ${active === "messages" ? "active" : ""}`}>Messages</Link>
          </div>
          <div>
          <Link to={"/tuiter/bookmarks "} className={`list-group-item
             ${active === "bookmarks" ? "active" : ""}`}>Bookmarks</Link>
          </div>
          <div>
          <Link to={"/tuiter/lists "} className={`list-group-item
             ${active === "lists" ? "active" : ""}`}>Lists</Link>
          </div>
          <div>
          <Link to={"/tuiter/profile "} className={`list-group-item
             ${active === "profile" ? "active" : ""}`}>Profile</Link>
          </div>
          <div>
          <Link to={"/tuiter/more "} className={`list-group-item
             ${active === "more" ? "active" : ""}`}>More</Link>
          </div>
</div>
</div>
);
};
export default NavigationSidebar;
