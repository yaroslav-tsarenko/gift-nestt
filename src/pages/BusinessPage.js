import Content from "../components/Content";
import FrameComponent10 from "../components/FrameComponent10";
import FrameComponent9 from "../components/FrameComponent9";
import FrameComponent8 from "../components/FrameComponent8";
import FrameComponent7 from "../components/FrameComponent7";
import GiftCardAPI from "../components/GiftCardAPI";
import Testimonials from "../components/Testimonials";
import FrameComponent3 from "../components/FrameComponent3";
import styles from "./BusinessPage.module.css";

const BusinessPage = () => {
  return (
    <div className={styles.businesspage}>
      <header className={styles.main}>
        <img
          className={styles.mainChild}
          loading="lazy"
          alt=""
          src="/group-65.svg"
        />
        <div className={styles.bonusCard}>
          <div className={styles.buyA100}>
            Buy a $100 Nike Gift Card, get a $10 Bonus Card! Promo Code: nike100
          </div>
        </div>
      </header>
      <Content />
      <FrameComponent10 />
      <FrameComponent9 />
      <FrameComponent8 />
      <FrameComponent7 />
      <GiftCardAPI />
      <Testimonials />
      <FrameComponent3 enBadgeWebGenericpng="/en-badge-web-genericpng1@2x.png" />
    </div>
  );
};

export default BusinessPage;
