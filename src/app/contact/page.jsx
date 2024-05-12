"use Client";

import Image from "next/image";
import styles from "./contact.module.css";
// import dynamic from "next/dynamic";
// import HydrationTest from '@/components/hydrationTest';

// const HydrationTestNoSSR = dynamic(() => import("@/components/hydrationTest"), {ssr: false,});

const Contact = () => {
  const a = Math.random();
  console.log(a);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image className={styles.image} src="/contact.png" alt="" fill />
        </div>
        <div className={styles.formContainer}>
          {/* <HydrationTestNoSSR /> */}
          {/* <div suppressHydrationWarning>{a}</div> */}
          <form action="" className={styles.form}>
            <input type="text" value="" placeholder="Name and Surname" />
            <input type="text" value="" placeholder="Email Address" />
            <input type="text" value="" placeholder="Phone Number (Optional)" />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
            <button>Send</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
