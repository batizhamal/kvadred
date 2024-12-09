import './styles.scss';
import {Block, Button, Select, TextField, Option, Typography, Search} from "@app/components";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import {AddRoom, RoomArea} from "../index.ts";
import {useForm} from "@app/hooks";
import {useState} from "react";

export interface Room {
  name: string;
  id: string;
  area: number;
}

interface SearchPayload {
  residence: string;
  layout: string;
  area: number;
  rooms: Room[];
  height: number;
}

function SimplifiedAdvancedSearch() {

  const { values, setValues, resetForm, onChange, setPending, pending } =
    useForm<SearchPayload>({
      values: {
        residence: '',
        layout: '',
        area: 0,
        rooms: [],
        height: 0,
      },
    });

  const [isAdvancedSearch, setIsAdvancedSearch] = useState(false);

  return (
    <div className={'kvadred-flex'}>
      <div
        className={
          'kvadred-flex kvadred-flex-column kvadred-flex-w-100 kvadred-flex-middle'
        }
      >
        {!isAdvancedSearch && (
          <>
            <Block width={80}>
              <div
                className={
                  'kvadred-flex kvadred-flex-row kvadred-flex-w-100 kvadred-gap-8'
                }
              >
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
                <Button text={'Расчитать'} />
              </div>
            </Block>
            <Typography
              text={'либо введите общую квадратуру'}
              className={'kvadred-mt-16 kvadred-mb-16'}
            />
            <div
              className={'kvadred-flex kvadred-flex-column kvadred-flex-bottom'}
            >
              <Search
                onSearch={(value: string) => {}}
                buttonText={'Расчитать'}
                buttonColor={'alert'}
                placeholder={'кв. м'}
              />
              <div
                className={
                  'text-chevron kvadred-flex kvadred-flex-row kvadred-mt-8 kvadred-gap-8'
                }
                onClick={() => setIsAdvancedSearch(true)}
              >
                <Typography text={'Расширенный поиск'} variant={'secondary'} />
                <FaChevronRight color={'8D8D8D'} />
              </div>
            </div>
          </>
        )}

        {isAdvancedSearch &&
          <>
            <div
              className={
                'text-chevron kvadred-flex kvadred-flex-row kvadred-flex-left kvadred-mb-8 kvadred-gap-8'
              }
              onClick={() => setIsAdvancedSearch(false)}
            >
              <FaChevronLeft color={'8D8D8D'} />
              <Typography text={'Упрощенный поиск'} variant={'secondary'} />
            </div>
            <Block width={80} className={'kvadred-gap-16'}>
              <AddRoom onAddRoom={() => {}} rooms={[]} />
              <div
                className={
                  'kvadred-flex kvadred-flex-column kvadred-gap-8 kvadred-flex-w-100'
                }
              >
                <RoomArea roomName={'Спальня'} />
                <RoomArea roomName={'Санузел'} />
              </div>
              <div
                className={
                  'kvadred-flex kvadred-flex-row kvadred-flex-w-100 kvadred-gap-8'
                }
              >
                <TextField placeholder={'Высота потолков'} />
                <TextField placeholder={'Общая квадратура'} />
              </div>
              <div
                className={
                  'kvadred-flex kvadred-flex-row kvadred-flex-w-100 kvadred-flex-center'
                }
              >
                <Button text={'Расчитать'} />
              </div>
            </Block>
          </>
        }
      </div>
    </div>
  );
}

export default SimplifiedAdvancedSearch;
