import React from "react";

function Badge({ className = "", variant = "default", ...props }) {
  const baseStyles = "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-sm font-medium transition-colors"

  const variants = {
    default: "border-transparent bg-primary text-primary-foreground",
    secondary: "border-transparent bg-accent text-accent-foreground",
    outline: "border-border bg-card text-foreground",
  }

  const variantStyles = variants[variant] || variants.default

  return (
    <div className={`${baseStyles} ${variantStyles} ${className}`} {...props} />
  )
}

export { Badge }
