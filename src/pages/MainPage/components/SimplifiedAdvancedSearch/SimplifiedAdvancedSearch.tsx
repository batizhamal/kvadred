import './styles.scss';
import {
  Block,
  Button,
  Option,
  Search,
  Select,
  TextField,
  Typography,
} from '@app/components';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { AddRoom, RoomArea } from '../index.ts';
import { useForm } from '@app/hooks';
import { useEffect, useState } from 'react';
import { getResidentialComplexes, ResidentialComplex } from '../../../../api';

export interface Room {
  name: string;
  id: string;
  area: number;
}

interface SearchPayload {
  complex: string;
  planirovka: string;
  area: number;
  rooms: Room[];
  height: number;
}

function SimplifiedAdvancedSearch() {
  const { values, setValues, resetForm, onChange, setPending, pending } =
    useForm<SearchPayload>({
      values: {
        complex: '',
        planirovka: '',
        area: 0,
        rooms: [],
        height: 0,
      },
    });

  const [isAdvancedSearch, setIsAdvancedSearch] = useState(false);
  const [residentialComplexes, setResidentialComplexes] = useState<
    ResidentialComplex[]
  >([]);
  const [residentialComplexOptions, setResidentialComplexOptions] = useState<
    Option[]
  >([]);
  const [planirovkas, setPlanirovkas] = useState<Option[]>([]);

  useEffect(() => {
    fetchResidentialComplexes();
  }, []);

  useEffect(() => {
    if (values.complex) {
      fetchPlanirovkas(values.complex);
    }
  }, [values]);

  const fetchResidentialComplexes = async () => {
    getResidentialComplexes().then((res) => {
      console.log(res);
      setResidentialComplexes(res);
      setResidentialComplexOptions(
        res.map((item) => new Option(item.name, item._id, item._id))
      );
    });
  };

  useEffect(() => {
    fetchPlanirovkas();
  }, [residentialComplexes]);

  const fetchPlanirovkas = (id: string = '') => {
    const plans: Option[] = [];
    residentialComplexes
      .filter((complex) => complex._id.includes(id))
      .forEach((complex) =>
        complex.planirovka.forEach((info) =>
          info.items.forEach((item) => {
            plans.push(
              new Option(
                item.planirovka_name,
                item.planirovka_id,
                item.planirovka_id
              )
            );
          })
        )
      );
    setPlanirovkas(plans);
  };

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
                  options={residentialComplexOptions}
                  withSearch
                  placeholder={
                    values.complex
                      ? residentialComplexOptions.find(
                          (complex) => complex.id === values.complex
                        )?.title
                      : 'Жилой комплекс'
                  }
                  name={'complex'}
                  onChange={(value) => onChange(value, 'complex')}
                />
                <Select
                  options={planirovkas}
                  placeholder={
                    values.planirovka
                      ? planirovkas.find(
                          (item) => item.id === values.planirovka
                        )?.title
                      : 'Планировка'
                  }
                  name={'planirovka'}
                  onChange={(value) => onChange(value, 'planirovka')}
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

        {isAdvancedSearch && (
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
        )}
      </div>
    </div>
  );
}

export default SimplifiedAdvancedSearch;
