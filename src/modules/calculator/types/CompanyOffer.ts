export interface CompanyOffer {
    name: string,
    costs: {
        min: number,
        mid: number,
        max: number
    },
    daysCount: number,
    conditions: string[]
}
