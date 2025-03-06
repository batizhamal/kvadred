import './styles.scss';
import {
  Block,
  Button,
  Option,
  Select,
  Tabs,
  TextField,
} from '@app/components';
import { useForm } from '@app/hooks';
import React, { useEffect, useState } from 'react';
import { Complex, getComplexById, getComplexes, Layout } from '@app/api';

interface SearchPayload {
  area: string;
  complex: string;
  layout: string;
}

interface Props {
  onSearch: (area: number) => void;
}

function SimplifiedAdvancedSearch(props: Props) {
  const { onSearch } = props;

  const { values, setValues, resetForm, onChange, setPending, pending } =
    useForm<SearchPayload>({
      values: {
        area: '',
        complex: '',
        layout: '',
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
    <Block variant={'outlined'}>
      <Tabs
        labels={[
          {
            label: 'По квадратуре',
          },
          {
            label: 'По жилому комплексу',
          },
        ]}
      >
        <div className={'search-wrapper'}>
          <TextField
            label={'100 кв. м'}
            value={values.area}
            onChange={onChange}
            name={'area'}
            replacePattern={/[^0-9]/g}
            maxLength={3}
            onKeyPress={(key) => {
              if (key.code.toLowerCase() === 'enter') {
                onSearch(Number(values.area));
              }
            }}
          />
          <Button
            text={'Расчитать'}
            color={'green'}
            onClick={() => {
              onSearch(Number(values.area));
            }}
          />
        </div>
        <div className={'search-wrapper'}>
          <Select
            options={complexOptions}
            withSearch
            placeholder={
              values.complex
                ? complexOptions.find((item) => item.id === values.complex)
                    ?.title
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
                ? layoutOptions.find((item) => item.id === values.layout)?.title
                : 'Планировка'
            }
            name={'layout'}
            onChange={(value) => onChange(value, 'layout')}
          />
          <Button
            text={'Расчитать'}
            color={'green'}
            disabled={!values.complex || !values.layout}
            onClick={() => {
              onSearch(
                layouts.find((item) => item._id === values.layout)?.area || 100
              );
            }}
          />
        </div>
      </Tabs>
      {/*<Toggle*/}
      {/*  className={'kvadred-mb-16'}*/}
      {/*  options={[*/}
      {/*    new Option('По квадратуре', 'area', 'area'),*/}
      {/*    new Option('По жилому комплексу', 'complex', 'complex'),*/}
      {/*  ]}*/}
      {/*  onToggle={(option) => setIsSearchByComplex(option.id === 'complex')}*/}
      {/*/>*/}

      {/*{!isSearchByComplex &&*/}
      {/*  (!isAdvancedSearch ? (*/}
      {/*    <div*/}
      {/*      className={*/}
      {/*        'kvadred-flex kvadred-flex-column kvadred-flex-w-100 kvadred-flex-middle'*/}
      {/*      }*/}
      {/*    >*/}
      {/*      <Search*/}
      {/*        maxLength={3}*/}
      {/*        className={'kvadred-width-1-2'}*/}
      {/*        onSearch={(value: string) => {*/}
      {/*          onSearch(Number(value));*/}
      {/*        }}*/}
      {/*        buttonText={'Расчитать'}*/}
      {/*        buttonColor={'primary'}*/}
      {/*        placeholder={'100 кв. м'}*/}
      {/*        searchOnClear={false}*/}
      {/*        replacePattern={/[^0-9]/g}*/}
      {/*      />*/}
      {/*      /!*<div*!/*/}
      {/*      /!*  className={*!/*/}
      {/*      /!*    'text-chevron kvadred-flex kvadred-flex-row kvadred-mt-8 kvadred-gap-8'*!/*/}
      {/*      /!*  }*!/*/}
      {/*      /!*  onClick={() => {*!/*/}
      {/*      /!*    setIsAdvancedSearch(true);*!/*/}
      {/*      /!*  }}*!/*/}
      {/*      /!*>*!/*/}
      {/*      /!*  <Typography text={'Расширенный расчет'} variant={'secondary'} />*!/*/}
      {/*      /!*  <FaChevronRight color={'8D8D8D'} />*!/*/}
      {/*      /!*</div>*!/*/}
      {/*    </div>*/}
      {/*  ) : (*/}
      {/*    <div*/}
      {/*      className={*/}
      {/*        'kvadred-flex kvadred-flex-column kvadred-gap-16 kvadred-flex-w-100'*/}
      {/*      }*/}
      {/*    >*/}
      {/*      <div*/}
      {/*        className={*/}
      {/*          'text-chevron kvadred-flex kvadred-flex-row kvadred-flex-left kvadred-mb-8 kvadred-gap-8'*/}
      {/*        }*/}
      {/*        onClick={() => setIsAdvancedSearch(false)}*/}
      {/*      >*/}
      {/*        <FaChevronLeft color={'8D8D8D'} />*/}
      {/*        <Typography text={'Упрощенный расчет'} variant={'secondary'} />*/}
      {/*      </div>*/}
      {/*      <AddRoom onAddRoom={() => {}} rooms={[]} />*/}
      {/*      <div*/}
      {/*        className={*/}
      {/*          'kvadred-flex kvadred-flex-column kvadred-gap-8 kvadred-flex-w-100'*/}
      {/*        }*/}
      {/*      >*/}
      {/*        <RoomArea roomName={'Спальня'} />*/}
      {/*        <RoomArea roomName={'Санузел'} />*/}
      {/*      </div>*/}
      {/*      <div*/}
      {/*        className={*/}
      {/*          'kvadred-flex kvadred-flex-row kvadred-flex-w-100 kvadred-gap-8'*/}
      {/*        }*/}
      {/*      >*/}
      {/*        <TextField placeholder={'Высота потолков'} />*/}
      {/*        <TextField placeholder={'Общая квадратура'} />*/}
      {/*      </div>*/}
      {/*      <div*/}
      {/*        className={*/}
      {/*          'kvadred-flex kvadred-flex-row kvadred-flex-w-100 kvadred-flex-center'*/}
      {/*        }*/}
      {/*      >*/}
      {/*        <Button text={'Расчитать'} />*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  ))}*/}

      {/*{isSearchByComplex && (*/}
      {/*  <div*/}
      {/*    className={*/}
      {/*      'kvadred-flex kvadred-flex-row kvadred-flex-w-100 kvadred-gap-8'*/}
      {/*    }*/}
      {/*  >*/}
      {/*    <Select*/}
      {/*      options={complexOptions}*/}
      {/*      withSearch*/}
      {/*      placeholder={*/}
      {/*        values.complex*/}
      {/*          ? complexOptions.find((item) => item.id === values.complex)*/}
      {/*              ?.title*/}
      {/*          : 'Жилой комплекс'*/}
      {/*      }*/}
      {/*      name={'complex'}*/}
      {/*      onChange={(value) => onChange(value, 'complex')}*/}
      {/*    />*/}
      {/*    <Select*/}
      {/*      disabled={!values.complex}*/}
      {/*      options={layoutOptions}*/}
      {/*      placeholder={*/}
      {/*        values.layout*/}
      {/*          ? layoutOptions.find((item) => item.id === values.layout)?.title*/}
      {/*          : 'Планировка'*/}
      {/*      }*/}
      {/*      name={'layout'}*/}
      {/*      onChange={(value) => onChange(value, 'layout')}*/}
      {/*    />*/}
      {/*    <Button*/}
      {/*      text={'Расчитать'}*/}
      {/*      disabled={!values.complex || !values.layout}*/}
      {/*      onClick={() => {*/}
      {/*        onSearch(*/}
      {/*          layouts.find((item) => item._id === values.layout)?.area || 100*/}
      {/*        );*/}
      {/*      }}*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*)}*/}
    </Block>
  );
}

export default SimplifiedAdvancedSearch;
