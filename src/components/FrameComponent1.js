import { Button } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div className={[styles.rewardsImageParent, className].join(" ")}>
      <div className={styles.rewardsImage}>
        <img
          className={styles.giftCardpanaIcon}
          loading="lazy"
          alt=""
          src="/giftcardpana.svg"
        />
        <div className={styles.rewardsProgramDescription}>
          <h1 className={styles.theGiftCardContainer}>
            <span>
              <span>{`The Gift Card Rewards Program that has it all, try `}</span>
              <b className={styles.giftnestRewards}>GIFTNEST Rewards™</b>
            </span>
          </h1>
          <h3 className={styles.orderGiftCards}>
            Order gift cards for employees with no minimums or long-term
            commitment.
          </h3>
          <Button
            className={styles.button}
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "16",
              background: "#f24452",
              borderRadius: "96px",
              "&:hover": { background: "#f24452" },
              width: 241,
              height: 54,
            }}
          >
            Start Today
          </Button>
        </div>
      </div>
      <div className={styles.frameParent}>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="/group-1@2x.png"
        />
        <div className={styles.groupGiftsMadeSimpleParent}>
          <h1 className={styles.groupGiftsMade}>Group Gifts Made Simple</h1>
          <h3 className={styles.setUpAGroup}>
            Set-up a Group Gift, invite others to chip in and choose from
            hundreds of Gift Cards
          </h3>
          <Button
            className={styles.button1}
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "16",
              background: "#f24452",
              borderRadius: "96px",
              "&:hover": { background: "#f24452" },
              width: 241,
              height: 54,
            }}
          >
            Start Today
          </Button>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <img
          className={styles.frameItem}
          loading="lazy"
          alt=""
          src="/group-43@2x.png"
        />
        <div className={styles.choiceCardDescription}>
          <h1 className={styles.giveTheGift}>Give the Gift of Choice</h1>
          <h3 className={styles.withTheGiftnestContainer}>
            <p className={styles.withTheGiftnest}>
              With the GiftNest Choice Card you can give the Choice of Hundreds
              of Gift
            </p>
            <p className={styles.cards}>Cards.</p>
          </h3>
          <Button
            className={styles.button2}
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "16",
              background: "#f24452",
              borderRadius: "96px",
              "&:hover": { background: "#f24452" },
              width: 241,
              height: 54,
            }}
          >
            Start Today
          </Button>
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
