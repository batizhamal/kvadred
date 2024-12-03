import { Dispatch, SetStateAction } from 'react'
import { Menu } from 'antd';
import {
    ShoppingOutlined,
    CalculatorOutlined,
} from '@ant-design/icons';

interface Props {
    nav: string
    setNav: Dispatch<SetStateAction<string>>
}

export const Navbar = ({ nav, setNav }: Props): JSX.Element => {

    const handleClick = (e: any) => setNav(e.key)

    return (
        <>
            <Menu
                onClick={handleClick}
                selectedKeys={[nav]}
                mode="horizontal">
                <Menu.Item key="smeta-calculator">
                    <CalculatorOutlined style={{ marginRight: '0.5rem' }} />
                    Смета
                </Menu.Item>
                <Menu.Item key="companies-calculator">
                    <CalculatorOutlined style={{ marginRight: '0.5rem' }} />
                    Компании
                </Menu.Item>
                <Menu.Item key="marketplace">
                    <ShoppingOutlined style={{ marginRight: '0.5rem' }} />
                    Маркетплэйс
                </Menu.Item>
            </Menu>
        </>
    );
}
