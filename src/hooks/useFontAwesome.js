import { useEffect } from 'react';
import { loadCSS } from 'fg-loadcss';

export default useFontAwesome = () => {
  useEffect(() => {
    const node = loadCSS(
      'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );
      
    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);
}