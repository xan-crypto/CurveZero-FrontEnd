import React, { useState, useEffect } from 'react'
import { Divider, Row } from 'antd'
import { Line } from '@ant-design/plots'

const YieldCurveComp = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    asyncFetch()
  }, [])

  json = setData(json)

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error)
      })
  }
  const config = {
    data,
    padding: 'auto',
    xField: 'Date',
    yField: 'scales',
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
