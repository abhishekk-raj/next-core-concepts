import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <h1>Home page</h1>
      <Link href={'/blog'}>Blog</Link>
      <Link href={'/products'}>Products</Link>
      <Link href={'/articles/breaking-news-123?lang=en'}>Read in English</Link>
      <Link href={'/articles/breaking-news-123?lang=hn'}>Read in Hindi</Link>
    </div>
  );
}
