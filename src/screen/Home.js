import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import SliderWithInfo from '../components/SliderWithInfo'
import TenureSelect from '../components/Select'
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import Result from '../components/Result';
import '../screen/Home.css';

Chart.register(CategoryScale);

const Home = () => {

    const [data, setData] = useState({
        homeValue: 3000,
        downPayment: 3000 * 0.2,
        loanAmount: 3000 * 0.8,
        loanTerm: 5,
        interestRate: 5,
        // monthlyPayment: 0,
      });

    
  return (
    <div>
        <Navbar />

        <div className='container'
        >
            <div className='div1'>
                <SliderWithInfo data={data} setData={setData}/>
                <div style={{margin:'50px 0'}}>
                    <TenureSelect data={data} setData={setData} />
                </div>
            </div>
            <div className='div2'>
                <Result data={data}/>
            </div>
        </div>
        
    </div>
  )
}

export default Home