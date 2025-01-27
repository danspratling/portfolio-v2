import { cn } from "#/src/utils"

import type { TextAreaProps, TextAreaWrapperProps } from "./TextArea.d"

export const TextArea = ({
  label,
  className,
  error,
  hint,
  required,
  ...props
}: TextAreaWrapperProps & TextAreaProps) => {
  return (
    <div className={cn(className)}>
      <label
        htmlFor={label.toLowerCase().replace(" ", "-")}
        className="mb-2 block text-gray-200 text-sm"
      >
        {label} {required && <span>*</span>}
      </label>

      <div className="relative flex">
        <textarea
          {...props}
          id={label.toLowerCase().replace(" ", "-")}
          name={label.toLowerCase().replace(" ", "-")}
          className={cn(
            " bg-gray-900/40 focus:border-gray-400 focus:bg-gray-900 focus:outline-none inline-flex w-full gap-x-2 rounded-sm border py-2 px-4 text-gray-300 focus:text-gray-200 placeholder:text-gray-500",
            error ? "border-red-500" : "border-white/10",
            className
          )}
          required={required}
        />
      </div>

      {(error || hint) && (
        <p
          className={cn(
            "-mt-3 mb-2 text-sm text-gray-400",
            error && "text-red-500"
          )}
        >
          {error || hint}
        </p>
      )}
    </div>
  )
}
