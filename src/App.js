import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage/MainPage";
import EmployeePage from "./Pages/EmployeePage/EmployeePage";
import EmployeeSum from "./Pages/EmployeeSum/EmployeeSum";
import Modal from "./Components/Modal/Modal";

function App() {
  const [employers, setEmployers] = useState(null);
  const [currentEmployee, setCurrentEmployee] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [textStatusRequest, setTextStatusRequest] = useState(null);

  return (
    <>
      <Routes>
        <Route
          path="/"
          index
          element={
            <MainPage
              employers={employers}
              setEmployers={setEmployers}
              chooseEmployee={setCurrentEmployee}
              setIsOpenModal={setIsOpenModal}
              setTextStatusRequest={setTextStatusRequest}
            />
          }
        />
        <Route
          path="employee/:id"
          element={
            <EmployeePage
              employee={currentEmployee}
              setIsOpenModal={setIsOpenModal}
              setTextStatusRequest={setTextStatusRequest}
            />
          }
        />
        <Route path="sum" element={<EmployeeSum employers={employers} />} />
      </Routes>
      {isOpenModal && (
        <Modal action={() => setIsOpenModal(false)} text={textStatusRequest} />
      )}
    </>
  );
}

export default App;
