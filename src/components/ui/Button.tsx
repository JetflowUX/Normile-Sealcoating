import React from 'react';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
}
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  ...props
}: ButtonProps) {
  const baseStyles =
  'inline-flex items-center justify-center font-heading uppercase tracking-wider font-semibold transition-colors duration-200';
  const variants = {
    primary: 'bg-brand-orange text-white hover:bg-brand-orange-hover',
    secondary: 'bg-brand-purple text-white hover:bg-brand-purple-light',
    outline:
    'border-2 border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white'
  };
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>);

  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>);

}