"use client";
import { useState } from "react";
import "./knucklebones.scss";
import { rollDice } from "./actions";

export default function Page() {
  return (
    <div>
      <Knucklebones />
    </div>
  );
}

function Knucklebones() {
  return (
    <>
      <Dice />
    </>
  );
}

function Dice() {
  const [value, setValue] = useState(1);
  let canRoll = true;

  function roll() {
    if (!canRoll) return;

    canRoll = false;

    const animation = setInterval(() => {
      setValue(Math.floor(Math.random() * 6 + 1));
    }, 50);
    setTimeout(async () => {
      clearInterval(animation);
      setValue(await rollDice());
      canRoll = true;
    }, 1000);
  }

  return (
    <div onClick={roll}>
      <button className="dice">
        {[2, 3, 4, 5, 6].includes(value) && (
          <div className="dots dots-tl"></div>
        )}
        {[4, 5, 6].includes(value) && <div className="dots dots-tr"></div>}

        {[6].includes(value) && <div className="dots dots-ml"></div>}
        {[1, 3, 5].includes(value) && <div className="dots dots-mid"></div>}
        {[6].includes(value) && <div className="dots dots-mr"></div>}

        {[4, 5, 6].includes(value) && <div className="dots dots-bl"></div>}
        {[2, 3, 4, 5, 6].includes(value) && (
          <div className="dots dots-br"></div>
        )}
      </button>
    </div>
  );
}
