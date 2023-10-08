import styles from "./work.module.css"

function Image({url})  {
    return (
    <>
        <img className={styles.img} src={url}></img>
    </>
    )
}

export default Image;