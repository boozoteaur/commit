import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
       <main className={styles.main}>
        <div className={styles.top}>
          <div className={styles.topinfo}>
            <Image
            className={styles.logo}
            src="/logo.jpg"
            alt="commit-it logo"
            width={150}
            height={150}
            priority
            />
            <div className={styles.phone}>+7 914 273-90-22</div>
            <div className={styles.mail}>commit23@mail.ru</div>
            </div>
            <div className={styles.menubox}>
              <div className={styles.menu}>
                <div className={styles.menuitem}>О компании</div>
                <div className={styles.menuitem}>Портфолио</div>
                <div className={styles.menuitem}>Контакты</div>
              </div>
            </div>
          
          
        </div>  
        
        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className={styles.secondary}
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
