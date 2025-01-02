import { useState } from "react";

interface ToggleButtonProps {
  options: { label: string; value: string }[];
  defaultValue: string;
  onChange: (value: string) => void;
}

export const ToggleButton = ({
  options,
  defaultValue,
  onChange,
}: ToggleButtonProps) => {
  const [selected, setSelected] = useState(defaultValue);

  const handleChange = (value: string) => {
    setSelected(value);
    onChange(value);
  };

  return (
    <div className="inline-flex rounded-md border border-navy bg-gray-100 ">
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => handleChange(option.value)}
          className={`px-4 py-1 rounded-md   text-sm transition-colors ${
            selected === option.value
              ? "bg-navy text-white"
              : "text-gray-700 hover:bg-gray-200"
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};
