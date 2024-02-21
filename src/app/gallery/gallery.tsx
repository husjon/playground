"use client";
import { useState } from "react";
import { FaArrowLeft, FaCaretLeft, FaCaretRight } from "react-icons/fa";

import "./gallery.scss";

function Gallery({
  children,
  frameInterval = 0,
}: {
  children: JSX.Element | JSX.Element[];
  frameInterval?: number;
}) {
  const [currentImage, setCurrentImage] = useState(0);

  if (!Array.isArray(children)) children = [children];
  const imageCount = children.length;

  function handleNavigation(direction: number) {
    if (currentImage >= imageCount - 1) setCurrentImage((current) => 0);
    else if (currentImage <= 0) setCurrentImage((current) => imageCount - 1);
    else setCurrentImage((current) => current + direction);
  }

  if (frameInterval > 0)
    setTimeout(() => {
      handleNavigation(1);
    }, frameInterval * 1000);

  return (
    <div className="Gallery">
      <div className="navigation-buttons">
        <div className="left" onClick={() => handleNavigation(-1)}>
          <FaCaretLeft className="m-auto h-48" />
        </div>
        <span />
        <div className="right" onClick={() => handleNavigation(1)}>
          <FaCaretRight className="m-auto h-48" />
        </div>
      </div>
      <div style={{ maxHeight: "100%", overflow: "hidden" }}>
        {children[currentImage]}
      </div>
    </div>
  );
}

export default Gallery;
