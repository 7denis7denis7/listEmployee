import React from "react";
import styles from "./Filter.module.scss";
import Select from "react-select";

const Filter = ({
  selectedOption,
  setSelectedOption,
  options,
  label,
  filterRef,
}) => {
  const style = {
    control: (base) => ({
      ...base,
      border: 0,
      boxShadow: "none",
      cursor: "pointer",
    }),
    option: (provided, { isFocused }) => ({
      ...provided,
      backgroundColor: isFocused ? "#2196f3" : "#ffffff",
      color: isFocused ? "#ffffff" : "#2196f3",
    }),
  };
  return (
    <div className={styles.filter}>
      <div className={styles.filter__label}>{`By ${label}`}</div>
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        styles={style}
        className={styles.filter__select}
        classNamePrefix="custom-select"
        ref={filterRef}
        placeholder={`Select ${label}`}
      />
    </div>
  );
};

export default Filter;
