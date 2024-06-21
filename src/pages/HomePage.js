import { Button } from "@mui/material";
import Container4 from "../components/Container4";
import Container3 from "../components/Container3";
import Container2 from "../components/Container2";
import Container1 from "../components/Container1";
import Container from "../components/Container";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <section className={styles.containerParent}>
        <Container4 />
        <Container3 />
      </section>
      <Container2 />
      <div className={styles.container}>
        <div className={styles.container1}>
          <Container1 />
          <Container />
          <div className={styles.digitalGiftImageParent}>
            <div className={styles.digitalGiftImage}>
              <img
                className={styles.moneyMotivationamicoIcon}
                alt=""
                src="/moneymotivationamico.svg"
              />
            </div>
            <div className={styles.digitalGiftDescription}>
              <div className={styles.theDigitalGiftWithEndlessParent}>
                <h3 className={styles.theDigitalGift}>
                  The Digital Gift With Endless Possibilities
                </h3>
                <div className={styles.giftnestAvailability}>
                  <div className={styles.availableAtGiftnest}>
                    Available at GiftNest!
                  </div>
                </div>
              </div>
              <div className={styles.digitalGiftButton}>
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
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.backgroundshadowWrapper}>
          <div className={styles.backgroundshadow}>
            <div className={styles.printAtHomeImage}>
              <img
                className={styles.printAtHomepngIcon}
                loading="lazy"
                alt=""
                src="/printathomepng@2x.png"
              />
            </div>
            <div className={styles.printAtHomeDescription}>
              <div className={styles.heading2PrintYourGiftCaParent}>
                <h3 className={styles.heading2}>
                  Print Your Gift Card at Home
                </h3>
                <div className={styles.heading3}>
                  The convenience of a digital card with the personal touch of
                  hand delivery
                </div>
              </div>
              <div className={styles.instantGiftDelivery}>
                <div className={styles.itemYourContainer}>
                  <span>
                    <p className={styles.yourGiftWill}>
                      Your gift will be instantly sent to you as a .PDF!
                    </p>
                    <p className={styles.printItOut}>
                      Print it out at home, then fold it like any greeting card!
                    </p>
                    <p className={styles.handItTo}>
                      Hand it to your recipient to see their surprise in person
                    </p>
                  </span>
                </div>
              </div>
              <div className={styles.printAtHomeButton}>
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
                    width: 139,
                  }}
                >
                  Shop Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FrameComponent1 />
      <FrameComponent />
    </div>
  );
};

export default HomePage;
