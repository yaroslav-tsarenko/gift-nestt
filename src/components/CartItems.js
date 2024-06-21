import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  Button,
} from "@mui/material";
import CardTypes from "./CardTypes";
import PropTypes from "prop-types";
import styles from "./CartItems.module.css";

const CartItems = ({ className = "" }) => {
  return (
    <section className={[styles.cartItems, className].join(" ")}>
      <div className={styles.cartList}>
        <div className={styles.cartItem}>
          <div className={styles.checkout}>
            <div className={styles.header}>
              <div className={styles.headerChild} />
              <div className={styles.checkoutLabels}>
                <div className={styles.product}>Product</div>
              </div>
              <div className={styles.checkoutLabels1}>
                <div className={styles.price}>Price</div>
              </div>
              <div className={styles.quantity}>Quantity</div>
              <div className={styles.total}>Total</div>
            </div>
            <div className={styles.cartItemDetails}>
              <img
                className={styles.cartItemDivider}
                loading="lazy"
                alt=""
                src="/rectangle-50@2x.png"
              />
              <div className={styles.itemTitle}>
                <div className={styles.fentyBeauty50}>
                  Fenty Beauty 50% OFF Gift Card
                </div>
                <div className={styles.discount20Off}>Discount: 20% OFF</div>
              </div>
              <div className={styles.itemPrice}>
                <div className={styles.itemCredits}>
                  <div className={styles.div}>$120.00</div>
                  <div className={styles.credits}>12 Credits</div>
                </div>
                <div className={styles.itemActions}>
                  <div className={styles.itemQuantity}>
                    <div className={styles.quantityButtons}>
                      <img
                        className={styles.iconPlus}
                        loading="lazy"
                        alt=""
                        src="/iconplus.svg"
                      />
                    </div>
                    <div className={styles.empty}>3</div>
                    <input
                      className={styles.quantityButtons1}
                      type="checkbox"
                    />
                  </div>
                  <FormControl
                    className={styles.itemFrequency}
                    variant="standard"
                    sx={{
                      borderTopWidth: "1px",
                      borderRightWidth: "1px",
                      borderBottomWidth: "1px",
                      borderLeftWidth: "1px",
                      backgroundColor: "#5a5a5a",
                      borderRadius: "8px",
                      width: "96.42857142857144%",
                      height: "38px",
                      m: 0,
                      p: 0,
                      "& .MuiInputBase-root": {
                        m: 0,
                        p: 0,
                        minHeight: "38px",
                        justifyContent: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInputLabel-root": {
                        m: 0,
                        p: 0,
                        minHeight: "38px",
                        display: "inline-flex",
                      },
                      "& .MuiMenuItem-root": {
                        m: 0,
                        p: 0,
                        height: "38px",
                        display: "inline-flex",
                      },
                      "& .MuiSelect-select": {
                        m: 0,
                        p: 0,
                        height: "38px",
                        alignItems: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInput-input": { m: 0, p: 0 },
                      "& .MuiInputBase-input": {
                        color: "#fff",
                        fontSize: 16,
                        fontWeight: "Regular",
                        fontFamily: "Inter",
                        textAlign: "left",
                        p: "0 !important",
                        marginLeft: "16px",
                      },
                    }}
                  >
                    <InputLabel color="success" />
                    <Select
                      color="success"
                      disableUnderline
                      displayEmpty
                      IconComponent={() => (
                        <img
                          width="16px"
                          height="16px"
                          src="/dropdown-icon.svg"
                          style={{ marginRight: "16px" }}
                        />
                      )}
                    >
                      <MenuItem>Hourly</MenuItem>
                    </Select>
                    <FormHelperText />
                  </FormControl>
                </div>
              </div>
              <div className={styles.empty1}>$120.00</div>
            </div>
          </div>
          <CardTypes shoppingSpreeGiftCard="Shopping Spree Gift Card" />
          <CardTypes
            shoppingSpreeGiftCard="Travel GiftCard"
            propLineHeight="22px"
          />
          <div className={styles.separator}>
            <div className={styles.separatorChild} />
            <div className={styles.actionButtons}>
              <Button
                className={styles.button}
                disableElevation
                variant="outlined"
                sx={{
                  textTransform: "none",
                  color: "#000",
                  fontSize: "16",
                  borderColor: "#000",
                  borderRadius: "4px",
                  "&:hover": { borderColor: "#000" },
                  width: 123,
                  height: 54,
                }}
              >
                Go Back
              </Button>
              <Button
                className={styles.button1}
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "16",
                  background: "#5a5a5a",
                  borderRadius: "4px",
                  "&:hover": { background: "#5a5a5a" },
                  width: 133,
                  height: 54,
                }}
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.checkoutDetails}>
          <div className={styles.checkoutTitle}>
            <div className={styles.header1}>
              <div className={styles.checkoutDetails1}>Checkout Details</div>
            </div>
          </div>
          <div className={styles.totalItemsWrapper}>
            <div className={styles.totalItems}>
              <div className={styles.cartSubtotal}>Cart Subtotal</div>
              <div className={styles.totalValues}>$360.00</div>
            </div>
          </div>
          <div className={styles.checkoutBreakdown}>
            <div className={styles.fees}>
              <div className={styles.feeItems}>
                <div
                  className={styles.shippingHandling}
                >{`Shipping & Handling`}</div>
                <div className={styles.otherTaxes}>Other Taxes</div>
              </div>
              <div className={styles.feeItems1}>
                <div className={styles.div1}>$0.00</div>
                <div className={styles.div2}>$0.00</div>
              </div>
            </div>
          </div>
          <div className={styles.dividerWrapper}>
            <div className={styles.divider} />
          </div>
          <div className={styles.checkoutDetailsInner}>
            <div className={styles.grandTotalParent}>
              <div className={styles.grandTotal}>Grand Total</div>
              <div className={styles.div3}>$360.00</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

CartItems.propTypes = {
  className: PropTypes.string,
};

export default CartItems;
