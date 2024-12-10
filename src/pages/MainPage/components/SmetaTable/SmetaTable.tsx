import './styles.scss';
import { Material, Project } from '@app/api';
import React, { useEffect, useState } from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

interface Props {
  project: Project;
}

export interface TypeWithMaterials {
  type: string;
  materials: Material[];
  total: number;
  expanded: boolean;
}

function SmetaTable(props: Props) {
  const { project } = props;

  const [types, setTypes] = useState<TypeWithMaterials[]>([]);
  const [materials, setMaterials] = useState<Material[]>([]);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    if (project.rooms) {
      // TODO: temporarily, by default only 1 room
      const mats = project.rooms[0]?.materials;
      setMaterials(mats);
      setTotal(mats.reduce((sum, val) => sum + val.total_cost, 0));

      const typesMap = new Map<string, TypeWithMaterials>();

      mats?.forEach((item) => {
        const type = typesMap.get(item.type);
        if (type) {
          type.materials.push(item);
          type.total += item.total_cost;
        } else {
          typesMap.set(item.type, {
            type: item.type,
            materials: [item],
            total: item.total_cost,
            expanded: false,
          });
        }
      });

      setTypes(Array.from(typesMap.values()));
      console.log(Array.from(typesMap.values()));
    }
  }, [project]);

  const onToggle = (index: number) => {
    setTypes((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, expanded: !item.expanded } : item
      )
    );
  };

  return (
    <table className="table">
      <tbody>
        <tr className={'table__tr table__tr--main'}>
          <td>Общая стоимость</td>
          <td></td>
          <td></td>
          <td>{total.toFixed(2)}</td>
        </tr>
        {types.map((type, index) => (
          <React.Fragment key={`type-${index}`}>
            <tr
              className={'table__tr table__tr--main'}
              onClick={() => onToggle(index)}
            >
              <td>{type.type}</td>
              <td></td>
              <td></td>
              <td>{type.total.toFixed(2)}</td>
              <td>{type.expanded ? <FaChevronDown /> : <FaChevronRight />}</td>
            </tr>
            {type.expanded && (
              <>
                <tr>
                  <th>Материалы</th>
                  <th>Цена</th>
                  <th>Количество</th>
                  <th>Стоимость</th>
                </tr>
                {type.materials.map((material, mIndex) => (
                  <tr key={`type-${index}-material-${mIndex}`}>
                    <td>{material.name}</td>
                    <td>{material.price}</td>
                    <td>{material.quantity}</td>
                    <td>{material.total_cost}</td>
                  </tr>
                ))}
              </>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
}

export default SmetaTable;
