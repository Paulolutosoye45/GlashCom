import { useState, useEffect } from 'react';
import SignUP from '../../../Pages/sign-up';
import MobileSignUp from '../../../mobile/MobileSignUp';

const MediaPages = () => {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  const updateMedia = () => {
    setIsDesktop(window.innerWidth > 768);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  });
  return (
    <div>{isDesktop ? <SignUP /> : <MobileSignUp />}</div>
  )
}

export default MediaPages


// import React, { useState, useEffect } from 'react';
// import SmallScreenComponent from './SmallScreenComponent';
// import DesktopComponent from './DesktopComponent';
// import './App.css';

// const App = () => {
//   const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

//   const updateMedia = () => {
//     setIsDesktop(window.innerWidth > 768);
//   };

//   useEffect(() => {
//     window.addEventListener('resize', updateMedia);
//     return () => window.removeEventListener('resize', updateMedia);
//   });

//   return (
//     <div className="App">
//       {isDesktop ? <DesktopComponent /> : <SmallScreenComponent />}
//     </div>
//   );
// };

// export default App;
