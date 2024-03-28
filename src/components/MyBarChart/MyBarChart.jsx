import {YAxis, XAxis, Bar, BarChart } from 'recharts';
const MyBarChart =()=> {
  
  const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400},{name: 'Page B', uv: 200, pv: 2400, amt: 2400},{name: 'Page D', uv: 600, pv: 2400, amt: 2400},{name: 'Page C', uv: 300, pv: 2400, amt: 2400},{name: 'Page E', uv: 700, pv: 2400, amt: 2400},];
return(
  <div className='flex items-center justify-center my-20'>
    <BarChart width={400} height={400} data={data}>
      <YAxis/>
      <XAxis/>
      <Bar dataKey="uv" fill="#8884d8" />
    </BarChart>
  </div>

  
  );
};

export default MyBarChart;