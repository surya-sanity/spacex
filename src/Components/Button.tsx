

const Button = (props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {

  return (
    <button className="px-4 py-2 border-[2px] border-white  mr-auto hover:bg-light hover:text-dark hover:animate-none" {...props} />
  )
}

export default Button