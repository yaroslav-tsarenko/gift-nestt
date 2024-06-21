import FrameComponent11 from "./FrameComponent11";
import PropTypes from "prop-types";
import styles from "./Content.module.css";

const Content = ({ className = "" }) => {
  return (
    <section className={[styles.content, className].join(" ")}>
      <FrameComponent11 />
    </section>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
