import Image from "next/image";
import CountUp from "react-countup";
import headerImg from "../../images/slider-bg.webp";
import style from "./header.module.scss";

const Header = () => {
  return (
    <div className={style.header_sec}>
      <Image
        alt="hader"
        src={headerImg}
        layout="fill"
        objectFit="cover"
        className={style.header_sec_img}
      />

      <div className={style.header_sec_main}>
        <h1>
          <span className={style.header_sec_main_count}>
            <CountUp end={2486} duration={3} />
          </span>{" "}
          job available{" "}
        </h1>
        <h1 className={style.header_sec_main_sh}>
          You can choose your dream job .
        </h1>
        <p>
          Find great job for build your bright career. Have many job in this
          plactform.
        </p>

        <div className={style.header_sec_main_search}>
          <form action="" className={style.main_search_form}>
            <div className={style.main_search_div}>
              <input type="text" placeholder="Job title or keywords" />
            </div>

            <div className={style.main_search_div}>
              <select>
                <option value="">Choose Country</option>
                <option value="New York">New York</option>
                <option value="America">America</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Mexico">Mexico</option>
              </select>
            </div>

            <div className={style.main_search_div}>
              <select>
                <option value="">Category</option>
                <option value="Web Development">Web Development</option>
                <option value="Web Designer">Web Designer</option>
                <option value="Graphic Designer">Graphic Designer</option>
                <option value="UI & UX Expert">UI & UX Expert</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Header;
