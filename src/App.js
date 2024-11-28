import React from 'react';
import './App.css'; // Import global styles
import Navbar from './Components/Navbar';
import LandingPage from './Components/LandingPage';
import Footer from './Components/footer';
import Form from './Components/form';
function App() {
return (
<div>
<Navbar />
<LandingPage />

<Form/>
<Footer/>
</div>
);
}
export default App;