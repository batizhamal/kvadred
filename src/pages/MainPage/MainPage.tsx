import { Block, Button, Callout, CircleChart, Loader } from '@app/components';
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
import { formatDigitCommas } from '../../common/utils/formattingUtils.ts';

function MainPage() {
  const [area, setArea] = useState<number>(100);

  const [project, setProject] = useState<Project>({} as Project);

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [bestCompanies, setBestCompanies] = useState<Company[]>([]);
  const [companies, setCompanies] = useState<Company[]>([]);

  const chartTasks = [
    {
      name: 'Черновые',
      duration: 30,
      width: '30%',
      description:
        'подготовительные работы: выравнивание стен и пола, прокладка электрики и сантехники',
      progressColor: 'linear-gradient(to right, #F6E27F, #C1C1C1)',
    },
    {
      name: 'Чистовые',
      duration: 40,
      width: '40%',
      description:
        'раскладка плитки, ламината, установка подоконников, подготовка стен к покраске/обоям',
      progressColor: 'linear-gradient(to right, #4DA9C2, #C1C1C1)',
    },
    {
      name: 'Отделочные',
      duration: 30,
      width: '30%',
      description:
        'покраска стен, установка дверей и плинтуса, чистовые розетки, установка натяжного потолка и освещения',
      progressColor: 'linear-gradient(to right, #074C4E, #F6E27F)',
    },
  ];

  const bubbleTasks = [
    { value: 30, label: 'Черновые', color: 'url(#fuelGradient)' },
    { value: 40, label: 'Чистовые', color: 'url(#coolantGradient)' },
    { value: 30, label: 'Отделочные', color: 'url(#brakeGradient)' },
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

      const materials = res?.[0]?.rooms[0]?.materials ?? [];
      const totalCost = materials.reduce((sum, mat) => sum + mat.total_cost, 0);
      setTotal(totalCost);
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

  const [total, setTotal] = useState<number>(0);

  return (
    <LayoutDefault scrollable>
      <SimplifiedAdvancedSearch
        onSearch={(ar) => {
          setArea(ar);
          fetchProjects(ar);
        }}
      />
      {loading && (
        <div className={'loader-wrapper'}>
          <Loader center color={'#2B2D42'} size={48} />
        </div>
      )}
      {!loading && (
        <>
          <div className={'smeta-company-wrapper row-wrapper'}>
            <Block
              label={'Смета'}
              className={'kvadred-mt-16 kvadred-mb-16'}
              transparent
              padding={false}
              scrollable
              rightControls={[
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
              {errorMessage && !loading && (
                <Callout variant={'alert'}>{errorMessage}</Callout>
              )}
              {!loading && !!project && !errorMessage && (
                <SmetaTable project={project} />
              )}
            </Block>

            <Block
              className={'kvadred-mt-16 kvadred-mb-16'}
              label={'Компании под ключ'}
              width={32}
              scrollable
              // rightControls={[
              //   <Button text={'Написать всем'} size={'small'} color={'default'} />,
              // ]}
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
          </div>

          <div className={'row-wrapper'}>
            <Block
              transparent
              padding={false}
              label={'Приблизительные сроки'}
              className={'kvadred-mt-16 kvadred-mb-16'}
              width={65}
            >
              <div className="progress-chart">
                {chartTasks.map((task, index) => (
                  <div key={index} className="progress-item">
                    <div className="progress-title">{task.name}</div>
                    <div className={'progress-bar-wrapper'}>
                      <div className="progress-description">
                        {task.description}
                      </div>
                      <div className="progress-bar-container">
                        <div
                          className="progress-bar"
                          style={{
                            width: `calc(${task.width})`,
                            background: task.progressColor,
                            left:
                              index === 0 ? '0' : index === 1 ? `30%` : '70%',
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="progress-duration">{`${Math.round((task.duration * area) / 100)} д`}</div>
                  </div>
                ))}
              </div>
            </Block>
            <Block
              transparent
              padding={false}
              label={'Приблизительная стоимость'}
              className={'kvadred-mt-16 kvadred-mb-16'}
              width={35}
            >
              <svg width="0" height="0">
                <defs>
                  <linearGradient
                    id="fuelGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#074C4E" />
                    <stop offset="100%" stopColor="#C1C1C1" />
                  </linearGradient>
                  <linearGradient
                    id="coolantGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#4DA9C2" />
                    <stop offset="100%" stopColor="#C1C1C1" />
                  </linearGradient>
                  <linearGradient
                    id="brakeGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#F6E27F" />
                    <stop offset="100%" stopColor="#C1C1C1" />
                  </linearGradient>
                  <linearGradient
                    id="oilGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#E86B39" />
                    <stop offset="100%" stopColor="#C1C1C1" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="bubble-container">
                {bubbleTasks.map((item, index) => (
                  <CircleChart
                    key={index}
                    {...item}
                    labelPostfix={`${formatDigitCommas((total * item.value) / 100)} ₸`}
                  />
                ))}
              </div>
            </Block>
          </div>
        </>
      )}
    </LayoutDefault>
  );
}

export default MainPage;
