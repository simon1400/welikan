import { FC } from "react"
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import PieDataObjProps from "../../../interfaces/stats";
import CustomLabel from "./CustomLabel";

interface PieProps {
  price?: boolean | string
  data: PieDataObjProps[]
}

const PieStats: FC<PieProps> = ({
  price = false,
  data
}) => {

  const COLORS = ['#425BAD', '#F5CD31', '#425BAD66', '#425BAD26', '#F7F7F7'];

  return (
    <PieChart width={250} height={250}>
      <Pie
        data={data}
        cy="50%"
        cx="50%"
        innerRadius={price ? 100 : 70}
        outerRadius={120}
        fill="#8884d8"
        paddingAngle={0}
        dataKey="value"
        labelLine={false}
        label={!!price ? false : CustomLabel}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  )
}

export default PieStats

