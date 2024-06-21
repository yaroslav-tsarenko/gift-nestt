import PropTypes from "prop-types";
import styles from "./FrameComponent10.module.css";

const FrameComponent10 = ({ className = "" }) => {
  return (
    <section className={[styles.rewardContentWrapper, className].join(" ")}>
      <div className={styles.rewardContent}>
        <div className={styles.rewardParagraphWrapper}>
          <div className={styles.rewardParagraph}>
            <h1 className={styles.giftCardRewardContainer}>
              <p className={styles.giftCardReward}>Gift Card Reward Programs</p>
              <p className={styles.thatExpandWith}>
                That Expand With Your Business
              </p>
            </h1>
            <h3 className={styles.purchaseGiftCardsContainer}>
              <p className={styles.purchaseGiftCardsInBulkWi}>
                <span
                  className={styles.purchaseGiftCards}
                >{`Purchase gift cards in bulk with `}</span>
                <b className={styles.rewardsExpress}>Rewards Express™</b>
                <span>{` `}</span>
              </p>
              <p className={styles.orDiscoverScalableEnterpris}>
                <span>{`or discover scalable enterprise options with `}</span>
                <b className={styles.giftnestRewards}>GiftNest Rewards™.</b>
              </p>
            </h3>
          </div>
        </div>
        <div className={styles.paymentWrapper}>
          <div className={styles.payment}>
            <img
              className={styles.stackedFaceplatesBulkTemplaIcon}
              alt=""
              src="/stackedfaceplatesbulktemplatepng@2x.png"
            />
            <img
              className={styles.visaerc6mob2bFp01pngIcon}
              rows={11}
              cols={16}
              alt=""
              src="/visaerc6mob2b-fp01png@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent10.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent10;
