import type { RadioChangeEvent } from 'antd';
import { Radio, Space } from 'antd'
import { Dispatch, SetStateAction } from 'react';

interface Props {
    category: string,
    setCategory: Dispatch<SetStateAction<string>>
}

export const Filter = ({ category, setCategory }: Props) => {
    const onChange = (e: RadioChangeEvent) => {
        setCategory(e.target.value)
    }

    return (
        <>
            <Radio.Group onChange={onChange} value={category}>
                <Space direction="vertical">
                    <Radio value='tiles'>Плитка</Radio>
                    <Radio value='plumming'>Сантехника</Radio>
                    <Radio value='laminam'>Laminam</Radio>
                    <Radio value='bathroom-furniture'>Мебель для ванной комнаты</Radio>
                    <Radio value='floor-coverings'>Напольные покрытия</Radio>
                </Space>
            </Radio.Group>
        </>
    )
}
