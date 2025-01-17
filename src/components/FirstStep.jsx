import { Header } from "@/components/Header";
import { Input } from "../components/Input";
import { Button } from "@/components/Button";
import { useEffect, useState } from "react";

export const FirstStep = ({
  setCurrentStep,
  currentStep,
  formValue,
  setFormError,
  formError,
  setFormValue,
}) => {
  const handlerChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormError((prev) => ({ ...prev, [name]: "" }));
    setFormValue((prev) => ({ ...prev, [name]: value }));
  };
  const clickHandler = () => {
    let errorHave = false;
    const { firstname, lastname, username } = formValue;
    if (!firstname.trim()) {
      setFormError((prev) => ({
        ...prev,
        firstname: "enter your first name",
      }));
      errorHave = true;
    }

    if (!lastname.trim()) {
      setFormError((prev) => ({
        ...prev,
        lastname: "enter your last name",
      }));
      errorHave = true;
    }

    if (!username.trim()) {
      setFormError((prev) => ({
        ...prev,
        username: "enter your username",
      }));
      errorHave = true;
    }

    if (!errorHave) {
      setCurrentStep(currentStep + 1);
      localStorage.setItem("currentstep", 1);
    }
    localStorage.setItem("saveUserInfo", JSON.stringify(formValue));
  };

  return (
    <div className="flex flex-col w-[480px] p-[32px] justify-between items-start h-[655px] bg-white">
      <div className="flex flex-col w-[416px] items-start gap-[28px]">
        <Header />
        <div className="flex flex-col items-start gap-[12px]">
          <Input
            label={"First Name"}
            placeholder={"Enter your First Name"}
            type={"text"}
            name={"firstname"}
            error={formError.firstname}
            handlerChange={handlerChange}
            value={formValue.firstname}
          />
          <Input
            label={"Last Name"}
            placeholder={"Enter your Last Name"}
            type={"text"}
            name={"lastname"}
            error={formError.lastname}
            handlerChange={handlerChange}
            value={formValue.lastname}
          />
          <Input
            label={"User Name"}
            placeholder={"Enter your User Name"}
            type={"text"}
            name={"username"}
            error={formError.username}
            handlerChange={handlerChange}
            value={formValue.username}
          />
        </div>
      </div>
      <Button
        setCurrentStep={setCurrentStep}
        currentStep={currentStep}
        clickHandler={clickHandler}
      />
    </div>
  );
};
