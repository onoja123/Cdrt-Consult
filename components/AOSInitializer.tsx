'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AOSInitializer: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 200,
      easing: 'ease-in-out',
      delay: 100,
    });
  }, []);

  return null;
};

export default AOSInitializer;
