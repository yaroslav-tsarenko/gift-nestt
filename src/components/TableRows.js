import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./TableRows.module.css";

const TableRows = ({
  className = "",
  payByCreditCardACHOrWire,
  reportingAndOrderTracking,
  propMinWidth,
  propWidth,
  propMinWidth1,
  propWidth1,
}) => {
  const cellStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const payByCreditStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const cell1Style = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const reportingAndOrderStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div className={[styles.tableRows, className].join(" ")}>
      <div className={styles.cellParent}>
        <div className={styles.cell} style={cellStyle}>
          <div className={styles.payByCredit} style={payByCreditStyle}>
            {payByCreditCardACHOrWire}
          </div>
        </div>
        <div className={styles.cell1} />
        <img className={styles.cellIcon} alt="" src="/cell-3.svg" />
      </div>
      <div className={styles.cellGroup}>
        <div className={styles.cell2} style={cell1Style}>
          <div
            className={styles.reportingAndOrder}
            style={reportingAndOrderStyle}
          >
            {reportingAndOrderTracking}
          </div>
        </div>
        <div className={styles.cell3} />
        <img className={styles.cellIcon1} alt="" src="/cell-3.svg" />
      </div>
    </div>
  );
};

TableRows.propTypes = {
  className: PropTypes.string,
  payByCreditCardACHOrWire: PropTypes.string,
  reportingAndOrderTracking: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
  propWidth: PropTypes.any,
  propMinWidth1: PropTypes.any,
  propWidth1: PropTypes.any,
};

export default TableRows;
