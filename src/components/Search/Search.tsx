import './styles.scss';
import { useCallback, useEffect, useState } from 'react';
import { Button, Option, Select, TextField } from '../index';
import classNames from 'classnames';
import {FaSearch} from "react-icons/fa";

export interface SearchProps {
	text?: string;
	placeholder?: string;
	buttonText?: string;
	className?: string;
	onSearch: (text: string, selectOption?: string) => void;
	searchOnChange?: boolean;
	selectOptions?: Option[];
	fixedWidth?: boolean;
}

function Search(props: SearchProps) {
	const {
		text = '',
		placeholder = '',
		buttonText,
		className = '',
		onSearch,
		searchOnChange = false,
		selectOptions = [],
		fixedWidth = false,
	} = props;

	const [searchText, setSearchText] = useState(text);
	const [selectOption, setSelectOption] = useState<string>();

	const onChangeSearchText = useCallback(
		(text: string) => {
			setSearchText(text);
			if (text === '') {
				onSearch(text);
			}
			if (searchOnChange) {
				onSearch(text, selectOption);
			}
		},
		[onSearch, searchOnChange],
	);

	const onKeyPress = useCallback(
		(e: KeyboardEvent) => {
			const { key } = e;

			if (!!onSearch && key === 'Enter') {
				onSearch(searchText, selectOption);
			}
		},
		[onSearch, searchText, selectOption],
	);

	useEffect(() => {
		selectOptions.forEach(option => {
			if (option.isDefault) setSelectOption(option.value);
		});
	}, []);

	return (
		<div className={classNames(`kvadred-search ${className}`, {
			'kvadred-search--select': !!selectOptions.length,
			'kvadred-search--fixed-width': fixedWidth,
		})}>
			{!!selectOptions.length &&
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
			}
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
				color={'default'}
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
