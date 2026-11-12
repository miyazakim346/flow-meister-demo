import styles from "./PageFirstView.module.css";
import Heading, { HeadingProps } from "@/components/ui/Heading";

export default function PageFirstView({
  subText,
  mainText,
  textAlign,
}: HeadingProps) {
  return (
    <div className={styles.fv}>
      <Heading subText={subText} mainText={mainText} textAlign={textAlign} />
    </div>
  );
}
