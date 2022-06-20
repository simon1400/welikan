import { FC } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import t from '../../../data//translations.json'

const data = [
  {
    name: 'Point A',
    uv: 4000,
    pv: 2400
  },
  {
    name: 'Point B',
    uv: 3000,
    pv: 1398
  },
  {
    name: 'Point C',
    uv: 2000,
    pv: 9800
  },
  {
    name: 'Point D',
    uv: 2780,
    pv: 3908
  },
  {
    name: 'Point E',
    uv: 1890,
    pv: 4800
  },
  {
    name: 'Point F',
    uv: 2390,
    pv: 3800
  },
  {
    name: 'Point G',
    uv: 3490,
    pv: 4300
  },
];

const AreaComponent: FC = () => {
  return(
    <div className="area-chart">
      <div className="area-content">
        <h2>{t.requisitionStatistics}</h2>
        <div className="stats-label">
          <ul>
            <li>
              <span style={{backgroundColor: "#425BAD"}}></span>
              <p>{t.calls}</p>
            </li>
            <li>
              <span style={{backgroundColor: "#F5CD3199"}}></span>
              <p>{t.messages}</p>
            </li>
          </ul>
        </div>
        <ResponsiveContainer width="100%" height="80%">
          <AreaChart
            // width={800}
            // height={400}
            data={data}
            margin={{
              top: 0,
              right: 0,
              left: 0,
              bottom: 20,
            }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#425BAD" stopOpacity={0.1}/>
                <stop offset="100%" stopColor="#425BAD26" stopOpacity={0.1}/>
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#F5CD31" stopOpacity={0.1}/>
                <stop offset="100%" stopColor="#F5CD3199" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="1 0" stroke="#F7F7F7" vertical={false} />
            {/* <XAxis dataKey="name" /> */}
            <YAxis orientation="right" tickLine={false} axisLine={false} />
            <Tooltip 
              itemStyle={{
                fontSize: "14px"
              }}
              contentStyle={{
                cursor: "pointer",
                borderRadius: "10px",
                border: "1px solid #F7F7F7"
              }}
              cursor={false} 
              isAnimationActive={false} />
            <Area type="monotone" dataKey="uv" stackId="1" stroke="#425BAD" strokeWidth="2" fillOpacity={1} fill="url(#colorUv)" />
            <Area type="monotone" dataKey="pv" stackId="1" stroke="#F5CD31" strokeWidth="2" fillOpacity={1} fill="url(#colorPv)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="area-rightbar">
        <ul>
          <li>
            <span>{t.total}</span>
            <b>449</b>
            <a href="">{t.moreInfo}</a>
          </li>
          <li>
            <span>{t.calls}</span>
            <b>221</b>
            <a href="">{t.moreInfo}</a>
          </li>
          <li>
            <span>{t.messages}</span>
            <b>221</b>
            <a href="">{t.moreInfo}</a>
          </li>
          <li>
            <span>{t.averageDay}</span>
            <b>221</b>
            <a href="">{t.moreInfo}</a>
          </li>
          <li>
            <span>{t.effectiveness}</span>
            <b>221</b>
            <a href="">{t.moreInfo}</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default AreaComponent

