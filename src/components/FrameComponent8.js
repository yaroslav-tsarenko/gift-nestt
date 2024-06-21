import {
  Button,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
} from "@mui/material";
import TableRows from "./TableRows";
import PropTypes from "prop-types";
import styles from "./FrameComponent8.module.css";

const FrameComponent8 = ({ className = "" }) => {
  return (
    <section className={[styles.featureWrapper, className].join(" ")}>
      <div className={styles.feature}>
        <form className={styles.table}>
          <div className={styles.tableHeader}>
            <Button
              className={styles.columnheader}
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "32",
                background: "#012e71",
                borderColor: "#dee2e6",
                borderWidth: "0px 0px 2px 0px",
                borderStyle: "solid",
                borderRadius: "0px 0px 0px 0px",
                "&:hover": { background: "#012e71" },
                height: 93,
              }}
            >
              Feature Comparison
            </Button>
            <div className={styles.logos}>
              <div className={styles.columnheader1}>
                <img
                  className={styles.columnheaderChild}
                  alt=""
                  src="/group-7@2x.png"
                />
              </div>
              <div className={styles.columnheader2}>
                <div className={styles.egifterRewardsLogopngParent}>
                  <img
                    className={styles.egifterRewardsLogopngIcon}
                    alt=""
                    src="/egifterrewardslogopng@2x.png"
                  />
                  <div className={styles.rectangleParent}>
                    <div className={styles.frameChild} />
                    <img
                      className={styles.logoGiftnest}
                      alt=""
                      src="/logo--giftnest-1@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.tableRows}>
            <div className={styles.tableCells}>
              <Button
                className={styles.cell}
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "16",
                  background: "#012e71",
                  borderColor: "#dee2e6",
                  borderWidth: "1px 0px 0px 0px",
                  borderStyle: "solid",
                  borderRadius: "0px 0px 0px 0px",
                  "&:hover": { background: "#012e71" },
                  height: 49.5,
                }}
              >
                300+ Digital Gift Cards
              </Button>
              <div className={styles.emptyCells}>
                <img className={styles.cellIcon} alt="" src="/cell.svg" />
                <img className={styles.cellIcon1} alt="" src="/cell-1.svg" />
              </div>
            </div>
            <div className={styles.choiceCards}>
              <div className={styles.cell1}>
                <div className={styles.egifterRewardsChoice}>
                  eGifter Rewards Choice Cards™
                </div>
              </div>
              <div className={styles.emptyChoiceCells}>
                <img className={styles.cellIcon2} alt="" src="/cell-2.svg" />
                <img className={styles.cellIcon3} alt="" src="/cell-3.svg" />
              </div>
            </div>
          </div>
          <div className={styles.tableRows1}>
            <div className={styles.cellParent}>
              <div className={styles.cell2}>
                <div
                  className={styles.visaAmerican}
                >{`Visa® & American Express® Rewards Cards`}</div>
              </div>
              <div className={styles.cellGroup}>
                <img className={styles.cellIcon4} alt="" src="/cell-2.svg" />
                <img className={styles.cellIcon5} alt="" src="/cell-3.svg" />
              </div>
            </div>
            <div className={styles.cellContainer}>
              <Button
                className={styles.cell3}
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "16",
                  background: "#012e71",
                  borderColor: "#dee2e6",
                  borderWidth: "1px 0px 0px 0px",
                  borderStyle: "solid",
                  borderRadius: "0px 0px 0px 0px",
                  "&:hover": { background: "#012e71" },
                  height: 49,
                }}
              >
                Send by email
              </Button>
              <div className={styles.frameDiv}>
                <img
                  className={styles.cellIcon6}
                  loading="lazy"
                  alt=""
                  src="/cell-2.svg"
                />
                <img
                  className={styles.cellIcon7}
                  loading="lazy"
                  alt=""
                  src="/cell-3.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.tableRows2}>
            <div className={styles.cell4}>
              <div className={styles.sendToOne}>
                Send to one or multiple recipients
              </div>
            </div>
            <div className={styles.cellParent1}>
              <img className={styles.cellIcon8} alt="" src="/cell-2.svg" />
              <img className={styles.cellIcon9} alt="" src="/cell-3.svg" />
            </div>
          </div>
          <TableRows
            payByCreditCardACHOrWire="Pay by Credit Card, ACH or Wire"
            reportingAndOrderTracking="Reporting and Order Tracking"
          />
          <TableRows
            payByCreditCardACHOrWire="Custom Email Templates"
            reportingAndOrderTracking="Physical Gift Cards"
            propMinWidth="183px"
            propWidth="182.9px"
            propMinWidth1="139px"
            propWidth1="139.3px"
          />
          <div className={styles.tableRows3}>
            <div className={styles.cell5}>
              <div
                className={styles.manageUsersDepartments}
              >{`Manage Users, Departments & Budgets`}</div>
            </div>
            <div className={styles.cell6} />
            <img className={styles.cellIcon10} alt="" src="/cell-3.svg" />
          </div>
          <div className={styles.tableRows4}>
            <Button
              className={styles.cell7}
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                background: "#012e71",
                borderColor: "#dee2e6",
                borderWidth: "1px 0px 0px 0px",
                borderStyle: "solid",
                borderRadius: "0px 0px 0px 0px",
                "&:hover": { background: "#012e71" },
                height: 49,
              }}
            >
              Single Sign-On Available
            </Button>
            <div className={styles.cell8} />
            <img className={styles.cellIcon11} alt="" src="/cell-3.svg" />
          </div>
          <div className={styles.tableRows5}>
            <Button
              className={styles.cell9}
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                background: "#012e71",
                borderColor: "#dee2e6",
                borderWidth: "1px 0px 0px 0px",
                borderStyle: "solid",
                borderRadius: "0px 0px 0px 0px",
                "&:hover": { background: "#012e71" },
                height: 48.5,
              }}
            >{`API & Integrations Available`}</Button>
            <TextField
              className={styles.cell10}
              variant="outlined"
              sx={{
                "& fieldset": { borderColor: "#dee2e6" },
                "& .MuiInputBase-root": {
                  height: "48.5px",
                  borderRadius: "0px 0px 0px 0px",
                },
                width: "208.1px",
              }}
            />
            <img className={styles.cellIcon12} alt="" src="/cell-16.svg" />
          </div>
        </form>
      </div>
    </section>
  );
};

FrameComponent8.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent8;
