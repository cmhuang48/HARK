import React from "react";
import { Link } from "react-router-dom";
// import { connect } from "react-redux";
//import { logout } from "../server/store";

const Header = () => (
  <div className="header">
    <Link to="/">
      <img className="headerLogo" src="/../images/logo.jpeg" alt="logo" />
    </Link>
  </div>
);

export default Header;

// WHEN SETTING UP LOG-IN
// const Header = ({ handleClick, isLoggedIn }) => (
//   <div>
//     <nav>
//       {isLoggedIn ? (
//         <div>
//           {/* The navbar will show these links after you log in */}
//           <Link to="/">Dashboard</Link>
//           <a href="#" onClick={handleClick}>
//             Logout
//           </a>
//           <Link to="/">
//             <img src="" width="80" height="50" />
//           </Link>
//         </div>
//       ) : (
//         <div className="navbar">
//           {/* The navbar will show these links before you log in */}
//           {/* <Link to="/login">Login</Link> */}
//           <Link to="/">HARK!</Link>
//         </div>
//       )}
//     </nav>
//   </div>
// );

// CONTAINER
// const mapState = (state) => {
//   return {
//     isLoggedIn: !!state.auth.id
//   };
// };

// const mapDispatch = (dispatch) => {
//   return {
//     handleClick() {
//       dispatch(logout());
//     }
//   };
// };

//export default connect(mapState, mapDispatch)(Header);
