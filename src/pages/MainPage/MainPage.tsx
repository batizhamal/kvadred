import { PageTitle } from '@app/components';
import './styles.scss';
import {LayoutDefault} from "@app/layout";

function MainPage() {

  return (
    <LayoutDefault>
      <PageTitle subtitle='Расчитать смету'/>
    </LayoutDefault>
  )
}

export default MainPage;
