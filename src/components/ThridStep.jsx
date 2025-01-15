import { Header } from "@/components/Header";
import { Input } from "../components/Input";
import { Button } from "@/components/Button";
export const ThridStep = ({
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
    const { date } = formValue;

    if (!date) {
      setFormError((prev) => ({
        ...prev,
        date: "enter your  date",
      }));

      errorHave = true;
    }
    if (!errorHave) {
      setCurrentStep(currentStep + 1);
    }
  };
  return (
    <div className="flex flex-col w-[480px] p-[32px] justify-between items-start h-[655px] bg-white">
      <div className="flex flex-col w-[416px] items-start gap-[28px]">
        <Header />
        <div className="flex flex-col items-start gap-[12px]">
          <Input
            type={"date"}
            name={"date"}
            handlerChange={handlerChange}
            error={formError.date}
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
