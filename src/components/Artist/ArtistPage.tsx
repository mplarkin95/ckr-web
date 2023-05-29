import { Artist } from "@/types/Artist";
import Image from "next/image";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import SocialLink from "../shared/SocialLink";

const ArtistPage = ({ artist }: { artist: Artist }) => {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full">
        <h1>{artist.name}</h1>
      </div>
    </div>
  );
};

export default ArtistPage;
