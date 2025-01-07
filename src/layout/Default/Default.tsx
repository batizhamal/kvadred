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
      <div
        className={classNames('default__content', {
          'default__content--scrollable': scrollable,
        })}
      >
        {children}
      </div>
    </div>
  );
}

export default LayoutDefault;
