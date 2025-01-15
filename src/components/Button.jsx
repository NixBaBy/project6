export const Button = ({ setCurrentStep, currentStep, clickHandler }) => {
  return (
    <div>
      {currentStep == 0 ? (
        <button
          onClick={clickHandler}
          className="flex py-[10px] px-[12px] justify-center items-center gap-[4px] rounded-[6px] bg-[#121316] text-white text-[16px] tracking-[-0.16px] w-[392px]"
        >
          Continue 1/3 <img src="./arrow.svg" alt="" />
        </button>
      ) : (
        ""
      )}
      {currentStep == 1 ? (
        <div className="flex gap-[8px]">
          <button
            className="w-[128px] py-[10px] px-[12px] rounded-[6px] border-[1px] border-[#CBD5E1] border-solid bg-white"
            onClick={() => setCurrentStep(currentStep - 1)}
          >
            Back
          </button>
          <button
            className="w-[256px] py-[10px] px-[12px] rounded-[6px] border-[1px] border-[#CBD5E1] border-solid bg-[#121316] text-white flex justify-center align-center gap-[4px]"
            onClick={clickHandler}
          >
            continue 2/3
            <img src="./arrow.svg" alt="" />
          </button>
        </div>
      ) : (
        ""
      )}
      {currentStep == 2 ? (
        <div className="flex gap-[8px]">
          <button
            className="w-[128px] py-[10px] px-[12px] rounded-[6px] border-[1px] border-[#CBD5E1] border-solid bg-white"
            onClick={() => setCurrentStep(currentStep - 1)}
          >
            Back
          </button>
          <button
            className="w-[256px] py-[10px] px-[12px] rounded-[6px] border-[1px] border-[#CBD5E1] border-solid bg-[#121316] text-white flex justify-center align-center gap-[4px]"
            onClick={clickHandler}
          >
            continue 2/3
            <img src="./arrow.svg" alt="" />
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
