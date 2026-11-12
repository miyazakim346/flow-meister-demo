import styles from "./Textarea.module.css";

type TextareaProps = {
  id?: string;
  name: string;
  defaultValue?: string;
  placeholder?: string;
  required?: boolean;
};

export default function Textarea({
  id = "",
  name,
  defaultValue = "",
  placeholder = "",
  ...restOFProps
}: TextareaProps) {
  return (
    <textarea
      className={styles.textarea}
      id={id}
      name={name}
      defaultValue={defaultValue}
      placeholder={placeholder}
      {...restOFProps}
    />
  );
}
