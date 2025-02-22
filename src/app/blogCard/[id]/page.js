"use client";

import Image from "next/image";
import Article from "@/components/Article/Article";
import { useSearchParams } from "next/navigation";

export default function BlogCardPage() {
  const searchParams = useSearchParams();
  const title = searchParams.get("title") || "Без названия";
  const name = searchParams.get("name") || "Без имени";
  const img = searchParams.get("img") || "";
  const imageUrl = img ? decodeURIComponent(img) : "";
    return (
     <>
      <div>
        <h1>{title}</h1>
        <p>{name}</p>
        <input required />
        <Image src={imageUrl} alt="photo" width={300} height={200} />
      </div>
      <Article/>
     </>
    );
  }
  
  