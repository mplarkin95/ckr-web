import { Artist } from "@/types/Artist";
import Image from "next/image";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const ArtistPage = ({ artist }: { artist: Artist }) => {
  return (
    <div className="flex flex-col h-screen">
      <div className="w-2/4">
        <marquee behavior="alternate">
          <h1 style={{ fontSize: "80px" }}>{artist.name}</h1>
        </marquee>
      </div>

      <div className="flex flex-col">
        <div className="flex flex-auto w-32">
          Image here
          {/* <Image src={artist.image} alt={artist.name} /> */}
        </div>
        <div className="flex flex-auto w-64">
          <ReactMarkdown>{artist.bio || ""}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default ArtistPage;
