import React, { forwardRef, PropsWithChildren, ReactElement, useCallback } from 'react';
import classNames from 'classnames';
import './styles.scss';

export interface Props extends PropsWithChildren {
	label?: string;
	placeholder?: string;
	className?: string;
	error?: boolean;
	warning?: boolean;
	helperText?: string;
	name?: string;
	disabled?: boolean;
	labelLinkText?: string;
	appendIcon?: ReactElement;
	onAppendClick?: () => void;
	onLabelLinkClick?: () => void;
	onClick?: () => void;
}

const Field = forwardRef<HTMLDivElement, Props>((props, ref) => {
	const {
		label,
		className,
		error = false,
		warning = false,
		disabled = false,
		helperText = '',
		children,
		appendIcon,
		labelLinkText,
		onClick: propsOnClick,
		onAppendClick,
		onLabelLinkClick,
	} = props;

	const onAppendIconClick = useCallback(() => {
		if (!!onAppendClick) {
			onAppendClick();
		}
	}, [onAppendClick]);

	const onLinkClick = useCallback(() => {
		if (!!onLabelLinkClick) {
			onLabelLinkClick();
		}
	}, [onLabelLinkClick]);

	const onClick = useCallback(
		(e: React.MouseEvent<HTMLDivElement>) => {
			e.preventDefault();
			e.stopPropagation();

			if (!propsOnClick) {
				return;
			}

			propsOnClick();
		},
		[propsOnClick],
	);

	return (
		<div
			ref={ref}
			onClick={onClick}
			className={classNames(`kvadred-field`.trim(), {
				'kvadred-field--error': error,
				'kvadred-field--disabled': disabled,
				'kvadred-field--warning': warning,
			})}
		>
			{!!label && (
				<label htmlFor="" className={`kvadred-field__label ${className}`}>
					{label}
					{!!labelLinkText && (
						<a className="kvadred-field__label--link" onClick={onLinkClick}>
							{labelLinkText}
						</a>
					)}
				</label>
			)}
			<div className="kvadred-field__content">
				{children}
				{appendIcon && (
					<button
						className="kvadred-field__append-icon"
						onClick={onAppendIconClick}
					>
						{appendIcon}
					</button>
				)}
			</div>
			{!!helperText && <p className="kvadred-field__helper-text">{helperText}</p>}
		</div>
	);
});

export default Field;
