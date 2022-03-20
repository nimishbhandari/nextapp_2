import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";

const signPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { data: session, status } = useSession();
  if (session) {
    router.push("/");
    console.log("yes");
  }

  console.log({ email, password });

  const submitHandler = (e) => {
    e.preventDefault();
    signIn("credentials", { email, password });
  };

  return (
    <>
      {session ? (
        <button onClick={() => signOut()}>Log Out</button>
      ) : (
        <form
          onSubmit={submitHandler}
          method="post"
          action="/api/auth/callback/credentials"
        >
          <label>
            email
            <input
              name="email"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Password
            <input
              name="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button>Sign in</button>
        </form>
      )}
    </>
  );
};

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
