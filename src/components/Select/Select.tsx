import './styles.scss';
import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { Divider, Search } from '../index';
import { FaChevronDown } from 'react-icons/fa';

export class Option {
  constructor(
    public title: any,
    public value: any,
    public id: any,
    public isDefault?: boolean
  ) {}
}

export interface SelectProps {
  options: Option[];
  name: string;
  placeholder?: string;
  withSearch?: boolean;
  position?: 'bottom' | 'top';
  topControls?: ReactNode;
  onChange: (value: any) => void;
  className?: string;
  label?: string;
  value?: string;
  disabled?: boolean;
}

function Select(props: SelectProps) {
  const {
    options,
    name,
    placeholder = 'Выберите значение',
    withSearch = false,
    disabled = false,
    position = 'bottom',
    topControls,
    onChange,
    className = '',
    label,
    value,
  } = props;

  const [active, setActive] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState<Option[]>(options);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const fieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setFilteredOptions(options);
  }, [options]);

  useEffect(() => {
    const initialSelectedOption =
      options.find((option) => option.value === value) || null;
    setSelectedOption(initialSelectedOption);
  }, [value, options]);

  const onChangeOption = (option: Option) => {
    setSelectedOption(option);
    onChange(option.value);
  };

  const onSearch = (text: string) => {
    if (text.trim() === '') {
      setFilteredOptions(options);
    } else {
      const lowerCaseText = text.toLowerCase();
      const filtered = options.filter((option) =>
        option.title.toLowerCase().includes(lowerCaseText)
      );
      setFilteredOptions(filtered);
    }
  };

  const onClickOutside = useCallback((e: MouseEvent) => {
    if (
      fieldRef.current &&
      !fieldRef.current.contains(e.target as HTMLElement)
    ) {
      setActive(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', onClickOutside, true);

    return () => {
      document.removeEventListener('click', onClickOutside, true);
    };
  }, [onClickOutside]);

  return (
    <div
      ref={fieldRef}
      className={classNames('kvadred-select', {
        'kvadred-select--active': active && position === 'bottom' && !disabled,
        'kvadred-select--active-top': active && position === 'top' && !disabled,
      })}
    >
      {label && <label className="kvadred-select__label">{label}</label>}
      <div
        className={`kvadred-select__header ${className}`}
        onClick={() => {
          if (!disabled) {
            setActive(!active);
          }
        }}
      >
        <div className={'kvadred-select__title'}>
          {selectedOption ? selectedOption.title : placeholder}
        </div>
        <div className={'kvadred-select__icon'}>
          <FaChevronDown />
        </div>
      </div>

      {!disabled && (
        <div
          className={classNames('kvadred-select__options kvadred-option', {
            'kvadred-select__options--with-label': !!label,
          })}
        >
          {topControls}
          {withSearch && (
            <>
              <div className={'kvadred-option__search'}>
                <Search
                  placeholder={'Поиск'}
                  onSearch={(text) => {
                    onSearch(text);
                  }}
                />
              </div>
              <Divider className={'kvadred-select__divider'} />
            </>
          )}
          <ul className={'kvadred-option__block'}>
            {filteredOptions.map((option, index) => (
              <li
                key={`option-${option.id}-${index}`}
                className={'kvadred-option__layout'}
              >
                <label
                  className={'kvadred-option__item'}
                  onClick={() => {
                    setActive(false);
                  }}
                >
                  <input
                    className={'kvadred-option__radio'}
                    type={'radio'}
                    name={name}
                    onChange={() => {
                      onChangeOption(option);
                    }}
                    value={option.value}
                    checked={option.value === value}
                  />
                  <span className={'kvadred-option__title'}>
                    {option.title}
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Select;
