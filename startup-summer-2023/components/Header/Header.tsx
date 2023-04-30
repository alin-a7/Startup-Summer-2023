import { FC } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import Logo from "../../assets/logo.svg";

import styles from "./Header.module.scss";

const NAVIGATION_MENU = [
  {
    href: "/",
    label: "Поиск Вакансий",
  },
  {
    href: "/favourites",
    label: "Избранное",
  },
];

const Header: FC = () => {
  const { pathname } = useRouter();

  return (
    <header className={styles.container}>
      <nav className={styles.navLink}>
        <Logo className={styles.logo}/>
        {NAVIGATION_MENU.map(({ href, label }, index) => (
          <Link
            key={index}
            className={`${styles.menuItem} ${
              pathname === href ? styles.active : null
            } `}
            href={href}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
