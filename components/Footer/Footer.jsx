import Link from "next/link";
import { FaArtstation } from "react-icons/fa";
import style from "./footer.module.css";
import { FooterCol } from "../FooterCol/FooterCol";
const footer_detail1 = [
  {
    id: 1,
    link: "Star a Trial",
    to: "/404",
  },
  {
    id: 2,
    link: "How It Works",
    to: "/404",
  },
  {
    id: 3,
    link: "Features",
    to: "/jobs",
  },
  {
    id: 4,
    link: "Price & Planing",
    to: "/404",
  },
];

const footer_detail2 = [
  {
    id: 1,
    link: "Affiliate",
    to: "/404",
  },
  {
    id: 2,
    link: "Blog",
    to: "/article",
  },
  {
    id: 3,
    link: "contact",
    to: "/contact",
  },
  {
    id: 4,
    link: "Careers",
    to: "/article",
  },
];

const footer_detail3 = [
  {
    id: 1,
    link: "Quick Links",
    to: "/404",
  },
  {
    id: 2,
    link: "Job Packages",
    to: "/jobs",
  },
  {
    id: 3,
    link: "Post New Job",
    to: "/jobs",
  },
  {
    id: 4,
    link: "Jobs Listing",
    to: "/jobs",
  },
];

const footer_detail4 = [
  {
    id: 1,
    link: "About Us",
    to: "/contact",
  },
  {
    id: 2,
    link: "Contact With Us",
    to: "/contact",
  },
  {
    id: 3,
    link: "Our Partners",
    to: "/candidate",
  },
  {
    id: 4,
    link: "Careers",
    to: "/404",
  },
];

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.footer_main}>
        <div className={style.footer_left}>
          <Link href="/">
            <div className={style.nav_brand}>
              <FaArtstation /> JobMaster
            </div>
          </Link>
          <p>
            Find great job for build your bright career. Have many job in this
            plactform.
          </p>
        </div>

        <div className={style.footer_right}>
          <FooterCol footerDetail={footer_detail1} header="Products" />
          <FooterCol footerDetail={footer_detail2} header="Legal" />
          <FooterCol footerDetail={footer_detail3} header="Resourses" />
          <FooterCol footerDetail={footer_detail4} header="Company" />
        </div>
      </div>
    </div>
  );
};
export default Footer;