import { Input as ShadInput } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function Input({
  label,
  name,
  placeholder,
  minLength,
  value,
  required = false,
  type = "text",
  onChange,
}: {
  type?: React.HTMLInputTypeAttribute;
  label: string;
  name: string;
  value: string;
  placeholder?: string;
  minLength?: number;
  required?: boolean;
  onChange: (value: string) => void;
}) {
  return (
    <div className="my-2.5">
      <Label htmlFor={name}>{label}</Label>
      <ShadInput
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        minLength={minLength}
        required={required}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default Input;
