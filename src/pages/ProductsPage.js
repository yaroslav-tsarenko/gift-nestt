import FrameComponent11 from "../components/FrameComponent11";
import PromoOverlay from "../components/PromoOverlay";
import Categories from "../components/Categories";
import FrameComponent13 from "../components/FrameComponent13";
import FrameComponent3 from "../components/FrameComponent3";
import styles from "./ProductsPage.module.css";

const ProductsPage = () => {
  return (
    <div className={styles.productspage}>
      <div className={styles.cardBonus}>
        <img className={styles.cardBonusChild} alt="" src="/group-65.svg" />
        <div className={styles.nikeGift}>
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
      <PromoOverlay />
      <Categories />
      <section className={styles.affiliated}>
        <div className={styles.sponsor}>
          <div className={styles.brinkerInternationalAndContainer}>
            <p
              className={styles.brinkerInternationalAnd}
            >{`Brinker International and all of its affiliated brands, including Chili’s® Grill & Bar, Maggiano’s Little Italy®, and On The Border Mexican Grill & Cantina® are not a sponsor or co-sponsor of this promotion and is not liable for any alleged or actual claims related to this offer.`}</p>
            <p className={styles.seeBackOf}>
              See back of card for terms and conditions. All brand names and
              logos are registered trademarks of their respective owners.
            </p>
          </div>
          <b className={styles.dunkinTerms}>{`Dunkin' Terms & Conditions`}</b>
        </div>
      </section>
      <div className={styles.affiliated1}>
        <div className={styles.dunkinIsNotASponsorOfThParent}>
          <div className={styles.dunkinIsNot}>
            Dunkin’ is not a sponsor of this promotion and is not otherwise
            affiliated with this company. Gift card Terms and Conditions apply;
            see back of card for details. ©2024 DD IP Holder LLC.
          </div>
          <b
            className={styles.homeDepotTerms}
          >{`Home Depot® Terms & Conditions`}</b>
        </div>
      </div>
      <section className={styles.footer}>
        <div className={styles.disclaimerTheHomeDepotIsParent}>
          <div className={styles.disclaimerTheHome}>
            Disclaimer: The Home Depot® is not a sponsor or co-sponsor of this
            promotion and is not liable for any alleged or actual claims related
            to this offer.
          </div>
          <b className={styles.macysTerms}>{`Macy's Terms & Conditions`}</b>
          <div className={styles.legalDisclaimerNo}>
            Legal Disclaimer: No more than $2000 may be loaded onto a gift card
            in a single day (including purchasing additional value and/or adding
            returns to a gift card).
          </div>
          <b className={styles.targetTerms}>{`Target Terms & Conditions`}</b>
          <div className={styles.theBullseyeDesign}>
            The Bullseye Design, Target and Target GiftCards are registered
            trademarks of Target Brands, Inc. Terms and conditions are applied
            to gift cards. Target is not a participating partner in or sponsor
            of this offer.
          </div>
          <b className={styles.vanillaVisaEgift}>
            Vanilla® Visa® eGift Card Legal Disclaimer
          </b>
        </div>
      </section>
      <FrameComponent13 />
      <FrameComponent3 enBadgeWebGenericpng="/en-badge-web-genericpng2@2x.png" />
    </div>
  );
};

export default ProductsPage;
