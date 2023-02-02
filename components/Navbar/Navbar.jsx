import Link from "next/link";
import React, { useState } from "react";
import { FaArtstation, FaGripLines, FaTimes } from "react-icons/fa";
import style from "./navbar.module.scss";

const Navbar = () => {
  const [toggler, setToggler] = useState(false);

  const handleToggle = () => {
    setToggler(!toggler);
  };

  return (
    <div className={style.navbar}>
      <Link href="/">
        <div className={style.nav_brand}>
          <FaArtstation /> JobMaster
        </div>
      </Link>

      <div className={style.nav_menu}>
        <Link href="/">
          <Link href="">Home</Link>
        </Link>
        <Link href="/">
          <Link href="">Find Jobs</Link>
        </Link>
        <Link href="/">
          <Link href="">Employers Details</Link>
        </Link>
        <Link href="/">
          <Link href="">Candidate</Link>
        </Link>
        <Link href="/">
          <Link href="">Blog</Link>
        </Link>
        <Link href="/">
          <Link href="">Contact</Link>
        </Link>
      </div>

      <div className={style.nav_registration}>
        <Link href="/login">
          <button type="button" className={style.nav_reg_btn}>
            Log In
          </button>
        </Link>
      </div>

      <div className={style.res_nav}>
        {toggler ? (
          <FaTimes onClick={handleToggle} className={style.tgl_btn} />
        ) : (
          <FaGripLines onClick={handleToggle} className={style.tgl_btn} />
        )}
        {toggler && (
          <div className={style.res_nav_menu}>
            <Link href="/">
              <a href="" onClick={handleToggle}>
                Home
              </a>
            </Link>
            <Link href="/jobs">
              <a href="" onClick={handleToggle}>
                Find Jobs
              </a>
            </Link>
            <Link href="/employerdetail">
              <a href="" onClick={handleToggle}>
                Employers Details
              </a>
            </Link>
            <Link href="/candidate">
              <a href="" onClick={handleToggle}>
                Candidate
              </a>
            </Link>
            <Link href="/article">
              <a href="" onClick={handleToggle}>
                Blog
              </a>
            </Link>
            <Link href="/contact">
              <a href="" onClick={handleToggle}>
                Contact
              </a>
            </Link>

            <div className={style.res_nav_registration}>
              <Link href="/login">
                <button
                  type="button"
                  className={style.res_nav_reg_btn}
                  onClick={handleToggle}
                >
                  Log In
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
