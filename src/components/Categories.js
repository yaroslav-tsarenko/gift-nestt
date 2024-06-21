import { useCallback } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import BenefitGrid from "./BenefitGrid";
import PropTypes from "prop-types";
import styles from "./Categories.module.css";

const Categories = ({ className = "" }) => {
  const navigate = useNavigate();

  const onFeaturedHeaderContainerClick = useCallback(() => {
    navigate("/productdestriptionpage");
  }, [navigate]);

  return (
    <section className={[styles.categories, className].join(" ")}>
      <div className={styles.categoriesContent}>
        <div className={styles.featuredContainer}>
          <div
            className={styles.featuredHeader}
            onClick={onFeaturedHeaderContainerClick}
          >
            <div className={styles.featuredTitle}>
              <div className={styles.featuredIcon}>
                <img className={styles.svgIcon} alt="" src="/svg-11.svg" />
              </div>
              <div className={styles.promos}>Promos</div>
            </div>
            <div className={styles.categoryHeader}>
              <FormControl
                className={styles.horizontalborder}
                variant="standard"
                sx={{
                  borderColor: "#000",
                  borderStyle: "SOLID",
                  borderTopWidth: "0px",
                  borderRightWidth: "0px",
                  borderBottomWidth: "1px",
                  borderLeftWidth: "0px",
                  borderRadius: "7px 7px 0px 0px",
                  width: "19.58041958041958%",
                  height: "42.69999999999982px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "42.69999999999982px",
                    justifyContent: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "42.69999999999982px",
                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    m: 0,
                    p: 0,
                    height: "42.69999999999982px",
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "42.69999999999982px",
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    color: "#1c1c1c",
                    fontSize: 16,
                    fontWeight: "Book",
                    fontFamily: "Circular Std",
                    textAlign: "left",
                    p: "0 !important",
                    marginLeft: "16px",
                  },
                }}
              >
                <InputLabel color="primary" />
                <Select
                  color="primary"
                  disableUnderline
                  displayEmpty
                  IconComponent="null"
                >
                  <MenuItem>Select a Category</MenuItem>
                </Select>
                <FormHelperText />
              </FormControl>
              <div className={styles.fieldContainer}>
                <div className={styles.fieldRow}>
                  <div className={styles.fieldLabel}>
                    <h1 className={styles.heading1}>Featured Cards</h1>
                  </div>
                  <div className={styles.formField}>
                    <div className={styles.inputLabel}>
                      <div className={styles.formLabel}>
                        Search for Brands or Products
                      </div>
                    </div>
                    <img className={styles.icon} alt="" src="/icon.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.cardGrid}>
              <div className={styles.gridRow}>
                <div className={styles.cardItems}>
                  <div className={styles.link}>
                    <div className={styles.seeAllIcon}>
                      <img
                        className={styles.svgIcon1}
                        alt=""
                        src="/svg-2.svg"
                      />
                    </div>
                    <div className={styles.featuredCards}>Featured Cards</div>
                  </div>
                  <div className={styles.gridItemContainer}>
                    <div className={styles.gridCards}>
                      <img
                        className={styles.svgIcon2}
                        alt=""
                        src="/svg-3.svg"
                      />
                      <div className={styles.allCards}>All Cards</div>
                    </div>
                  </div>
                  <div className={styles.gridItemContainer1}>
                    <div className={styles.svgParent}>
                      <img
                        className={styles.svgIcon3}
                        alt=""
                        src="/svg-4.svg"
                      />
                      <div className={styles.giftnestchoiceCards}>
                        GiftNestChoice Cards
                      </div>
                    </div>
                  </div>
                  <div className={styles.gridItemContainer2}>
                    <div className={styles.svgGroup}>
                      <img
                        className={styles.svgIcon4}
                        alt=""
                        src="/svg-5.svg"
                      />
                      <div
                        className={styles.foodRestaurants}
                      >{`Food & Restaurants`}</div>
                    </div>
                  </div>
                  <div className={styles.gridItemContainer3}>
                    <div className={styles.svgContainer}>
                      <img
                        className={styles.svgIcon5}
                        alt=""
                        src="/svg-6.svg"
                      />
                      <div
                        className={styles.moviesEntertainment}
                      >{`Movies & Entertainment`}</div>
                    </div>
                  </div>
                  <div className={styles.gridItemContainer4}>
                    <div className={styles.frameDiv}>
                      <img
                        className={styles.svgIcon6}
                        alt=""
                        src="/svg-7.svg"
                      />
                      <div
                        className={styles.clothingAccessories}
                      >{`Clothing & Accessories`}</div>
                    </div>
                  </div>
                  <div className={styles.gridItemContainer5}>
                    <div className={styles.svgParent1}>
                      <img
                        className={styles.svgIcon7}
                        alt=""
                        src="/svg-8.svg"
                      />
                      <div className={styles.electronics}>Electronics</div>
                    </div>
                  </div>
                  <div className={styles.gridItemContainer6}>
                    <div className={styles.svgParent2}>
                      <img
                        className={styles.svgIcon8}
                        alt=""
                        src="/svg-9.svg"
                      />
                      <div
                        className={styles.sportsOutdoors}
                      >{`Sports & Outdoors`}</div>
                    </div>
                  </div>
                  <div className={styles.gridItemContainer7}>
                    <div className={styles.svgParent3}>
                      <img
                        className={styles.svgIcon9}
                        alt=""
                        src="/svg-10.svg"
                      />
                      <div
                        className={styles.healthSpa}
                      >{`Health, Spa & Beauty`}</div>
                    </div>
                  </div>
                  <div className={styles.gridItemContainer8}>
                    <div className={styles.svgParent4}>
                      <img
                        className={styles.svgIcon10}
                        alt=""
                        src="/svg-111.svg"
                      />
                      <div className={styles.homeGarden}>{`Home & Garden`}</div>
                    </div>
                  </div>
                  <div className={styles.gridItemContainer9}>
                    <div className={styles.svgParent5}>
                      <img
                        className={styles.svgIcon11}
                        alt=""
                        src="/svg-12.svg"
                      />
                      <div
                        className={styles.travelExperiences}
                      >{`Travel & Experiences`}</div>
                    </div>
                  </div>
                  <div className={styles.gridItemContainer10}>
                    <div className={styles.svgParent6}>
                      <img
                        className={styles.svgIcon12}
                        alt=""
                        src="/svg-13.svg"
                      />
                      <div className={styles.generalMerchandise}>
                        General Merchandise
                      </div>
                    </div>
                  </div>
                  <div className={styles.gridItemContainer11}>
                    <div className={styles.svgParent7}>
                      <img
                        className={styles.svgIcon13}
                        alt=""
                        src="/svg-14.svg"
                      />
                      <div className={styles.charity}>Charity</div>
                    </div>
                  </div>
                  <div className={styles.gridItemContainer12}>
                    <div className={styles.svgParent8}>
                      <img
                        className={styles.svgIcon14}
                        alt=""
                        src="/svg-15.svg"
                      />
                      <div className={styles.justForFun}>Just for Fun</div>
                    </div>
                  </div>
                  <div className={styles.gridItemContainer13}>
                    <div className={styles.svgParent9}>
                      <img
                        className={styles.svgIcon15}
                        alt=""
                        src="/svg-16.svg"
                      />
                      <div className={styles.fuelAuto}>{`Fuel & Auto`}</div>
                    </div>
                  </div>
                  <div className={styles.gridItemContainer14}>
                    <div className={styles.svgParent10}>
                      <img
                        className={styles.svgIcon16}
                        alt=""
                        src="/svg-17.svg"
                      />
                      <div className={styles.socialResponsibility}>
                        Social Responsibility
                      </div>
                    </div>
                  </div>
                  <div className={styles.gridItemContainer15}>
                    <div className={styles.svgParent11}>
                      <img
                        className={styles.svgIcon17}
                        alt=""
                        src="/svg-18.svg"
                      />
                      <div className={styles.babyKids}>{`Baby & Kids`}</div>
                    </div>
                  </div>
                  <div className={styles.gridItemContainer16}>
                    <div className={styles.svgParent12}>
                      <img
                        className={styles.svgIcon18}
                        alt=""
                        src="/svg-19.svg"
                      />
                      <div className={styles.holidayGiftIdeas}>
                        Holiday Gift Ideas
                      </div>
                    </div>
                  </div>
                  <div className={styles.gridItemContainer17}>
                    <div className={styles.svgParent13}>
                      <img
                        className={styles.svgIcon19}
                        alt=""
                        src="/svg-20.svg"
                      />
                      <div
                        className={styles.streamingGaming}
                      >{`Streaming & Gaming`}</div>
                    </div>
                  </div>
                  <div className={styles.gridItemContainer18}>
                    <div className={styles.svgParent14}>
                      <img
                        className={styles.svgIcon20}
                        alt=""
                        src="/svg-21.svg"
                      />
                      <div className={styles.justBecause}>Just Because</div>
                    </div>
                  </div>
                  <div className={styles.gridItemContainer19}>
                    <div className={styles.svgParent15}>
                      <img
                        className={styles.svgIcon21}
                        alt=""
                        src="/svg-22.svg"
                      />
                      <div
                        className={styles.deliverySubscriptions}
                      >{`Delivery & Subscriptions`}</div>
                    </div>
                  </div>
                  <div className={styles.gridItemContainer20}>
                    <div className={styles.svgParent16}>
                      <img
                        className={styles.svgIcon22}
                        alt=""
                        src="/svg-23.svg"
                      />
                      <div
                        className={styles.teensTweens}
                      >{`Teens & Tweens`}</div>
                    </div>
                  </div>
                  <div className={styles.gridItemContainer21}>
                    <div className={styles.svgParent17}>
                      <img
                        className={styles.svgIcon23}
                        alt=""
                        src="/svg-24.svg"
                      />
                      <div
                        className={styles.prepaidGiftCards}
                      >{`Prepaid Gift Cards & Mobile`}</div>
                    </div>
                  </div>
                  <div className={styles.gridItemContainer22}>
                    <div className={styles.svgParent18}>
                      <img
                        className={styles.svgIcon24}
                        alt=""
                        src="/svg-25.svg"
                      />
                      <div className={styles.departmentStores}>
                        Department Stores
                      </div>
                    </div>
                  </div>
                  <div className={styles.financeCard}>
                    <div className={styles.financeContainer}>
                      <img
                        className={styles.svgIcon25}
                        alt=""
                        src="/svg-26.svg"
                      />
                      <div
                        className={styles.financeInvesting}
                      >{`Finance & Investing`}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.memberBenefits}>
                <div className={styles.benefitGrid}>
                  <img
                    className={styles.benefitGridChild}
                    loading="lazy"
                    alt=""
                    src="/group-70.svg"
                  />
                  <div className={styles.benefitContainer}>
                    <div className={styles.benefitDetails}>
                      <div className={styles.container}>
                        <div className={styles.sony}>Sony</div>
                      </div>
                      <div className={styles.membersEarnUp}>
                        Members earn up to 6%
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.benefitGrid1}>
                  <img
                    className={styles.benefitGridItem}
                    alt=""
                    src="/group-70-1.svg"
                  />
                  <div className={styles.benefitGridInner}>
                    <div className={styles.containerParent}>
                      <div className={styles.container1}>
                        <div className={styles.verizon}>Verizon</div>
                      </div>
                      <div className={styles.membersEarnUp1}>
                        Members earn up to 6%
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.benefitGrid2}>
                  <img
                    className={styles.groupIcon}
                    alt=""
                    src="/group-70-2.svg"
                  />
                  <div className={styles.benefitGridInner1}>
                    <div className={styles.containerGroup}>
                      <div className={styles.container2}>
                        <div className={styles.vodafone}>Vodafone</div>
                      </div>
                      <div className={styles.membersEarnUp2}>
                        Members earn up to 6%
                      </div>
                    </div>
                  </div>
                </div>
                <BenefitGrid />
                <div className={styles.benefitGrid3}>
                  <img
                    className={styles.benefitGridChild1}
                    alt=""
                    src="/group-70-3.svg"
                  />
                  <div className={styles.benefitGridInner2}>
                    <div className={styles.containerContainer}>
                      <div className={styles.container3}>
                        <div className={styles.nike}>Nike</div>
                      </div>
                      <div className={styles.membersEarnUp3}>
                        Members earn up to 6%
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.benefitGrid4}>
                  <img
                    className={styles.benefitGridChild2}
                    alt=""
                    src="/group-70-4.svg"
                  />
                  <div className={styles.benefitGridInner3}>
                    <div className={styles.containerParent1}>
                      <div className={styles.container4}>
                        <div className={styles.porsche}>Porsche</div>
                      </div>
                      <div className={styles.membersEarnUp4}>
                        Members earn up to 6%
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.benefitGrid5}>
                  <img
                    className={styles.benefitGridChild3}
                    alt=""
                    src="/group-70-5.svg"
                  />
                  <div className={styles.benefitGridInner4}>
                    <div className={styles.containerParent2}>
                      <div className={styles.container5}>
                        <div className={styles.cocaCola}>Coca Cola</div>
                      </div>
                      <div className={styles.membersEarnUp5}>
                        Members earn up to 6%
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.benefitGrid6}>
                  <img
                    className={styles.benefitGridChild4}
                    alt=""
                    src="/group-70-61.svg"
                  />
                  <div className={styles.benefitGridInner5}>
                    <div className={styles.containerParent3}>
                      <div className={styles.container6}>
                        <div className={styles.cisco}>CISCO</div>
                      </div>
                      <div className={styles.membersEarnUp6}>
                        Members earn up to 6%
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.benefitGrid7}>
                  <img
                    className={styles.benefitGridChild5}
                    alt=""
                    src="/group-70-7.svg"
                  />
                  <div className={styles.benefitGridInner6}>
                    <div className={styles.containerParent4}>
                      <div className={styles.container7}>
                        <div className={styles.fedex}>FedEx</div>
                      </div>
                      <div className={styles.membersEarnUp7}>
                        Members earn up to 6%
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.benefitGrid8}>
                  <img
                    className={styles.benefitGridChild6}
                    alt=""
                    src="/group-70-8.svg"
                  />
                  <div className={styles.benefitGridInner7}>
                    <div className={styles.containerParent5}>
                      <div className={styles.container8}>
                        <div className={styles.unitedHealthcare}>
                          United HealthCare
                        </div>
                      </div>
                      <div className={styles.membersEarnUp8}>
                        Members earn up to 6%
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.benefitGrid9}>
                  <img
                    className={styles.overlayshadowIcon}
                    loading="lazy"
                    alt=""
                    src="/overlayshadow1@2x.png"
                  />
                  <div className={styles.benefitGridInner8}>
                    <div className={styles.containerParent6}>
                      <div className={styles.container9}>
                        <div className={styles.visaGiftCard}>
                          Visa® Gift Card
                        </div>
                      </div>
                      <div className={styles.membersEarnUp9}>
                        Members earn up to 6%
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.benefitGrid10}>
                  <img
                    className={styles.wayfairsvgIcon}
                    alt=""
                    src="/wayfairsvg@2x.png"
                  />
                  <div className={styles.benefitGridInner9}>
                    <div className={styles.containerParent7}>
                      <div className={styles.container10}>
                        <div className={styles.wayfair}>Wayfair</div>
                      </div>
                      <div className={styles.membersEarnUp10}>
                        Members earn up to 6%
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.benefitGrid11}>
                  <img
                    className={styles.benefitGridChild7}
                    alt=""
                    src="/group-70.svg"
                  />
                  <div className={styles.benefitGridInner10}>
                    <div className={styles.containerParent8}>
                      <div className={styles.container11}>
                        <div className={styles.sony1}>Sony</div>
                      </div>
                      <div className={styles.membersEarnUp11}>
                        Members earn up to 6%
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.benefitGrid12}>
                  <img
                    className={styles.benefitGridChild8}
                    alt=""
                    src="/group-70-1.svg"
                  />
                  <div className={styles.benefitGridInner11}>
                    <div className={styles.containerParent9}>
                      <div className={styles.container12}>
                        <div className={styles.verizon1}>Verizon</div>
                      </div>
                      <div className={styles.membersEarnUp12}>
                        Members earn up to 6%
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.benefitGrid13}>
                  <img
                    className={styles.benefitGridChild9}
                    alt=""
                    src="/group-70-2.svg"
                  />
                  <div className={styles.benefitGridInner12}>
                    <div className={styles.containerParent10}>
                      <div className={styles.container13}>
                        <div className={styles.vodafone1}>Vodafone</div>
                      </div>
                      <div className={styles.membersEarnUp13}>
                        Members earn up to 6%
                      </div>
                    </div>
                  </div>
                </div>
                <BenefitGrid propTop="729px" />
                <div className={styles.benefitGrid14}>
                  <img
                    className={styles.benefitGridChild10}
                    alt=""
                    src="/group-70-3.svg"
                  />
                  <div className={styles.benefitGridInner13}>
                    <div className={styles.containerParent11}>
                      <div className={styles.container14}>
                        <div className={styles.nike1}>Nike</div>
                      </div>
                      <div className={styles.membersEarnUp14}>
                        Members earn up to 6%
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.benefitGrid15}>
                  <img
                    className={styles.benefitGridChild11}
                    alt=""
                    src="/group-70-4.svg"
                  />
                  <div className={styles.benefitGridInner14}>
                    <div className={styles.containerParent12}>
                      <div className={styles.container15}>
                        <div className={styles.porsche1}>Porsche</div>
                      </div>
                      <div className={styles.membersEarnUp15}>
                        Members earn up to 6%
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.benefitGrid16}>
                  <img
                    className={styles.benefitGridChild12}
                    alt=""
                    src="/group-70-5.svg"
                  />
                  <div className={styles.benefitGridInner15}>
                    <div className={styles.containerParent13}>
                      <div className={styles.container16}>
                        <div className={styles.cocaCola1}>Coca Cola</div>
                      </div>
                      <div className={styles.membersEarnUp16}>
                        Members earn up to 6%
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.benefitGrid17}>
                  <img
                    className={styles.benefitGridChild13}
                    alt=""
                    src="/group-70-61.svg"
                  />
                  <div className={styles.benefitGridInner16}>
                    <div className={styles.containerParent14}>
                      <div className={styles.container17}>
                        <div className={styles.cisco1}>CISCO</div>
                      </div>
                      <div className={styles.membersEarnUp17}>
                        Members earn up to 6%
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.benefitGrid18}>
                  <img
                    className={styles.benefitGridChild14}
                    alt=""
                    src="/group-70-7.svg"
                  />
                  <div className={styles.benefitGridInner17}>
                    <div className={styles.containerParent15}>
                      <div className={styles.container18}>
                        <div className={styles.fedex1}>FedEx</div>
                      </div>
                      <div className={styles.membersEarnUp18}>
                        Members earn up to 6%
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.benefitGrid19}>
                  <img
                    className={styles.benefitGridChild15}
                    alt=""
                    src="/group-70-8.svg"
                  />
                  <div className={styles.benefitGridInner18}>
                    <div className={styles.containerParent16}>
                      <div className={styles.container19}>
                        <div className={styles.unitedHealthcare1}>
                          United HealthCare
                        </div>
                      </div>
                      <div className={styles.membersEarnUp19}>
                        Members earn up to 6%
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.benefitGrid20}>
                  <img
                    className={styles.overlayshadowIcon1}
                    alt=""
                    src="/overlayshadow1@2x.png"
                  />
                  <div className={styles.benefitGridInner19}>
                    <div className={styles.containerParent17}>
                      <div className={styles.container20}>
                        <div className={styles.visaGiftCard1}>
                          Visa® Gift Card
                        </div>
                      </div>
                      <div className={styles.membersEarnUp20}>
                        Members earn up to 6%
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.benefitGrid21}>
                  <img
                    className={styles.wayfairsvgIcon1}
                    alt=""
                    src="/wayfairsvg@2x.png"
                  />
                  <div className={styles.benefitGridInner20}>
                    <div className={styles.containerParent18}>
                      <div className={styles.container21}>
                        <div className={styles.wayfair1}>Wayfair</div>
                      </div>
                      <div className={styles.membersEarnUp21}>
                        Members earn up to 6%
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.benefitGrid22}>
                  <img
                    className={styles.benefitGridChild16}
                    alt=""
                    src="/group-70.svg"
                  />
                  <div className={styles.benefitGridInner21}>
                    <div className={styles.containerParent19}>
                      <div className={styles.container22}>
                        <div className={styles.sony2}>Sony</div>
                      </div>
                      <div className={styles.membersEarnUp22}>
                        Members earn up to 6%
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.benefitGrid23}>
                  <img
                    className={styles.benefitGridChild17}
                    alt=""
                    src="/group-70-1.svg"
                  />
                  <div className={styles.benefitGridInner22}>
                    <div className={styles.containerParent20}>
                      <div className={styles.container23}>
                        <div className={styles.verizon2}>Verizon</div>
                      </div>
                      <div className={styles.membersEarnUp23}>
                        Members earn up to 6%
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.benefitGrid24}>
                  <img
                    className={styles.benefitGridChild18}
                    alt=""
                    src="/group-70-2.svg"
                  />
                  <div className={styles.benefitGridInner23}>
                    <div className={styles.containerParent21}>
                      <div className={styles.container24}>
                        <div className={styles.vodafone2}>Vodafone</div>
                      </div>
                      <div className={styles.membersEarnUp24}>
                        Members earn up to 6%
                      </div>
                    </div>
                  </div>
                </div>
                <BenefitGrid propTop="1458px" />
                <div className={styles.benefitGrid25}>
                  <img
                    className={styles.benefitGridChild19}
                    alt=""
                    src="/group-70-3.svg"
                  />
                  <div className={styles.benefitGridInner24}>
                    <div className={styles.containerParent22}>
                      <div className={styles.container25}>
                        <div className={styles.nike2}>Nike</div>
                      </div>
                      <div className={styles.membersEarnUp25}>
                        Members earn up to 6%
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.benefitGrid26}>
                  <img
                    className={styles.benefitGridChild20}
                    alt=""
                    src="/group-70-4.svg"
                  />
                  <div className={styles.benefitGridInner25}>
                    <div className={styles.containerParent23}>
                      <div className={styles.container26}>
                        <div className={styles.porsche2}>Porsche</div>
                      </div>
                      <div className={styles.membersEarnUp26}>
                        Members earn up to 6%
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.benefitGrid27}>
                  <img
                    className={styles.benefitGridChild21}
                    alt=""
                    src="/group-70-5.svg"
                  />
                  <div className={styles.benefitGridInner26}>
                    <div className={styles.containerParent24}>
                      <div className={styles.container27}>
                        <div className={styles.cocaCola2}>Coca Cola</div>
                      </div>
                      <div className={styles.membersEarnUp27}>
                        Members earn up to 6%
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.benefitGrid28}>
                  <img
                    className={styles.benefitGridChild22}
                    alt=""
                    src="/group-70-61.svg"
                  />
                  <div className={styles.benefitGridInner27}>
                    <div className={styles.containerParent25}>
                      <div className={styles.container28}>
                        <div className={styles.cisco2}>CISCO</div>
                      </div>
                      <div className={styles.membersEarnUp28}>
                        Members earn up to 6%
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.benefitGrid29}>
                  <img
                    className={styles.benefitGridChild23}
                    alt=""
                    src="/group-70-7.svg"
                  />
                  <div className={styles.benefitGridInner28}>
                    <div className={styles.containerParent26}>
                      <div className={styles.container29}>
                        <div className={styles.fedex2}>FedEx</div>
                      </div>
                      <div className={styles.membersEarnUp29}>
                        Members earn up to 6%
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.benefitGrid30}>
                  <img
                    className={styles.benefitGridChild24}
                    alt=""
                    src="/group-70-8.svg"
                  />
                  <div className={styles.benefitGridInner29}>
                    <div className={styles.containerParent27}>
                      <div className={styles.container30}>
                        <div className={styles.unitedHealthcare2}>
                          United HealthCare
                        </div>
                      </div>
                      <div className={styles.membersEarnUp30}>
                        Members earn up to 6%
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.benefitGrid31}>
                  <img
                    className={styles.overlayshadowIcon2}
                    alt=""
                    src="/overlayshadow1@2x.png"
                  />
                  <div className={styles.benefitGridInner30}>
                    <div className={styles.containerParent28}>
                      <div className={styles.container31}>
                        <div className={styles.visaGiftCard2}>
                          Visa® Gift Card
                        </div>
                      </div>
                      <div className={styles.membersEarnUp31}>
                        Members earn up to 6%
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.benefitGrid32}>
                  <img
                    className={styles.wayfairsvgIcon2}
                    alt=""
                    src="/wayfairsvg@2x.png"
                  />
                  <div className={styles.benefitGridInner31}>
                    <div className={styles.containerParent29}>
                      <div className={styles.container32}>
                        <div className={styles.wayfair2}>Wayfair</div>
                      </div>
                      <div className={styles.membersEarnUp32}>
                        Members earn up to 6%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.disclaimerContainer}>
          <b
            className={styles.bathBody}
          >{`Bath & Body Works Terms & Conditions`}</b>
          <div
            className={styles.bathBody1}
          >{`Bath & Body Works is not a sponsor of this promotion and is not affiliated with this promotion. The Bath & Body Works® name and logo are registered trademarks of Bath & Body Works Brand Management, Inc. `}</div>
          <b
            className={styles.chilisGrill}
          >{`Chili's® Grill & Bar Terms & Conditions`}</b>
        </div>
      </div>
    </section>
  );
};

Categories.propTypes = {
  className: PropTypes.string,
};

export default Categories;
