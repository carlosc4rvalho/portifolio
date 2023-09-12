import React, { useState, useEffect } from 'react';
import './cursorball.css';

const CursorBall: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', onMouseMove);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return <div className="cursor" style={{ left: position.x, top: position.y }}></div>;
};

export default CursorBall;
