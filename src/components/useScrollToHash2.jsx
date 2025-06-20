// useScrollToHash.js
import { useEffect } from 'react';

function useScrollToHash2() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace('help/#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);
}

export default useScrollToHash2;
