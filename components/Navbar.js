import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <Link href={"/"}>
          <a className="title">Devistry</a>
        </Link>
        <ul>
          <li>
            <Link href={"/posts"}>
              <a> All Posts</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
