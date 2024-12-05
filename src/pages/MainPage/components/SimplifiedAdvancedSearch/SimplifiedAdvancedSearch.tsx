import './styles.scss';
import {Block, Button, Select, TextField, Option, Typography, Search} from "@app/components";
import {FaChevronRight} from "react-icons/fa";
import {AddRoom, RoomArea} from "../index.ts";

function SimplifiedAdvancedSearch() {

  return (
    <div className={'kvadred-flex'}>
      <div className={'kvadred-flex kvadred-flex-column kvadred-flex-w-100 kvadred-flex-middle'}>
        <Block width={80}>
          <div className={'kvadred-flex kvadred-flex-row kvadred-flex-w-100 kvadred-gap-8'}>
            <Select
              withSearch
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
        <div className={'kvadred-flex kvadred-flex-column kvadred-flex-bottom'}>
          <Search
            onSearch={() => {}}
            buttonText={'Расчитать'}
            buttonColor={'alert'}
            placeholder={'кв. м'}
          />
          <div className={'kvadred-flex kvadred-flex-row kvadred-mt-8 kvadred-gap-8'}>
            <Typography
              text={'Расширенный поиск'}
              variant={'secondary'}
            />
            <FaChevronRight color={'8D8D8D'}/>
          </div>
        </div>
        <Block width={80} className={'kvadred-gap-16 kvadred-mt-32'}>
          <AddRoom onAddRoom={() => {}} rooms={[]}/>
          <div className={'kvadred-flex kvadred-flex-column kvadred-gap-8 kvadred-flex-w-100'}>
            <RoomArea roomName={'Спальня'}/>
            <RoomArea roomName={'Санузел'}/>
          </div>
          <div className={'kvadred-flex kvadred-flex-row kvadred-flex-w-100 kvadred-gap-8'}>
            <TextField
              placeholder={'Высота потолков'}
            />
            <TextField
              placeholder={'Общая квадратура'}
            />
          </div>
          <div className={'kvadred-flex kvadred-flex-row kvadred-flex-w-100 kvadred-flex-center'}>
            <Button text={'Расчитать'}/>
          </div>
        </Block>
      </div>
    </div>
  );
}

export default SimplifiedAdvancedSearch;
