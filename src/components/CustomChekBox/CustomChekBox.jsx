import "./CustomChekBox.css";

const CustomCheckbox = ({ value, selectedValue, onChange, label, terms }) => {
  const isChecked = selectedValue === value;

  const handleClick = () => {
    onChange(isChecked ? "" : value);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", marginRight: "20px" }}>
      <div
        className={`custom-checkbox-box ${isChecked ? "checked" : ""}`}
        onClick={handleClick}
      >
        {isChecked && <span className="x-mark">✕</span>}
      </div>
      <span className={`${terms ? "checkbox-lable-sml" : "checkbox-label"}`}>
        {label}
      </span>
    </div>
  );
};

export default CustomCheckbox;
