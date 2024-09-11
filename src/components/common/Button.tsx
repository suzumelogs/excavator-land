import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
  maxWidth?: string
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = '',
  type = 'button',
  maxWidth = 'max-w-xs'
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 bg-[#FFA21A] text-[#2C2A29] rounded-lg shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#FFA21A] ${maxWidth} ${className} opacity-100 hover:opacity-90 font-semibold`}
    >
      {children}
    </button>
  )
}

export default Button
