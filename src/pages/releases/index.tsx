import { getAlbums } from "@/data/queries/albums";
import { transformAlbumsFull } from "@/data/transformers/album";
import { Album } from "@/types/Album";
import Link from "next/link";

const Releases = ({ albums }: { albums: Album[] }) => {
  return (
    <div>
      <h1>Releases</h1>
      {albums.map((album) => (
        <Link key={album.id} href={`/releases/${album.slug}`}>
          <h2>{album.name}</h2>
        </Link>
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const res = await getAlbums();
  const albums = transformAlbumsFull(res);
  return {
    props: { albums },
  };
}

export default Releases;
