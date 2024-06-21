import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Main.module.css";

const Main = ({ className = "" }) => {
  const navigate = useNavigate();

  const onBuyGiftCardsClick = useCallback(() => {
    navigate("/productspage");
  }, [navigate]);

  const onBuyForBusinessClick = useCallback(() => {
    navigate("/businesspage");
  }, [navigate]);

  return (
    <section className={[styles.main, className].join(" ")}>
      <div className={styles.pageParent}>
        <div className={styles.page}>
          <img
            className={styles.pageChild}
            loading="lazy"
            alt=""
            src="/group-65.svg"
          />
          <div className={styles.bonusCard}>
            <div className={styles.buyA100}>
              Buy a $100 Nike Gift Card, get a $10 Bonus Card! Promo Code:
              nike100
            </div>
          </div>
        </div>
        <header className={styles.dividerContainer}>
          <div className={styles.logoContainer}>
            <div className={styles.logoRowParent}>
              <div className={styles.logoRow}>
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
            <div className={styles.navigation}>
              <div className={styles.menu}>
                <div className={styles.menuItems}>
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
                <div className={styles.menuItems1}>
                  <div className={styles.promos}>Promos</div>
                </div>
                <div className={styles.menuItems2}>
                  <div className={styles.buyWithCrypto}>Buy With Crypto</div>
                </div>
              </div>
            </div>
            <div className={styles.user}>
              <div className={styles.userOptions}>
                <div className={styles.userItems}>
                  <div className={styles.locationLanguage}>
                    <div className={styles.locationLanguageInner}>
                      <img
                        className={styles.frameChild}
                        loading="lazy"
                        alt=""
                        src="/group-62.svg"
                      />
                    </div>
                    <div className={styles.unitedStates}>United States</div>
                  </div>
                </div>
                <div className={styles.userItems1}>
                  <div className={styles.frameParent}>
                    <div className={styles.frameWrapper}>
                      <input
                        className={styles.frameItem}
                        type="radio"
                        name="radioGroup-1"
                      />
                    </div>
                    <div className={styles.en}>en</div>
                  </div>
                </div>
                <div className={styles.account}>
                  <div className={styles.accountLink}>
                    <input
                      className={styles.accountLinkChild}
                      type="radio"
                      name="radioGroup-1"
                    />
                  </div>
                  <div className={styles.myAccount}>My Account</div>
                </div>
                <div className={styles.cart}>
                  <img
                    className={styles.cartChild}
                    loading="lazy"
                    alt=""
                    src="/group-63.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
      <div className={styles.cartTitleWrapper}>
        <div className={styles.cartTitle}>
          <div className={styles.yourCartWrapper}>
            <h1 className={styles.yourCart}>Your Cart</h1>
          </div>
          <div className={styles.viewOrEdit}>
            View or edit your cart before checkout
          </div>
        </div>
      </div>
    </section>
  );
};

Main.propTypes = {
  className: PropTypes.string,
};

export default Main;
