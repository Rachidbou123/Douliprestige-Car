import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'whatsapp';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  type?: 'button' | 'submit' | 'reset';
  icon?: React.ReactNode;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  href, 
  onClick, 
  type = 'button', 
  icon,
  disabled = false
}) => {
  const baseStyle = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A1A1A] disabled:opacity-70 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-[#1A1A1A] text-white hover:bg-[#333333] px-6 py-3",
    secondary: "bg-[#F5F2EB] text-[#1A1A1A] hover:bg-[#EAE5D9] border border-[#EAE5D9] px-6 py-3",
    outline: "bg-transparent border border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white px-6 py-3",
    ghost: "bg-transparent text-[#1A1A1A] hover:text-[#666666] px-4 py-2",
    whatsapp: "bg-[#25D366] text-white hover:bg-[#20bd5a] px-6 py-3"
  };

  const combinedClassName = `${baseStyle} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClassName} target={href.startsWith('http') ? '_blank' : '_self'} rel="noreferrer">
        {icon && <span className="ltr:mr-2 rtl:ml-2">{icon}</span>}
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClassName} disabled={disabled}>
      {icon && <span className="ltr:mr-2 rtl:ml-2">{icon}</span>}
      {children}
    </button>
  );
};
