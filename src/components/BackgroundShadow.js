import { Button } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./BackgroundShadow.module.css";

const BackgroundShadow = ({ className = "" }) => {
  return (
    <div className={[styles.backgroundshadow, className].join(" ")}>
      <div className={styles.heading1DominosEgiftCaWrapper}>
        <h1 className={styles.heading1}>FedEx® eGift Card</h1>
      </div>
      <div className={styles.purchaseOptions}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.buttonParent}>
              <img
                className={styles.buttonIcon}
                loading="lazy"
                alt=""
                src="/button.svg"
              />
              <div className={styles.container}>
                <div className={styles.containerInner}>
                  <div className={styles.recipientLabelParent}>
                    <h3 className={styles.recipientLabel}>$</h3>
                    <div className={styles.recipientNameInput}>
                      <div className={styles.toLabel}>25.00</div>
                    </div>
                  </div>
                </div>
                <div className={styles.horizontalDivider} />
              </div>
              <img className={styles.buttonIcon1} alt="" src="/button-1.svg" />
            </div>
            <div className={styles.toRecipientLabel}>
              <div className={styles.to100}>( $5 to $100 )</div>
            </div>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.deliveryBtnRowParent}>
              <div className={styles.deliveryBtnRow}>
                <div className={styles.button}>
                  <img className={styles.tagIcon} alt="" src="/tag-icon.svg" />
                  <div className={styles.button1}>$5</div>
                  <img className={styles.tagIcon1} alt="" src="/tag-icon.svg" />
                </div>
                <Button
                  className={styles.button2}
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "16",
                    background: "#f24452",
                    borderRadius: "96px",
                    "&:hover": { background: "#f24452" },
                    height: 54,
                  }}
                >
                  $25
                </Button>
                <Button
                  className={styles.button3}
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#f24452",
                    fontSize: "16",
                    background: "#fff",
                    border: "#d9d9d9 solid 1px",
                    borderRadius: "96px",
                    "&:hover": { background: "#fff" },
                    height: 54,
                  }}
                >
                  $50
                </Button>
              </div>
              <div className={styles.button4}>
                <img className={styles.tagIcon2} alt="" src="/tag-icon1.svg" />
                <div className={styles.button5}>$100</div>
                <img className={styles.tagIcon3} alt="" src="/tag-icon1.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.backgroundshadowInner}>
        <div className={styles.svgParent}>
          <img
            className={styles.svgIcon}
            loading="lazy"
            alt=""
            src="/svg.svg"
          />
          <div className={styles.membersWillEarn}>
            Members will earn up to 117 eGifter Points™
          </div>
        </div>
      </div>
      <div className={styles.backgroundshadowWrapper}>
        <div className={styles.backgroundshadow1}>
          <div className={styles.backgroundhorizontalborder}>
            <img className={styles.svgIcon1} alt="" src="/svg-110.svg" />
            <input
              className={styles.fedexPromotion}
              placeholder="FedEx® Promotion"
              type="text"
            />
          </div>
          <div className={styles.promoDescriptionWrapper}>
            <div className={styles.promoDescription}>
              <div className={styles.buyA25Container}>
                <p className={styles.buyA25}>
                  Buy a $25 FedEx’s Gift Card for only $20! Promo Code:
                </p>
                <p className={styles.ship24}>SHIP24</p>
              </div>
              <div className={styles.itemLimitedContainer}>
                <p className={styles.limitedTo5}>
                  Limited to 5 Promos per Customer
                </p>
                <p className={styles.offerEnds53124}>
                  Offer Ends 5/31/24 or while supplies last.
                </p>
                <p className={styles.only25Cards}>
                  Only $25 Cards qualify for the Promotion. If you need
                </p>
                <p className={styles.morePleaseSelect}>
                  more, please select a larger quantity, not a higher value.
                </p>
                <p className={styles.giftnestPointsAre}>
                  GiftNest Points are not earned on this promotion.
                </p>
                <p className={styles.promoIsOnly}>
                  Promo is only available on egifter.com, and not on
                </p>
                <p className={styles.rewardsExpressOr}>
                  Rewards Express or eGifter Rewards.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.item} />
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.frameDiv}>
          <div className={styles.buttonGroup}>
            <Button
              className={styles.button6}
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#f24452",
                fontSize: "16",
                background: "#fff",
                border: "#d9d9d9 solid 1px",
                borderRadius: "96px",
                "&:hover": { background: "#fff" },
                height: 54,
              }}
            >
              Send to a Friend
            </Button>
            <Button
              className={styles.button7}
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                background: "#f24452",
                borderRadius: "96px",
                "&:hover": { background: "#f24452" },
                width: 177,
                height: 54,
              }}
            >
              Add to Cart
            </Button>
          </div>
        </div>
        <div className={styles.separator} />
      </div>
      <div className={styles.frameParent1}>
        <div className={styles.frameParent2}>
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src="/group-46.svg"
          />
          <div className={styles.businessDescContentWrapper}>
            <div className={styles.businessDescContent}>
              <h3 className={styles.heading2}>Buying for business?</h3>
              <div className={styles.buyFedexGiftContainer}>
                <span>
                  <p className={styles.buyFedexGift}>
                    Buy FedEx® gift cards in larger quantities for businesses
                  </p>
                  <p className={styles.andOrganizations}>and organizations.</p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.buttonWrapper}>
          <Button
            className={styles.button8}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "16",
              background: "#0078a9",
              borderRadius: "96px",
              "&:hover": { background: "#0078a9" },
              height: 54,
            }}
          >
            Buy For Business
          </Button>
        </div>
      </div>
      <div className={styles.separator1} />
      <div className={styles.frameParent3}>
        <div className={styles.descriptionImageWrapper}>
          <div className={styles.descriptionImage}>
            <div className={styles.svgGroup}>
              <img className={styles.svgIcon2} alt="" src="/svg-27.svg" />
              <h3 className={styles.description}>Description</h3>
            </div>
            <div className={styles.descriptionImageInner}>
              <div className={styles.frameParent4}>
                <div className={styles.svgWrapper}>
                  <img className={styles.svgIcon3} alt="" src="/svg-31.svg" />
                </div>
                <div className={styles.validForUse}>
                  Valid for use in the United States only
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.fedexIsMoreContainer}>
          <span className={styles.fedexIsMoreContainer1}>
            <a
              className={styles.wwwfedexcom}
              href="http://www.fedex.com"
              target="_blank"
            >
              www.fedex.com
            </a>
            <a
              className={styles.wwwfedexcom1}
              href="http://www.fedex.com"
              target="_blank"
            >
              www.fedex.com
            </a>
          </span>
        </div>
        <div className={styles.websiteLinkParent}>
          <div className={styles.websiteLink}>
            <div
              className={styles.forMoreInformation}
            >{`For more information, visit `}</div>
            <div className={styles.fedex}>FedEx®</div>
          </div>
          <div className={styles.fedexEgiftCards}>
            FedEx® eGift Cards are available from $5 to $100
          </div>
        </div>
        <div className={styles.balanceCheckLink}>
          <div className={styles.balanceCheckContainer}>
            <div className={styles.lineIconsWrapper}>
              <img
                className={styles.lineIcons}
                loading="lazy"
                alt=""
                src="/line-icons.svg"
              />
            </div>
            <h3 className={styles.giftCardBalance}>Gift Card Balance Check</h3>
          </div>
          <div className={styles.cardBalanceCheck}>
            <div className={styles.checkTheBalanceOnYourWrapper}>
              <div
                className={styles.checkTheBalance}
              >{`Check the balance on your `}</div>
            </div>
            <div className={styles.fedexEgiftCard}>FedEx eGift Card</div>
          </div>
        </div>
        <div className={styles.spreadWordLink}>
          <div className={styles.spreadWordContainer}>
            <div className={styles.svgContainer}>
              <img className={styles.svgIcon4} alt="" src="/svg-41.svg" />
            </div>
            <h3 className={styles.spreadTheWord}>Spread the word:</h3>
          </div>
          <img
            className={styles.spreadWordLinkChild}
            loading="lazy"
            alt=""
            src="/group-84.svg"
          />
        </div>
        <div className={styles.paragraphbackgroundborder}>
          <div className={styles.fedexTerms}>{`FedEx® Terms & Conditions`}</div>
          <div className={styles.usableUpToContainer}>
            <span className={styles.usableUpToContainer1}>
              {`Usable up to balance only to purchase goods or services at participating FedEx® locations in the U.S. Not redeemable to purchase gift cards. Not redeemable for cash except as required by law. Not a credit or debit card. Safeguard the card. It will not be replaced or replenished if lost, stolen, or used without authorization. CARDCO CXXV, Inc. is the card issuer and sole obligor to card owner. CARDCO may delegate its issuer obligations to an assignee, without recourse. If delegated, the assignee, and not CARDCO, will be the sole obligor to card owner. Resale by any unlicensed vendor or through any unauthorized channels such as online auctions is prohibited. Purchase, use, or acceptance of card constitutes acceptance of these terms. For balance inquiries, go to `}
              <a
                className={styles.wwwfedexcom2}
                href="http://www.fedex.com"
                target="_blank"
              >
                <span className={styles.wwwfedexcom3}>www.fedex.com</span>
              </a>
              {` or call 800-463-3339. For other inquiries, visit `}
              <a
                className={styles.wwwfedexcom4}
                href="http://www.fedex.com"
                target="_blank"
              >
                <span className={styles.wwwfedexcom5}>www.fedex.com</span>
              </a>
              . ©FedEx. FedEx® and the FedEx logo are registered trademarks of
              FedEx.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

BackgroundShadow.propTypes = {
  className: PropTypes.string,
};

export default BackgroundShadow;
