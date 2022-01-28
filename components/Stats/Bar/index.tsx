import { FC } from "react"
import { LabelList } from "recharts";
import { BarChart, Bar, Cell, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Иванов Врач Иванович',
    uv: 100
  },
  {
    name: 'Петров Врач Иванович',
    uv: 400
  },
  {
    name: 'Сидоров Врач Иванович',
    uv: 200
  },
  {
    name: 'Иванов Врач Иванович',
    uv: 100
  },
  {
    name: 'Петров Врач Иванович',
    uv: 400
  }
];

const COLORS = ['#425BAD', '#F5CD31', '#425BAD66', '#425BAD26', '#425BAD26'];

const BarComponent: FC = () => {
  return (
    <div className="bar">
      <h2>Популярность врачей (количество посетителей)</h2>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          // width={1000}
          // height={500}
          data={data}
          layout="vertical"
          margin={{
            top: 20,
            right: 40,
            left: 30,
            bottom: 40,
          }}
        >
          <YAxis width={170} dx={-25} tickLine={false} axisLine={false} type="category" dataKey="name"/>
          <XAxis type="number" hide />
          <Bar dataKey="uv" fill="blue">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % 20]} />
            ))}
            <LabelList dataKey="uv" position="right" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BarComponent