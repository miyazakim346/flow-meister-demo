import Image from "next/image";
import styles from "./page.module.css";
import FirstView from "./_components/FirstView";
import PointSection from "./_components/PointSection";
import CaseSection from "./_components/CaseSection";
import FeatureSection from "./_components/FeatureSection";
import StorySection from "./_components/StorySection";
import NewsSection from "./_components/NewsSection";

export default function Home() {
  return (
    <>
      <FirstView />
      <PointSection />
      <CaseSection />
      <FeatureSection />
      <StorySection />
      <NewsSection />
    </>
  );
}
