export type ButtonBaseProps = {
  variant?: "primary" | "outline" | "ghost" | "text"
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  destructive?: boolean
}

export type ButtonLinkProps = ButtonBaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement>

export type ButtonElementProps = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: never }

export type ButtonProps = ButtonLinkProps | ButtonElementProps
