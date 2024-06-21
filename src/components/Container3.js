import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";
import styles from "./Container3.module.css";

const Container3 = ({ className = "" }) => {
  return (
    <div className={[styles.container, className].join(" ")}>
      <div className={styles.container1}>
        <div className={styles.mockupContainerWrapper}>
          <div className={styles.mockupContainer}>
            <img className={styles.mockupIcon} alt="" src="/mockup@2x.png" />
            <img
              className={styles.rectangleIcon}
              loading="lazy"
              alt=""
              src="/rectangle@2x.png"
            />
          </div>
        </div>
        <div className={styles.container2}>
          <div className={styles.container3}>
            <div className={styles.container4}>
              <h1 className={styles.instantlyPurchaseAnd}>
                Instantly Purchase and Trade Gift Cards
              </h1>
            </div>
            <div className={styles.container5}>
              <div className={styles.purchaseHighQualityGift}>
                Purchase high-quality gift cards. Deliver them by email, text
                message, or in person.
              </div>
            </div>
            <TextField
              className={styles.inputContainer}
              placeholder="Search for gift cards"
              variant="outlined"
              InputProps={{
                endAdornment: <img width="18px" height="18px" src="/svg.svg" />,
              }}
              sx={{
                "& fieldset": { border: "none" },
                "& .MuiInputBase-root": {
                  height: "45px",
                  paddingRight: "39.5px",
                  borderRadius: "0px 0px 0px 0px",
                  fontSize: "18px",
                },
                "& .MuiInputBase-input": { color: "#1c1c1c" },
              }}
            />
            <div className={styles.container6}>
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
                }}
              >
                Buy Gift Cards
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.container7}>
          <h1 className={styles.areYouBuying}>Are you buying for Business?</h1>
          <div className={styles.buyGiftCards}>
            Buy gift cards in bulk for more rewards and discounts!
          </div>
          <div className={styles.container8}>
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
              }}
            >
              Learn More
            </Button>
          </div>
          <div className={styles.container9}>
            <div className={styles.link}>
              <div className={styles.paymentIcons}>
                <img
                  className={styles.visaerc6mob2bFp01pngIcon}
                  loading="lazy"
                  alt=""
                  src="/visaerc6mob2b-fp01png@2x.png"
                />
                <div className={styles.paymentIcon}>
                  <img
                    className={styles.stackedFaceplatesTemplatepnIcon}
                    alt=""
                    src="/stackedfaceplatestemplatepng@2x.png"
                  />
                  <img
                    className={styles.visaerc6mob2bFp01pngIcon1}
                    alt=""
                    src="/visaerc6mob2b-fp01png-1@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Container3.propTypes = {
  className: PropTypes.string,
};

export default Container3;
