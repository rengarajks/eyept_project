import React, { useEffect } from 'react'
import '../pages/app.css'
import '../global.css'

function Onlinetest() {


  useEffect(()=>{

    const cursor = document.getElementById('cursor');

  // Function to move the cursor to the specified coordinates
  function moveCursor(x, y) {
    cursor.style.transform = `translate(${x}px, ${y}px)`;
  }

  // Function to continuously update the cursor position
  function animateCursor() {
    // Example: Move cursor in a circle
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const radius = 100;
    const angle = Date.now() / 1000; // Adjust speed of movement

    const x = centerX + Math.cos(angle) * radius;
    const y = centerY + Math.sin(angle) * radius;

    moveCursor(x, y);

    // Request next frame
    requestAnimationFrame(animateCursor);
  }

  // Start the animation loop
  animateCursor();

  },[])

  

  return (
    <div>

<div id="cursor"></div>
    </div>
  )
}

export default Onlinetest