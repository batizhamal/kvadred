import { Card, Typography } from "antd"
import { formatNumberCombined } from "../../../common/utils/formattingUtils"
import { CompanyOffer } from "../types/CompanyOffer"

export const CompanyCard = ({ name, costs, daysCount, conditions }: CompanyOffer): JSX.Element => {

    const formattedConditions = conditions
        .reduce((acc, current) => `${acc}, ${current}`, ' ')
        .substring(2)

    return (
        <Card title={name} style={{ width: 300, height: 200 }}>
            <Typography><b>Стандарт:</b> {formatNumberCombined(costs.min)} ₸</Typography>
            <Typography><b>Комфорт:</b> {formatNumberCombined(costs.mid)} ₸</Typography>
            <Typography><b>Бизнес:</b> {formatNumberCombined(costs.max)} ₸</Typography>
            <Typography><b>Срок:</b> {daysCount} дней</Typography>
            <Typography><b>Условия:</b> {formattedConditions}</Typography>
        </Card>
    )
}
