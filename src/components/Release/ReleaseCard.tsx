import { Release } from "@/types/Release";
import Markdown from "marked-react";
import styles from "./ReleaseCard.module.scss";
import Image from "next/image";

const ReleaseCard = ({ release }: { release: Release }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.title}>{release.title}</div>
        <div className={styles.date}>{release.releaseDate}</div>
      </div>
      <div className={styles.content}>
        <div className={styles.image}>
          <Image
            src={`https:${release.image}`}
            alt={release.title}
            width={1000}
            height={1000}
          />
        </div>
        <div className={styles.description}>
          <Markdown>{release.copywrite}</Markdown>
        </div>
      </div>
    </div>
  );
};

export default ReleaseCard;
