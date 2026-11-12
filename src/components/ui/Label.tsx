import styles from "./Label.module.css";

type LabelProps = {
  text: string;
  isRequired?: boolean;
  id?: string;
};

export default function Label({
  text,
  isRequired = true,
  id = "",
}: LabelProps) {
  const tagText = isRequired ? "必須" : "任意";
  const tagClass = isRequired ? styles.isRequired : styles.isOptional;

  return (
    <div className={styles.label}>
      <label htmlFor={id} className={styles.text}>
        {text}
      </label>
      <span className={`${styles.tag} ${tagClass}`}>{tagText}</span>
    </div>
  );
}
