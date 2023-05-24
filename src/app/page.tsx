import { Artist } from "@/types/Artist";
import Link from "next/link";

const Index = () => {
  const artists: Artist[] = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
  ];
  return (
    <div>
      <h1>Index</h1>
      {artists.map((artist) => (
        <Link key={artist.id} href={`/artists/${artist.id}`}>
          <h2>{artist.name}</h2>
        </Link>
      ))}
    </div>
  );
};

export default Index;
