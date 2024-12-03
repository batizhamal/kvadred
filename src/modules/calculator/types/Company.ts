export interface Company {
    name: string,
    costs: {
        min: number,
        mid: number,
        max: number
    },
    conditions: string[]
}
