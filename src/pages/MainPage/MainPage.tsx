import { Block, Button, Callout, Loader } from '@app/components';
import './styles.scss';
import { LayoutDefault } from '@app/layout';
import {
  Company as CompanyCard,
  SimplifiedAdvancedSearch,
  SmetaTable,
} from './components';
import { useEffect, useState } from 'react';
import {
  Company,
  exportProjects,
  getBestCompanies,
  getCompanies,
  getProjects,
  Project,
} from '@app/api';
import { FaFileDownload } from 'react-icons/fa';
import { downloadExcel } from '@app/helpers';

function MainPage() {
  const [area, setArea] = useState<number>(100);

  const [project, setProject] = useState<Project>({} as Project);

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [bestCompanies, setBestCompanies] = useState<Company[]>([]);
  const [companies, setCompanies] = useState<Company[]>([]);

  const chartTasks = [
    { name: 'Черновые', duration: 30, width: '30%' },
    { name: 'Чистовые', duration: 40, width: '40%' },
    { name: 'Отделочные', duration: 30, width: '35%' },
  ];

  useEffect(() => {
    fetchProjects(area);

    fetchBestCompanies();
    fetchCompanies();
  }, []);

  const fetchProjects = async (value: number) => {
    setLoading(true);
    setErrorMessage('');
    try {
      const res = await getProjects(value);
      console.log(res);
      // TODO: temporarily, by default 1st project is smeta
      setProject(res?.[0]);
    } catch (error: any) {
      setErrorMessage(error?.message || 'Внутренняя ошибка сервера');
    } finally {
      setLoading(false);
    }
  };

  const fetchBestCompanies = async () => {
    try {
      const res = await getBestCompanies();
      setBestCompanies(res);
    } catch (error: any) {}
  };

  const fetchCompanies = async () => {
    try {
      const res = await getCompanies();
      setCompanies(res);
    } catch (error: any) {}
  };

  const download = async () => {
    try {
      const res = await exportProjects(area);

      downloadExcel(res);
    } catch (error) {
      console.error('Error downloading', error);
    }
  };

  return (
    <LayoutDefault scrollable>
      {/*<img*/}
      {/*  src={'/smeta_hero.jpg'}*/}
      {/*  alt={'smeta hero'}*/}
      {/*  style={{*/}
      {/*    width: '100%',*/}
      {/*    height: '150px',*/}
      {/*    objectFit: 'cover',*/}
      {/*    marginBottom: '8px',*/}
      {/*  }}*/}
      {/*/>*/}
      <SimplifiedAdvancedSearch
        onSearch={(ar) => {
          setArea(ar);
          fetchProjects(ar);
        }}
      />
      <div
        className={'kvadred-flex kvadred-gap-24'}
        style={{
          display: 'flex',
          flex: '1 1 auto',
          height: 'calc(100vh - 140px)',
          overflow: 'hidden',
        }}
      >
        <Block
          label={'Смета'}
          className={'kvadred-mt-16 kvadred-mb-16'}
          transparent
          padding={false}
          scrollable
          rightControls={[
            // <Chip text={'Комфорт'} color={'success'} variant={'outlined'} />,
            <Button
              text={'Скачать'}
              icon={FaFileDownload}
              size={'small'}
              variant={'text'}
              onClick={download}
            />,
          ]}
          width={65}
        >
          {loading && <Loader center color={'#2B2D42'} size={48} />}
          {errorMessage && !loading && (
            <Callout variant={'alert'}>{errorMessage}</Callout>
          )}
          {!loading && !!project && !errorMessage && (
            <SmetaTable project={project} />
          )}
        </Block>
        {/*<div className={'kvadred-flex kvadred-flex-w-100 kvadred-flex-column'}>*/}
        {/*{!!bestCompanies.length && (*/}
        {/*  <Block*/}
        {/*    label={'Компании под ключ'}*/}
        {/*    header*/}
        {/*  >*/}
        {/*    <div*/}
        {/*      style={{*/}
        {/*        display: 'grid',*/}
        {/*        gridTemplateColumns: 'repeat(3, 1fr)',*/}
        {/*        rowGap: '16px',*/}
        {/*        justifyContent: 'space-between',*/}
        {/*        width: '100%',*/}
        {/*      }}*/}
        {/*    >*/}
        {/*      {bestCompanies.map((bestComp, index) => (*/}
        {/*        <CompanyCard key={`best-${index}`} company={bestComp} />*/}
        {/*      ))}*/}
        {/*    </div>*/}
        {/*  </Block>*/}
        {/*)}*/}
        {/*<Block shrink label={'Компании под ключ'}>*/}
        {/*  <div*/}
        {/*    style={{*/}
        {/*      display: 'grid',*/}
        {/*      gridTemplateColumns: 'repeat(3, 1fr)',*/}
        {/*      rowGap: '16px',*/}
        {/*      justifyContent: 'space-between',*/}
        {/*      width: '100%',*/}
        {/*    }}*/}
        {/*  >*/}
        {/*    {companies.map((bestComp, index) => (*/}
        {/*      <CompanyCard key={`best-${index}`} company={bestComp} />*/}
        {/*    ))}*/}
        {/*  </div>*/}
        {/*</Block>*/}

        <Block
          className={'kvadred-mt-16 kvadred-mb-16'}
          label={'Компании под ключ'}
          width={32}
          scrollable
          rightControls={[
            <Button text={'Написать всем'} size={'small'} color={'default'} />,
          ]}
          transparent
          padding={false}
        >
          <div
            className={
              'kvadred-flex kvadred-flex-column kvadred-gap-16 kvadred-flex-w-100 kvadred-mt-8'
            }
          >
            {companies
              .sort((a, b) => a.price - b.price)
              .map((bestComp, index) => (
                <CompanyCard
                  area={area}
                  key={`best-${index}`}
                  company={bestComp}
                  bestIn={index === 0 ? 'price' : undefined}
                />
              ))}
          </div>
        </Block>
        {/*</div>*/}
      </div>
      <div className={'kvadred-flex kvadred-gap-24'}>
        <Block
          label={'Приблизительные сроки'}
          className={'kvadred-mt-16 kvadred-mb-16'}
          width={65}
        >
          <div className="chart-container">
            {chartTasks.map((task, index) => (
              <div
                key={index}
                className="task"
                style={{
                  width: `calc(${task.width} - 30px)`,
                  top: `${index * 60}px`, // Stacks vertically
                  left: index === 0 ? '0' : index === 1 ? `25%` : '65%',
                }}
              >
                <span className="task-label">{task.name}</span>
                <span className="task-duration">{`${(task.duration * area) / 100} д`}</span>
              </div>
            ))}
            <span className="total-duration">{`${area} дней`}</span>
            <img src={'/1.png'} alt={'grid'} style={{ width: '100%' }} />
          </div>
        </Block>
        <Block
          label={'Приблизительная стоимость'}
          className={'kvadred-mt-16 kvadred-mb-16'}
          width={35}
        ></Block>
      </div>
    </LayoutDefault>
  );
}

export default MainPage;
