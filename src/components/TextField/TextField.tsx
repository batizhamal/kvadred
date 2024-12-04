import React, {
  CSSProperties,
  memo,
  ReactNode,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import Field, { FieldProps } from '../Field';
import './styles.scss';
import { numberWithSpaces, setMask } from '@app/helpers';
import classNames from 'classnames';
import styled from 'styled-components';

import {FaWindowClose, FaEye} from 'react-icons/fa'
import {FaE} from "react-icons/fa6";

export interface Props extends FieldProps {
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  value?: string;
  onChange?: (value: string, name: any) => void;
  onBlur?: () => void;
  secureTextEntry?: boolean;
  multiline?: boolean;
  onKeyPress?: (e: KeyboardEvent) => void;
  cols?: number;
  type?: string;
  disabled?: boolean;
  width?: string;
  priceFormat?: boolean;
  timeFormat?: boolean;
  maxLength?: number;
  inputProps?: any;
  readOnly?: boolean;
  canClear?: boolean;
  showCount?: boolean;
  style?: CSSProperties;
  inputClassName?: string;
  isFocused?: boolean;
  onAppendClick?: () => void;
  hidePassword?: boolean;
  onFocus?: () => void;
}

const StyledColumns = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: left;
  align-items: center;
  flex: 1 1 auto;
  width: 100%;
  box-sizing: border-box;
  position: relative;
`;

function TextField(props: Props) {
  const {
    value = '',
    onChange,
    onBlur,
    onKeyPress: onKeyPressProps,
    placeholder,
    secureTextEntry = false,
    className = '',
    inputClassName = '',
    type = 'text',
    name = '',
    multiline = false,
    disabled = false,
    priceFormat = false,
    timeFormat = false,
    readOnly = false,
    maxLength,
    inputProps = {},
    width,
    startIcon = null,
    endIcon = null,
    canClear = false,
    showCount,
    style,
    isFocused = false,
    onAppendClick,
    onFocus,
    hidePassword = true,
    ...fieldProps
  } = props;
  const [cursor, setCursor] = useState<number | null>(null);
  const ref = useRef<HTMLInputElement>(null);

  useLayoutEffect(() => {
    if (type !== 'number') {
      ref.current?.setSelectionRange(cursor, cursor);
    }
  }, [cursor, type]);

  const onTimeChange = useCallback(
    (value: string, selectionStart: number | null) => {
      const maskedValue = setMask(value.replace(/\D/g, ''), '##:##');
      const maskedValueParts = maskedValue.split(':');
      const hourParts = maskedValueParts[0].split('');
      const part2 = maskedValueParts[1];

      if (
        Number(hourParts[0]) > 2 ||
        (Number(hourParts[0]) === 2 && Number(hourParts[1]) > 3)
      ) {
        return;
      }

      if (part2) {
        const minParts = part2.split('');

        if (Number(minParts[0]) > 5) {
          return;
        }

        if (!!minParts[1] && Number(maskedValueParts[1]) > 59) {
          return;
        }
      }

      if (selectionStart === 3) {
        setCursor(selectionStart + 1);
      } else {
        setCursor(selectionStart);
      }
      if (onChange) {
        onChange(maskedValue, name);
      }
    },
    [name, onChange]
  );

  const onChangeText = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { value: eventValue, selectionStart } = e.target;

      if (readOnly) {
        return;
      }

      if (!!onChange) {
        if (timeFormat) {
          onTimeChange(eventValue, selectionStart);
          return;
        }
        onChange(
          priceFormat ? eventValue.replace(/[^0-9,0-9]/g, '') : eventValue,
          name
        );
      }
    },
    [readOnly, onChange, timeFormat, priceFormat, name, onTimeChange]
  );

  const onKeyPress = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (!!onKeyPressProps) {
        onKeyPressProps(e as unknown as KeyboardEvent);
      }
    },
    [onKeyPressProps]
  );

  const onClearClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      e.stopPropagation();

      if (!onChange) {
        return;
      }

      onChange('', name);
    },
    [name, onChange]
  );

  return (
    <Field
      {...fieldProps}
      disabled={disabled}
      className={classNames(`kvadred-text-field ${className}`.trim(), {
        'kvadred-text-field--icon': startIcon,
        'kvadred-text-field--icon-end': endIcon,
      })}
    >
      <StyledColumns>
        {startIcon && (
          <div
            className={classNames('kvadred-text-field__icon', {
              'kvadred-text-field__icon--untouched': !value,
            })}
          >
            {startIcon}
          </div>
        )}
        {multiline ? (
          <textarea
            className={`kvadred-text-field__textarea ${inputClassName}`}
            onChange={onChangeText}
            placeholder={placeholder}
            onKeyDown={onKeyPress}
            value={value}
            maxLength={maxLength}
            disabled={disabled}
            style={style}
          />
        ) : (
          <input
            ref={ref}
            className={classNames(`kvadred-text-field__input ${inputClassName}`, {
              'kvadred-text-field__input--disabled': disabled,
              'kvadred-text-field__input--icon': startIcon,
              'kvadred-text-field__input--icon-end': endIcon,
            })}
            type={secureTextEntry && hidePassword ? 'password' : 'text'}
            value={priceFormat ? numberWithSpaces(value) : value}
            onChange={onChangeText}
            onBlur={onBlur}
            onFocus={props.onFocus}
            placeholder={placeholder}
            onKeyDown={onKeyPress}
            disabled={disabled}
            style={{ width }}
            {...inputProps}
          />
        )}
        {type === 'password' && (
          <div
            className={classNames('kvadred-text-field__icon-end', {
              'kvadred-text-field__icon-end--visible': isFocused || !!value,
            })}
            onClick={onAppendClick}
          >
            {hidePassword ? <FaEye /> : <FaEye />}
          </div>
        )}
        {canClear && !multiline && !!value && !disabled && !readOnly && (
          <button className="kvadred-text-field__clear" onClick={onClearClick}>
            <FaWindowClose/>
          </button>
        )}
      </StyledColumns>
      {showCount && maxLength && (
        <div className="kvadred-text-field__count">
          <span className="kvadred-text-field__count--current">
            {value.length}
          </span>{' '}
          / {maxLength}
        </div>
      )}
    </Field>
  );
}

export default memo(TextField);
