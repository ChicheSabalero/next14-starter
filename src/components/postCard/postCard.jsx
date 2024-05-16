import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imageContainer}>
          <Image
            src="https://assets.goal.com/images/v3/bltce8c188796cf2b77/GettyImages-1257508567.jpg?auto=webp&format=pjpg&width=1080&quality=60"
            alt=""
            fill
            className={styles.image}
          />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.description}>{post.description}</p>

        <Link className={styles.link} href={`/blog/${post.id}`}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
