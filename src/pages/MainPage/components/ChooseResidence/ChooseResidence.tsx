import './styles.scss';
import {Block, Button, Select, TextField, Option} from "@app/components";

function ChooseResidence() {

  return (
    <div className={'kvadred-flex kvadred-flex-center'}>
      <Block width={80}>
        <div className={'kvadred-flex kvadred-flex-row kvadred-flex-w-100 kvadred-gap-8'}>
          <Select
            placeholder={'Жилой комплекс'}
            options={[
              new Option('lol', 'lol', 'lol'),
              new Option('kek', 'kek', 'kek'),
            ]}
            name={''}
            onChange={() => {}}
          />
          <Select
            placeholder={'Планировка'}
            options={[
              new Option('cheburek', 'cheburek', 'cheburek'),
              new Option('samsa', 'samsa', 'samsa'),
            ]}
            name={''}
            onChange={() => {}}
          />
          <Button text={'Расчитать'}/>
        </div>
      </Block>
    </div>
  );
}

export default ChooseResidence;
