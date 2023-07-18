import React, { useState, useEffect } from "react";
import styles from "./EmployeePage.module.scss";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import PhotoUser from "../../Components/PhotoUser/PhotoUser";
import UserRow from "../../Components/UserRow/UserRow";
import { useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";
import cn from "classnames";
import getRequest from "../../helpers/getRequest";
import { useNavigate } from "react-router-dom";
import { Button } from "../../Components/Button/Button";
import { LoaderSingle } from "../../Components/Loader/Loader";

const EmployeePage = ({ employee, setIsOpenModal, setTextStatusRequest }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(employee);
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    AOS.init();
    if (userInfo === null) {
      setIsLoad(true);
      getRequest(`https://dummy.restapiexample.com/api/v1/employee/${id}`)
        .then((response) => {
          setUserInfo(response.data.data);
        })
        .catch((error) => {
          setUserInfo(null);
          setIsOpenModal(true);
          setTextStatusRequest(
            `${error?.message}. ${error.response?.data?.message}`
          );
        })
        .finally(() => {
          setIsLoad(false);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <section className={styles.employee}>
      <div className="container">
        <SectionTitle text={`Empoyee #${id}`} />
        {userInfo && (
          <div
            className={cn(
              styles.employee__info,
              "animate__animated",
              "animate__fadeIn"
            )}
          >
            <PhotoUser image={userInfo?.profile_image || ""} name={"Alt"} />
            <div className={styles.employee__info_data}>
              <UserRow label={"Name"} value={userInfo?.employee_name || ""} />
              <UserRow label={"Age"} value={userInfo?.employee_age || ""} />
              <UserRow
                label={"Salary"}
                value={userInfo?.employee_salary || ""}
              />
            </div>
          </div>
        )}
        {!userInfo && isLoad === false && (
          <div
            className={styles.employee__empty}
          >{`Data about user #${id} not found`}</div>
        )}
        {!userInfo && isLoad && (
          <div className={styles.employee__loader}>
            <LoaderSingle />
          </div>
        )}
        <div className={styles.employee__footer}>
          <Button
            width="130px"
            text="Go back"
            action={() => navigate(-1)}
          />
        </div>
      </div>
    </section>
  );
};

export default EmployeePage;
