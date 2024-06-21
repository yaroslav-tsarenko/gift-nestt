import { Button } from "@mui/material";
import FrameComponent6 from "./FrameComponent6";
import FrameComponent5 from "./FrameComponent5";
import FrameComponent4 from "./FrameComponent4";
import PropTypes from "prop-types";
import styles from "./Testimonials.module.css";

const Testimonials = ({ className = "" }) => {
  return (
    <section className={[styles.testimonials, className].join(" ")}>
      <div className={styles.heading2WhatOurCustomersWrapper}>
        <h1 className={styles.heading2}>What Our Customers Are Saying</h1>
      </div>
      <div className={styles.iframeBody}>
        <FrameComponent6 link1="/link-31.svg" />
        <FrameComponent5 />
        <FrameComponent4 />
        <div className={styles.frameParent}>
          <div className={styles.imgParent}>
            <img className={styles.imgIcon} alt="" src="/img.svg" />
            <div className={styles.container}>
              <div className={styles.verified}>Verified</div>
            </div>
          </div>
          <div className={styles.easyParent}>
            <b className={styles.easy}>Easy</b>
            <div className={styles.frameGroup}>
              <div className={styles.containerParent}>
                <div className={styles.container1}>
                  <div className={styles.easyToUseContainer}>
                    <p className={styles.easyToUse}>
                      Easy to use, fast, and with a wide variety
                    </p>
                    <p className={styles.ofCards}>of cards.</p>
                  </div>
                </div>
                <div className={styles.containerGroup}>
                  <div className={styles.container2}>
                    <b className={styles.jia}>Jia,</b>
                  </div>
                  <div className={styles.daysAgo}>2 days ago</div>
                </div>
              </div>
              <div className={styles.svgWrapper}>
                <img className={styles.svgIcon} alt="" src="/svg-1.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.buttonWrapper}>
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
    </section>
  );
};

Testimonials.propTypes = {
  className: PropTypes.string,
};

export default Testimonials;
