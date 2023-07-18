import React, { useEffect, useState, useRef, useMemo } from "react";
import styles from "./MainPage.module.scss";
import CardEmployee from "../../Components/CardEmployee/CardEmployee";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import FiltersBar from "../../Components/FiltersBar/FiltersBar";
import { Link } from "react-router-dom";
import getRequest from "../../helpers/getRequest";
import { Loader } from "../../Components/Loader/Loader";
import "animate.css";

const MainPage = ({
  employers,
  setEmployers,
  chooseEmployee,
  setIsOpenModal,
  setTextStatusRequest,
}) => {
  const [selectedSortAge, setSelectedSortAge] = useState(null);
  const [selectedSortName, setSelectedSortName] = useState(null);
  const [startAge, setStartAge] = useState(null);
  const [endAge, setEndAge] = useState(null);
  const [searchName, setSearchName] = useState("");
  const [isLoadingEmployees, setIsLoadingEmployees] = useState(false);

  const filterAge = useRef();
  const filterName = useRef();

  useEffect(() => {
    if (employers?.length) {
      return;
    } else {
      setIsLoadingEmployees(true);
      getRequest("https://dummy.restapiexample.com/api/v1/employees")
        .then((response) => setEmployers(response.data?.data))
        .catch((error) => {
          setIsOpenModal(true);
          setTextStatusRequest(
            `${error?.message}. ${error.response?.data?.message}`
          );
        })
        .finally(() => {
          setIsLoadingEmployees(false);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [employers]);

  useEffect(() => {
    if (!selectedSortAge) return;
    filterName.current.clearValue();
  }, [selectedSortAge]);

  useEffect(() => {
    if (!selectedSortName) return;
    filterAge.current.clearValue();
  }, [selectedSortName]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let xAxis = (window.innerWidth / 2 - e.pageX) / 50;
      let yAxis =
        (window.innerHeight / 2 -
          ((e.pageY - e.currentTarget.getBoundingClientRect().top) * 95) /
            100) /
        60;
      e.currentTarget.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    };

    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      card.addEventListener("mousemove", handleMouseMove);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mousemove", handleMouseMove);
      });
    };
  }, []);

  const test = useMemo(() => {
    return employers
      ?.filter(
        (employee) =>
          employee.employee_name
            .toLowerCase()
            .includes(searchName.toLowerCase()) &&
          employee.employee_age >= (startAge || 0) &&
          employee.employee_age <= (endAge || 999)
      )
      ?.sort((a, b) => {
        if (selectedSortAge != null && selectedSortName === null) {
          return selectedSortAge.value === "old"
            ? b.employee_age - a.employee_age
            : a.employee_age - b.employee_age;
        } else if (selectedSortName != null && selectedSortAge === null) {
          return selectedSortName.value === "A_to_Z"
            ? a.employee_name.localeCompare(b.employee_name)
            : b.employee_name.localeCompare(a.employee_name);
        } else {
          return 0;
        }
      });
  }, [
    employers,
    endAge,
    searchName,
    selectedSortAge,
    selectedSortName,
    startAge,
  ]);

  return (
    <section className={styles.main}>
      <div className="container">
        <SectionTitle text={"List of employees"} />
        <FiltersBar
          selectedSortAge={selectedSortAge}
          setSelectedSortAge={setSelectedSortAge}
          selectedSortName={selectedSortName}
          setSelectedSortName={setSelectedSortName}
          filterAgeRef={filterAge}
          filterNameRef={filterName}
          startAge={startAge}
          setStartAge={setStartAge}
          endAge={endAge}
          setEndAge={setEndAge}
          searchName={searchName}
          setSearchName={setSearchName}
        />
        <div className={styles.main__subpage}>
          <Link to={"/sum"}>Total salary of all employees</Link>
        </div>
        <div id="results" className={styles.main__wrapper}>
          {test?.length ? (
            test.map((item) => {
              const {
                id,
                employee_name,
                employee_salary,
                employee_age,
                profile_image,
              } = item;
              return (
                <CardEmployee
                  key={id}
                  id={id}
                  name={employee_name}
                  salary={employee_salary}
                  age={employee_age}
                  image={profile_image}
                  action={chooseEmployee}
                />
              );
            })
          ) : isLoadingEmployees ||
            (employers === null && isLoadingEmployees === false) ? null : (
            <div className={styles.main__empty}>
              Nothing was found for your request! Please change your query
            </div>
          )}
          {employers === null && isLoadingEmployees === false && (
            <div className={styles.main__empty}>List is empty :(</div>
          )}
          {employers === null &&
            isLoadingEmployees === true &&
            Array.from({ length: 24 }, (_, index) => (
              <div className={styles.main__loader} key={index}>
                <Loader />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default MainPage;
