import React from 'react';
import '../styles/Navbar.css'; // Import CSS file
function Navbar() {
return (
<nav className="navbar">
<div className="navbar-logo">Linked.in
    <img src='link.png' className='link'/>
<ul className="navbar-menu">
<li><a href="#" className="navbar-link">Home</a></li>
<li><a href="#" className="navbar-link">About</a></li>
<li><a href="#" className="navbar-link">Services</a></li>
<li><a href="#" className="navbar-link">Contact</a></li>
</ul>
</div>
</nav>
);
}
export default Navbar;