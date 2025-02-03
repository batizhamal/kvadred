import './styles.scss';
import { useHeader } from '@app/hooks';
import { Menu } from '@app/components';
import { PropsWithChildren } from 'react';
import classNames from 'classnames';

interface Props extends PropsWithChildren {
  scrollable?: boolean;
}

function LayoutDefault(props: Props) {
  const { children, scrollable = false } = props;
  const { routes } = useHeader();

  return (
    <div className={'default'}>
      <Menu items={routes} />
      <div className={'default__content'}>
        <div
          className={classNames('default__wrapper', {
            'default__wrapper--scrollable': scrollable,
          })}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default LayoutDefault;
