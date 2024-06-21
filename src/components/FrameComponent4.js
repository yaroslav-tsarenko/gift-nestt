import PropTypes from "prop-types";
import styles from "./FrameComponent4.module.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.imgParent}>
        <img className={styles.imgIcon} alt="" src="/img.svg" />
        <div className={styles.container}>
          <div className={styles.verified}>Verified</div>
        </div>
      </div>
      <div className={styles.quickSimpleAndEasyParent}>
        <b className={styles.quickSimpleAnd}>Quick simple and easy</b>
        <div className={styles.container1}>
          <div className={styles.easyToUse}>Easy to use!</div>
        </div>
        <div className={styles.containerParent}>
          <div className={styles.container2}>
            <b className={styles.laura}>Laura,</b>
          </div>
          <div className={styles.daysAgo}>2 days ago</div>
        </div>
      </div>
    </div>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
