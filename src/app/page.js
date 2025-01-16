"use client";

import { FirstStep } from "@/components/FirstStep";
import { SecondStep } from "@/components/SecondStep";
import { ThridStep } from "@/components/ThridStep";
import { FourthStep } from "@/components/FourthStep";
import { useEffect, useState } from "react";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);

  const Allsteps = [FirstStep, SecondStep, ThridStep, FourthStep][currentStep];

  const [formValue, setFormValue] = useState({
    firstname: "",
    lastname: "",
    username: "",
  });
  const [formError, setFormError] = useState({
    firstname: "",
    lastname: "",
    username: "",
  });
  useEffect(() => {
    const saveUserInfo = localStorage.getItem("saveUserInfo");
    if (currentStep == 1) {
      setFormValue({ ...saveUserInfo });
    }
  }, []);
  return (
    <div>
      <Allsteps
        setCurrentStep={setCurrentStep}
        currentStep={currentStep}
        formValue={formValue}
        setFormError={setFormError}
        formError={formError}
        setFormValue={setFormValue}
      />
    </div>
  );
}
