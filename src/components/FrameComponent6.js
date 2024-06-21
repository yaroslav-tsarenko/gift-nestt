import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./FrameComponent6.module.css";

const FrameComponent6 = ({
  className = "",
  link1,
  propMinWidth,
  propDebugCommit,
  propDebugCommit1,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const linkIconStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
    };
  }, [propDebugCommit]);

  const frameDiv2Style = useMemo(() => {
    return {
      debugCommit: propDebugCommit1,
    };
  }, [propDebugCommit1]);

  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.wonderfulWrapper}>
        <h3 className={styles.wonderful}>Wonderful!</h3>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.linkParent} style={frameDiv1Style}>
          <img
            className={styles.linkIcon}
            loading="lazy"
            alt=""
            src="/link-21.svg"
            style={linkIconStyle}
          />
          <div className={styles.frameWrapper}>
            <div className={styles.basedOnParent} style={frameDiv2Style}>
              <div className={styles.basedOn}>{`Based on `}</div>
              <div className={styles.strongWrapper}>
                <div className={styles.strong}>
                  <div className={styles.reviews}>10,967 reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.svgWrapper}>
          <img className={styles.svgIcon} alt="" src="/svg.svg" />
        </div>
      </div>
      <div className={styles.linkWrapper}>
        <img className={styles.linkIcon1} loading="lazy" alt="" src={link1} />
      </div>
    </div>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
  link1: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
  propDebugCommit: PropTypes.any,
  propDebugCommit1: PropTypes.any,
};

export default FrameComponent6;
