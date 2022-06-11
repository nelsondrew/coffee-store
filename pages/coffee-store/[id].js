import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
const CoffeeStore = () => {
  const router = useRouter();
  const { id = 0 } = router?.query;

  return (
    <div>
      <Head>{id}</Head>
      <div>My Coffee Store Page</div>
      <div>{id}</div>
      <Link
        style={{
          height: `10px`,
          width: "20px",
          borderRadius: "15px",
          border: "1px solid",
          background: "white",
          borderColor: "purple",
        }}
        href="/"
      >
        <a> Back to Home</a>
      </Link>
    </div>
  );
};

export default CoffeeStore;
