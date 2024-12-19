import './styles.scss';
import { PropsWithChildren } from 'react';
import classNames from 'classnames';

interface Props extends PropsWithChildren {
  className?: string;
  width?: number;
  label?: string;
  labelClassName?: string;
  shrink?: boolean;
  header?: boolean;
  headerText?: string;
}

function Block(props: Props) {
  const {
    className = '',
    width,
    children,
    label,
    labelClassName = '',
    shrink = false,
    header = false,
    headerText = '',
  } = props;

  return (
    <div className={`kvadred-block--width-${width} ${className}`}>
      {label && (
        <div className={`kvadred-block__label ${labelClassName}`}>{label}</div>
      )}
      {header && <div className={'kvadred-block__header'}>{headerText}</div>}
      <div
        className={classNames(`kvadred-block`, {
          'kvadred-block--shrink': shrink,
        })}
      >
        {children}
      </div>
    </div>
  );
}

export default Block;
