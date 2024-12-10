import './styles.scss';
import {
  Block,
  Button,
  Option,
  Search,
  Select,
  TextField,
  Toggle,
  Typography,
} from '@app/components';
import { FaChevronLeft } from 'react-icons/fa';
import { AddRoom, RoomArea } from '../index.ts';
import { useForm } from '@app/hooks';
import { useEffect, useState } from 'react';
import { Complex, getComplexById, getComplexes, Layout } from '@app/api';

export interface Room {
  name: string;
  id: string;
  area: number;
}

interface SearchPayload {
  complex: string;
  layout: string;
  area: number;
  rooms: Room[];
  height: number;
}

function SimplifiedAdvancedSearch() {
  const { values, setValues, resetForm, onChange, setPending, pending } =
    useForm<SearchPayload>({
      values: {
        complex: '',
        layout: '',
        area: 0,
        rooms: [],
        height: 0,
      },
    });

  const [isSearchByComplex, setIsSearchByComplex] = useState(false);
  const [isAdvancedSearch, setIsAdvancedSearch] = useState(false);
  const [complexes, setComplexes] = useState<Complex[]>([]);
  const [complexOptions, setComplexOptions] = useState<Option[]>([]);
  const [layouts, setLayouts] = useState<Layout[]>([]);
  const [layoutOptions, setLayoutOptions] = useState<Option[]>([]);

  useEffect(() => {
    fetchComplexes();
  }, []);

  const fetchComplexes = async () => {
    getComplexes().then((res) => {
      setComplexes(res);
      setComplexOptions(
        res.map((item) => new Option(item.name, item._id, item._id))
      );
    });
  };

  useEffect(() => {
    if (values.complex) {
      fetchLayouts(values.complex);
    }
  }, [values.complex]);

  const fetchLayouts = (id: string = '') => {
    getComplexById(id).then((res) => {
      const lays: Layout[] = [];
      res.layout.forEach((complexLt) => {
        complexLt.items.forEach((lt) => {
          lays.push(lt);
        });
      });
      setLayouts(lays);
      setLayoutOptions(
        lays.map((lt) => new Option(lt.layout_name, lt._id, lt._id))
      );
    });
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
              <Toggle
                className={'kvadred-mb-16'}
                options={[
                  new Option('По квадратуре', 'area', 'area'),
                  new Option('По жилому комплексу', 'complex', 'complex'),
                ]}
                onToggle={(option) =>
                  setIsSearchByComplex(option.id === 'complex')
                }
              />

              {!isSearchByComplex && (
                <div
                  className={
                    'kvadred-flex kvadred-flex-column kvadred-flex-w-100 kvadred-flex-middle'
                  }
                >
                  <Search
                    className={'kvadred-width-1-2'}
                    onSearch={(value: string) => {}}
                    buttonText={'Расчитать'}
                    buttonColor={'alert'}
                    placeholder={'кв. м'}
                  />
                </div>
              )}

              {isSearchByComplex && (
                <div
                  className={
                    'kvadred-flex kvadred-flex-row kvadred-flex-w-100 kvadred-gap-8'
                  }
                >
                  <Select
                    options={complexOptions}
                    withSearch
                    placeholder={
                      values.complex
                        ? complexOptions.find(
                            (item) => item.id === values.complex
                          )?.title
                        : 'Жилой комплекс'
                    }
                    name={'complex'}
                    onChange={(value) => onChange(value, 'complex')}
                  />
                  <Select
                    disabled={!values.complex}
                    options={layoutOptions}
                    placeholder={
                      values.layout
                        ? layoutOptions.find(
                            (item) => item.id === values.layout
                          )?.title
                        : 'Планировка'
                    }
                    name={'layout'}
                    onChange={(value) => onChange(value, 'layout')}
                  />
                  <Button text={'Расчитать'} />
                </div>
              )}
            </Block>
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
