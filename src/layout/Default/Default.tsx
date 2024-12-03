import './styles.scss';
import {useHeader} from "@app/hooks";
import {Header} from "@app/components";
import {PropsWithChildren} from "react";

interface Props extends PropsWithChildren {}

function LayoutDefault(props: Props) {

  const {children} = props;
  const {routes} = useHeader();

  return (
    <div className={'default'}>
      <Header items={routes}/>
      <div className={'default__content'}>
        {children}
      </div>
    </div>
  );

}

export default LayoutDefault;
