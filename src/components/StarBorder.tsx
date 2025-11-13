import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
import { cn } from '@/lib/utils';
import './StarBorder.css';

type StarBorderProps<T extends ElementType> = {
  as?: T;
  className?: string;
  color?: string;
  speed?: string;
  thickness?: number;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'color'>;

export default function StarBorder<T extends ElementType = 'button'>({
  as,
  className,
  color = 'white',
  speed = '6s',
  thickness = 1,
  children,
  ...rest
}: StarBorderProps<T>) {
  const Component = (as ?? 'button') as ElementType;
  const { style, ...restProps } = rest as ComponentPropsWithoutRef<T>;

  return (
    <Component
      className={cn('star-border-container', className)}
      style={{ padding: `${thickness}px 0`, ...(style ?? {}) }}
      {...(restProps as ComponentPropsWithoutRef<T>)}
    >
      <div
        className="border-gradient-bottom"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div
        className="border-gradient-top"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div className="inner-content">{children}</div>
    </Component>
  );
}

