import { ReactNode, FunctionComponent } from "react";

// Components:
import Loader from "@/components/misc/Loader";

type ButtonStyle = "primary" | "secondary" | "tertiary" | "danger" | "success";
type ButtonSize = "small" | "regular" | "large";

export interface ButtonProps {
  children: ReactNode;
  onClick?: (() => void) | undefined;
  icon?: FunctionComponent<{}>;
  style?: ButtonStyle;
  size?: ButtonSize;
  loading?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string; // Add this line to include the optional className prop
}

const Button: FunctionComponent<ButtonProps> = ({
  children,
  onClick = undefined,
  icon: Icon,
  style = "primary",
  size = "regular",
  loading = false,
  disabled = false,
  type = "submit",
  className = "",
  ...props
}) => {
  let buttonClasses =
    "transition-all duration-100 outline outline-0 outline-violet-600 focus:outline-2 flex items-center justify-center flex-row cursor-pointer";
  let textClasses = "rounded-[8px] tracking-wide font-medium";

  // Define the button styles
  if (style === "primary") {
    buttonClasses += " bg-violet-700 hover:bg-violet-800";
    textClasses += " text-white";
  } else if (style === "secondary") {
    buttonClasses += " bg-white hover:bg-zinc-100 outline-zinc-300";
    textClasses += " text-black";
  } else if (style === "tertiary") {
    buttonClasses += " bg-transparent border border-white";
    textClasses += " text-white";
  } else if (style === "success") {
    buttonClasses += " bg-green-700 hover:bg-green-800 outline-green-200";
    textClasses += " text-light";
  } else if (style === "danger") {
    buttonClasses += " bg-red-700 hover:bg-red-800 outline-red-200";
    textClasses += " text-light";
  }

  // Override the button styles if it is disabled
  if (disabled) {
    buttonClasses += " cursor-not-allowed";
    textClasses += " text-gray-600";

    if (style === "primary") {
      buttonClasses += " bg-zinc-500 hover:bg-zinc-500";
    } else if (style === "secondary") {
      buttonClasses += " bg-zinc-500 hover:bg-zinc-500";
    } else if (style === "tertiary") {
      buttonClasses += " border border-zinc-500";
      textClasses += " text-zinc-500";
    } else if (style === "success") {
      buttonClasses += " bg-zinc-500 hover:bg-zinc-500";
    } else if (style === "danger") {
      buttonClasses += " bg-zinc-500 hover:bg-zinc-500";
    }
  }

  // Define the button size
  if (size === "small") {
    buttonClasses += " py-2 px-4";
    textClasses += " text-sm";
  } else if (size === "regular") {
    buttonClasses += " py-2.5 px-6";
    textClasses += " text-base";
  } else if (size === "large") {
    buttonClasses += " py-3 px-10";
    textClasses += " text-lg";
  }

  return (
    <button
      className={`${buttonClasses} ${textClasses} ${className}`}
      disabled={loading || disabled}
      onClick={onClick}
      type={type}
      {...props}
    >
      <div className="inline-flex gap-3 items-center">
        {Icon && <Icon />} {children}
        {loading && <Loader />}
      </div>
    </button>
  );
};

export default Button;
