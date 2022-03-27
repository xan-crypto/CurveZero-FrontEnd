import React, { useState, useEffect } from 'react'
import { Line } from '@ant-design/plots'
import rates from '../resources/test_rates.json'

const YieldCurveComp = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    setData(rates)
  }, [])

  const config = {
    data,
    padding: 'auto',
    xField: 'date',
    yField: 'rate',
    xAxis: {
      // type: 'timeCat',
      tickCount: 5,
    },
  }

  return <Line {...config} />
}

export function YieldCurve() {
  return (
    <>
      <h2>Historic Rates by Term</h2>
      <YieldCurveComp />
    </>
  )
}

// ReactDOM.render(<DemoLine />, document.getElementById('container'));
