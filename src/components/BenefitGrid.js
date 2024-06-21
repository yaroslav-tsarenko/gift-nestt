import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./BenefitGrid.module.css";

const BenefitGrid = ({ className = "", propTop }) => {
  const benefitGridStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div
      className={[styles.benefitGrid, className].join(" ")}
      style={benefitGridStyle}
    >
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <img className={styles.starbucksIcon} alt="" src="/starbucks.svg" />
      </div>
      <div className={styles.benefitGridInner}>
        <div className={styles.containerParent}>
          <div className={styles.container}>
            <div className={styles.starbucks}>Starbucks</div>
          </div>
          <div className={styles.membersEarnUp}>Members earn up to 6%</div>
        </div>
      </div>
    </div>
  );
};

BenefitGrid.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
};

export default BenefitGrid;
