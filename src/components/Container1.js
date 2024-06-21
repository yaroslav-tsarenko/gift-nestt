import { Button } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./Container1.module.css";

const Container1 = ({ className = "" }) => {
  return (
    <div className={[styles.container, className].join(" ")}>
      <div className={styles.container1}>
        <img
          className={styles.moneyMotivationamicoIcon}
          loading="lazy"
          alt=""
          src="/moneymotivationamico.svg"
        />
      </div>
      <h3 className={styles.earnGiftnestPoints}>
        Earn GiftNest Points with your Purchases
      </h3>
      <div className={styles.container2}>
        <div className={styles.saveMoneyWith}>
          Save money with GiftNest Points when you buy Gift Cards at GiftNest
        </div>
      </div>
      <div className={styles.container3}>
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
          }}
        >
          Earn Points
        </Button>
      </div>
    </div>
  );
};

Container1.propTypes = {
  className: PropTypes.string,
};

export default Container1;
