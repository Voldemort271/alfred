"use client";

import React, { useEffect, useState } from "react";
import styles from "./promotions.module.scss";

const promotions_data = [
  {
    text: "Alfred has been steadily rising among the ranks of quality denim producers for over a decade",
    author: "me",
  },
  {
    text: "We requested for a test pair of denim jeans from Alfred once, and my wife still wears it",
    author: "you",
  },
  {
    text: "A jacket from Alfred and a white tee inside, is the new trend in fashion; and for good reason",
    author: "them",
  },
];

const Promotions = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => (index + 1) % promotions_data.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-12 bg-neutral-950 p-24 text-zinc-100 md:pr-40">
      <div className="text-4xl font-semibold leading-normal md:text-6xl md:leading-normal">{`${promotions_data[index]?.text}`}</div>
      <div className="text-xl font-medium">{`- ${promotions_data[index]?.author}`}</div>
      <div className="h-px w-full bg-zinc-600">
        <div
          className={styles.carouselIndicator}
          key={promotions_data[index]?.author}
        ></div>
      </div>
    </div>
  );
};

export default Promotions;
