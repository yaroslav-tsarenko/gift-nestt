import { Button } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./FrameComponent7.module.css";

const FrameComponent7 = ({ className = "" }) => {
  return (
    <section className={[styles.visaContentWrapper, className].join(" ")}>
      <div className={styles.visaContent}>
        <div className={styles.visaHeading}>
          <h1
            className={styles.heading3}
          >{`Visa® & American Express® Rewards`}</h1>
        </div>
        <div className={styles.rewardDescription}>
          <h3 className={styles.heading4}>
            The flexible reward your recipients will love.
          </h3>
        </div>
        <div className={styles.rewardCards}>
          <div className={styles.rewardCardDetails}>
            <div className={styles.rewardCardInfo}>
              <div className={styles.deliverVisaOrContainer}>
                <span>{`Deliver `}</span>
                <b>Visa®</b>
                <span>{` or `}</span>
                <b>American Express®</b>
                <span>
                  {" "}
                  Reward cards for employee rewards, customer promotions,
                  marketing incentives, and beyond. Opt to send digital reward
                  cards via email or traditional mail physical cards—the
                  decision is yours!
                </span>
              </div>
              <div className={styles.availableFrom5}>
                Available from $5 to $2,000 and accepted anywhere Visa or
                American Express is accepted in the US or Canada.
              </div>
            </div>
          </div>
          <div className={styles.visaRewardCardLogosWrapper}>
            <div className={styles.visaRewardCardLogos}>
              <img
                className={styles.visaerc6mob2bFp01pngIcon}
                rows={10}
                cols={16}
                alt=""
                src="/visaerc6mob2b-fp01png@2x.png"
              />
              <div className={styles.stackedVisa}>
                <img
                  className={styles.stackedFaceplatesTemplatepnIcon}
                  alt=""
                  src="/stackedfaceplatestemplatepng@2x.png"
                />
                <img
                  className={styles.visaerc6mob2bFp01pngIcon1}
                  rows={11}
                  cols={16}
                  alt=""
                  src="/visaerc6mob2b-fp01png@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rewardCardButton}>
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
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

FrameComponent7.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent7;
