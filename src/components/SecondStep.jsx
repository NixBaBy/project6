import { Header } from "@/components/Header";
import { Input } from "../components/Input";
import { Button } from "@/components/Button";
export const SecondStep = ({
  setCurrentStep,
  currentStep,
  formValue,
  setFormError,
  formError,
  setFormValue,
}) => {
  const handlerChange = (e) => {
    const { name, value } = e.target;
    setFormError((prev) => ({ ...prev, [name]: "" }));
    setFormValue((prev) => ({ ...prev, [name]: value }));
  };
  const clickHandler = () => {
    let errorHave = false;
    const { email, phone, password, confpassword } = formValue;
    if (!email) {
      setFormError((prev) => ({
        ...prev,
        email: "enter your email ",
      }));
      errorHave = true;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValue.email)) {
      setFormError((prev) => ({
        ...prev,
        email: "PLease provide a valid email adress",
      }));
      errorHave = true;
    }

    if (!phone) {
      setFormError((prev) => ({
        ...prev,
        phone: "enter your phone name",
      }));
      errorHave = true;
    } else if (!/^\+?\d{8}$/.test(formValue.phone)) {
      setFormError((prev) => ({
        ...prev,
        phone: "please enter a valid phone number",
      }));
      errorHave = true;
    }

    if (!password) {
      setFormError((prev) => ({
        ...prev,
        password: "enter your password",
      }));
      errorHave = true;
    } else if (password.length < 6) {
      setFormError((prev) => ({
        ...prev,
        password: "6orontoi too oruulna uu",
      }));
      errorHave = true;
    }
    if (!confpassword) {
      setFormError((prev) => ({
        ...prev,
        confpassword: "enter your confirm password",
      }));
      errorHave = true;
    } else if (password !== confpassword) {
      setFormError((prev) => ({
        ...prev,
        confpassword: "tanii oruulsan nuuts ug taarahgui bn",
      }));
      errorHave = true;
    }

    if (!errorHave) {
      setCurrentStep(currentStep + 1);
    }
  };
  return (
    <div className="flex flex-col w-[480px] p-[32px] justify-between items-start  bg-white">
      <div className="flex flex-col w-[416px] items-start gap-[28px]">
        <Header />
        <div className="flex flex-col items-start gap-[12px]">
          <Input
            label={"Email"}
            placeholder={"Enter your Email"}
            name={"email"}
            type={"text"}
            handlerChange={handlerChange}
            error={formError.email}
          />
          <Input
            label={"Phone Number"}
            placeholder={"Enter your Phone Number"}
            type={"text"}
            name={"phone"}
            handlerChange={handlerChange}
            error={formError.phone}
          />
          <Input
            label={"Password"}
            placeholder={"Enter your password"}
            name={"password"}
            type={"password"}
            handlerChange={handlerChange}
            error={formError.password}
          />
          <Input
            label={"Confirm Password"}
            placeholder={"Enter your confirm password"}
            type={"password"}
            name={"confpassword"}
            handlerChange={handlerChange}
            error={formError.confpassword}
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
