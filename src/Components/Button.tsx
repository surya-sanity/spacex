
interface ButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  children?: React.ReactNode
  className?: string
  theme?: 'dark' | 'light' | 'auto'
  isDisabled?: boolean
}

const Button = (props: ButtonProps) => {
  const { onClick, children, className, theme = "auto", isDisabled } = props;

  const buttonStyle = {
    light: "px-4 py-2 border-[2px] border-dark mr-auto hover:bg-dark hover:text-light hover:animate-none",
    dark: "px-4 py-2 border-[2px] border-light mr-auto hover:bg-light hover:text-dark  hover:animate-none",
    auto: "px-4 py-2 border-[2px] border-dark dark:border-light mr-auto hover:bg-dark hover:dark:bg-light hover:text-light hover:dark:text-dark hover:animate-none"
  }

  return (
    <button
      className={`${buttonStyle[theme]} ${className}`}
      onClick={onClick}
      disabled={isDisabled}
      children={children}
    />
  )
}

export default Button