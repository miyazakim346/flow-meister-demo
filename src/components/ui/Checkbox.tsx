import styles from "./Checkbox.module.css";

type CheckboxProps = {
  items: { value: string; text: string; checked?: boolean }[];
  name: string;
  required?: boolean;
};

export default function Checkbox({
  name,
  items,
  ...restOFProps
}: CheckboxProps) {
  return (
    <div className={styles.checkbox}>
      {items.map((item) => {
        return (
          <label className={styles.item} key={item.value}>
            <input
              type="checkbox"
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
