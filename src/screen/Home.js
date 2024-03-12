import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import SliderWithInfo from '../components/SliderWithInfo'
import BasicSelect from '../components/Select'

const Home = () => {

    const [homeValue , setHomeValue] = useState(1700);
    const [downPayment , setDownPayment] = useState(180);
    const [loanAmount , setLoanAmount] = useState(4300);
    const [interestRate , setInterestRate] = useState(5);

    useEffect(() => {
        const downPaymentValue = homeValue * 0.20;
        setDownPayment(downPaymentValue);
        const loanAmountValue = homeValue -downPayment;
        setLoanAmount(loanAmountValue);

    } ,[])
    useEffect(() => {
        // setDownPayment(homeValue - loanAmount)
        setLoanAmount(homeValue - downPayment)
    }, [downPayment])

    // useEffect(()=> {
    //     setDownPayment(homeValue - loanAmount)
    // }, [loanAmount])
  return (
    <div>
        <Navbar />

        <div
            style={{
                display : 'flex',
                padding:'20px',
                gap:'10px'
            }}
        >
            <div style={{width:'50%', padding:'0 20px'}}>
                <SliderWithInfo steps={100} title={"Home Value"} symbol={"$"} setValue={setHomeValue} value={homeValue} min={1000} max={10000} />
                <SliderWithInfo steps={10} title={"Down Payment"} symbol={"$"} setValue={setDownPayment} value={downPayment} min={0} max={homeValue} />
                <SliderWithInfo steps={100} title={"Loan Amount"} symbol={"$"} setValue={setLoanAmount} value={loanAmount} min={0} max={homeValue} />
                <SliderWithInfo steps={1} title={"Interest Rate"} symbol={"%"} setValue={setInterestRate} value={interestRate} min={2} max={18} />
                <div style={{margin:'50px 0'}}>
                    <BasicSelect />
                </div>
            </div>
            <div style={{width:'50%'}}>

            </div>
        </div>
        
    </div>
  )
}

export default Home