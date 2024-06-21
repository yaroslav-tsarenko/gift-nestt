import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./FrameComponent2.module.css";

const FrameComponent2 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onBuyGiftCardsClick = useCallback(() => {
    navigate("/productspage");
  }, [navigate]);

  const onBuyForBusinessClick = useCallback(() => {
    navigate("/businesspage");
  }, [navigate]);

  return (
    <div className={[styles.containerParent, className].join(" ")}>
      <div className={styles.container}>
        <img className={styles.containerChild} alt="" src="/group-65.svg" />
        <div className={styles.bonusCardContainer}>
          <div className={styles.buyA100}>
            Buy a $100 Nike Gift Card, get a $10 Bonus Card! Promo Code: nike100
          </div>
        </div>
      </div>
      <div className={styles.container1}>
        <div className={styles.container2}>
          <div className={styles.container3}>
            <div className={styles.container4}>
              <div className={styles.horizontalDividerParent}>
                <div className={styles.horizontalDivider} />
                <div className={styles.horizontalDivider1} />
              </div>
            </div>
            <img
              className={styles.logoGiftnest}
              loading="lazy"
              alt=""
              src="/logo--giftnest@2x.png"
            />
          </div>
          <div className={styles.container5}>
            <div className={styles.cardsContainer}>
              <div className={styles.cards}>
                <div
                  className={styles.buyGiftCards}
                  onClick={onBuyGiftCardsClick}
                >
                  Buy Gift Cards
                </div>
              </div>
              <div
                className={styles.buyForBusiness}
                onClick={onBuyForBusinessClick}
              >
                Buy For Business
              </div>
              <div className={styles.cards1}>
                <div className={styles.promos}>Promos</div>
              </div>
              <div className={styles.cards2}>
                <div className={styles.buyWithCrypto}>Buy With Crypto</div>
              </div>
            </div>
          </div>
          <div className={styles.container6}>
            <div className={styles.locationLanguageContainer}>
              <div className={styles.locationWrapper}>
                <div className={styles.location}>
                  <div className={styles.locationItems}>
                    <img
                      className={styles.locationItemsChild}
                      alt=""
                      src="/group-62.svg"
                    />
                  </div>
                  <div className={styles.unitedStates}>United States</div>
                </div>
              </div>
              <div className={styles.locationLanguageContainerInner}>
                <div className={styles.frameParent}>
                  <div className={styles.frameWrapper}>
                    <input
                      className={styles.frameChild}
                      type="radio"
                      name="radioGroup-1"
                    />
                  </div>
                  <div className={styles.en}>en</div>
                </div>
              </div>
              <div className={styles.container7}>
                <div className={styles.container8}>
                  <input
                    className={styles.containerItem}
                    type="radio"
                    name="radioGroup-1"
                  />
                </div>
                <div className={styles.myAccount}>My Account</div>
              </div>
              <div className={styles.container9}>
                <img
                  className={styles.containerInner}
                  alt=""
                  src="/group-63.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
