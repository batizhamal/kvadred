import './styles.scss';
import { LayoutDefault } from '@app/layout';
import { useCompanies, useHeader } from '@app/providers';
import { useEffect, useState } from 'react';
import { Company, getCompanies } from '@app/api';
import { Loader, Option, Rating, Select } from '@app/components';
import { formatDigitsGrouping } from '../../common/utils/formattingUtils.ts';

interface Props {}

function Compare(props: Props) {
  const [fetchedCompanies, setFetchedCompanies] = useState<Company[]>([]);
  const [companiesOptions, setCompaniesOptions] = useState<Option[]>([]);
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(false);

  const { companiesToCompare, updateCompaniesToCompare } = useCompanies();
  const { updateCompanyNumber } = useHeader();

  useEffect(() => {
    fetchCompanies();
  }, []);

  useEffect(() => {
    fetchCompanies();

    return () => {
      updateCompaniesToCompare([]);
      // updateCompanyNumber(0);
    };
  }, [companiesToCompare]);

  const fetchCompanies = async () => {
    setLoading(true);
    try {
      const res = await getCompanies();
      setFetchedCompanies(res);
      setCompaniesOptions(
        res.map((item) => new Option(item.name, item._id, item._id))
      );
      setCompanies([
        ...companiesToCompare,
        ...res.slice(0, 3 - companiesToCompare.length),
      ]);
    } catch (error: any) {
    } finally {
      setLoading(false);
    }
  };

  const yesOrNo = ['/icons/cross.svg', '/icons/checkmark.svg'];

  return (
    <LayoutDefault>
      {/*<div className={'grid-table'}>*/}
      {/*  <div className={'grid-row-companies'}>*/}
      {/*    <div className={'grid-cell'}></div>*/}
      {/*    <div className={'grid-cell'}></div>*/}
      {/*    {companies.length > 0 &&*/}
      {/*      companies.map((company, index) => (*/}
      {/*        <div*/}
      {/*          className={'grid-cell grid-cell--bold'}*/}
      {/*          key={`company-header-${index}`}*/}
      {/*        >*/}
      {/*          {company?.name}*/}
      {/*        </div>*/}
      {/*      ))}*/}
      {/*  </div>*/}

      {/*  {[*/}
      {/*    ['Цена за 1 м²', 'price'],*/}
      {/*    ['Сроки ремонта', 'timeline'],*/}
      {/*    ['Рейтинг', 'rating'],*/}
      {/*    ['Гарантии', 'warranty'],*/}
      {/*  ].map(([label, key]) => (*/}
      {/*    <div className={'grid-row-companies'} key={`row-${key}`}>*/}
      {/*      <div className={'grid-cell grid-cell--bold'}>{label}</div>*/}
      {/*      <div className={'grid-cell'}></div>*/}
      {/*      {companies.map((company, index) => (*/}
      {/*        <div className={'grid-cell'} key={`company-${label}-${index}`}>*/}
      {/*          {company?.[key as keyof Company]}*/}
      {/*        </div>*/}
      {/*      ))}*/}
      {/*    </div>*/}
      {/*  ))}*/}

      {/*  <div className={'grid-row-companies grid-row--parent'}>*/}
      {/*    <div className={'grid-cell grid-cell--bold'}>Материалы</div>*/}
      {/*  </div>*/}

      {/*  {[*/}
      {/*    ['Черновые материалы', 'rough_materials'],*/}
      {/*    ['Напольное покрытие', 'flooring'],*/}
      {/*    ['Стены', 'walls'],*/}
      {/*    ['Потолок', 'ceiling'],*/}
      {/*    ['Двери', 'doors'],*/}
      {/*    ['Освещение', 'lighting'],*/}
      {/*    ['Электрика', 'electricity'],*/}
      {/*    ['Сантехника', 'plumbing'],*/}
      {/*    ['Кухня', 'kitchen'],*/}
      {/*    ['ТВ-зона', 'tv_zone'],*/}
      {/*    ['Тёплый пол', 'heated_floor'],*/}
      {/*    ['Плинтус', 'baseboard'],*/}
      {/*    ['Керамогранит', 'porcelain_tiles'],*/}
      {/*  ].map(([label, key]) => (*/}
      {/*    <div*/}
      {/*      className={'grid-row-companies grid-row--child'}*/}
      {/*      key={`row-child-${key}`}*/}
      {/*    >*/}
      {/*      <div className={'grid-cell grid-cell--bold'}>{label}</div>*/}
      {/*      <div className={'grid-cell'}></div>*/}
      {/*      {companies.map((company, index) => (*/}
      {/*        <div className={'grid-cell'} key={`company-${label}-${index}`}>*/}
      {/*          {company?.[key as keyof Company]}*/}
      {/*        </div>*/}
      {/*      ))}*/}
      {/*    </div>*/}
      {/*  ))}*/}
      {/*</div>*/}
      {loading && (
        <div className={'loader-wrapper'}>
          <Loader center color={'#2B2D42'} size={48} />
        </div>
      )}
      {!loading && (
        <div className={'compare'}>
          <div className={'compare__row'}>
            {companies.map((company, index) => (
              <div className={'compare__item'} key={`select-${index}`}>
                <div className={'kvadred-flex kvadred-flex-w-100'}>
                  <Select
                    options={companiesOptions}
                    name={''}
                    onChange={(value) => {
                      setCompanies((prev) =>
                        prev.map((prevItem, i) =>
                          i === index
                            ? fetchedCompanies.find(
                                (item) => item._id === value
                              )!
                            : prevItem
                        )
                      );
                    }}
                    value={company._id}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className={'compare__row'}>
            {companies.map((company, index) => (
              <div className={'compare__item'} key={`logo-${index}`}>
                <div className={'compare__logo'}>
                  <img alt={'logo'} src={`/companies/${company?._id}.png`} />
                </div>
              </div>
            ))}
          </div>

          <div className={'compare__row-title'}>Основные показатели</div>

          <div className={'compare__row'}>
            {companies.map((company, index) => (
              <div className={'compare__item'} key={`price-${index}`}>
                <div
                  className={'compare__price'}
                >{`${formatDigitsGrouping(company.price).toString()} ₸`}</div>
                <div className={'compare__item-description'}>
                  {'Цена за 1 кв. м'}
                </div>
              </div>
            ))}
          </div>

          <div className={'compare__row'}>
            {companies.map((company, index) => (
              <div className={'compare__item'} key={`progress-${index}`}>
                <div className={'compare__item-media'}>
                  <img alt={'logo'} src={`/icons/calendar.svg`} />
                </div>
                <div className={'compare__price'}>{`${'27'} дней`}</div>
                <div className={'compare__item-description'}>
                  {'Сроки ремонта'}
                </div>
              </div>
            ))}
          </div>

          <div className={'compare__row'}>
            {companies.map((company, index) => (
              <div className={'compare__item'} key={`rating-${index}`}>
                <Rating rating={4.4} />
                <div className={'compare__item-description'}>{'Рейтинг'}</div>
              </div>
            ))}
          </div>

          <div className={'compare__row'}>
            {companies.map((company, index) => (
              <div className={'compare__item'} key={`warranty-${index}`}>
                <div className={'compare__item-media'}>
                  <img alt={'logo'} src={`/icons/receipt-check.svg`} />
                </div>
                <div className={'compare__price'}>{`${'365'} дней`}</div>
                <div className={'compare__item-description'}>{'Гарантия'}</div>
              </div>
            ))}
          </div>

          <div className={'compare__row-title'}>Материалы</div>

          {[
            ['Черновые материалы', 'rough_materials'],
            ['Напольное покрытие', 'flooring'],
            ['Стены', 'walls'],
            ['Потолок', 'ceiling'],
            ['Двери', 'doors'],
            ['Освещение', 'lighting'],
            ['Электрика', 'electricity'],
            ['Сантехника', 'plumbing'],
            ['Кухня', 'kitchen'],
            ['ТВ-зона', 'tv_zone'],
            ['Тёплый пол', 'heated_floor'],
            ['Плинтус', 'baseboard'],
            ['Керамогранит', 'porcelain_tiles'],
          ].map(([label, key]) => (
            <div className={'compare__row'} key={`material-${label}`}>
              {companies.map((company, index) => (
                <div className={'compare__item'} key={`${label}-${index}`}>
                  <div className={'compare__item-media'}>
                    <img
                      alt={'logo'}
                      src={yesOrNo[Math.floor(Math.random() * 2)]}
                    />
                  </div>
                  <div className={'compare__item-description'}>{label}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </LayoutDefault>
  );
}

export default Compare;
