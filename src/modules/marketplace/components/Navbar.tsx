import Text from 'antd/es/typography/Text'
import s from './../styles/Navbar.module.css'
import { AppstoreFilled, MinusCircleOutlined, ShoppingFilled } from '@ant-design/icons'
import { Radio, RadioChangeEvent, Space } from 'antd'
import { Dispatch, SetStateAction, useState } from 'react'
import { IProduct } from '../types/IProduct'

interface Props {
    category: string,
    setCategory: Dispatch<SetStateAction<string>>,
    removeFromCart: (title: string) => void,
    cart: IProduct[]
}

export const Navbar = ({ category, setCategory, cart, removeFromCart }: Props): JSX.Element => {
    const [visible, setVisible] = useState(false)
    const [cartVisible, setCartVisible] = useState(false)

    const onChange = (e: RadioChangeEvent) => {
        setCategory(e.target.value)
    }

    return (
        <section className={s['navbar-container']}>
            <div onClick={() => setVisible(!visible)} className={s['catalog']}>
                <AppstoreFilled />
                <Text style={{ marginLeft: '0.3rem' }}>Каталог товаров</Text>
            </div>
            {visible &&
            <div className={s['categories']}>
                <Radio.Group onChange={onChange} value={category}>
                    <Space direction="vertical">
                        <Radio value='tiles'>Плитка</Radio>
                        <Radio value='plumming'>Сантехника</Radio>
                        <Radio value='laminam'>Laminam</Radio>
                        <Radio value='bathroom-furniture'>Мебель для ванной комнаты</Radio>
                        <Radio value='floor-coverings'>Напольные покрытия</Radio>
                    </Space>
                </Radio.Group>
            </div>
            }
            <div onClick={() => setCartVisible(!cartVisible)} style={{ padding: '1rem' }}>
                <ShoppingFilled />
                <Text style={{ marginLeft: '0.3rem' }}>Корзина</Text>
            </div>
            {cartVisible &&
            <div className={s['cart']}>
                {cart.length === 0 && 'Корзина пуста'}
                {cart.map(product => (
                    <div>
                        <div className={s['cart-list-item']}>
                            <div>{product.title}</div> <div> | </div> <div>{product.price}</div> 
                            <MinusCircleOutlined 
                                onClick={() => { removeFromCart(product.title) }}
                                style={{ color: 'red', marginLeft: '1rem' }}
                            />
                        </div>
                        
                    </div>
                ))}
            </div>
            }
        </section>
    )
}
