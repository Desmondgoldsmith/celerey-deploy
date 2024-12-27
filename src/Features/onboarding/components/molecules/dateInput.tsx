interface DateInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const DateInput = ({ value, onChange }: DateInputProps) => {
  const [day, month, year] = value.split("-");

  return (
    <div className="flex gap-2">
      {["D", "M", "M", "Y", "Y", "Y", "Y"].map((placeholder, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          className="w-10 h-10 border rounded-md text-center focus:border-navy focus:ring-1 focus:ring-navy"
          placeholder={placeholder}
        />
      ))}
    </div>
  );
};
