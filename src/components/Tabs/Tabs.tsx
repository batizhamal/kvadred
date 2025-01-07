import React, {
  Fragment,
  memo,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import classNames from 'classnames';
import './styles.scss';
import { Divider } from '../index';

interface TabLabel {
  label: string;
  icon?: ReactNode;
}

interface Props {
  labels: TabLabel[];
  badges?: (string | number | undefined)[];
  onChange?: (index: number) => void;
  className?: string;
  children?: ReactNode[];
  dense?: boolean;
  initialTabIndex?: number;
  transparent?: boolean;
  bordered?: boolean;
  controls?: ReactNode[];
  prefix?: ReactNode;
  fullWidth?: boolean;
}

function Tabs(props: Props) {
  const {
    labels,
    badges = [],
    className = '',
    onChange,
    dense = true,
    initialTabIndex = 0,
    transparent = false,
    fullWidth = false,
    bordered = false,
    children,
    controls,
    prefix,
  } = props;
  const [tabIndex, setTabIndex] = useState<number>(initialTabIndex);
  const [markerStyle, setMarkerStyle] = useState<React.CSSProperties>({});
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const onClickTab = useCallback(
    (index: number) => (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      e.stopPropagation();
      setTabIndex(index);

      if (!!onChange) {
        onChange(index);
      }
    },
    [onChange]
  );

  useEffect(() => {
    const activeTab = tabRefs.current[tabIndex];
    if (activeTab) {
      setMarkerStyle({
        width: activeTab.offsetWidth,
        left: activeTab.offsetLeft,
      });
    }
  }, [tabIndex, labels]);

  useEffect(() => {
    setTabIndex(initialTabIndex);
  }, [initialTabIndex]);

  if (!labels) {
    return null;
  }

  return (
    <div
      className={
        children &&
        classNames(`kdss-tabs ${className}`.trim(), {
          'kdss-tabs--transparent': transparent,
          'kdss-tabs--bordered': bordered,
          'kdss-tabs--full': fullWidth,
        })
      }
    >
      <div className="kdss-tabs__labels">
        {prefix && (
          <>
            {prefix}
            <Divider type={'vertical'} />
          </>
        )}
        {labels.map((labelObj, labelIndex) => (
          <button
            key={labelIndex.toString()}
            onClick={onClickTab(labelIndex)}
            ref={(el) => (tabRefs.current[labelIndex] = el)}
            className={classNames('kdss-tabs__label', {
              'kdss-tabs__label--active': tabIndex === labelIndex,
              'kdss-tabs__label--full': fullWidth,
            })}
          >
            {labelObj.icon && (
              <span
                className={classNames('kdss-tabs__icon', {
                  'kdss-tabs__icon--active': tabIndex === labelIndex,
                })}
              >
                {React.cloneElement(labelObj.icon as React.ReactElement, {
                  color: tabIndex === labelIndex ? '#244278' : 'inherit',
                })}
              </span>
            )}
            <span className="kdss-tabs__text">{labelObj.label}</span>
            {!!badges[labelIndex] && (
              <span className="kdss-tabs__badge">
                {badges[labelIndex]?.toString()}
              </span>
            )}
          </button>
        ))}
        <div className="kdss-tabs__active-marker" style={markerStyle} />
        {!!controls &&
          controls.map((control, controlIndex) => (
            <Fragment key={controlIndex.toString()}>{control}</Fragment>
          ))}
      </div>
      {!!children &&
        children.map((tabContent, tabContentIndex) => {
          if (tabContentIndex !== tabIndex) {
            return null;
          }

          return (
            <div
              key={tabContentIndex.toString()}
              className="kdss-tabs__content"
            >
              {tabContent}
            </div>
          );
        })}
    </div>
  );
}

export default memo(Tabs);
