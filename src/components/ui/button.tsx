export function Button({
  color = "default",
  ...props
}: {
  color?: "default" | "accent";
  className?: string;
  children?: React.ReactNode;
}) {
  const colors = {
    default:
      "dark:text-[#E6E6E6] hover:dark:from-[#171717] hover:dark:to-[#232323] dark:from-[#0C0C0C] dark:to-[#161616] dark:border-black border-white hover:from-[#F6F5F5] hover:to-[#E9E9E9] text-[#4C4C4C] from-[#F9F9F9] to-[#F3F3F3] ring-[#F3F3F3] dark:ring-[#161616]",
    accent:
      "from-[#3DA8FF] to-[#228ADF] border-white dark:border-black ring-[#3DA8FF] text-[#F1FBFF] text-shadow-sm hover:from-[#208CE4] hover:to-[#0270CA]",
  };

  return (
    <button
      {...props}
      className={`rounded-2xl cursor-default border border-1.5 w-36 tracking-tight font-medium transition text-sm py-2 bg-linear-to-b ring ring-offset-1.5 shadow-sm ${colors[color]} ${props.className}`}
    >
      {props.children}
    </button>
  );
}
