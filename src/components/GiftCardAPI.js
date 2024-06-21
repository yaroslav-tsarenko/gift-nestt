import { Button } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./GiftCardAPI.module.css";

const GiftCardAPI = ({ className = "" }) => {
  return (
    <section className={[styles.giftCardAPI, className].join(" ")}>
      <h1 className={styles.headerHeading}>eGifter Gift Card API™</h1>
      <div className={styles.aPIDescription}>
        <div className={styles.aPIInfo}>
          <h3 className={styles.driveYourRewards}>
            Drive your rewards program with the power of our lightning fast API.
          </h3>
          <div className={styles.availableExclusivelyInContainer}>
            <span
              className={styles.availableExclusivelyIn}
            >{`Available exclusively in the `}</span>
            <b>{`GiftNest Rewards™ `}</b>
            <span className={styles.platformThe}>{`platform, the `}</span>
            <b>GiftNest Gift Card API</b>
            <span
              className={styles.allowsYouTo}
            >{` allows you to integrate gift cards into your mobile app or other rewards and incentives program. Deliver gift cards in real-time for `}</span>
            <b>200+ top gift card brands</b>
            <span className={styles.span}>.</span>
          </div>
        </div>
        <img
          className={styles.aPIDescriptionChild}
          loading="lazy"
          alt=""
          src="/group-75.svg"
        />
      </div>
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
          width: 250,
          height: 54,
        }}
      >
        Learn More
      </Button>
    </section>
  );
};

GiftCardAPI.propTypes = {
  className: PropTypes.string,
};

export default GiftCardAPI;
