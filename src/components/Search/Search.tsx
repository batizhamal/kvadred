import './styles.scss';
import { useCallback, useEffect, useState } from 'react';
import { Button, Option, Select, TextField } from '../index';
import classNames from 'classnames';
import { FaSearch } from 'react-icons/fa';

export interface SearchProps {
  text?: string;
  placeholder?: string;
  buttonText?: string;
  buttonColor?: 'primary' | 'alert' | 'default';
  className?: string;
  onSearch: (text: string, selectOption?: string) => void;
  searchOnChange?: boolean;
  searchOnClear?: boolean;
  selectOptions?: Option[];
  fixedWidth?: boolean;
  width?: number;
  replacePattern?: RegExp;
}

function Search(props: SearchProps) {
  const {
    text = '',
    placeholder = '',
    buttonText,
    buttonColor = 'default',
    className = '',
    onSearch,
    searchOnChange = false,
    searchOnClear = true,
    selectOptions = [],
    fixedWidth = false,
    width,
    replacePattern,
  } = props;

  const [searchText, setSearchText] = useState(text);
  const [selectOption, setSelectOption] = useState<string>();

  const onChangeSearchText = useCallback(
    (text: string) => {
      let newText = text;
      if (replacePattern) {
        newText = text.replace(replacePattern, '');
      }
      setSearchText(newText);
      if (newText === '' && searchOnClear) {
        onSearch(newText);
      }
      if (searchOnChange) {
        onSearch(newText, selectOption);
      }
    },
    [onSearch, searchOnChange]
  );

  const onKeyPress = useCallback(
    (e: KeyboardEvent) => {
      const { key } = e;

      if (!!onSearch && key === 'Enter') {
        onSearch(searchText, selectOption);
      }
    },
    [onSearch, searchText, selectOption]
  );

  useEffect(() => {
    selectOptions.forEach((option) => {
      if (option.isDefault) setSelectOption(option.value);
    });
  }, []);

  return (
    <div
      className={classNames(
        `kvadred-search ${className} kvadred-search--width-${width}`,
        {
          'kvadred-search--select': !!selectOptions.length,
          'kvadred-search--fixed-width': fixedWidth,
        }
      )}
    >
      {!!selectOptions.length && (
        <Select
          options={selectOptions}
          value={selectOption}
          name={'searchSelect'}
          className={'kvadred-search__select'}
          onChange={(value) => {
            setSelectOption(value);
            onSearch(searchText, value);
          }}
        />
      )}
      <TextField
        value={searchText}
        placeholder={placeholder}
        onChange={onChangeSearchText}
        className={'kvadred-search__text-field'}
        canClear
        onKeyPress={onKeyPress}
      />
      <Button
        className={'kvadred-search__button'}
        variant={'contained'}
        color={buttonColor}
        icon={!buttonText ? FaSearch : undefined}
        text={buttonText}
        onClick={() => {
          onSearch(searchText, selectOption);
        }}
      />
    </div>
  );
}

export default Search;
