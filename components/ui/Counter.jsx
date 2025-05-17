"use client";

import { useEffect, useState } from "react";

const Counter = ({ end = 0, duration = 2000, label, icon }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const stepTime = Math.max(Math.floor(duration / end), 20);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <div className="text-center space-y-1">
      <div className="text-4xl font-bold text-[#00378b] flex items-center justify-center gap-2">
        {icon}
        {count}+
      </div>
      <div className="text-gray-700 font-medium">{label}</div>
    </div>
  );
};

export default Counter;
