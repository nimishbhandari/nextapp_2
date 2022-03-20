import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "unauthenticated") {
    router.push("/");
  }
  console.log({ session, status });
  return <div>dashboard</div>;
};

export default dashboard;
