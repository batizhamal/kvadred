import './styles.scss';
import {FunctionComponent, SVGProps} from "react";

interface Props {
  variant?: 'contained' | 'outlined' | 'text';
  color?: 'primary' | 'alert' | 'default';
  size?: 'default' | 'small';
  onClick?: () => void;
  text?: string;
  icon?: FunctionComponent<SVGProps<SVGSVGElement>>;
  postIcon?: FunctionComponent<SVGProps<SVGSVGElement>>;
  className?: string;
  disabled?: boolean;
}

function Button(props: Props) {
    const {
        variant = 'contained',
        color = 'primary',
        size = 'default',
        onClick,
        text = '',
        icon: Icon,
        postIcon: PostIcon,
        className = '',
        disabled = false,
    } = props;

    return (
        <button
            className={`button button--${variant} button--${color} button--${size}-size ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {Icon && <span className="button__icon">
                <Icon/>
            </span>}
            <span className="button__label">{text}</span>
            {PostIcon && <span className="button__icon">
                <PostIcon/>
            </span>}
        </button>
    );
}

export default Button;
