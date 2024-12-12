import './styles.scss';
import { PropsWithChildren } from 'react';

interface CalloutProps extends PropsWithChildren {
  variant?: 'default' | 'primary' | 'success' | 'alert' | 'warning';
  className?: string;
}

function Callout({
  variant = 'default',
  className = '',
  children,
}: CalloutProps) {
  return (
    <div className={`kvadred-callout kvadred-callout--${variant} ${className}`}>
      {children}
    </div>
  );
}

export default Callout;
