import './styles.scss';
import React, { PropsWithChildren, ReactNode } from 'react';
import classNames from 'classnames';

interface Props extends PropsWithChildren {
  className?: string;
  width?: number;
  label?: string;
  labelClassName?: string;
  shrink?: boolean;
  header?: boolean;
  headerText?: string;
  rightControls?: ReactNode[];
  variant?: 'contained' | 'outlined';
  transparent?: boolean;
  padding?: boolean;
  scrollable?: boolean;
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
    rightControls = [],
    variant = 'contained',
    transparent = false,
    padding = true,
    scrollable = false,
  } = props;

  return (
    <div className={`kvadred-block--width-${width} ${className}`}>
      {label && (
        <div className={`kvadred-block__label ${labelClassName}`}>
          {label}
          <div className={'kvadred-flex kvadred-gap-8'}>
            {rightControls.map((control, index) => (
              <React.Fragment key={`right-contol-${index}`}>
                {control}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
      {header && <div className={'kvadred-block__header'}>{headerText}</div>}
      <div
        className={classNames(`kvadred-block`, {
          // 'kvadred-block--shrink': shrink,
          'kvadred-block--outlined': variant === 'outlined',
          'kvadred-block--transparent': transparent,
          'kvadred-block--no-padding': !padding,
          'kvadred-block--scrollable': scrollable,
        })}
      >
        {children}
      </div>
    </div>
  );
}

export default Block;
