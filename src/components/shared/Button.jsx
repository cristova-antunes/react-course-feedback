import PropTypes from "prop-types";

export default function Button({
  children,
  onClick,
  version,
  type,
  isDisabled,
}) {
  return (
    <button
      type={type}
      disabled={isDisabled}
      onClick={onClick}
      className={`btn btn-${version}`}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  version: "primary",
  type: "button",
  isDisabled: false,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
};
