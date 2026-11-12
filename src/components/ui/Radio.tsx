import styles from "./Radio.module.css";

type RadioProps = {
  items: { value: string; text: string; checked?: boolean }[];
  name: string;
  required?: boolean;
};

export default function Radio({
  name,
  items,
  ...restOFProps
}: RadioProps) {
  return (
    <div className={styles.radio}>
      {items.map((item) => {
        return (
          <label className={styles.item} key={item.value}>
            <input
              type="radio"
              value={item.value}
              className={styles.input}
              name={name}
              defaultChecked={item.checked}
              {...restOFProps}
            />
            <span className={styles.text}>{item.text}</span>
          </label>
        );
      })}
    </div>
  );
}
