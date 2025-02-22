import Image from "next/image";

export default function BlogCardPage({ searchParams }) {
    const { title, img,name } = searchParams;
    const imageUrl = decodeURIComponent(img);
    return (
      <div>
        <h1>{title}</h1>
        <p>{name}</p>
        <input required />
        <Image src={imageUrl} alt="photo" width={300} height={200} />
      </div>
    );
  }
  
  