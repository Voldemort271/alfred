import React from "react";
import { cva } from "class-variance-authority";

interface Props {
  variant?: "primary" | "dark" | "transparent" | "disabled";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  constrain?: "yes" | "no";
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
      small: ["text-sm", "py-2", "px-4"],
      medium: ["text-base", "py-3", "px-6"],
      large: ["text-lg", "py-4", "px-8"],
    },
    constrain: {
      yes: ["max-w-48"],
      no: [],
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
    constrain: "yes",
  },
});

const Button = (props: Props) => {
  return (
    <button
      className={button({
        variant: props.disabled ? "disabled" : props.variant,
        size: props.size,
        constrain: props.constrain,
      })}
      onClick={props.clickEvent}
    >
      {props.children}
    </button>
  );
};

export default Button;
