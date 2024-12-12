import { Block, Callout, Loader, PageTitle } from '@app/components';
import './styles.scss';
import { LayoutDefault } from '@app/layout';
import { SimplifiedAdvancedSearch, SmetaTable } from './components';
import { useEffect, useState } from 'react';
import { getProjects, Project } from '@app/api';

function MainPage() {
  const [area, setArea] = useState<number>(100);

  const [project, setProject] = useState<Project>({} as Project);

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetchProjects(area);
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

  return (
    <LayoutDefault scrollable>
      <PageTitle subtitle="Расчитать смету" className={'kvadred-mb-32'} />
      <SimplifiedAdvancedSearch onSearch={fetchProjects} />
      <>
        <Block label={'Смета'} labelClassName={'kvadred-mt-16'}>
          {loading && <Loader center color={'#2B2D42'} size={48} />}
          {errorMessage && !loading && (
            <Callout variant={'alert'}>{errorMessage}</Callout>
          )}
          {!loading && !!project && !errorMessage && (
            <SmetaTable project={project} />
          )}
        </Block>
      </>
    </LayoutDefault>
  );
}

export default MainPage;
