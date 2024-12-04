import './styles.scss';
import {Block, Button, TextField} from "@app/components";

function ChooseResidence() {

  return (
    <div className={'kvadred-flex kvadred-flex-center'}>
      <Block width={80}>
        <div className={'kvadred-flex kvadred-flex-row kvadred-flex-w-100 kvadred-gap-8'}>
          <TextField placeholder={'Жилой комплекс'}/>
          <TextField placeholder={'Планировка'}/>
          <Button label={'Расчитать'}/>
        </div>
      </Block>
    </div>
  );
}

export default ChooseResidence;
