import { Header } from "@/components/Header";
import { Input } from "../components/Input";
import { Button } from "@/components/Button";
import { useState } from "react";
export const ThridStep = ({
  setCurrentStep,
  currentStep,
  formValue,
  setFormError,
  formError,
  setFormValue,
}) => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      handlerChange({ target: { name: "image", value: file } });
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      handlerChange({ target: { name: "image", value: file } });
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handlerChange = (e) => {
    const { name, value } = e.target;
    setFormError((prev) => ({ ...prev, [name]: "" }));
    setFormValue((prev) => ({ ...prev, [name]: value }));
  };
  const clickHandler = () => {
    let errorHave = false;
    const { date, image } = formValue;

    let userDate = new Date(date);
    let myDate = new Date();
    let myYear = myDate.getFullYear();
    let userYear = userDate.getFullYear();
    let age = myYear - userYear;

    if (!date) {
      setFormError((prev) => ({
        ...prev,
        date: "enter your  date",
      }));

      errorHave = true;
    } else if (
      age < 18 ||
      (age === 18) & (myDate.getMonth() + 1 < userDate.getMonth()) ||
      (myDate.getMonth() + 1 === userDate.getMonth()) &
        (myDate.getDate() < userDate.getDate())
    ) {
      setFormError((prev) => ({
        ...prev,
        date: "Ta nasand hureegui bn",
      }));
      errorHave = true;
    }
    if (!image) {
      setFormError((prev) => ({
        ...prev,
        image: "enter your  image",
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
        <div
          className="bg-[#f8f8f8] w-[392px] h-[180px] rounded-lg p-4 flex flex-col items-center justify-center relative"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          {image ? (
            <img
              src={image}
              alt="Uploaded"
              className="w-32 h-32 object-cover rounded-full"
            />
          ) : (
            <>
              <div className="bg-white p-2 rounded-full w-[28px] h-[28px]">
                <img src="/imageIcon.svg" alt="" />
              </div>
              <p className="text-[#09090B] text-[14px]">Add image</p>
              <input
                type="file"
                accept="image/*"
                className="absolute inset-0 opacity-0 cursor-pointer"
                onChange={handleImageChange}
              />
            </>
          )}
        </div>

        <p
          className={`${
            formError.image
              ? "visible text-red-500 text-[14px] focus:border-red-500 "
              : "hidden"
          }`}
        >
          {formError.image}
        </p>
      </div>
      <Button
        setCurrentStep={setCurrentStep}
        currentStep={currentStep}
        clickHandler={clickHandler}
      />
    </div>
  );
};
