import Img from '../Layout/Image'
import CountUp from 'react-countup'

import React, { useState, useEffect } from 'react';

function Counter({ src, alt = '', limit, children, suffix }) {

  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    
    setAnimationStarted(true);
  }, []);

  return (
    <div className="counter text-center">
      <Img imgClassName="inline-block" src={src} alt={alt} />
      <CountUp
        className=" mt-[20px] text-[39px] font-extrabold text-[#F95C19]"
        end={limit}
        duration={4}
        suffix={suffix}
        // start={animationStarted ? null : 0}
        // onStart={handleAnimationStart}
        start={animationStarted ? null : 0}
      />
      <h5 className="font-raleway text-[20px] font-bold text-[#464558]">
        {children}
      </h5>
    </div>
  )
}

export default Counter
