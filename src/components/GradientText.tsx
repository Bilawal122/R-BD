import type { ComponentPropsWithoutRef, CSSProperties, ElementType, ReactNode } from 'react';
import { cn } from '@/lib/utils';
import './GradientText.css';

type GradientTextProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  showBorder?: boolean;
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'color'>;

export default function GradientText<T extends ElementType = 'span'>({
  as,
  children,
  className,
  colors = ['#40ffaa', '#4079ff', '#40ffaa', '#4079ff', '#40ffaa'],
  animationSpeed = 8,
  showBorder = false,
  ...rest
}: GradientTextProps<T>) {
  const Component = (as ?? 'span') as ElementType;
  const gradientStyle: CSSProperties = {
    backgroundImage: `linear-gradient(to right, ${colors.join(', ')})`,
    animationDuration: `${animationSpeed}s`,
  };

  return (
    <Component {...rest} className={cn('animated-gradient-text', className)}>
      {showBorder ? <span className="gradient-overlay" style={gradientStyle} /> : null}
      <span className="text-content" style={gradientStyle}>
        {children}
      </span>
    </Component>
  );
}

