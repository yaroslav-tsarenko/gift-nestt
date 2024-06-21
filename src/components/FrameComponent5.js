import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./FrameComponent5.module.css";

const FrameComponent5 = ({
  className = "",
  propDebugCommit,
  propDebugCommit1,
}) => {
  const containerStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
    };
  }, [propDebugCommit]);

  const dayAgoStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit1,
    };
  }, [propDebugCommit1]);

  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameGroup}>
        <div className={styles.imgParent}>
          <img className={styles.imgIcon} alt="" src="/img.svg" />
          <div className={styles.container}>
            <div className={styles.verified}>Verified</div>
          </div>
        </div>
        <div className={styles.veryInterestingParent}>
          <b className={styles.veryInteresting}>Very interesting</b>
          <div className={styles.container1}>
            <div className={styles.thisIsInteresting}>
              This is interesting to use
            </div>
          </div>
          <div className={styles.containerParent}>
            <div className={styles.container2} style={containerStyle}>
              <b className={styles.susan}>Susan</b>
            </div>
            <div className={styles.dayAgo} style={dayAgoStyle}>
              1 day ago
            </div>
          </div>
        </div>
      </div>
      <div
        className={styles.showingOur4}
      >{`Showing our 4 & 5 star reviews`}</div>
    </div>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propDebugCommit: PropTypes.any,
  propDebugCommit1: PropTypes.any,
};

export default FrameComponent5;
