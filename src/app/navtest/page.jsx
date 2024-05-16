"use client";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Navtest = () => {
  // SIDE CLIENT NAVIGATION
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const q = searchParams.get("q");
  console.log(q);
  const handleClick = () => {
    console.log("Clicked");
    // router.push("/");
    // router.replace("/");
    // router.refresh();
    // router.back();
    // router.forward();
  };
  return (
    <div>
      <Link href="" prefetch={false}>
        click here
      </Link>
      <button onClick={handleClick}>Write and redirect</button>
    </div>
  );
};

export default Navtest;
