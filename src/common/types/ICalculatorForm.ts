export interface ICalculatorForm {
    city: string,
    roomCount: number | null,
    residentialComplex: string,
    area: number,
    ceilingHeight: number,
    rooms: IRoom[],
    renovationType: 'ECONOM' | 'COMFORT' | 'BUSINESS'
}

export interface IRoom {
    name: string,
    area: number
}
