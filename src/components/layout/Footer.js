import { DiAndroid } from "react-icons/di";
import { DiGithub } from "react-icons/di";
import { DiReact } from "react-icons/di";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div>
      <h1>Rodape</h1>
      <ul className={styles.social_list}>
        <li>
          <DiAndroid />
        </li>
        <li>
          <DiGithub />
        </li>
        <li>
          <DiReact />
        </li>
      </ul>
    </div>
  );
}

export default Footer;
