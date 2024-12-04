import './styles.scss';
import {PropsWithChildren} from "react";

interface Props extends PropsWithChildren {
  className?: string;
  width?: number;
}

function Block(props: Props) {
  const {
    className,
    width,
    children,
  } = props;

  return (
    <div
      className={`kvadred-block ${className} kvadred-block--width-${width}`}
    >
      {children}
    </div>
  );
}

export default Block;
