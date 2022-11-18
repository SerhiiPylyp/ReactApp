import { Button } from 'antd'
import React, { FC, useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import {
  Result,
  Container,
  Fields,
  InputBlock,
  Input,
  Bmi,
  Health,
  Back,
  Title,
  Header,
} from './styled'
import { LeftOutlined } from '@ant-design/icons'
import { HealthEnum, ResultI } from './types'

export const FitnessCalculator: FC = () => {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [age, setAge] = useState('')
  const [result, setResult] = useState<ResultI>()
  const [loading, setLoading] = useState(false)

  const onChange = (setValue, value) => {
    setValue(value)
  }

  const calculate = async (e) => {
    setLoading(true)
    e.preventDefault()
    await axios
      .get('https://fitness-calculator.p.rapidapi.com/bmi', {
        params: { age, weight, height },
        headers: {
          'X-RapidAPI-Key': 'e5f756a8camsh752557b3903c59dp1777fdjsn19b53af0cbc9',
          'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com',
        },
      })
      .then((res: AxiosResponse<{ data: ResultI }>) => {
        setResult(res.data.data)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <>
      <Header>
        <Back to='/'>
          <LeftOutlined />
        </Back>
        <Title>Fitness Calculator</Title>
      </Header>
      <Container onSubmit={calculate}>
        <Fields>
          <InputBlock>
            <label>Enter height (cm)</label>
            <Input
              min={130}
              max={230}
              value={height}
              onChange={(value) => onChange(setHeight, value)}
            />
          </InputBlock>
          <InputBlock>
            <label>Enter weight (kg)</label>
            <Input
              min={40}
              max={160}
              value={weight}
              onChange={(value) => onChange(setWeight, value)}
            />
          </InputBlock>
          <InputBlock>
            <label>Enter age (year)</label>
            <Input min={1} max={120} value={age} onChange={(value) => onChange(setAge, value)} />
          </InputBlock>
          <Button
            type='primary'
            htmlType='submit'
            disabled={!height || !weight || !age}
            loading={loading}
          >
            Calculate BMI
          </Button>
        </Fields>
        {result && (
          <Result>
            <Bmi>{result.bmi}</Bmi>
            <Health color={HealthEnum.normal === result.health ? '#1890ff' : 'red'}>
              {result.health}
            </Health>
            <div>
              <span>Healthy BMI: </span>
              <span>{result.healthy_bmi_range}</span>
            </div>
          </Result>
        )}
      </Container>
    </>
  )
}
