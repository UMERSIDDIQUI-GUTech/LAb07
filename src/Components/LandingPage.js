/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import '../styles/LandingPage.css'; // Import CSS file
function LandingPage() {
return (
<div className="landing-container">
<h1 className="landing-title">Welcome to Linked.in</h1>
<p className="landing-subtitle">
Manage your professional identity. Build and engage with your professional network. Access knowledge, insights and opportunities.
</p>
<button className="landing-button">
Learn More
</button>
<div className='pic'>
   <img className='picture' src='link.png'></img>
</div>
</div>
);
}
export default LandingPage;