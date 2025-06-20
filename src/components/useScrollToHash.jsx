// useScrollToHash.js
import { useEffect } from 'react';

function useScrollToHash() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);
}

export default useScrollToHash;
