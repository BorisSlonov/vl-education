import React from "react";
import styles from "./styles.module.css"
import clsx from "clsx";
import Link from "next/link";
import VKIcon from "@/shared/ui/icons/vkIcon";
import TGIcon from "@/shared/ui/icons/tgIcon";
import Arrow from "@/shared/ui/icons/arrowIcon";
import { InViewStyle } from "@/shared/ui/InViewStyle";
import Socials from "@/components/Socials";

const LandingIntro = () => {

    const programs = [
        { text: "Центровка", link: "alignment" },
        { text: "Вибродиагностика", link: "vibration-diagnostics" },
        { text: "Тепловидение", link: "thermal-imaging" },
        { text: "Балансировка", link: "balancing" },
        { text: "Виброналадка", link: "vibration-tuning" },
    ];
    const roles = [
        "Ответственных руководителей",
        "Механиков",
        "Технических специалистов",
        "Сотрудников ремонтных служб"
    ];
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.body}>
                    <InViewStyle initialClass="bottomToTop" animationClass="visible" triggerOnce className={clsx(styles.item, styles.item1)}>
                        <div className={styles.item1Top}>
                            <p className={styles.begin}>
                                Профессионализм начинается <span className={styles.accentColor}>здесь!</span>
                            </p>
                            <Socials className={styles.socials_mt25} />
                        </div>
                        <div className={styles.item1Bot}>
                            <h1 className={styles.h1}>
                                Учебный центр повышения квалификации <span className={styles.accentColor}>VIBRO-LASER</span>
                            </h1>
                            <p className={styles.h1Subtitle}>
                                Информационно-консультационные услуги и курсы повышения квалификации
                            </p>
                        </div>
                    </InViewStyle>
                    <InViewStyle initialClass="bottomToTop" animationClass="visible" triggerOnce className={clsx(styles.item, styles.item2)}>
                        <h3 className={styles.h3}>
                            Образовательные
                            программы
                        </h3>
                        <ul className={styles.programs}>
                            {programs.map((program, index) => (
                                <li className={styles.program} key={index}>
                                    <Link className={clsx(styles.btn, "transparentToLighBtn")} href={`/${program.link}`}>
                                        {program.text}
                                        <Arrow className={styles.arrow} />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </InViewStyle>
                    <InViewStyle initialClass="bottomToTop" animationClass="visible" triggerOnce className={clsx(styles.item, styles.item3)}>
                        <h3 className={styles.h3}>
                            Для кого?
                        </h3>
                        <ul className={styles.rolesList}>
                            {roles.map((role, index) => (
                                <li key={index} className={styles.btn}>
                                    {role}
                                </li>
                            ))}
                        </ul>
                    </InViewStyle>
                </div>
            </div>
        </section>
    )
}

export default LandingIntro