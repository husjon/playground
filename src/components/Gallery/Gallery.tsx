import { ReactNode, useEffect, useState } from "react";
import "./Gallery.scss";

export default function GalleryPage() {
  return (
    <>
      <Gallery>
        <div>This is content 1</div>
        <div>This is content 2</div>
        <div>This is content 3</div>
        <img src="https://picsum.photos/200/300" alt="" />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
        excepturi tenetur qui modi aperiam aliquid officia, recusandae numquam.
        Corporis corrupti iusto ab dolores sint porro nobis consectetur ex! Id,
        consequuntur?
      </Gallery>
    </>
  );
}

interface GalleryProps {
  children: ReactNode[];
}
function Gallery({ children }: GalleryProps) {
  const [current, setCurrent] = useState(0);

  function handlePrevious() {
    if (current <= 0) setCurrent(children.length - 1);
    else setCurrent(current - 1);
  }
  function handleNext() {
    if (current >= children.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  }

  useEffect(() => {
    // TODO: Didn't get useRef to work, this is a fine workaround for now
    document.querySelector(`#gallery-item-${current}`)?.scrollIntoView({
      behavior: "smooth",
    });
  }, [current]);

  return (
    <div className="Gallery">
      <DirectionButton direction="left" onClick={handlePrevious}>
        &lt;
      </DirectionButton>
      <DirectionButton direction="right" onClick={handleNext}>
        &gt;
      </DirectionButton>

      <ul className="content">
        {children.map((child, i) => (
          <li key={i} id={`gallery-item-${i}`}>
            {child}
          </li>
        ))}
      </ul>
    </div>
  );
}

interface DirectionButtonProps {
  direction: string;
  children: ReactNode;
  onClick: () => void;
}
function DirectionButton({
  direction,
  children,
  onClick,
}: DirectionButtonProps) {
  return (
    <div className={`directions ${direction}`} onClick={onClick}>
      <div>{children}</div>
    </div>
  );
}
