import { getArtists } from "@/data/queries/artists";
import { transformArtistsFull } from "@/data/transformers/artist";
import { Artist } from "@/types/Artist";
import Link from "next/link";

const Index = ({ artists }: { artists: Artist[] }) => {
  return (
    <div>
      <h1>Index</h1>
      {artists.map((artist) => (
        <Link key={artist.id} href={`/artists/${artist.slug}`}>
          <h2>{artist.name}</h2>
        </Link>
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const res = await getArtists();
  const artists = transformArtistsFull(res);
  return {
    props: {
      artists,
    },
  };
}

export default Index;
