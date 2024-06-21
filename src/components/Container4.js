import FrameComponent2 from "./FrameComponent2";
import PropTypes from "prop-types";
import styles from "./Container4.module.css";

const Container4 = ({ className = "" }) => {
  return (
    <header className={[styles.container, className].join(" ")}>
      <FrameComponent2 />
      <img className={styles.containerChild} alt="" src="/group-58.svg" />
    </header>
  );
};

Container4.propTypes = {
  className: PropTypes.string,
};

export default Container4;
