import {PageTitle, TextField} from '@app/components';
import './styles.scss';
import {LayoutDefault} from "@app/layout";

function MainPage() {

  return (
    <LayoutDefault>
      <PageTitle subtitle='Расчитать смету'/>
      <TextField placeholder={'Блабла'}/>
    </LayoutDefault>
  )
}

export default MainPage;
