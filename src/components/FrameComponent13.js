import { Button } from "@mui/material";
import FrameComponent6 from "./FrameComponent6";
import FrameComponent5 from "./FrameComponent5";
import FrameComponent4 from "./FrameComponent4";
import PropTypes from "prop-types";
import styles from "./FrameComponent13.module.css";

const FrameComponent13 = ({ className = "" }) => {
  return (
    <section className={[styles.copyrightContentWrapper, className].join(" ")}>
      <div className={styles.copyrightContent}>
        <div className={styles.copyrightDetails}>
          <div className={styles.copyright2021}>
            Copyright © 2021 InComm. All Rights Reserved. The Visa eGift Card is
            issued by Sutton Bank, Member FDIC, pursuant to a license from Visa
            U.S.A. Inc. Card may be used in the U.S. and District of Columbia
            everywhere Visa debit cards are accepted. Cards are distributed and
            serviced by InComm Financial Services, Inc., which is licensed as a
            Money Transmitter by the New York State Department of Financial
            Services. No cash or ATM access.
          </div>
          <b
            className={styles.whiteHouseBlack}
          >{`White House Black Market Terms & Conditions`}</b>
          <div className={styles.whbmGiftCards}>
            WHBM Gift Cards and eGift Cards may be redeemed for your merchandise
            purchase at WHBM.com (US orders only), White House Black Market US
            boutiques and outlets, or by phone at 877.948.2525. When you make a
            merchandise purchase with your WHBM Gift Card or eGift Card, the
            value of your purchase plus any shipping and handling fees and sales
            tax, if applicable, will be automatically deducted from your
            available balance. You may check any remaining value online or by
            calling Customer Service at 877.948.2525. You may not add value back
            onto your Gift Card or eGift Card or redeem it for cash, except as
            required by law. WHBM Gift Cards and eGift Cards do not expire and
            have no fees. Your Gift Card or eGift Card number may be deactivated
            if issued or procured fraudulently. This card is distributed by a
            third party.
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.section}>
            <div className={styles.headingContainer}>
              <h1 className={styles.heading2}>What Our Customers Are Saying</h1>
            </div>
            <div className={styles.iframeBody}>
              <FrameComponent6
                link1="/link-12.svg"
                propMinWidth="105px"
                propDebugCommit="unset"
                propDebugCommit1="unset"
              />
              <FrameComponent5
                propDebugCommit="unset"
                propDebugCommit1="unset"
              />
              <FrameComponent4 />
              <div className={styles.easyReviewContainer}>
                <div className={styles.easyReview}>
                  <div className={styles.easyReviewDetails}>
                    <img className={styles.imgIcon} alt="" src="/img.svg" />
                    <div className={styles.container1}>
                      <div className={styles.verified}>Verified</div>
                    </div>
                  </div>
                  <div className={styles.easyParent}>
                    <b className={styles.easy}>Easy</b>
                    <div className={styles.container2}>
                      <div className={styles.easyToUseContainer}>
                        <p className={styles.easyToUse}>
                          Easy to use, fast, and with a wide variety
                        </p>
                        <p className={styles.ofCards}>of cards.</p>
                      </div>
                    </div>
                    <div className={styles.easyReviewerInfo}>
                      <div className={styles.container3}>
                        <b className={styles.jia}>Jia,</b>
                      </div>
                      <div className={styles.daysAgo}>2 days ago</div>
                    </div>
                  </div>
                </div>
                <div className={styles.svgWrapper}>
                  <img className={styles.svgIcon} alt="" src="/svg-1.svg" />
                </div>
              </div>
            </div>
            <div className={styles.moreReviewsButton}>
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
        </div>
      </div>
    </section>
  );
};

FrameComponent13.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent13;
