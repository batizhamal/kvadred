import './styles.scss';
import classNames from 'classnames';

interface DividerProps {
	type?: 'horizontal' | 'vertical';
	margin?: 'margin' | 'top' | 'bottom' | 'left' | 'right' | 'none';
	className?: string;
}

function Divider(props: DividerProps) {
	const {
		type = 'horizontal',
		margin = 'margin',
		className = "",
	} = props;
	return (
		<div
			className={classNames(`${className}`.trim(), {
				'kvadred-divider': type === 'horizontal',
				'kvadred-divider--vertical': type === 'vertical',
				'kvadred-divider--margin-top-bottom': type === 'horizontal' && margin === 'margin',
				'kvadred-divider--margin-left-right': type === 'vertical' && margin === 'margin',
				'kvadred-divider--margin-top': margin === 'top',
				'kvadred-divider--margin-bottom': margin === 'bottom',
				'kvadred-divider--margin-left': margin === 'left',
				'kvadred-divider--margin-right': margin === 'right',
				'kvadred-divider--no-margin': margin === 'none',
			})}
		></div>
	);
}

export default Divider;
