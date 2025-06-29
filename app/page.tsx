import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <h1>Home page</h1>
      <Link href={'/blog'}>Blog</Link>
      <Link href={'/products'}>Products</Link>
    </div>
  );
}
