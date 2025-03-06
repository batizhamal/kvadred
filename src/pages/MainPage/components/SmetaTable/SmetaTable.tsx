import './styles.scss';
import React, { useEffect, useState } from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { Material, Project } from '@app/api';
import { formatDigitCommas } from '../../../../common/utils/formattingUtils.ts';

interface Props {
  project: Project;
}

export interface TypeWithMaterials {
  type: string;
  materials: Material[];
  total: number;
  expanded: boolean;
}

const SmetaTable: React.FC<Props> = ({ project }) => {
  const [types, setTypes] = useState<TypeWithMaterials[]>([]);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    if (project.rooms?.length) {
      const materials = project.rooms[0]?.materials ?? [];
      const totalCost = materials.reduce((sum, mat) => sum + mat.total_cost, 0);
      setTotal(totalCost);

      const groupedTypes = materials.reduce((acc, material) => {
        const existingType = acc.get(material.type);
        if (existingType) {
          existingType.materials.push(material);
          existingType.total += material.total_cost;
        } else {
          acc.set(material.type, {
            type: material.type,
            materials: [material],
            total: material.total_cost,
            expanded: false,
          });
        }
        return acc;
      }, new Map<string, TypeWithMaterials>());

      setTypes(Array.from(groupedTypes.values()));
    }
  }, [project]);

  const toggleTypeExpansion = (index: number) => {
    setTypes((prevTypes) =>
      prevTypes.map((type, i) =>
        i === index ? { ...type, expanded: !type.expanded } : type
      )
    );
  };

  return (
    <div className="grid-table">
      <div className="grid-row">
        <div className="grid-cell grid-cell--bold">Общая стоимость</div>
        <div className="grid-cell"></div>
        <div className="grid-cell"></div>
        <div className="grid-cell">{`${formatDigitCommas(total)} ₸`}</div>
        <div className="grid-cell"></div>
      </div>

      {types.map((type, index) => (
        <React.Fragment key={type.type}>
          <div
            className="grid-row grid-row--parent"
            onClick={() => toggleTypeExpansion(index)}
          >
            <div className="grid-cell grid-cell--bold">{type.type}</div>
            <div className="grid-cell"></div>
            <div className="grid-cell"></div>
            <div className="grid-cell">{`${formatDigitCommas(type.total)} ₸`}</div>
            <div className="grid-cell grid-cell--toggle">
              {type.expanded ? <FaChevronDown /> : <FaChevronRight />}
            </div>
          </div>

          {type.expanded && (
            <>
              <div className="grid-row grid-row--child grid-row--child-labels">
                <div className="grid-cell grid-cell--bold">Материалы</div>
                <div className="grid-cell grid-cell--bold">Цена</div>
                <div className="grid-cell grid-cell--bold">Количество</div>
                <div className="grid-cell grid-cell--bold">Стоимость</div>
                <div className="grid-cell grid-cell--bold"></div>
              </div>

              {type.materials.map((material) => (
                <div key={material.name} className="grid-row grid-row--child">
                  <div className="grid-cell" data-label="Материалы">
                    {material.name}
                  </div>
                  <div
                    className="grid-cell"
                    data-label="Цена"
                  >{`${formatDigitCommas(material.price)} ₸`}</div>
                  <div className="grid-cell" data-label="Количество">
                    {material.quantity}
                  </div>
                  <div
                    className="grid-cell"
                    data-label="Стоимость"
                  >{`${formatDigitCommas(material.total_cost)} ₸`}</div>
                  <div className="grid-cell"></div>
                </div>
              ))}
            </>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default SmetaTable;
