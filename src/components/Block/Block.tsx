import './styles.scss';
import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  className?: string;
  width?: number;
  label?: string;
  labelClassName?: string;
}

function Block(props: Props) {
  const { className = '', width, children, label, labelClassName = '' } = props;

  return (
    <>
      {label && (
        <div className={`kvadred-block__label ${labelClassName}`}>{label}</div>
      )}
      <div
        className={`kvadred-block ${className} kvadred-block--width-${width}`}
      >
        {children}
      </div>
    </>
  );
}

export default Block;
