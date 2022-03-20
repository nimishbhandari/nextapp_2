import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const [session, loading] = useSession();
  console.log({ session, loading });
  return (
    <div>
      <ul className="topnav">
        <li>
          <Link href="/">
            <a className="active">NEXT AUTH</a>
          </Link>
        </li>
        <li className="right">
          <Link href="/api/auth/signout">
            <a
              onClick={(e) => {
                e.preventDefault();
                signOut();
              }}
            >
              Sign Out
            </a>
          </Link>
        </li>
        <li className="right">
          <Link href="/api/auth/signin">
            <a
              onClick={(e) => {
                e.preventDefault();
                signIn("github");
              }}
            >
              Sign In
            </a>
          </Link>
        </li>
        <li className="right">
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
        <li className="right">
          <Link href="/dashboard">
            <a>Dashboard</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
