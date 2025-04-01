import React, { FunctionComponent, SVGProps } from 'react';
import styled, { css } from 'styled-components';
import { ifProp, switchProp, theme } from 'styled-tools';
import { FaTimes } from 'react-icons/fa';

export type ChipColor =
  | 'default'
  | 'primary'
  | 'success'
  | 'danger'
  | 'info'
  | 'warning';

export type ChipVariant = 'default' | 'secondary' | 'outlined';
export type TextSize = 'xs' | 'sm' | 'md' | 'xl' | 'extra';

interface Props {
  text: string;
  color?: ChipColor;
  variant?: ChipVariant;
  icon?: FunctionComponent<SVGProps<SVGSVGElement>>;
  textSize?: TextSize;
  className?: string;
  bold?: boolean;
  onDelete?: () => void;
}

const StyledChip = styled.span<{ $color: string; $variant: string }>`
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  overflow: hidden;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: inherit;
    z-index: 0;
  }

  ${switchProp('$variant', {
    default: css`
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      border-radius: 10px;
      padding: 4px 8px;

      &::before {
        background-color: ${switchProp('$color', {
          default: theme('color.grayLight'),
          primary: theme('color.blueLight'),
          info: theme('color.blueGreen'),
          success: '#F1F3F3',
          danger: '#CC423C',
          warning: theme('color.yellowLight'),
        })};
      }
    `,
    secondary: css`
      font-weight: 500;
      font-size: 12px;
      line-height: 16px;
      border-radius: 56px;
      padding: 6px 8px;
      border: 1px solid ${theme('color.gray')};

      &::before {
        background-color: ${switchProp('$color', {
          default: theme('color.grayLight'),
          primary: theme('color.blueLight'),
          info: theme('color.blueGreen'),
          success: theme('color.greenLight'),
          danger: theme('color.red'),
          warning: theme('color.yellowLight'),
        })};
        opacity: 0.3;
      }
    `,
    outlined: css`
      font-weight: 700;
      font-size: 12px;
      line-height: 16px;
      border-radius: 10px;
      padding: 2px 8px;
      color: ${switchProp('$color', {
        default: theme('color.gray'),
        primary: theme('color.blue'),
        info: theme('color.blueGreen'),
        success: '#21525E',
        danger: '#CC423C',
        warning: '#E0915F',
      })};
      fill: ${switchProp('$color', {
        default: theme('color.gray'),
        primary: theme('color.blue'),
        info: theme('color.blueGreen'),
        success: '#21525E',
        danger: '#CC423C',
        warning: '#E0915F',
      })};
      border: 1px solid
        ${switchProp('$color', {
          default: theme('color.gray'),
          primary: theme('color.blue'),
          info: theme('color.blueGreen'),
          success: '#21525E',
          danger: '#CC423C',
          warning: '#E0915F',
        })};

      &::before {
        background-color: ${switchProp('$color', {
          default: theme('color.grayLight'),
          primary: theme('color.blueLight'),
          info: theme('color.blueGreen'),
          success: '#FEFFFF',
          danger: '#FDFFFF',
          warning: theme('color.yellowLight'),
        })};
      }
    `,
  })}
`;

const StyledChipIcon = styled.span<{ $color: string; $variant: string }>`
  display: flex;
  align-items: center;
  z-index: 1;
  margin-right: 8px;

  color: ${switchProp('$variant', {
    default: switchProp('$color', {
      default: theme('color.grayDark'),
      primary: theme('color.blue'),
      info: theme('color.blueGreen'),
      success: theme('color.green'),
      danger: theme('color.red'),
      warning: theme('color.yellowDark'),
    }),
    secondary: switchProp('$color', {
      default: theme('color.grayDark'),
      primary: theme('color.blue'),
      info: theme('color.blueGreen'),
      success: theme('color.green'),
      danger: theme('color.red'),
      warning: theme('color.yellowDark'),
    }),
    outlined: switchProp('$color', {
      default: theme('color.gray'),
      primary: theme('color.blue'),
      info: theme('color.blueGreen'),
      success: theme('color.green'),
      danger: theme('color.red'),
      warning: theme('color.yellow'),
    }),
  })};

  svg {
    fill: currentColor;
    width: 16px;
    height: 16px;
    margin-right: 4px;
  }
`;

const StyledChipText = styled.span.withConfig({
  shouldForwardProp: (prop) => !['$isBold', '$textSize'].includes(prop),
})<{
  $isBold: boolean;
  $textSize?: TextSize;
  $color: string;
  $variant: string;
}>`
  position: relative;
  font-size: ${({ $textSize }) =>
    $textSize === 'xs'
      ? '12px'
      : $textSize === 'sm'
        ? '14px'
        : $textSize === 'md'
          ? '16px'
          : $textSize === 'xl'
            ? '20px'
            : '24px'};
  line-height: normal;
  font-weight: ${ifProp('$isBold', 700, 400)};
  color: ${switchProp('$variant', {
    default: switchProp(
      '$color',
      {
        warning: '#262626',
        default: '#262626',
        success: theme('color.green'),
        danger: theme('color.red'),
        primary: theme('color.blue'),
      },
      theme('color.redLight')
    ),
    secondary: ifProp(
      {
        color: 'default',
      },
      theme('color.grayDark'),
      theme('color.dark')
    ),
  })};
  display: flex;
  align-items: center;
`;

const StyledChipDeleteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: ${theme('color.grayDark')};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: -8px;

  &:hover {
    color: ${switchProp('$variant', {
      default: switchProp(
        '$color',
        {
          warning: '#262626',
          default: '#262626',
          success: theme('color.green'),
          danger: theme('color.red'),
          primary: theme('color.blue'),
        },
        theme('color.redLight')
      ),
      secondary: ifProp(
        {
          color: 'default',
        },
        theme('color.grayDark'),
        theme('color.dark')
      ),
    })};
  }
`;

function Chip(props: Props) {
  const {
    text,
    color = 'default',
    variant = 'default',
    textSize = 'xs',
    className = '',
    onDelete,
    icon: Icon,
    bold = true,
  } = props;

  return (
    <StyledChip $color={color} $variant={variant} className={className.trim()}>
      {Icon && (
        <StyledChipIcon $color={color} $variant={variant}>
          <Icon />
        </StyledChipIcon>
      )}
      <StyledChipText
        $color={color}
        $variant={variant}
        $isBold={bold}
        $textSize={textSize}
      >
        {text}
        {onDelete && (
          <StyledChipDeleteButton onClick={onDelete}>
            <FaTimes />
          </StyledChipDeleteButton>
        )}
      </StyledChipText>
    </StyledChip>
  );
}

export default Chip;
