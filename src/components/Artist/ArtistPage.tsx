import { Artist } from "@/types/Artist";
import Image from "next/image";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import SocialLink from "../shared/SocialLink";

const ArtistPage = ({ artist }: { artist: Artist }) => {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full">
        <h1>{artist.name}</h1>
        <div className="flex flex-col md:flex-row">
          {artist.profilePicture && (
            <div className="w-full md:w-1/2">
              <Image
                alt={"dum"}
                src={`https:${artist.profilePicture}`}
                width={200}
                height={200}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArtistPage;
