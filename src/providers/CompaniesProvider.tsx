import React, { createContext, useContext, useState } from 'react';
import { Company } from '@app/api';

type CompaniesContextType = {
  companiesToCompare: Company[];
  updateCompaniesToCompare: (companies: Company[]) => void;
};

const CompaniesContext = createContext<CompaniesContextType | undefined>(
  undefined
);

export const CompaniesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [companiesToCompare, setCompaniesToCompare] = useState<Company[]>([]);

  const updateCompaniesToCompare = (companies: Company[]) => {
    setCompaniesToCompare(companies);
  };

  return (
    <CompaniesContext.Provider
      value={{ companiesToCompare, updateCompaniesToCompare }}
    >
      {children}
    </CompaniesContext.Provider>
  );
};

export const useCompanies = (): CompaniesContextType => {
  const context = useContext(CompaniesContext);
  if (!context) {
    throw new Error(
      'companiesProvider must be used within a CompaniesProvider'
    );
  }
  return context;
};
