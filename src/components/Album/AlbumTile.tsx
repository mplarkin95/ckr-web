import { Album } from "@/types/Album";

const AlbumTile = ({ album }: { album: Album }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full border">
      {album.name}
    </div>
  );
};

export default AlbumTile;
