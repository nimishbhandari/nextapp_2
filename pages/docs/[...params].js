import { useRouter } from "next/router";

//catch all routes
const Docs = () => {
  const router = useRouter();
  const { params = [] } = router.query;
  console.log(params);
  return <div>Docs page</div>;
};

export default Docs;
