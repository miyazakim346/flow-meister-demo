import styles from "./Submit.module.css";

type SubmitProps = {
  text: string;
};

export default function Submit({ text }: SubmitProps) {
  return (
    <button type="submit" className={styles.button}>
      {text}
      <svg
        className={styles.icon}
        width="18"
        height="21"
        viewBox="0 0 18 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.6223 10.908C18.1246 10.4058 18.1246 9.59019 17.6223 9.08796L11.1938 2.65939C10.6915 2.15716 9.87589 2.15716 9.37366 2.65939C8.87143 3.16162 8.87143 3.97725 9.37366 4.47948L13.6125 8.7143H1.28571C0.574554 8.7143 0 9.28885 0 10C0 10.7112 0.574554 11.2857 1.28571 11.2857H13.6085L9.37768 15.5205C8.87545 16.0228 8.87545 16.8384 9.37768 17.3406C9.87991 17.8429 10.6955 17.8429 11.1978 17.3406L17.6263 10.9121L17.6223 10.908Z"
          fill="white"
        />
      </svg>
    </button>
  );
}
