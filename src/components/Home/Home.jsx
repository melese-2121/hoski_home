import React from "react";
import styles from "./Home.module.css";
import Header from "./Header";
import EligibilityForm from "../HeroFormSection/EligibilityForm";
import HeroSection from "../HeroFormSection/HeroSection";
import hero_form_styles from "../HeroFormSection/HeroFormSection.module.css";
import HowItWorks from "../HowItWorks/HowItWorks";
import Search from "../Search/Search";
import Footer from "../Footer/Footer";
import Frame from "../Frame/Frame";

function Home() {
  return (
    <div fluid className={styles.home_container}>
      <Header />
      <div fluid className={hero_form_styles.hero_form_container}>
        <HeroSection />
        <EligibilityForm />
      </div>
      <HowItWorks />
      <Frame />
      <Search />
      <Footer />
    </div>
  );
}

export default Home;
