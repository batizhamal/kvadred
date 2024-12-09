import { FunctionComponent, useCallback, useMemo, useRef } from 'react';
import './styles.scss';

export type TypographyVariants =
	| 'primary'
	| 'secondary'
	| 'tiny'
	| 'small'
	| 'bold'
	| 'body'
	| 'large'
	| 'link'
	| 'label'
	| 'h1'
	| 'h2'
	| 'h3'
	| 'h4'
	| 'h5'
	| 'h6';

export type TypographyTransform = 'capitalize' | 'lowercase' | 'uppercase';

export interface TypographyProps {
	text: string;
	/**/variant?: TypographyVariants;
	transform?: TypographyTransform;
	className?: string;
	highLight?: string;
	ellipsis?: boolean;
	tooltip?: string;
	innerHtml?: string;
	datepicker?: boolean;
}

const reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
const reHasRegExpChar = RegExp(reRegExpChar.source);

const Typography: FunctionComponent<TypographyProps> = (props) => {
	const {
		text,
		transform,
		className = '',
		highLight,
		ellipsis = false,
		tooltip,
		innerHtml,
		datepicker,
	} = props;

	const ref = useRef<HTMLParagraphElement>(null);

	const getTextPattern = useCallback(() => {
		const pattern =
			highLight && reHasRegExpChar.test(highLight)
				? highLight.replace(reRegExpChar, '\\$&')
				: highLight || '';

		return new RegExp(`(${pattern})`, 'gi');
	}, [highLight]);

	const getTextParts = useCallback(() => text.split(getTextPattern()), [text, getTextPattern]);

	const variant = useMemo<TypographyVariants>(() => {
		switch (props.variant) {
			case 'primary':
				return 'primary';
			case 'secondary':
				return 'secondary';
			case 'tiny':
				return 'tiny';
			case 'small':
				return 'small';
			case 'bold':
				return 'bold';
			case 'large':
				return 'large';
			case 'link':
				return 'link';
			case 'label':
				return 'label';
			case 'h1':
				return 'h1';
			case 'h2':
				return 'h2';
			case 'h3':
				return 'h3';
			case 'h4':
				return 'h4';
			case 'h5':
				return 'h5';
			case 'h6':
				return 'h6';
			default:
				return 'body';
		}
	}, [props.variant]);

	const classNames = useMemo(() => {
		const classNamesToReturn = ['kvadred-typography', `kvadred-typography--${variant}`];

		if (!!transform) {
			classNamesToReturn.push(`kvadred-typography--${transform}`);
		}

		if (ellipsis) {
			classNamesToReturn.push('kvadred-typography--ellipsis');
		}

		if (tooltip) {
			classNamesToReturn.push('kvadred-typography--tooltip');
		}

		return `${className} ${classNamesToReturn.join(' ')}`.trim();
	}, [tooltip, className, ellipsis, transform, variant]);

	const content = (
		<>
			{!!innerHtml ? (
				<span dangerouslySetInnerHTML={{ __html: innerHtml }} style={{ whiteSpace: 'pre-wrap' }} />
			) : !!highLight ? (
				<span className="kvadred-typography--high-light">
          {getTextParts().map((part, i) => (i === 1 ? <span key={i}>{part}</span> : part))}
        </span>
			) : (
				text
			)}
		</>
	);

	return (
		<>
			{datepicker ? (
				<p className={classNames} ref={ref} data-tooltip={tooltip}>
					{content}
				</p>
			) : (
				<span className={classNames} ref={ref} data-tooltip={tooltip}>
          {content}
        </span>
			)}
		</>
	);
};

export default Typography;
