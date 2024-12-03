import { Table } from 'antd';
import type { TableProps } from 'antd';
import { formatNumberCombined } from '../../../common/utils/formattingUtils';
import { CompanyOffer } from '../types/CompanyOffer';

interface DataType {
    key: string | number;
    name: string;
}

interface Props {
    companyOffers: CompanyOffer[]
}

const columnKeyToRuLabel = {
    'min': 'Стандарт',
    'mid': 'Комфорт',
    'max': 'Бизнес',
    'daysCount': 'Срок'
}

// Компонент таблицы в котором инвертированы колонки и строки
export const CompaniesTable = ({ companyOffers }: Props): JSX.Element => {

    // Колонка для вертикального header-а (первая колонка)
    const companyNames: TableProps<DataType>['columns'] = [
        {
            title: '',
            dataIndex: 'column',
            width: 200,
            render: (text) => <span className='table-default-bold'>{text}</span>,
        }
    ]

    // Названий компаний
    companyOffers.forEach(companyOffer => {
        companyNames.push({
            title: companyOffer.name,
            dataIndex: companyOffer.name,
            width: 200
        })
    })

    const rows: DataType[] = []

    const verticalColumns = ['min', 'mid', 'max', 'daysCount']
    if (companyOffers.length > 0) {
        let i = 0
        verticalColumns.forEach(columnKey => {
            const tempRow: any = { key: i++ }
            // @ts-ignore
            tempRow['column'] = columnKeyToRuLabel[columnKey]
            // @ts-ignore
            companyNames.filter(it => it.dataIndex !== 'column').forEach(companyNameItem => {
                // @ts-ignore
                const tempOffer = companyOffers.find(it => it.name === companyNameItem.dataIndex)!
                let data: any
                if (['min', 'mid', 'max'].includes(columnKey)) {
                    // @ts-ignore
                    data = `${formatNumberCombined(tempOffer.costs[columnKey])} ₸`
                } else if (columnKey === 'daysCount') {
                    // @ts-ignore
                    data = `${tempOffer[columnKey]} дней`
                } else {
                    // @ts-ignore
                    data = tempOffer[columnKey]
                }
                // @ts-ignore
                tempRow[companyNameItem.dataIndex] = data
            })
            rows.push(tempRow)
        })

        // Условия:
        // 1. Рассрочка
        const installmentsConditionRow: any = { key: i++, column: '' }
        companyOffers.forEach(offer => {
            let data = '-'
            if (offer.conditions.includes('Рассрочка')) {
                data = 'Рассрочка'
            }
            installmentsConditionRow[offer.name] = data
        })
        rows.push(installmentsConditionRow)
        // 2. Поэтапная оплата
        const phasedPaymentsConditionRow: any = { key: i++, column: '' }
        companyOffers.forEach(offer => {
            let data = '-'
            if (offer.conditions.includes('Поэтапная оплата')) {
                data = 'Поэтапная оплата'
            }
            phasedPaymentsConditionRow[offer.name] = data
        })
        rows.push(phasedPaymentsConditionRow)
        // 3. БЦЦ Кредит
        const bccLoanConditionRow: any = { key: i++, column: '' }
        companyOffers.forEach(offer => {
            let data = '-'
            if (offer.conditions.includes('БЦЦ Кредит')) {
                data = 'БЦЦ Кредит'
            }
            bccLoanConditionRow[offer.name] = data
        })
        rows.push(bccLoanConditionRow)
    }

    return <Table columns={companyNames} dataSource={rows}  bordered pagination={{ position: ['none', 'none'] }} />
}
