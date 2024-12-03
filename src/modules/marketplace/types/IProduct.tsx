export interface IProduct {
    title: string,
    price: string,
    image: any,
    additionals: IAdditional[]
}

export interface IAdditional {
    name: string,
    value: string
}
