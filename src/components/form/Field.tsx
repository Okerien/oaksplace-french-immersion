import clsx from "clsx";

const baseClasses =
  "w-full rounded-xl border border-dark-green/15 bg-white px-4 py-3 text-sm text-dark-green placeholder:text-muted/60 focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20";

type InputFieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
};

export function InputField({
  label,
  name,
  type = "text",
  required,
  placeholder,
  className,
}: InputFieldProps) {
  return (
    <label className={clsx("block text-sm font-medium text-dark-green", className)}>
      {label}
      {required && <span className="text-orange"> *</span>}
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className={clsx(baseClasses, "mt-2")}
      />
    </label>
  );
}

type TextareaFieldProps = {
  label: string;
  name: string;
  required?: boolean;
  rows?: number;
  placeholder?: string;
  className?: string;
};

export function TextareaField({
  label,
  name,
  required,
  rows = 4,
  placeholder,
  className,
}: TextareaFieldProps) {
  return (
    <label className={clsx("block text-sm font-medium text-dark-green", className)}>
      {label}
      {required && <span className="text-orange"> *</span>}
      <textarea
        name={name}
        required={required}
        rows={rows}
        placeholder={placeholder}
        className={clsx(baseClasses, "mt-2 resize-none")}
      />
    </label>
  );
}

type SelectFieldProps = {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  required?: boolean;
  className?: string;
};

export function SelectField({ label, name, options, required, className }: SelectFieldProps) {
  return (
    <label className={clsx("block text-sm font-medium text-dark-green", className)}>
      {label}
      {required && <span className="text-orange"> *</span>}
      <select name={name} required={required} defaultValue="" className={clsx(baseClasses, "mt-2")}>
        <option value="" disabled>
          Select an option
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </label>
  );
}
