import { Button, Form, InputNumber, Radio, Select, Space } from 'antd'
import s from './styles/calculatorPage.module.css'
import { IOption } from "../../common/types/IOption"
import { RoomTypes } from "../../common/types/RoomTypes"
import { CostTable } from "./components/CostTable"
import { SmetaFormData } from "../../App"


const roomTypes: IOption[] = [
    {
        value: RoomTypes.KITCHEN,
        label: 'Кухня',
    },
    {
        value: RoomTypes.LIVING_ROOM,
        label: 'Гостиная',
    },
    {
        value: RoomTypes.BATHROOM,
        label: 'Санузел',
    },
    {
        value: RoomTypes.BEDROOM,
        label: 'Спальня',
    },
    {
        value: RoomTypes.HALLWAY,
        label: 'Прихожая',
    }
]

const roomTypeLabelMap = {
    'KITCHEN': 'Кухня',
    'LIVING_ROOM': 'Гостиная',
    'BATHROOM': 'Санузел',
    'BEDROOM': 'Спальня',
    'HALLWAY': 'Прихожая'
}

const roomCostPerSquareMeterMap = {
    'KITCHEN': { material: 50875, service: 47168.125 },
    'LIVING_ROOM': { material: 39206, service: 44995.6 },
    'BATHROOM': { material: 168319.96, service: 83593.05 },
    'BEDROOM': { material: 40629, service: 46345.6 },
    'HALLWAY': { material: 40758, service: 41370.6 },
}

interface Props {
    formData: SmetaFormData,
    setFormData: (data: SmetaFormData) => void,
    costData: any,
    setCostData: (data: any) => void
}

export const SmetaPage = ({formData, setFormData, costData, setCostData}: Props ): JSX.Element => {

    const onSubmit = () => {
        const resultForm = {
            totalCost: 0,
            costPerSquareMeter: 0,
            material: [] as any[],
            service: [] as any[]
        }
        let totalArea = 0
        formData.roomAreas.forEach(({ area, type }) => {
            totalArea += area ?? 0
            // @ts-ignore
            const materialCost = area * roomCostPerSquareMeterMap[type].material
            // @ts-ignore
            const serviceCost = area * roomCostPerSquareMeterMap[type].service
            resultForm.totalCost += (materialCost + serviceCost)
            resultForm.material.push({ area: area, name: roomTypes.find(it => it.value == type)!.label, cost: materialCost })
            resultForm.service.push({ area: area, name: roomTypes.find(it => it.value == type)!.label, cost: serviceCost })
        })

        resultForm.material.push({ area: 10, name: 'Расходные материалы', cost: 302640 })
        resultForm.material.push({ area: 10, name: 'Сопутствующие товары', cost: 103640 })
        resultForm.totalCost += (302640 + 103640)

        resultForm.costPerSquareMeter = resultForm.totalCost / totalArea

        setCostData(resultForm)
    }

    const onRoomSelect = (value: string) => {
        const tempForm: SmetaFormData = JSON.parse(JSON.stringify(formData))
        tempForm.rooms = [...tempForm.rooms, (value as RoomTypes)]
        tempForm.roomAreas = [...tempForm.roomAreas, { type: (value as RoomTypes), area: null }]
        setFormData(tempForm)
    }

    const onRoomDeselect = (removeValue: string) => {
        const tempForm: SmetaFormData = JSON.parse(JSON.stringify(formData))
        tempForm.rooms = tempForm.rooms.filter(it => it !== removeValue)
        tempForm.roomAreas = tempForm.roomAreas.filter(it => it.type !== removeValue)
        setFormData(tempForm)
    }

    const onRoomAreaChange = (roomType: RoomTypes, value: number | null) => {
        formData.roomAreas.find(it => it.type === roomType)!!.area = value
        setFormData({...formData})
    }

    const onFormChange = (key: string, passedValue: any) => {
        let value
        try {
            value = passedValue.target.value 
        } catch (error) {
            value = passedValue
        }

        const temp: SmetaFormData = JSON.parse(JSON.stringify(formData))
        // @ts-ignore
        temp[key] = value
        setFormData(temp)
    }

    return (
        <section className={s['container']}>
            {/* Форма расчета */}
            <Form onFinish={onSubmit}>
                <Form.Item
                    label='Тип ремонта'
                >
                    <Select 
                        value={formData.renovationType} 
                        onSelect={(value) => onFormChange('renovationType', value)}
                        placeholder="Выберите тип"
                    >
                        {['Эконом', 'Комфорт', 'Бизнес'].map(type => (
                            <Select.Option key={type}>{type}</Select.Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item
                    label='Город'
                >
                    <Radio.Group 
                        value={formData.city} 
                        onChange={(value) => onFormChange('city', value)}
                    >
                        <Radio.Button value="Astana">Астана</Radio.Button>
                        <Radio.Button value="Almaty">Алматы</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <Form.Item
                    label='Выбор ЖК'
                >
                    <Select
                        value={formData.residentialComplex} 
                        onSelect={(value) => onFormChange('residentialComplex', value)}
                        placeholder="Выберите ЖК"
                    >
                        {['ЖК 1', 'ЖК 2', 'ЖК 3'].map(type => (
                            <Select.Option key={type}>{type}</Select.Option>
                        ))}
                    </Select>
                </Form.Item>
                <Space>
                    <Form.Item
                        label='Общая площадь (м2)'
                    >
                        <InputNumber 
                            value={formData.area} 
                            onChange={(value) => onFormChange('area', value)}
                        />
                    </Form.Item>
                    <Form.Item
                        label='Выстота потолков (м)'
                    >
                        <InputNumber
                            value={formData.ceilingHeight} 
                            onChange={(value) => onFormChange('ceilingHeight', value)}
                        />
                    </Form.Item>
                </Space>
                <br />
                <Form.Item
                    label='Комнаты'
                >
                    <Select
                        value={formData.rooms}
                        mode="multiple"
                        allowClear
                        style={{ width: '100%' }}
                        placeholder="Выберите комнаты"
                        options={roomTypes}
                        onSelect={onRoomSelect}
                        onDeselect={onRoomDeselect}
                    />
                </Form.Item>
                {formData.roomAreas.map(roomArea => (
                    <>
                        <Space key={roomArea.type} direction="horizontal" size={12}>
                            <Form.Item
                                style={{ width: '5rem' }}
                                label={(roomTypeLabelMap[roomArea.type] as string)}
                            >
                            </Form.Item>
                            <Form.Item>
                                <InputNumber value={roomArea.area} placeholder="м2" onChange={value => onRoomAreaChange(roomArea.type, value)} />
                            </Form.Item>
                        </Space>
                        <br/>
                    </>
                ))}

                <Button htmlType="submit" type="primary">Рассчитать</Button>
            </Form>

            {/* Таблица сметы */}
            {costData && 
            <section style={{ marginTop: '1rem' }}>
                <CostTable material={costData.material} service={costData.service} totalCost={costData.totalCost} costPerSquareMeter={costData.costPerSquareMeter} />
            </section>
            }
        </section>
    )
}
