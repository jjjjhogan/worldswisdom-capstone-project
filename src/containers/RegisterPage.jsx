import RegisterInfo from "../components/RegisterInfo";
import WisdomInfo from "../components/WisdomInfo";
import RegisterCategories from "../components/RegisterCategories";
import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { postUserData } from "../services/WorldsWisdomCore";

export default function RegisterPage() {
  const navigate = useNavigate();

  const [userData, setUserData] = useState(null);
  const [formData, setFormData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  
  useEffect(() => {
    if (formData.chosenCategories) {
      submitForm();
    }
  });

  function updateFormData(newData) {
    setFormData({ ...formData, ...newData });
  }

  async function submitForm() {
    console.log(formData);
    const userId = sessionStorage.getItem("userId");
    const email = sessionStorage.getItem("email");
    const data = {...formData, email, userId};
    console.log(data);
    const res = await postUserData(data);
    navigate("/");
  }

  function nextPage() {
    setCurrentPage(currentPage + 1);
  }

  function prevPage() {
    setCurrentPage(currentPage - 1);
  }

  return (
    <div className="d-flex flex-column inner-height landing">
      <div className="container flex-grow-1 text-center d-flex flex-column justify-content-center">
          <h1>Welcome to WorldsWisdom</h1>
          <br />
          <br />
          <div>
            {currentPage === 1 && <RegisterInfo nextPage={nextPage} updateFormData={updateFormData} />}
            {currentPage === 2 && <WisdomInfo nextPage={nextPage} prevPage={prevPage} updateFormData={updateFormData} />}
            {currentPage === 3 && <RegisterCategories prevPage={prevPage} submitForm={submitForm} updateFormData={updateFormData}/>}
          </div>
      </div>
    </div>
  );
}