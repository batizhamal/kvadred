import { Row, Col, Card } from "antd"
import { IProduct } from "../types/IProduct"
import { CheckCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";

interface Props {
    products: IProduct[]
    addToCart: (product: IProduct) => void,
    removeFromCart: (title: string) => void,
    cart: IProduct[]
}

const ProductGrid = ({ products, addToCart, cart, removeFromCart }: Props) => {

    return (
        <div style={{ padding: "30px" }}>
            <Row gutter={[16, 16]}>
                {products.map((product) => (
                    <Col xs={24} sm={12} md={8} lg={6} key={product.title}>
                        <Card
                            hoverable
                            cover={<img alt={product.title} src={product.image} />}
                        >
                            {/* <Meta title={product.title} description={product.description} /> */}
                            <div style={{ height: '5rem' }}>{product.title}</div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', width: '95%' }}>
                                <b>
                                    {product.price}
                                </b>
                                {
                                    cart.find(it => it.title === product.title) ?
                                    <CheckCircleOutlined onClick={() => removeFromCart(product.title)} style={{ color: 'green' }} />
                                    : <PlusCircleOutlined onClick={() => addToCart(product)} />
                                }
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default ProductGrid;
