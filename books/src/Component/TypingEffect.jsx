import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TypingEffect = () => {
  const [text, setText] = useState('');
  const message = "Weelcome to Kalvium Books, where stories come to life and imagination knows no bounds. Dive into a literary universe where every page is a new adventure waiting to unfold. Explore captivating tales, enrich your mind, and embark on a journey through the enchanting world of words. Happy reading at Kalvium Books!";
  const speed = 50; // typing speed 
  useEffect(() => {
    let index = 0;

    const typingInterval = setInterval(() => {
      setText((prevText) => prevText + message.charAt(index));
      index++;

      if (index == message.length) {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <>
      <div>
        <div className="shadow-xl mix-blend-screen shadow-yellow-500 text-white w-1/2 mx-24 sm:mx-80">
          {text}
        </div>
        <Link to="/Books"><button className='bg-white w-1/2 mt-9 text-yellow-500 mx-24 sm:mx-80'>Enter</button></Link>
      </div>
    </>
  );
};

export default TypingEffect;
