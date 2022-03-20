import { getCsrfToken } from "next-auth/react";
import { useSession } from "next-auth/react";

const signPage = ({ csrfToken }) => {
  const { data: session, status } = useSession();
  console.log("session", session);

  return (
    <form method="post" action="/api/auth/signin">
      <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
      <label>
        Username
        <input name="email" type="text" />
      </label>
      <label>
        Password
        <input name="password" type="password" />
      </label>
      <button type="submit">Sign in</button>
    </form>
  );
};

export async function getServerSideProps(context) {
  const csrfToken = await getCsrfToken(context);
  return {
    props: {
      csrfToken: { csrfToken },
    },
  };
}

export default signPage;

/**
  <div>
      <form>
        <input type="text" placeholder="Name" />
        <input type="password" placeholder="Enter Password" />
        <button type="submit">Submit</button>
      </form>
    </div>
     */
