import React, { useEffect, useState } from 'react'

function Customcursor() {

    const [position, setPosition] = useState({x: 0, y: 0});

    useEffect(()=> {
        const handleMouseMove = (event) => {
            setPosition({x: event.clientX, y: event.clientY});
        }
        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        }
    }, []);

  return (
    <div style={{
        left: `${position.x}px`,
        top: ` ${position.y}px`,
        transition: 'transform 0.1s ease-out'
    }} className='fixed z-50 w-6 h-6 bg-slate-200 opacity-75 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2'/>
  )
}

export default Customcursor