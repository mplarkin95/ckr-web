import Link from "next/link";

const SocialLink = ({ href }: { href: string }) => {
  let displayString = "Website";
  if (href.includes("facebook")) {
    displayString = "Facebook";
  } else if (href.includes("instagram")) {
    displayString = "Instagram";
  } else if (href.includes("twitter")) {
    displayString = "Twitter";
  } else if (href.includes("youtube")) {
    displayString = "YouTube";
  } else if (href.includes("soundcloud")) {
    displayString = "SoundCloud";
  } else if (href.includes("bandcamp")) {
    displayString = "Bandcamp";
  } else if (href.includes("spotify")) {
    displayString = "Spotify";
  } else if (href.includes("apple")) {
    displayString = "Apple Music";
  }
  return <Link href={href}>{displayString}</Link>;
};

export default SocialLink;
