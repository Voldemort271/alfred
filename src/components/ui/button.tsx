import React from "react";
import { cva } from "class-variance-authority";

interface Props {
  variant?: "primary" | "dark" | "transparent" | "disabled";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  children: React.ReactNode;
  clickEvent?: () => void;
}

const button = cva(["font-medium truncate uppercase"], {
  variants: {
    variant: {
      primary: [
        "bg-zinc-100 border border-zinc-900 transition hover:bg-zinc-900 hover:text-zinc-100",
      ],
      dark: ["bg-zinc-900 text-zinc-100 border border-zinc-100"],
      transparent: ["bg-transparent text-zinc-100 border border-zinc-100"],
      disabled: ["bg-zinc-400 text-zinc-200 pointer-events-none"],
    },
    size: {
      small: ["text-sm", "py-2", "px-4", "max-w-32"],
      medium: ["text-base", "py-3", "px-6", "max-w-40"],
      large: ["text-lg", "py-4", "px-8", "max-w-48"],
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});

const Button = (props: Props) => {
  return (
    <button
      className={button({
        variant: props.disabled ? "disabled" : props.variant,
        size: props.size,
      })}
    >
      {props.children}
    </button>
  );
};

export default Button;
