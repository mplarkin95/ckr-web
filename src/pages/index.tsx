import Link from "next/link";

const Index = () => {
  return (
    <div className="flex flex-col">
      <Link href="/artists">Artists</Link>
      <Link href="/releases">Releases</Link>
      <Link href="/about">About</Link>
    </div>
  );
};

export default Index;
