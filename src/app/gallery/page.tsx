import Image from "next/image";
import Gallery from "./gallery";

export default function page() {
  return (
    <div className="mx-auto my-auto h-[24rem] w-[42.66rem]">
      <Gallery>
        <img
          src={"/gallery-images/free-photo-of-lake-entrance-beach.jpeg"}
          alt=""
        />

        <div>World</div>
      </Gallery>
    </div>
  );
}
// https://www.pexels.com/photo/women-in-the-village-grow-rice-together-for-the-family-20187061/
// https://www.pexels.com/photo/lake-entrance-beach-20200109/
