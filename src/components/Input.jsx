export const Input = ({
  label,
  placeholder,
  type,
  name,
  error,
  handlerChange,
  value,
}) => {
  return (
    <div className="flex flex-col gap-[8px]">
      <p className="text-[#334155] text-[14px] font-bold tracking-[-0.14px]">
        {label}
      </p>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={handlerChange}
        value={value}
        className=" p-[12px] rounded-[8px] border-solid border-[1px] border-[#CBD5E1] w-[392px] "
      />
      <small className="text-[red]">{error}</small>
    </div>
  );
};
