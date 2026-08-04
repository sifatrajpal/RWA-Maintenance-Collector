const variantStyles = {
  dark: 'bg-[#16231B] text-[#F5F1E6]',
  outline: 'border border-[#16231B] text-[#16231B] bg-transparent',
  brass: 'bg-[#B4863A] text-[#16231B]',
  ghost: 'text-[#EDE4CC] bg-transparent',
};

export type ButtonVariant = keyof typeof variantStyles;

type ButtonProps = {
  variant?: ButtonVariant;
  children: React.ReactNode;
  onClick?: () => void;
};

export function Button({ variant = 'dark', children, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className={`px-6 py-3 rounded-full font-semibold ${variantStyles[variant]}`}>
      {children}
    </button>
  );
}