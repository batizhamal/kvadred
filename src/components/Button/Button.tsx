import './styles.scss';
import { FunctionComponent, SVGProps } from 'react';
import Chip, { ChipColor } from '../Chip';
import { ChipVariant } from '../Chip/Chip.tsx';

interface Props {
  variant?: 'contained' | 'outlined' | 'text';
  color?: 'primary' | 'alert' | 'default' | 'secondary' | 'green';
  size?: 'default' | 'small';
  onClick?: () => void;
  text?: string;
  icon?: FunctionComponent<SVGProps<SVGSVGElement>>;
  postIcon?: FunctionComponent<SVGProps<SVGSVGElement>>;
  className?: string;
  disabled?: boolean;
  badge?: string;
  badgeColor?: ChipColor;
  badgeVariant?: ChipVariant;
  badgePosition?: 'left' | 'right';
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
    badge = '',
    badgeColor = 'default',
    badgeVariant = 'default',
    badgePosition = 'right',
  } = props;

  return (
    <button
      className={`button button--${variant} button--${color} button--${size}-size ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {!!badge && badgePosition === 'left' && (
        <Chip
          text={badge}
          color={badgeColor}
          variant={badgeVariant}
          className={'kvadred-ml-4'}
        />
      )}
      {Icon && (
        <span className="button__icon">
          <Icon />
        </span>
      )}
      <span className="button__label">{text}</span>
      {PostIcon && (
        <span className="button__icon">
          <PostIcon />
        </span>
      )}
      {!!badge && badgePosition === 'right' && (
        <Chip
          text={badge}
          color={badgeColor}
          variant={badgeVariant}
          className={'kvadred-ml-4'}
        />
      )}
    </button>
  );
}

export default Button;
