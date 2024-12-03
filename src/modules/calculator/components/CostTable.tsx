import { Table } from 'antd';
import type { TableProps } from 'antd';
import { formatNumberCombined } from '../../../common/utils/formattingUtils';

interface DataType {
    key: string | number;
    area: number;
    type: string;
    cost: string;
}

interface Props {
    material: { area: number, name: string, cost: number }[],
    service: { area: number, name: string, cost: number }[],
    totalCost: number,
    costPerSquareMeter: number
}

export const CostTable = ({ material, service, totalCost, costPerSquareMeter }: Props): JSX.Element => {
    let totalMaterialCost = 0
    const metarialDataSource: DataType[] = material.map((it, index) => {
        totalMaterialCost += it.cost
        return {
            key: index,
            area: it.area,
            cost: formatNumberCombined(it.cost),
            type: it.name
        }
    })
    const columnsMaterial: TableProps<DataType>['columns'] = [
        {
            title: 'Площадь (м2)',
            dataIndex: 'area',
            width: 200
        },
        {
            title: 'Материалы',
            dataIndex: 'type',
            width: 200
        },
        {
            title: formatNumberCombined(totalMaterialCost),
            dataIndex: 'cost',
            width: 200
        }
    ];

    let totalServiceCost = 0
    const serviceDataSource: DataType[] = service.map((it, index) => {
        totalServiceCost += it.cost
        return {
            key: index,
            area: it.area,
            cost: formatNumberCombined(it.cost),
            type: it.name
        }
    })
    const columnsService: TableProps<DataType>['columns'] = [
        {
            title: 'Площадь (м2)',
            dataIndex: 'area',
            width: 200
        },
        {
            title: 'Примерная стоимость работ',
            dataIndex: 'type',
            width: 200
        },
        {
            title: formatNumberCombined(totalServiceCost),
            dataIndex: 'cost',
            width: 200
        }
    ];

    const totalColumns: TableProps<DataType>['columns'] = [
        {
            title: 'Стоимость материалов и работ',
            dataIndex: 'temp',
            width: 400
        },
        {
            title: formatNumberCombined(totalCost),
            dataIndex: 'temp2',
            width: 200
        }
    ];

    const perSquareColumns: TableProps<DataType>['columns'] = [
        {
            title: 'Цена за квадрат',
            dataIndex: 'temp',
            width: 400
        },
        {
            title: formatNumberCombined(costPerSquareMeter),
            dataIndex: 'temp2',
            width: 200
        }
    ]

    return (
        <>
            <Table columns={totalColumns} dataSource={[]} className={'hide-tbody'} bordered pagination={false} />
            <Table columns={columnsMaterial} dataSource={metarialDataSource} bordered pagination={{ position: ['none', 'none'] }} />
            <Table columns={columnsService} dataSource={serviceDataSource} bordered pagination={{ position: ['none', 'none'] }} />
            <Table columns={perSquareColumns} dataSource={[]} className={'hide-tbody'} bordered pagination={false} />
            </>
    )
}
