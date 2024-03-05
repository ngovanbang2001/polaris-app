import { Card, DataTable, Layout, Text, TextField } from '@shopify/polaris'
import { APP_ROUTERS, DISCOUNT_TYPE } from '../../utils/constants'
import { Controller, useFieldArray, useForm, useWatch } from 'react-hook-form'
import { ButtonAdd, ButtonBack, ButtonSubmit, Page, Title, WrapperInput } from './style'
import { AddIcon } from '../../assets/icon/AddIcon'
import { BackIcon } from '../../assets/icon/BackIcon'
import OptionItem from './components/option-item'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const data = [
  {
    title: 'Single',
    subTitle: 'Standard Price',
    label: '',
    quantity: 1,
    discountType: 'none'
  },
  {
    title: 'Duo',
    subTitle: 'Save 10 %',
    label: 'Popular',
    quantity: 2,
    discountType: 'percent',
    amount: 10
  }
]

const CreateDiscount = () => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({
    defaultValues: {
      discountRules: data
    }
  })
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'discountRules'
  })
  const history = useHistory()
  const [previewData, setPreviewData] = useState([])
  const discountRules = useWatch({
    control,
    name: "discountRules"
  });

  const onSubmit = (data) => {
    console.log({ data })
    alert('Success')
  }

  const handleRedirect = ()=>{
    history.push(APP_ROUTERS.HOME.value)
  }

  useEffect(() => {
    const prvData = discountRules.map((rule) => [
      rule.title,
      DISCOUNT_TYPE[rule.discountType].label,
      rule.quantity,
      rule.amount ? (rule.discountType === DISCOUNT_TYPE.percent ? `${rule.amount} %` : `$ ${rule.amount}`) : ''
    ])
    setPreviewData(prvData)
  }, [discountRules])

  const handleAddRule = () => {
    append({
      title: '',
      subTitle: '',
      label: '',
      discountType: 'none'
    })
  }

  const handleDeleteRule = (index) => {
    if (index === 0) {
      alert('Cannot be deleted')
      return
    }
    remove(index)
  }

  return (
    <Page>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div
            style={{
              display: 'flex',
              margin: '10px 0 30px'
            }}
          >
            <ButtonBack onClick={handleRedirect}>
              <BackIcon />
            </ButtonBack>
            <Text variant="headingLg" as="h6">
              {APP_ROUTERS.CREATE_DISCOUNT.label}
            </Text>
          </div>
        </div>
        <Layout>
          <Layout.Section>
            <Card title="General" sectioned padding={600}>
              <Text variant="headingLg" as="h6">
                General
              </Text>
              <WrapperInput>
                <Controller
                  control={control}
                  name="campaignName"
                  rules={{
                    required: 'This is required.'
                  }}
                  render={({ field }) => <TextField error={errors.campaignName?.message} label="Campaign" {...field} />}
                />
              </WrapperInput>
              <WrapperInput>
                <Controller
                  control={control}
                  name="title"
                  rules={{
                    required: 'This is required.'
                  }}
                  render={({ field }) => <TextField error={errors.title?.message} {...field} label="Title" />}
                />
              </WrapperInput>
              <WrapperInput>
                <Controller
                  control={control}
                  name="description"
                  render={({ field }) => <TextField label="Description" {...field} />}
                />
              </WrapperInput>
            </Card>
            <div style={{
              marginTop: '20px'
            }}>
            <Card title="General" sectioned padding={0}>
              <Title>
                <Text variant="headingLg" as="h6">
                  Volume discount rule
                </Text>
              </Title>
              {fields.map((field, index) => (
                <OptionItem
                  key={field.id}
                  index={index}
                  errors={errors}
                  control={control}
                  watch={watch}
                  handleDeleteRule={handleDeleteRule}
                />
              ))}
              <div
                style={{
                  padding: '30px 40px'
                }}
              >
                <ButtonAdd onClick={handleAddRule}>
                  <AddIcon /> Add
                </ButtonAdd>
              </div>
            </Card>
            </div>
          </Layout.Section>
          <Layout.Section variant="oneThird">
            <Card title="Preview" sectioned padding={600}>
              <Text variant="headingLg" as="h6">
                Preview
              </Text>
              <div style={{ textAlign: 'center', padding: '10px 0' }}>
                <Text variant="headingMd" as="h6">
                  Buy more and Save
                </Text>
              </div>
              <Text variant="headingMd" as="h6">
                Apply for all products in store
              </Text>
              <DataTable
                columnContentTypes={['text', 'text', 'numeric', 'text']}
                headings={['Title', 'Discount Type', 'Quantity', 'Amount']}
                rows={previewData}
              />
            </Card>
            <ButtonSubmit type="submit">Save</ButtonSubmit>
          </Layout.Section>
        </Layout>
      </form>
    </Page>
  )
}

export default CreateDiscount
