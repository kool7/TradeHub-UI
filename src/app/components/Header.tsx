import Link from "next/link";
import { HEADER } from "../constants/components/Header.const";

const Header = () => {
  return (
    <div className={HEADER.ROOT}>
      <h1 className={HEADER.LOGO}>Tradehub</h1>
      <Link className={HEADER.ADD_PRODUCT} href="/">
        New
      </Link>
    </div>
  );
};

export default Header;
