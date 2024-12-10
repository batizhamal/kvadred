import { Block, PageTitle } from '@app/components';
import './styles.scss';
import { LayoutDefault } from '@app/layout';
import { SimplifiedAdvancedSearch, SmetaTable } from './components';
import { useEffect, useState } from 'react';
import { getProjects, Project } from '@app/api';

function MainPage() {
  const [area, setArea] = useState<number>(100);

  const [project, setProject] = useState<Project>({} as Project);

  useEffect(() => {
    fetchProjects(area);
  }, []);

  const fetchProjects = async (value: number) => {
    const res = await getProjects(value);
    console.log(res);
    // TODO: temporarily, by default 1st project is smeta
    setProject(res?.[0]);
  };

  return (
    <LayoutDefault>
      <PageTitle subtitle="Расчитать смету" className={'kvadred-mb-32'} />
      <SimplifiedAdvancedSearch onSearch={fetchProjects} />

      <Block label={'Смета'} labelClassName={'kvadred-mt-16'}>
        <SmetaTable project={project} />
      </Block>
    </LayoutDefault>
  );
}

export default MainPage;
