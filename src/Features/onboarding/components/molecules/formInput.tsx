import { FormInputProps } from "../../types";

export const FormInput = ({
  //   label,
  placeholder,
  value,
  onChange,
  required = false,
}: FormInputProps) => (
  <input
    type="text"
    placeholder={placeholder}
    value={value}
    onChange={(e) => onChange(e.target.value)}
    className="w-full p-3 border rounded-md focus:border-navy focus:ring-1 focus:ring-navy"
    required={required}
  />
);
