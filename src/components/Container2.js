import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import BenefitGrid from "./BenefitGrid";
import PropTypes from "prop-types";
import styles from "./Container2.module.css";

const Container2 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onContainerClick = useCallback(() => {
    navigate("/productdestriptionpage");
  }, [navigate]);

  const onButtonClick = useCallback(() => {
    navigate("/productspage");
  }, [navigate]);

  return (
    <div
      className={[styles.container, className].join(" ")}
      onClick={onContainerClick}
    >
      <div className={styles.container1}>
        <div className={styles.container2}>
          <div className={styles.container3}>
            <h1 className={styles.heading2}>
              Browse through lots of Gift Cards
            </h1>
          </div>
          <h3 className={styles.heading3}>
            Purchase, Send, and Redeem Gift Cards. Organize and Manage Gift
            Cards
          </h3>
        </div>
      </div>
      <div className={styles.cardsGrid}>
        <div className={styles.cardsRow}>
          <div className={styles.cardsItems}>
            <img
              className={styles.cardsItemsChild}
              loading="lazy"
              alt=""
              src="/group-70.svg"
            />
            <div className={styles.overlayshadow} />
          </div>
          <div className={styles.cardsRow1}>
            <div className={styles.cardsRow2}>
              <div className={styles.container4}>
                <div className={styles.sony}>Sony</div>
              </div>
              <div className={styles.membersEarnUp}>Members earn up to 6%</div>
            </div>
          </div>
        </div>
        <div className={styles.cardsRow3}>
          <img className={styles.cardsRowChild} alt="" src="/group-70-1.svg" />
          <div className={styles.cardsRowInner}>
            <div className={styles.containerParent}>
              <div className={styles.container5}>
                <div className={styles.verizon}>Verizon</div>
              </div>
              <div className={styles.membersEarnUp1}>Members earn up to 6%</div>
            </div>
          </div>
        </div>
        <div className={styles.cardsRow4}>
          <img className={styles.cardsRowItem} alt="" src="/group-70-2.svg" />
          <div className={styles.frameDiv}>
            <div className={styles.containerGroup}>
              <div className={styles.container6}>
                <div className={styles.vodafone}>Vodafone</div>
              </div>
              <div className={styles.membersEarnUp2}>Members earn up to 6%</div>
            </div>
          </div>
        </div>
        <BenefitGrid propTop="0px" />
        <div className={styles.cardsRow5}>
          <img className={styles.groupIcon} alt="" src="/group-70-3.svg" />
          <div className={styles.cardsRowInner1}>
            <div className={styles.containerContainer}>
              <div className={styles.container7}>
                <div className={styles.nike}>Nike</div>
              </div>
              <div className={styles.membersEarnUp3}>Members earn up to 6%</div>
            </div>
          </div>
        </div>
        <div className={styles.cardsRow6}>
          <img className={styles.cardsRowChild1} alt="" src="/group-70-4.svg" />
          <div className={styles.cardsRowInner2}>
            <div className={styles.containerParent1}>
              <div className={styles.container8}>
                <div className={styles.porsche}>Porsche</div>
              </div>
              <div className={styles.membersEarnUp4}>Members earn up to 6%</div>
            </div>
          </div>
        </div>
        <div className={styles.cardsRow7}>
          <img className={styles.cardsRowChild2} alt="" src="/group-70-5.svg" />
          <div className={styles.cardsRowInner3}>
            <div className={styles.containerParent2}>
              <div className={styles.container9}>
                <div className={styles.cocaCola}>Coca Cola</div>
              </div>
              <div className={styles.membersEarnUp5}>Members earn up to 6%</div>
            </div>
          </div>
        </div>
        <div className={styles.cardsRow8}>
          <img className={styles.cardsRowChild3} alt="" src="/group-70-6.svg" />
          <div className={styles.cardsRowInner4}>
            <div className={styles.containerParent3}>
              <div className={styles.container10}>
                <div className={styles.cisco}>CISCO</div>
              </div>
              <div className={styles.membersEarnUp6}>Members earn up to 6%</div>
            </div>
          </div>
        </div>
        <div className={styles.cardsRow9}>
          <img className={styles.cardsRowChild4} alt="" src="/group-70-7.svg" />
          <div className={styles.cardsRowInner5}>
            <div className={styles.containerParent4}>
              <div className={styles.container11}>
                <div className={styles.fedex}>FedEx</div>
              </div>
              <div className={styles.membersEarnUp7}>Members earn up to 6%</div>
            </div>
          </div>
        </div>
        <div className={styles.cardsRow10}>
          <img className={styles.cardsRowChild5} alt="" src="/group-70-8.svg" />
          <div className={styles.cardsRowInner6}>
            <div className={styles.containerParent5}>
              <div className={styles.container12}>
                <div className={styles.unitedHealthcare}>United HealthCare</div>
              </div>
              <div className={styles.membersEarnUp8}>Members earn up to 6%</div>
            </div>
          </div>
        </div>
        <div className={styles.cardsRow11}>
          <img
            className={styles.overlayshadowIcon}
            loading="lazy"
            alt=""
            src="/overlayshadow@2x.png"
          />
          <div className={styles.cardsRowInner7}>
            <div className={styles.containerParent6}>
              <div className={styles.container13}>
                <div className={styles.visaGiftCard}>Visa® Gift Card</div>
              </div>
              <div className={styles.membersEarnUp9}>Members earn up to 6%</div>
            </div>
          </div>
        </div>
        <div className={styles.cardsRow12}>
          <img
            className={styles.wayfairsvgIcon}
            loading="lazy"
            alt=""
            src="/wayfairsvg@2x.png"
          />
          <div className={styles.cardsRowInner8}>
            <div className={styles.containerParent7}>
              <div className={styles.container14}>
                <div className={styles.wayfair}>Wayfair</div>
              </div>
              <div className={styles.membersEarnUp10}>
                Members earn up to 6%
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container15}>
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
            width: 431,
          }}
          onClick={onButtonClick}
        >
          Buy Gift Cards
        </Button>
      </div>
    </div>
  );
};

Container2.propTypes = {
  className: PropTypes.string,
};

export default Container2;
