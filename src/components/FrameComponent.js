import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <footer className={[styles.paymentOptionsParent, className].join(" ")}>
      <div className={styles.paymentOptions}>
        <div className={styles.acceptedPayments}>
          <div className={styles.heading2EgifterAcceptsWrapper}>
            <div className={styles.heading2}>eGifter accepts</div>
          </div>
          <div className={styles.paymentMethodsIcons}>
            <img
              className={styles.visaColoredsvgIcon}
              loading="lazy"
              alt=""
              src="/visacoloredsvg.svg"
            />
            <img
              className={styles.mastercardColoredsvgIcon}
              loading="lazy"
              alt=""
              src="/mastercardcoloredsvg.svg"
            />
            <img
              className={styles.americanExpressColoredsvgIcon}
              loading="lazy"
              alt=""
              src="/americanexpresscoloredsvg.svg"
            />
            <img
              className={styles.discoverColoredsvgIcon}
              loading="lazy"
              alt=""
              src="/americanexpresscoloredsvg.svg"
            />
            <img
              className={styles.paypalTextLogosvgIcon}
              alt=""
              src="/visacoloredsvg.svg"
            />
            <img
              className={styles.bitcoinTextLogosvgIcon}
              alt=""
              src="/visacoloredsvg.svg"
            />
            <img
              className={styles.bitcoincashTextLogosvgIcon}
              alt=""
              src="/visacoloredsvg.svg"
            />
            <img
              className={styles.dogecoinTextLogosvgIcon}
              alt=""
              src="/visacoloredsvg.svg"
            />
            <img
              className={styles.shibaInuTextLogosvgIcon}
              alt=""
              src="/shibainutextlogosvg.svg"
            />
            <img
              className={styles.skrillTextLogosvgIcon}
              alt=""
              src="/visacoloredsvg.svg"
            />
            <img
              className={styles.clickToPayTextLogosvgIcon}
              alt=""
              src="/clicktopaytextlogosvg.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.footerLinks}>
        <div className={styles.footerColumns}>
          <div className={styles.consumerLinks}>
            <b className={styles.headerHeading}>For Consumers</b>
            <div className={styles.separator} />
            <div className={styles.buyGiftCards}>Buy Gift Cards</div>
            <div className={styles.lastMinuteGifts}>Last Minute Gifts</div>
            <div className={styles.groupGift}>Group Gift</div>
            <div className={styles.groupGiftBy}>Group Gift by Brand</div>
            <div className={styles.earnPoints}>Earn Points</div>
            <div className={styles.checkGiftCard}>Check Gift Card Balance</div>
          </div>
          <div className={styles.paymentLinks}>
            <b className={styles.headerHeading1}>Payment Options</b>
            <div className={styles.separator1} />
            <div className={styles.buyWithCredit}>Buy with Credit Cards</div>
            <div className={styles.buyWithPaypal}>Buy with PayPal</div>
            <div className={styles.buyWithSkrill}>Buy with Skrill</div>
            <a
              className={styles.buyWithClick}
              href="https://www.figma.com/design/V5F1aDkLCdNcgDuscwWIyY?node-id=2-27604"
              target="_blank"
            >
              Buy with Click To Pay
            </a>
            <div className={styles.buyWithGoogle}>Buy with Google Pay</div>
            <div className={styles.buyWithApple}>Buy with Apple Pay</div>
            <a
              className={styles.buyWithCryptocurrency}
              href="https://www.figma.com/design/V5F1aDkLCdNcgDuscwWIyY?node-id=2-31034"
              target="_blank"
            >
              Buy with Cryptocurrency
            </a>
            <div className={styles.buyWithBitcoin}>Buy with Bitcoin</div>
            <div className={styles.buyWithBitcoin1}>Buy with Bitcoin Cash</div>
            <div className={styles.buyWithDogecoin}>Buy with Dogecoin</div>
            <div className={styles.buyWithShiba}>Buy with Shiba Inu</div>
          </div>
          <div className={styles.businessLinks}>
            <b className={styles.headerHeading2}>For Business</b>
            <div className={styles.separator2} />
            <div className={styles.contactSales}>Contact Sales</div>
            <div className={styles.buyInBulk}>Buy in Bulk</div>
            <div
              className={styles.rewardsIncentives}
            >{`Rewards & Incentives`}</div>
            <div className={styles.giftCardApi}>Gift Card API</div>
            <div className={styles.platform}>Platform</div>
            <div className={styles.features}>Features</div>
            <div className={styles.clients}>Clients</div>
            <div className={styles.giftnestRewardsChoice}>
              GiftNest Rewards Choice Card™
            </div>
          </div>
          <div className={styles.companyLinks}>
            <b className={styles.headerHeading3}>Company</b>
            <div className={styles.separator3} />
            <div className={styles.press}>Press</div>
            <div className={styles.inTheNews}>In the News</div>
            <div className={styles.giftnestStoriesBlog}>
              GiftNest Stories Blog
            </div>
            <div className={styles.careers}>Careers</div>
          </div>
          <div className={styles.supportLinks}>
            <b className={styles.headerHeading4}>Support</b>
            <div className={styles.separator4} />
            <a
              className={styles.orderStatus}
              href="https://www.figma.com/design/V5F1aDkLCdNcgDuscwWIyY?node-id=2-36491"
              target="_blank"
            >
              Order Status
            </a>
            <div className={styles.helpCenter}>Help Center</div>
            <div className={styles.contactSupport}>Contact Support</div>
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.link} />
        <div className={styles.link1} />
        <div className={styles.containerParent}>
          <div className={styles.container}>
            <div className={styles.heading3}>Got Gift? Connect with us!</div>
            <div className={styles.storeLinks}>
              <img className={styles.linkIcon} alt="" src="/link.svg" />
              <img className={styles.linkIcon1} alt="" src="/link-1.svg" />
              <img className={styles.linkIcon2} alt="" src="/link-2.svg" />
              <img className={styles.linkIcon3} alt="" src="/link-3.svg" />
              <img className={styles.linkIcon4} alt="" src="/link-4.svg" />
            </div>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.heading3GiftOnTheGoWitParent}>
              <div className={styles.heading31}>
                Gift on the go with the GiftNest app!
              </div>
              <img
                className={styles.enBadgeWebGenericpngIcon}
                loading="lazy"
                alt=""
                src="/en-badge-web-genericpng@2x.png"
              />
            </div>
            <img
              className={styles.downloadOnTheAppStoreBadgIcon}
              loading="lazy"
              alt=""
              src="/download-on-the-app-store-badge-en-rgb-blksvg.svg"
            />
          </div>
          <div className={styles.socialLinksContainer}>
            <div className={styles.linkParent}>
              <img className={styles.linkIcon5} alt="" src="/link-5.svg" />
              <img className={styles.linkIcon6} alt="" src="/link-6.svg" />
              <img className={styles.linkIcon7} alt="" src="/link-7.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <div className={styles.legalLinksParent}>
          <div className={styles.legalLinks}>
            <div className={styles.termsOfService}>Terms of Service</div>
            <div className={styles.bulkOrderTerms}>Bulk Order Terms</div>
            <div className={styles.privacyPolicy}>Privacy Policy</div>
            <div className={styles.siteMap}>Site Map</div>
          </div>
          <div className={styles.egiftercomAllRights}>
            © 2011 - 2024 eGifter.com. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
