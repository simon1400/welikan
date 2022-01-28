import { FC } from "react";

interface CustomLabelProps {
  cx: number, 
  cy: number, 
  midAngle: number, 
  innerRadius: number, 
  outerRadius: number, 
  percent: number, 
  index: number
}

const RADIAN = Math.PI / 180;

const CustomLabel: FC<CustomLabelProps> = ({ 
  cx, 
  cy, 
  midAngle, 
  innerRadius, 
  outerRadius, 
  percent, 
  index 
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN) - 10;
  const y = cy + radius * Math.sin(-midAngle * RADIAN) + 10;

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default CustomLabel