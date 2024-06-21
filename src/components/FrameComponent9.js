import { Button } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./FrameComponent9.module.css";

const FrameComponent9 = ({ className = "" }) => {
  return (
    <section className={[styles.solutionContentWrapper, className].join(" ")}>
      <div className={styles.solutionContent}>
        <div className={styles.solutionHeading}>
          <h1 className={styles.headerHeading}>
            Which Rewards Program Suits Your Business Best
          </h1>
        </div>
        <div className={styles.arrowspngWrapper}>
          <img
            className={styles.arrowspngIcon}
            loading="lazy"
            alt=""
            src="/arrowspng@2x.png"
          />
        </div>
        <div className={styles.expressContentParent}>
          <div className={styles.expressContent}>
            <div className={styles.expressDescription}>
              <h1 className={styles.aQuickAnd}>
                A Quick and Easy Method to Send Gift Cards Instantly
              </h1>
              <img
                className={styles.linkIcon}
                loading="lazy"
                alt=""
                src="/link@2x.png"
              />
            </div>
            <div className={styles.expressParagraph}>
              <div className={styles.rewardsExpressOffersContainer}>
                <span>
                  <b>Rewards Express™</b>
                  <span>
                    {" "}
                    offers the quickest and simplest method to send digital gift
                    cards via email, whether you need just one or a hundred.
                    Personalize your order with a heartfelt message, your logo,
                    or a video greeting.
                  </span>
                </span>
              </div>
            </div>
            <div className={styles.expressButton}>
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
                }}
              >
                Buy Now
              </Button>
            </div>
          </div>
          <div className={styles.giftnestContentParent}>
            <div className={styles.giftnestContent}>
              <h1 className={styles.comprehensiveSolutionFor}>
                Comprehensive Solution for Your Rewards Program
              </h1>
              <div className={styles.linkParent}>
                <img
                  className={styles.linkIcon1}
                  alt=""
                  src="/link-11@2x.png"
                />
                <div className={styles.frameChild} />
                <img
                  className={styles.screenshot20240603185241RIcon}
                  loading="lazy"
                  alt=""
                  src="/screenshot-20240603-185241removebgpreview-3@2x.png"
                />
              </div>
              <div className={styles.giftnestRewardsIsContainer}>
                <span>
                  <b>GiftNest Rewards™</b>
                  <span>
                    {" "}
                    is an ideal solution for corporate gift card programs,
                    allowing you to reward your employees, incentivize
                    customers, and more. With custom branding, optional
                    integrations, and comprehensive reporting features, it's
                    tailored to meet your business needs.
                  </span>
                </span>
              </div>
            </div>
            <div className={styles.giftnestButton}>
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
                  width: 250,
                }}
              >
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent9.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent9;
