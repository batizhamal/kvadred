import { Card, Divider } from 'antd'

const { Meta } = Card



export const ProductCard = ({ title, price, image, additinals }: any): JSX.Element => {
    return (
        <Card
            hoverable
            style={{ width: '15rem' }}
            cover={
                <div>
                    <img alt="example" src={image} style={{ padding: '0.5rem' }}  />
                </div>
            }
        >
            <Meta title={title} description={price} />
            <Divider />
            {additinals.map((additinal: any) => <p>{additinal.name}: <b>{additinal.value}</b></p>)}
        </Card>
    )
}
