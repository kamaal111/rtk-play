import styles from "./input.module.css";

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
    <div className={styles["input"]}>
      <label htmlFor={name}>{label}</label>
      <input
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
