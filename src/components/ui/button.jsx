import React from "react";

const baseStyles =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]";

const variants = {
  default: "bg-primary text-primary-foreground shadow-sm shadow-primary/30 hover:bg-[#0f67b0] hover:shadow-md hover:shadow-primary/30",
  outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
  inverse: "border border-white/30 bg-white/5 text-white hover:bg-white/15 hover:border-white/50",
  ghost: "hover:bg-accent hover:text-accent-foreground",
};

const sizes = {
  default: "h-10 px-5 text-sm",
  sm: "h-9 px-4 text-sm",
  lg: "h-12 px-7 text-base",
  icon: "h-10 w-10",
};

// Shared so links can look like buttons without nesting <button> inside <a>
function buttonClasses({ variant = "default", size = "default", className = "" } = {}) {
  return `${baseStyles} ${variants[variant] || variants.default} ${sizes[size] || sizes.default} ${className}`;
}

const Button = React.forwardRef(
  ({ className = "", variant, size, type = "button", ...props }, ref) => (
    <button
      type={type}
      className={buttonClasses({ variant, size, className })}
      ref={ref}
      {...props}
    />
  )
);

Button.displayName = "Button";

export { Button, buttonClasses };
