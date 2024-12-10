import { PageTitle } from '@app/components';
import './styles.scss';
import { LayoutDefault } from '@app/layout';
import { SimplifiedAdvancedSearch } from './components';
import { useEffect } from 'react';
import { getProjects } from '../../api';

function MainPage() {
  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const res = await getProjects();
    console.log(res);
  };

  return (
    <LayoutDefault>
      <PageTitle subtitle="Расчитать смету" className={'kvadred-mb-32'} />
      <SimplifiedAdvancedSearch />
    </LayoutDefault>
  );
}

export default MainPage;
