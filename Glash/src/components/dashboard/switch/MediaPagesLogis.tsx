import{ useState, useEffect } from 'react';
import Login from '../../../Pages/sign-in';
import MobileLogin from '../../../mobile/MobileLogin';

const MediaPagesLogin = () => {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  const updateMedia = () => {
    setIsDesktop(window.innerWidth > 768);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  });
  return (
    <div>{isDesktop ? <Login /> : <MobileLogin />}</div>
  )
}

export default MediaPagesLogin