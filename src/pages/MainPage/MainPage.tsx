import { PageTitle } from '@app/components';
import './styles.scss';
import { LayoutDefault } from '@app/layout';
import { SimplifiedAdvancedSearch } from './components';
import { useEffect, useState } from 'react';
import { getProjects } from '@app/api';

function MainPage() {
  const [area, setArea] = useState<number>(100);

  useEffect(() => {
    fetchProjects(area);
  }, []);

  const fetchProjects = async (value: number) => {
    const res = await getProjects(value);
    console.log(res);
  };

  return (
    <LayoutDefault>
      <PageTitle subtitle="Расчитать смету" className={'kvadred-mb-32'} />
      <SimplifiedAdvancedSearch onSearch={fetchProjects} />
    </LayoutDefault>
  );
}

export default MainPage;
