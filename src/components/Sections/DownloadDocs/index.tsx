import React from "react";
import styles from "./style.module.css"
import Arrow from "@/shared/ui/icons/arrowIcon";
import { InViewStyle } from "@/shared/ui/InViewStyle";
import clsx from "clsx";
import Link from "next/link";


const DownloadDocs = () => {

    const downloadLinks = [
        { 'text': 'Расписание 2024', link: '#1' },
        { 'text': 'Учредительные документы', link: '#2' },
        { 'text': 'Расписание 2025', link: '#3' },
        { 'text': 'Программа по курсу VL-01', link: '#4' },
    ]

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.body}>
                    <div className={styles.item}>
                        <InViewStyle
                            initialClass="bottomToTop"
                            animationClass="visible"
                            triggerOnce
                        >
                            <h2 className={clsx("h2", styles.h2)}>
                                Скачай и будь в курсе
                            </h2>
                        </InViewStyle>
                        <InViewStyle
                            initialClass="leftToRightUp"
                            animationClass="visible"
                            triggerOnce
                        >
                            <Arrow className={styles.arrowBig} />
                        </InViewStyle>
                        <InViewStyle
                            initialClass="bottomToTop"
                            animationClass="visible"
                            triggerOnce
                        >
                            <p className={styles.h2Subtitle}>
                                Вы можете ознакомиться с ближайшим расписанием курсов и выбрать тот, который подойдёт именно вам.
                            </p>
                        </InViewStyle>
                    </div>
                    <div className={styles.item}>
                        <ul className={styles.ul}>
                            {downloadLinks && downloadLinks.map((item, index) => (
                                <li
                                    key={index}
                                    className={styles.li}
                                >
                                    <InViewStyle
                                        initialClass="bottomToTop"
                                        animationClass="visible"
                                        triggerOnce
                                        className={clsx(styles.liItem, styles[`liItem${index + 1}`])}
                                    >
                                        <Link href={item.link} className={clsx(styles.a, "transparentToLighBtn")}>
                                            {item.text}
                                            <Arrow className={styles.arrowLink} />
                                        </Link>
                                    </InViewStyle>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default DownloadDocs