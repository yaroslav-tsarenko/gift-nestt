import { Button } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./PromoOverlay.module.css";

const PromoOverlay = ({ className = "" }) => {
  return (
    <section className={[styles.promoOverlay, className].join(" ")}>
      <div className={styles.overlayContent}>
        <img className={styles.svgIcon} alt="" src="/svg1.svg" />
        <b className={styles.promo}>Promo</b>
      </div>
      <div className={styles.shadowContainer}>
        <div className={styles.backgroundshadow}>
          <img
            className={styles.verticalborderIcon}
            loading="lazy"
            alt=""
            src="/verticalborder@2x.png"
          />
          <div className={styles.shadowContent}>
            <div className={styles.promoDetails}>
              <div className={styles.buyA50Container}>
                <span className={styles.buyA50Container1}>
                  <p className={styles.buyA50}>
                    Buy a $50 intel Card for only $42.50!
                  </p>
                  <p className={styles.promoCodeIntel424}>
                    Promo Code: INTEL424
                  </p>
                </span>
              </div>
              <div className={styles.smallValid}>
                Valid until May 28, 2024 or while supplies last!
              </div>
              <div className={styles.buttonRow}>
                <div className={styles.buttons}>
                  <Button
                    className={styles.button}
                    variant="contained"
                    sx={{
                      color: "#f24452",
                      fontSize: "12",
                      background: "#fff",
                      borderRadius: "32px",
                      "&:hover": { background: "#fff" },
                      height: 26,
                    }}
                  >
                    Buy for Myself
                  </Button>
                  <Button
                    className={styles.button1}
                    variant="contained"
                    sx={{
                      color: "#fff",
                      fontSize: "12",
                      background: "#f24452",
                      borderRadius: "32px",
                      "&:hover": { background: "#f24452" },
                      height: 26,
                    }}
                  >
                    Send to a Friend
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.button2} />
      </div>
      <div className={styles.item1}>
        <div className={styles.button3} />
      </div>
      <div className={styles.item2}>
        <div className={styles.button4} />
      </div>
      <div className={styles.item3}>
        <div className={styles.button5} />
      </div>
    </section>
  );
};

PromoOverlay.propTypes = {
  className: PropTypes.string,
};

export default PromoOverlay;
