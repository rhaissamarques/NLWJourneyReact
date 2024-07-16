import { ComponentProps, ReactNode } from "react"
import { tv, VariantProps } from "tailwind-variants"

const inputVariants = tv({
  base: 'w-max h-11 px-1 rounded-xl bg-transparent text-lg placeholder-zinc-400 outline-none flex-1',

  variants: {
    variant: {
      primary: "bg-transparent",
      secondary: "bg-zinc-900"
    },

  },

  defaultVariants: {
    variant: "primary",
    size: "default"
  }
})

interface InputProps extends ComponentProps<'input'>, VariantProps<typeof inputVariants> {
  children?: ReactNode
}

export function Input({ children, variant, size, ...rest }: InputProps) {
  return(
    <input {...rest} className={inputVariants({ variant })}>
      {children}
    </input>
  )
}