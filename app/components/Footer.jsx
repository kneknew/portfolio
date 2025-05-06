import { assets } from "@/assets/assets";
import Image from "next/image";

const Footer = ({ isDarkMode }) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt=""
          className="w-36 mx-auto mb-2"
        />
        <a
          href="mailto:son11032001@gmail.com"
          className="w-max flex items-center gap-2 mx-auto"
        >
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt=""
            className="w-6"
          />
          son11032001@gmail.com
          {/* <a href="mailto:son11032001@gmail.com">son11032001@gmail.com</a> */}
        </a>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>2025 Minh Son. Aii reverved</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://github.com/kneknew">
              Github
            </a>
          </li>
          <li>
            <a target="_blank" href="https://Facebook.com/1c1b2">
              Facebook
            </a>
          </li>
          {/*   <li> */}
          {/*     <a target="_blank" href="https://Instagram.com/mnhsn1401"> */}
          {/*       Instagram */}
          {/*     </a> */}
          {/*   </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
