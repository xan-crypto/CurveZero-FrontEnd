import React, { useState, useEffect } from 'react'
import { Area } from '@ant-design/plots'
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
      tickCount: 10,
    },
    color: '#b24fc8',
  }

  return <Area {...config} />
}

export function YieldCurve() {
  return (
    <>
      <YieldCurveComp />
    </>
  )
}

// ReactDOM.render(<DemoLine />, document.getElementById('container'));
