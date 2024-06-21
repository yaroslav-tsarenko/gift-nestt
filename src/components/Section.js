import { Button } from "@mui/material";
import FrameComponent6 from "./FrameComponent6";
import FrameComponent5 from "./FrameComponent5";
import FrameComponent4 from "./FrameComponent4";
import PropTypes from "prop-types";
import styles from "./Section.module.css";

const Section = ({ className = "" }) => {
  return (
    <div className={[styles.section, className].join(" ")}>
      <div className={styles.reviewsHeadingContainer}>
        <h2 className={styles.heading2}>What Our Customers Are Saying</h2>
      </div>
      <div className={styles.iframeBody}>
        <FrameComponent6
          link1="/link-31.svg"
          propMinWidth="unset"
          propDebugCommit="unset"
          propDebugCommit1="unset"
        />
        <FrameComponent5 propDebugCommit="unset" propDebugCommit1="unset" />
        <FrameComponent4 />
        <div className={styles.thirdReview}>
          <div className={styles.thirdReviewContent}>
            <img className={styles.imgIcon} alt="" src="/img.svg" />
            <div className={styles.container}>
              <div className={styles.verified}>Verified</div>
            </div>
          </div>
          <b className={styles.easy}>Easy</b>
          <div className={styles.thirdReviewDetails}>
            <div className={styles.containerParent}>
              <div className={styles.container1}>
                <div className={styles.easyToUseContainer}>
                  <p className={styles.easyToUse}>
                    Easy to use, fast, and with a wide variety
                  </p>
                  <p className={styles.ofCards}>of cards.</p>
                </div>
              </div>
              <div className={styles.thirdReviewerInfo}>
                <div className={styles.container2}>
                  <b className={styles.jia}>Jia,</b>
                </div>
                <div className={styles.daysAgo}>2 days ago</div>
              </div>
            </div>
            <div className={styles.thirdReviewIcon}>
              <img className={styles.svgIcon} alt="" src="/svg-1.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.seeMoreReviewsButton}>
        <Button
          className={styles.button}
          variant="contained"
          sx={{
            color: "#fff",
            fontSize: "15",
            background: "#ee3023",
            borderRadius: "32px",
            "&:hover": { background: "#ee3023" },
            width: 194.9,
            height: 44.5,
          }}
        >
          See More Reviews
        </Button>
      </div>
    </div>
  );
};

Section.propTypes = {
  className: PropTypes.string,
};

export default Section;
