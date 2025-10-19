import Image from 'next/image';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'white' | 'dark';
  className?: string;
  priority?: boolean;
}

const sizeMap = {
  sm: { width: 'w-10 h-10', sizes: '40px' },
  md: { width: 'w-16 h-16', sizes: '64px' },
  lg: { width: 'w-20 h-20', sizes: '80px' },
  xl: { width: 'w-28 h-28', sizes: '112px' }
};

const variantClasses = {
  default: '',
  white: 'filter brightness-0 invert',
  dark: 'filter brightness-0'
};

export default function Logo({ 
  size = 'md', 
  variant = 'default', 
  className = '',
  priority = false 
}: LogoProps) {
  const { width, sizes } = sizeMap[size];
  
  return (
    <div className={`relative ${width} ${className}`}>
      <Image
        src="/logo.png"
        alt="DoubleCheck Logo"
        fill
        sizes={sizes}
        className={`object-contain ${variantClasses[variant]}`}
        priority={priority}
      />
    </div>
  );
}