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
import styled from 'styled-components';

function MainPage() {
  const [area, setArea] = useState<number>(100);

  const [project, setProject] = useState<Project>({} as Project);

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [bestCompanies, setBestCompanies] = useState<Company[]>([]);
  const [companies, setCompanies] = useState<Company[]>([]);

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

  const StyledBlockHeader = styled.div`
    margin-bottom: 1rem;
    max-width: 100%;
    @include montserrat;
    font-size: 14px;
    color: #2b2d42;
    font-weight: bold;
  `;

  return (
    <LayoutDefault scrollable>
      <SimplifiedAdvancedSearch onSearch={fetchProjects} />
      <div className={'kvadred-flex kvadred-gap-16'}>
        <Block
          label={'Смета'}
          className={'kvadred-mt-16 kvadred-mb-16'}
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
          shrink
        >
          {loading && <Loader center color={'#2B2D42'} size={48} />}
          {errorMessage && !loading && (
            <Callout variant={'alert'}>{errorMessage}</Callout>
          )}
          {!loading && !!project && !errorMessage && (
            <SmetaTable project={project} />
          )}
        </Block>
        <div
          className={
            'kvadred-flex kvadred-flex-w-100 kvadred-flex-column kvadred-gap-16 kvadred-mt-16 kvadred-mb-16'
          }
        >
          {!!bestCompanies.length && (
            <Block
              label={'Компании под ключ'}
              header
              headerText={'Лучшие предложения'}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  rowGap: '16px',
                  justifyContent: 'space-between',
                  width: '100%',
                }}
              >
                {bestCompanies.map((bestComp, index) => (
                  <CompanyCard key={`best-${index}`} company={bestComp} />
                ))}
              </div>
            </Block>
          )}
          <Block
            shrink
            label={!bestCompanies.length ? 'Компании под ключ' : ''}
          >
            <StyledBlockHeader>Другие предложения</StyledBlockHeader>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                rowGap: '16px',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              {companies.map((bestComp, index) => (
                <CompanyCard key={`best-${index}`} company={bestComp} />
              ))}
            </div>
          </Block>
        </div>
      </div>
    </LayoutDefault>
  );
}

export default MainPage;
