import { Button, Form, InputNumber, Radio, Select, Space } from 'antd'
import s from './styles/calculatorPage.module.css'
import { CompanyOffer } from "./types/CompanyOffer"
import { Company } from "./types/Company"

import { CompaniesTable } from './components/CompaniesTable'
import {CompaniesFormData} from "../../pages/MainPage/MainPage.tsx";


const companies: Company[] = [
    {
        name: 'aberoy.remont',
        costs: {
            min: 83000,
            mid: 103000,
            max: 160000
        },
        conditions: ['Рассрочка', 'Поэтапная оплата']
    },
    {
        name: 'astanaremont.kz',
        costs: {
            min: 105000,
            mid: 140000,
            max: 200000
        },
        conditions: ['Рассрочка', 'БЦЦ Кредит']
    },
    {
        name: 'udh.kz',
        costs: {
            min: 105000,
            mid: 135000,
            max: 195000
        },
        conditions: ['Рассрочка']
    },
    {
        name: 'sheber.pro',
        costs: {
            min: 89900,
            mid: 124900,
            max: 179900
        },
        conditions: ['БЦЦ Кредит']
    },
]

interface Props {
    formData: CompaniesFormData,
    setFormData: (data: CompaniesFormData) => void,
    companyOffers: CompanyOffer[],
    setCompanyOffers: (data: CompanyOffer[]) => void
}

export const CompaniesPage = ({ formData, setFormData, companyOffers, setCompanyOffers }: Props): JSX.Element => {

    const onSubmit = () => {
        // Рассчет на все компаний в трех вариантах (min, mid, max)
        const tempOffers: CompanyOffer[] = []
        const area = formData.area ?? 0
        companies.forEach(company => {
            const offer: CompanyOffer = {
                name: company.name,
                costs: {
                    min: company.costs.min * area,
                    mid: company.costs.mid * area,
                    max: company.costs.max * area
                },
                daysCount: 90,
                conditions: company.conditions
            }
            tempOffers.push(offer)
        })
        setCompanyOffers(tempOffers)
    }

    const onFormChange = (key: string, passedValue: any) => {
        let value
        try {
            value = passedValue.target.value 
        } catch (error) {
            value = passedValue
        }

        const temp: CompaniesFormData = JSON.parse(JSON.stringify(formData))
        // @ts-ignore
        temp[key] = value
        setFormData(temp)
    }

    return (
        <section className={s['container']}>
            {/* Форма расчета */}
            <Form onFinish={onSubmit}>
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

                <Button htmlType="submit" type="primary">Рассчитать</Button>
            </Form>
            
            {/* Перечисление компаний */}
            {/* TODO: remove if will not be necessary */}
            {/* <section>
                <div style={{ marginTop: '1rem' }}>
                    <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', width: '100%', alignItems: 'center', flexWrap: 'wrap' }}>
                        {companyOffers.map(offer => {
                            return (
                                <CompanyCard 
                                    name={offer.name}
                                    costs={{ min: offer.costs.min, mid: offer.costs.mid, max: offer.costs.max }}
                                    daysCount={offer.daysCount}
                                    conditions={offer.conditions}
                                />
                            )
                        })}
                    </div>
                </div>
            </section> */}
            {companyOffers.length > 0 && 
            <section>
                <div style={{ marginTop: '1rem' }}>
                    <CompaniesTable companyOffers={companyOffers} />
                </div>
            </section>
            }
        </section>
    )
}
