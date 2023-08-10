import AlbumTile from "@/components/Album/AlbumTile";
import { getAlbums } from "@/data/queries/albums";
import { transformAlbumsFull } from "@/data/transformers/album";
import { Album } from "@/types/Album";
import Link from "next/link";

const Releases = ({ albums }: { albums: Album[] }) => {
  return (
    <div>
      <h1>Releases</h1>
      <div className="flex flex-row w-full flex-wrap justify-between">
        {albums.map((album) => (
          <div
            key={album.id}
            className="lg:w-1/3 w-1/2 flex justify-center mx-auto"
          >
            <AlbumTile album={album} />
          </div>
        ))}
      </div>
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
