"use client";

import { FirstStep } from "@/components/FirstStep";
import { SecondStep } from "@/components/SecondStep";
import { ThridStep } from "@/components/ThridStep";
import { FourthStep } from "@/components/FourthStep";
import { useEffect, useState } from "react";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);

  const Allsteps = [FirstStep, SecondStep, ThridStep, FourthStep][currentStep];

  const [formValue, setFormValue] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    email: "",
    phone: "",
    confpassword: "",
    date: "",
    image: "",
  });
  const [formError, setFormError] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    email: "",
    phone: "",
    confpassword: "",
    date: "",
    image: "",
  });
  useEffect(() => {
    const saveUserInfo = localStorage.getItem("saveUserInfo");
    const pages = localStorage.getItem("currentstep");
    setCurrentStep(Number(pages));
    const parsedInfo = JSON.parse(saveUserInfo);
    if (parsedInfo) {
      setFormValue({
        ...formValue,
        firstname: parsedInfo.firstname,
        lastname: parsedInfo.lastname,
        username: parsedInfo.username,
        password: parsedInfo.password,
        email: parsedInfo.email,
        phone: parsedInfo.phone,
        confpassword: parsedInfo.confpassword,
        date: parsedInfo.date,
        image: parsedInfo.image,
      });
    }
  }, []);
  return (
    <div>
      <AnimatePresence initial={false}>
        <motion.div
          className="w-[100vw] h-[100vh] flex flex-col justify-center items-center"
          key={currentStep}
          initial={{ opacity: 0, x: 150 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -150 }}
          transition={{ duration: 0.75, delay: 0.2 }}
        >
          <Allsteps
            setCurrentStep={setCurrentStep}
            currentStep={currentStep}
            formValue={formValue}
            setFormError={setFormError}
            formError={formError}
            setFormValue={setFormValue}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
