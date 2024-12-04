import {PageTitle, TextField} from '@app/components';
import './styles.scss';
import {LayoutDefault} from "@app/layout";
import {ChooseResidence} from "./components";

function MainPage() {

  return (
    <LayoutDefault>
      <PageTitle subtitle='Расчитать смету' className={'kvadred-mb-32'}/>
      <ChooseResidence/>
    </LayoutDefault>
  )
}

export default MainPage;
