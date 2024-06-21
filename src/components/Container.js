import { Button } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./Container.module.css";

const Container = ({ className = "" }) => {
  return (
    <div className={[styles.container, className].join(" ")}>
      <div className={styles.container1}>
        <img
          className={styles.containerChild}
          loading="lazy"
          alt=""
          src="/group-66.svg"
        />
      </div>
      <div className={styles.container2}>
        <h3 className={styles.buyGiftCards}>Buy gift Cards with bitcoin</h3>
      </div>
      <div className={styles.bitcoinDescription}>
        <div className={styles.shopFrom300}>
          Shop from 300+ Brands Using Bitcoin | No Additional Fees with Bitcoin
          | Use Bitcoin to Earn Extra Points
        </div>
        <div className={styles.shopWithBitcoinButton}>
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
    </div>
  );
};

Container.propTypes = {
  className: PropTypes.string,
};

export default Container;
