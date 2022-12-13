import { useEffect, useState } from 'react';

export const useScreenSize = () => {
  const [currentWidth, setCurrentWidth] = useState(window.screen.width)

  const handleChangeSize = () => {
    const width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth

    setCurrentWidth(width)
  };

  useEffect(() => {
    handleChangeSize()

    window.addEventListener('resize', handleChangeSize);
    return () => window.removeEventListener('resize', handleChangeSize);
  }, [])

  return { currentWidth }
};
