import { Row, Col, Form, Input, Button, DatePicker, Divider } from 'antd'
import { YieldCurve } from '~/components/YieldCurve'

export function RequestLoan() {
  const onFinish = () => {}

  return (
    <>
      <Divider orientation="left" orientationMargin="0">
        <h3>Request Rate</h3>
      </Divider>
      <Row justify="space-around">
        <Col span={12}>
          <YieldCurve />
        </Col>

        <Col span={8}>
          <Form name="basic" layout="vertical" onFinish={onFinish} autoComplete="off">
            <Form.Item
              label="Loan Amount"
              name="loan"
              rules={[{ required: true, message: 'Please input loan amount!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Collateral Amount"
              name="collateral"
              rules={[{ required: true, message: 'Please input collateral amount!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Repay Date"
              name="repayDate"
              rules={[{ required: true, message: 'Please select repay date!' }]}
            >
              <DatePicker />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Request
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  )
}
