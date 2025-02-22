"use client";
import scss from "./BlogCard.module.scss";
import ava from "../../../assets/Articles/ava.svg";
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
      <div className={scss.blogCard}>
        <h1>{title}</h1>
        <div>
          <Image className={scss.ava} src={ava} alt="ava" />
          <nav>
            <p>Written By</p>
            <h6>{name}</h6>
          </nav>
        </div>
        <Image
          className={scss.image}
          src={imageUrl}
          alt="photo"
          width={300}
          height={300}
        />
      </div>
      <Article />
    </>
  );
}
