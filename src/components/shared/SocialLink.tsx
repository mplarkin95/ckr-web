import Link from "next/link";

const SocialLink = ({ href, icon }: { href: string; icon: boolean }) => {
  let displayString: string | JSX.Element;

  if (href.includes("facebook")) {
    displayString = icon ? <i className="fa fa-facebook" /> : "Facebook";
  } else if (href.includes("instagram")) {
    displayString = icon ? <i className="fa fa-instagram" /> : "Instagram";
  } else if (href.includes("twitter")) {
    displayString = icon ? <i className="fa fa-twitter" /> : "Twitter";
  } else if (href.includes("youtube")) {
    displayString = icon ? <i className="fa fa-youtube" /> : "YouTube";
  } else if (href.includes("soundcloud")) {
    displayString = icon ? <i className="fa fa-soundcloud" /> : "SoundCloud";
  } else if (href.includes("bandcamp")) {
    displayString = icon ? <i className="fa fa-bandcamp" /> : "Bandcamp";
  } else if (href.includes("spotify")) {
    displayString = icon ? <i className="fa fa-spotify" /> : "Spotify";
  } else if (href.includes("apple")) {
    displayString = icon ? <i className="fa fa-apple" /> : "Apple Music";
  } else if (href.includes("mailto")) {
    displayString = icon ? <i className="fa fa-envelope" /> : "Email";
  } else {
    displayString = icon ? <i className="fa fa-globe" /> : "Website";
  }
  return <Link href={href}>{displayString}</Link>;
};

export default SocialLink;
