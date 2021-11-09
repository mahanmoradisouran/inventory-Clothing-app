import Styles from "./Select.module.css";
import Select from "react-select";

const SelectComponent = ({ title, ...rest }) => {
  return (
    <div className={Styles.selectContainer}>
      <label className={Styles.label}>{title}</label>
      <Select className={Styles.select} {...rest} />
    </div>
  );
};

export default SelectComponent;
