import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
const Dynamic = () => {
  const router = useRouter();
  const { dynamic = 0 } = router?.query;

  return (
    <div>
      <Head>
        <title>{dynamic}</title>
      </Head>
      <div>My Dynamic Component {dynamic}</div>
    </div>
  );
};

export default Dynamic;
