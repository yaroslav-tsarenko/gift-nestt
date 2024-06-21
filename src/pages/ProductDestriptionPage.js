import FrameComponent11 from "../components/FrameComponent11";
import BackgroundShadow from "../components/BackgroundShadow";
import Section from "../components/Section";
import FrameComponent3 from "../components/FrameComponent3";
import styles from "./ProductDestriptionPage.module.css";

const ProductDestriptionPage = () => {
  return (
    <div className={styles.productdestriptionpage}>
      <div className={styles.frameParent}>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="/group-65.svg"
        />
        <div className={styles.buyA100NikeGiftCardGetWrapper}>
          <div className={styles.buyA100}>
            Buy a $100 Nike Gift Card, get a $10 Bonus Card! Promo Code: nike100
          </div>
        </div>
      </div>
      <FrameComponent11
        horizontalDividerFlex="unset"
        horizontalDividerAlignSelf="stretch"
        horizontalDividerTop="0"
        horizontalDividerPosition="sticky"
        enDebugCommit="unset"
        accountDebugCommit="unset"
        propMinWidth="unset"
      />
      <img
        className={styles.backgroundshadowIcon}
        alt=""
        src="/backgroundshadow.svg"
      />
      <section className={styles.contentWrapper}>
        <div className={styles.backgroundshadowParent}>
          <BackgroundShadow />
          <Section />
        </div>
      </section>
      <FrameComponent3 enBadgeWebGenericpng="/en-badge-web-genericpng3@2x.png" />
    </div>
  );
};

export default ProductDestriptionPage;
