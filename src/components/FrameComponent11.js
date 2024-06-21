import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./FrameComponent11.module.css";

const FrameComponent11 = ({
  className = "",
  horizontalDividerFlex,
  horizontalDividerAlignSelf,
  horizontalDividerTop,
  horizontalDividerPosition,
  enDebugCommit,
  accountDebugCommit,
  propMinWidth,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      flex: horizontalDividerFlex,
      alignSelf: horizontalDividerAlignSelf,
      top: horizontalDividerTop,
      position: horizontalDividerPosition,
    };
  }, [
    horizontalDividerFlex,
    horizontalDividerAlignSelf,
    horizontalDividerTop,
    horizontalDividerPosition,
  ]);

  const groupIconStyle = useMemo(() => {
    return {
      debugCommit: enDebugCommit,
    };
  }, [enDebugCommit]);

  const unitedStatesStyle = useMemo(() => {
    return {
      debugCommit: accountDebugCommit,
    };
  }, [accountDebugCommit]);

  const accountStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const navigate = useNavigate();

  const onLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div
      className={[styles.logoDividerWrapper, className].join(" ")}
      style={frameDivStyle}
    >
      <div className={styles.logoDivider}>
        <div className={styles.logoContainer} onClick={onLogoContainerClick}>
          <div className={styles.logoContainerInner}>
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
          <div className={styles.menuButtons}>
            <div className={styles.menuItems}>
              <div className={styles.buyGiftCards}>Buy Gift Cards</div>
            </div>
            <div className={styles.buyForBusiness}>Buy For Business</div>
            <div className={styles.menuItems1}>
              <div className={styles.promos}>Promos</div>
            </div>
            <div className={styles.menuItems2}>
              <div className={styles.buyWithCrypto}>Buy With Crypto</div>
            </div>
          </div>
        </div>
        <div className={styles.locationLanguage}>
          <div className={styles.locationLanguageItems}>
            <div className={styles.locationItems}>
              <div className={styles.languageItems}>
                <div className={styles.languageItemsInner}>
                  <img
                    className={styles.frameChild}
                    loading="lazy"
                    alt=""
                    src="/group-62.svg"
                    style={groupIconStyle}
                  />
                </div>
                <div className={styles.unitedStates} style={unitedStatesStyle}>
                  United States
                </div>
              </div>
            </div>
            <div className={styles.locationItems1}>
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
            <div className={styles.account} style={accountStyle}>
              <div className={styles.accountInner}>
                <input
                  className={styles.frameInner}
                  type="radio"
                  name="radioGroup-1"
                />
              </div>
              <div className={styles.myAccount}>My Account</div>
            </div>
            <div className={styles.unknown}>
              <img
                className={styles.unknownChild}
                loading="lazy"
                alt=""
                src="/group-63.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent11.propTypes = {
  className: PropTypes.string,

  /** Style props */
  horizontalDividerFlex: PropTypes.any,
  horizontalDividerAlignSelf: PropTypes.any,
  horizontalDividerTop: PropTypes.any,
  horizontalDividerPosition: PropTypes.any,
  enDebugCommit: PropTypes.any,
  accountDebugCommit: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default FrameComponent11;
