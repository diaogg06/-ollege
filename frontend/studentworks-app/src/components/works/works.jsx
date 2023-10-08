import styles from "./works.module.css"
import Image from "../work/work";

function Works()  {
    return (
    <div className={styles.container}>
        <div className={styles.works}>
            <Image url={"https://i.pinimg.com/564x/ca/84/3c/ca843cc0919be90fe9837b19ef68803a.jpg"}></Image>
            <Image url={"https://i.pinimg.com/564x/73/c1/9c/73c19c033ddce2e8864a1d5bb548df8c.jpg"}></Image>
            <Image url={"https://i.pinimg.com/564x/cf/be/99/cfbe998fc06f7096c454b4366902a7c8.jpg"}></Image>
            <Image url={"https://i.pinimg.com/564x/bc/28/7b/bc287be7e15c0fdcda443ceb934630d2.jpg"}></Image>
            <Image url={"https://i.pinimg.com/564x/71/83/db/7183db298ef8a2f034f04fd6c27db5b6.jpg"}></Image>
            <Image url={"https://i.pinimg.com/564x/5d/96/26/5d96268d4c1a42a137fde3d4c163916d.jpg"}></Image>
        </div>
    </div>
    )
}

export default Works;
