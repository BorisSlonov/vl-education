import React from "react";
import styles from "./style.module.css"
import LogoIcon from "@/shared/ui/icons/LogoIcon";
import clsx from "clsx";
import Socials from "../Socials";
import Link from "next/link";

const Footer = () => {

    const contacts = [
        { text: '8 (812) 900-50-51', link: 'tel:+7(812)900-50-51' },
        { text: 'edu@vibro-laser.com', link: 'mailto:edu@vibro-laser.com' }
    ]

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.body}>
                    <div className={clsx(styles.item, styles.item1)}>
                        <LogoIcon className={styles.logo} />
                        <p className={styles.name}>
                            ООО УЦПК «ВИБРО-ЛАЗЕР»
                        </p>
                    </div>
                    <div className={clsx(styles.item, styles.item2)}>
                        <Socials />
                    </div>
                    <div className={clsx(styles.item, styles.item3)}>
                        <div className={styles.contacts}>
                            <h3 className={styles.h3}>
                                Контакты для связи
                            </h3>
                            <ul className={styles.ul}>
                                {contacts.map((item, index) => (
                                    <li className={styles.li} key={index}>
                                        <Link className={styles.a} href={item.link}>
                                            {item.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={styles.contacts}>
                            <h3 className={styles.h3}>
                                Адрес
                            </h3>
                            <p className={styles.address}>
                                Санкт-Петербург,
                                ул. Шпалерная, 22
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer