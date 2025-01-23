import { cn } from "#/src/utils"

// import { Image } from "../Image"
import type { BadgeProps } from "./Badge.d"

export const Badge = ({
  variant = "rounded",
  size = "md",
  color = "random",
  transparent,
  dot,
  image,
  className,
  children,
  ...props
}: BadgeProps) => {
  const randomColor = (() => {
    const colors = [
      "gray",
      "red",
      "orange",
      "amber",
      "yellow",
      "lime",
      "green",
      "emerald",
      "teal",
      "cyan",
      "sky",
      "blue",
      "indigo",
      "violet",
      "purple",
      "fuchsia",
      "pink",
      "rose",
    ]
    return colors[Math.floor(Math.random() * colors.length)]
  })()

  const selectedColor = (() => {
    if (color === "random") return randomColor
    if (color === "success") return "green"
    if (color === "danger") return "red"
    if (color === "warning") return "amber"
    if (color === "info") return "blue"
    return color
  })()

  return (
    <div
      className={cn(
        // layout
        "border inline-flex items-center justify-center overflow-hidden font-medium whitespace-nowrap tracking-snug [&>*]:inline-flex [&>*]:items-center [&>*]:my-0",

        // variants
        variant === "rounded" && "rounded-lg",
        variant === "pill" && "rounded-full",
        variant === "square" && "rounded-none",

        // sizing
        size === "sm" &&
          "gap-1 text-xs px-1.5 py-0.5 [&>*]:gap-1 leading-[18px]",
        size === "md" &&
          "gap-1.5 text-sm px-2 py-0.5 [&>*]:gap-1.5 leading-[20px]",
        size === "lg" &&
          "gap-1.5 text-md px-2.5 py-1 [&>*]:gap-1.5 leading-[22px]",

        // Icon sizes
        size === "sm" &&
          "[&>svg]:-mx-0.5 [&>svg]:size-3 [&>*>svg]:-mx-0.5 [&>*>svg]:size-3",
        size === "md" &&
          "[&>svg]:-mx-0.5 [&>svg]:size-4 [&>*>svg]:-mx-0.5 [&>*>svg]:size-4",
        size === "lg" &&
          "[&>svg]:-mx-0.5 [&>svg]:size-5 [&>*>svg]:-mx-0.5 [&>*>svg]:size-5",

        // colors
        selectedColor === "gray" &&
          "bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-950 dark:text-gray-300 dark:border-gray-800",
        selectedColor === "red" &&
          "bg-red-50 text-red-700 border-red-200 dark:bg-red-950 dark:text-red-300 dark:border-red-800",
        selectedColor === "orange" &&
          "bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-950 dark:text-orange-300 dark:border-orange-800",
        selectedColor === "amber" &&
          "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950 dark:text-amber-300 dark:border-amber-800",
        selectedColor === "yellow" &&
          "bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-950 dark:text-yellow-300 dark:border-yellow-800",
        selectedColor === "lime" &&
          "bg-lime-50 text-lime-700 border-lime-200 dark:bg-lime-950 dark:text-lime-300 dark:border-lime-800",
        selectedColor === "green" &&
          "bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800",
        selectedColor === "emerald" &&
          "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-800",
        selectedColor === "teal" &&
          "bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-950 dark:text-teal-300 dark:border-teal-800",
        selectedColor === "cyan" &&
          "bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-950 dark:text-cyan-300 dark:border-cyan-800",
        selectedColor === "sky" &&
          "bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-950 dark:text-sky-300 dark:border-sky-800",
        selectedColor === "blue" &&
          "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800",
        selectedColor === "indigo" &&
          "bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950 dark:text-indigo-300 dark:border-indigo-800",
        selectedColor === "violet" &&
          "bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-950 dark:text-violet-300 dark:border-violet-800",
        selectedColor === "purple" &&
          "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800",
        selectedColor === "fuchsia" &&
          "bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200 dark:bg-fuchsia-950 dark:text-fuchsia-300 dark:border-fuchsia-800",
        selectedColor === "pink" &&
          "bg-pink-50 text-pink-700 border-pink-200 dark:bg-pink-950 dark:text-pink-300 dark:border-pink-800",
        selectedColor === "rose" &&
          "bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950 dark:text-rose-300 dark:border-rose-800",

        // transparent
        transparent && "bg-transparent shadow-sm",

        // any of the above classes can be overridden by passing a className prop
        className
      )}
      {...props}
    >
      {!image?.src && dot && (
        <span
          className={cn(
            "bg-current opacity-75 rounded-full flex-shrink-0",
            size === "sm" && "size-[5px]",
            size === "md" && "size-[6px]",
            size === "lg" && "size-[7px]"
          )}
        />
      )}

      {/* {image?.src && (
        <Image
          src={image.src}
          alt={image.alt}
          className={cn("flex-shrink-0 rounded-full -ml-0.5 size-4")}
        />
      )} */}
      {children}
    </div>
  )
}
