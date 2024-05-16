import Image from "next/image";
import styles from "./post.module.css";
import PostUser from "../../../components/postUser/postUser.jsx";

const getData = async (slug) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
};

const SinglePostPage = async ({ params }) => {
  const { slug } = params;

  const post = await getData(slug);

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          src="https://assets.goal.com/images/v3/bltce8c188796cf2b77/GettyImages-1257508567.jpg?auto=webp&format=pjpg&width=1080&quality=60"
          alt=""
          width={1000}
          height={1000}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.details}>
          <div className={styles.detailText}>
            <div className={styles.avatarContainer}>
              <Image
                className={styles.avatar}
                src="/noavatar.png"
                alt="Avatar"
                width={50}
                height={50}
              />
            </div>
            <PostUser userId={post.userID} />
            <div className={styles.textContainer}>Published</div>
            <div className={styles.detail}>01.01.2024</div>
            <div className={styles.content}>Content</div>
            {post.body}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
