import React, { useState } from "react";
import styles from "./FiltersBar.module.scss";
import Filter from "./Components/Filter/Filter";
import Input from "./Components/Input/Input";
import { optionsSortAge } from "../../Dependencies/filters";
import { optionsSortName } from "../../Dependencies/filters";
import cn from "classnames";
import FilterIcon from "../../images/IconComponents/FilterIcon";
import ArrowDropdownIcon from "../../images/IconComponents/ArrowDropdownIcon";

const FiltersBar = ({
  filterAgeRef,
  filterNameRef,
  startAge,
  setStartAge,
  endAge,
  setEndAge,
  searchName,
  setSearchName,
  selectedSortAge,
  setSelectedSortAge,
  selectedSortName,
  setSelectedSortName,
}) => {
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  return (
    <div className={styles.bar__container}>
      <div
        className={styles.bar__filter}
        onClick={() => setIsOpenFilter((prev) => !prev)}
      >
        <div>
          Open filters
          <FilterIcon />
        </div>
        <div
          className={cn(
            styles.bar__filter_arrow,
            isOpenFilter ? styles.bar__filter_arrow_active : ""
          )}
        >
          <ArrowDropdownIcon />
        </div>
      </div>
      <div className={cn(styles.bar, isOpenFilter ? styles.bar__active : "")}>
        <div className={styles.bar__block}>
          <div className={styles.bar__title}>Filter:</div>
          <div className={styles.bar__wrapper}>
            <div className={styles.bar__block}>
              <div className={styles.bar__label}>By age</div>
              <div className={styles.bar__filter_age}>
                <Input
                  type={"number"}
                  placeholder={"From"}
                  value={startAge}
                  action={setStartAge}
                />
                <Input
                  type={"number"}
                  placeholder={"To"}
                  value={endAge}
                  action={setEndAge}
                />
              </div>
            </div>
            <div className={styles.bar__block}>
              <div className={styles.bar__label}>By name</div>
              <div className={styles.bar__filter_name}>
                <Input
                  type={"text"}
                  placeholder={"Search"}
                  value={searchName}
                  action={setSearchName}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bar__block}>
          <div className={styles.bar__title}>Sort:</div>
          <div className={styles.bar__wrapper}>
            <Filter
              selectedOption={selectedSortAge}
              setSelectedOption={setSelectedSortAge}
              options={optionsSortAge}
              label={"age"}
              filterRef={filterAgeRef}
            />
            <Filter
              selectedOption={selectedSortName}
              setSelectedOption={setSelectedSortName}
              options={optionsSortName}
              label={"name"}
              filterRef={filterNameRef}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiltersBar;
