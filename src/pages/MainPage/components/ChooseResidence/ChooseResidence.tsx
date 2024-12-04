import './styles.scss';
import {Block, Button, Select, TextField, Option, Typography} from "@app/components";

function ChooseResidence() {

  return (
    <div className={'kvadred-flex'}>
      <div className={'kvadred-flex kvadred-flex-column kvadred-flex-w-100 kvadred-flex-middle'}>
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
        <Typography
          text={'либо введите общую квадратуру'}
          className={'kvadred-mt-16 kvadred-mb-16'}
        />
      </div>
    </div>
  );
}

export default ChooseResidence;
