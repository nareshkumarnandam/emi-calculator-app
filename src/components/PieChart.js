import React from 'react';
import { Pie } from "react-chartjs-2";


const PieChart = ({chartData, symbol}) => {
  return (
    <div className="chart-container" style={{width:'400px', height:'400px', display: 'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
      <h2 style={{ textAlign: "center" }}>Monthly Interest: {Symbol}</h2>
      <Pie 
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Monthly Payment charges"
            }
          }
        }}
      />
    </div>
  )
}

export default PieChart