// import React from 'react'
// import { NavLink } from 'react-router-dom'
// import './Head.css'

// const Head = () => {
//   return (
//     <header>
//         <a href="#"></a>
//         <nav>
//             <ul className="horizontal-nav">
//                 <li> <NavLink to="/">Home</NavLink> </li>
//                 <li><NavLink to={"/about"}>About</NavLink></li>
//                 <li><NavLink to={"/contact"}>Contact</NavLink></li>
//             </ul>
//         </nav>
//     </header>
//   )
// }

// export default Head


// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import './Head.css';

// const Head = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <header>
//       <nav>
//         <div className="menu-icon" onClick={toggleMenu}>
//           &#9776;
//         </div>
//         <ul className={`horizontal-nav ${isOpen ? 'open' : ''}`}>
//           <li> <NavLink to="/">Home</NavLink> </li>
//           <li><NavLink to="/about">About</NavLink></li>
//           <li><NavLink to="/contact">Contact</NavLink></li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default Head;


import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Head.css';

const Head = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav>

        <div className="menu-icon" onClick={toggleMenu}>
          &#9776;
        </div>
         
        <ul className={`horizontal-nav ${isOpen ? 'open' : ''}`}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCTdsouk0_OjQhAvXMY934Pl8EbL3SqcOQIRsyDWdIdw&s" alt="ICrave Logo" className="logo" />
          <li> <NavLink to="/">Home</NavLink> </li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to='/login'>Login</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Head;
