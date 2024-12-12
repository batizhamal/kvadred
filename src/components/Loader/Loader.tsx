import { CSSProperties, useMemo, useRef } from 'react';

import './styles.scss';
import classNames from 'classnames';

interface LoaderProps {
  size?: number;
  className?: string;
  color?: string;
  center?: boolean;
}

function Loader(props: LoaderProps) {
  const { size = 16, className = '', color, center = true } = props;
  const loaderItems = useRef<number[]>([...Array(5).keys()].slice(1));
  const loaderItemStyle = useMemo<CSSProperties>(() => {
    const style: CSSProperties = {
      borderWidth: size * 0.1,
    };

    if (!!color) {
      style.borderColor = `${color} transparent transparent transparent`;
    }

    return style;
  }, [color, size]);

  return (
    <div
      className={classNames(`kvadred-loader ${className}`.trim(), {
        'kvadred-loader--center': center,
      })}
      style={{
        width: size,
        height: size,
      }}
    >
      {loaderItems.current.map((loaderItem) => (
        <div
          className="kvadred-loader__item"
          style={loaderItemStyle}
          key={loaderItem.toString()}
        />
      ))}
    </div>
  );
}

export default Loader;
