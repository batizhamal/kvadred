import './styles.scss';

interface Props {
  variant?: 'contained' | 'outlined' | 'text';
  color?: 'primary' | 'alert' | 'default';
  size?: 'default' | 'small';
  onClick?: () => void;
  label: string;
  preIcon?: React.ReactNode;
  postIcon?: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

function Button(props: Props) {
    const {
        variant = 'contained',
        color = 'primary',
        size = 'default',
        onClick,
        label,
        preIcon,
        postIcon,
        className = '',
        disabled = false,
    } = props;

    return (
        <button
            className={`button button--${variant} button--${color} button--${size}-size ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {preIcon && <span className="button__icon">{preIcon}</span>}
            <span className="button__label">{label}</span>
            {postIcon && <span className="button__icon">{postIcon}</span>}
        </button>
    );
}

export default Button;