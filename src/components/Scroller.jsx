import { useState, useEffect } from "react";

const Scroller = ({ texts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);

    return () => clearTimeout(timer); // Cleanup the timer when the component unmounts or before setting a new timer
  }, [currentIndex, texts.length]); // Dependencies array, effect runs when these values change

  return <div className="scroller-text font-bebas text-white text-4xl text-center">{texts[currentIndex]}</div>;
};

export default Scroller;
