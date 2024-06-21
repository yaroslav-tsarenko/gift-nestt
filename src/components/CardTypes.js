import { useMemo } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import PropTypes from "prop-types";
import styles from "./CardTypes.module.css";

const CardTypes = ({
  className = "",
  shoppingSpreeGiftCard,
  propLineHeight,
}) => {
  const shoppingSpreeGiftStyle = useMemo(() => {
    return {
      lineHeight: propLineHeight,
    };
  }, [propLineHeight]);

  return (
    <div className={[styles.cardTypes, className].join(" ")}>
      <div className={styles.cardDividers} />
      <div className={styles.cardDetails}>
        <img
          className={styles.cardImageIcon}
          alt=""
          src="/rectangle-50@2x.png"
        />
        <div className={styles.cardTitleContainer}>
          <div
            className={styles.shoppingSpreeGift}
            style={shoppingSpreeGiftStyle}
          >
            {shoppingSpreeGiftCard}
          </div>
          <div className={styles.worthUsd400}>Worth USD $400</div>
        </div>
        <div className={styles.creditsContainer}>
          <div className={styles.empty}>$120.00</div>
          <div className={styles.credits}>12 Credits</div>
        </div>
        <div className={styles.cardActions}>
          <div className={styles.quantityControls}>
            <div className={styles.increaseButton}>
              <img className={styles.iconPlus} alt="" src="/iconplus.svg" />
            </div>
            <div className={styles.quantity}>3</div>
            <input className={styles.decreaseButton} type="checkbox" />
          </div>
          <FormControl
            className={styles.frequency}
            variant="standard"
            sx={{
              borderTopWidth: "1px",
              borderRightWidth: "1px",
              borderBottomWidth: "1px",
              borderLeftWidth: "1px",
              backgroundColor: "#5a5a5a",
              borderRadius: "8px",
              width: "52.6829268292683%",
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
                  src="/frame-1000002972-1.svg"
                  style={{ marginRight: "16px" }}
                />
              )}
            >
              <MenuItem>Hourly</MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
        </div>
        <div className={styles.empty1}>$120.00</div>
      </div>
    </div>
  );
};

CardTypes.propTypes = {
  className: PropTypes.string,
  shoppingSpreeGiftCard: PropTypes.string,

  /** Style props */
  propLineHeight: PropTypes.any,
};

export default CardTypes;
