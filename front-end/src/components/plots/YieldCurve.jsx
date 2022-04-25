import React, { useState, useEffect } from 'react'
import { Area } from '@ant-design/plots'
import rates from '../../resources/test_rates.json'

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
      tickCount: 10,
      text: 'lol',
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
