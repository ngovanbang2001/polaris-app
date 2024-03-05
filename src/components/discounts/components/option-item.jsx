import { Box, Divider, Grid, Select, TextField } from '@shopify/polaris'
import { Controller } from 'react-hook-form'
import { TrashIcon } from '../../../assets/icon/TrashIcon'
import { DISCOUNT_TYPE } from '../../../utils/constants'

const OptionItem = ({ errors, control, index, handleDeleteRule, watch }) => {
  const renderDiscountType = (type) => {
    switch (type) {
      case DISCOUNT_TYPE.percent.value:
        return (
          <Grid.Cell columnSpan={{ xs: 4, sm: 3, md: 3, lg: 4, xl: 4 }}>
            <Controller
              control={control}
              name={`discountRules.${index}.amount`}
              rules={{
                required: 'This is required.',
                valueAsNumber: true
              }}
              render={({ field }) => (
                <TextField
                  type="number"
                  error={errors?.discountRules?.[index]?.amount?.message}
                  suffix="%"
                  {...field}
                  autoComplete="off"
                  label="Amount"
                />
              )}
            />
          </Grid.Cell>
        )
      case DISCOUNT_TYPE.price.value:
        return (
          <Grid.Cell columnSpan={{ xs: 4, sm: 3, md: 3, lg: 4, xl: 4 }}>
            <Controller
              control={control}
              name={`discountRules.${index}.amount`}
              rules={{
                required: 'This is required.',
                valueAsNumber: true
              }}
              render={({ field }) => (
                <TextField
                type="number"
                  error={errors?.discountRules?.[index]?.amount?.message}
                  {...field}
                  prefix="$"
                  autoComplete="off"
                  label="Amount"
                />
              )}
            />
          </Grid.Cell>
        )
      default:
        return
    }
  }
  return (
    <Box>
      <div>
        <Divider borderWidth="050" />
        <div
          style={{
            display: 'flex',
            padding: '5px 25px 5px 5px',
            fontWeight: 600,
            justifyContent: 'start',
            background: '#ed4e2d',
            width: 'fit-content',
            color: 'white',
            borderBottomRightRadius: '10px'
          }}
        >
          OPTION {index + 1}
        </div>
      </div>
      <div style={{ padding: '0 40px', marginBottom: '70px' }}>
        <div style={{ display: 'flex', justifyContent: 'end' }} onClick={() => handleDeleteRule(index)}>
          <TrashIcon />
        </div>
        <Grid>
          <Grid.Cell columnSpan={{ xs: 4, sm: 3, md: 3, lg: 4, xl: 4 }}>
            <Controller
              control={control}
              ßßß
              name={`discountRules.${index}.title`}
              rules={{
                required: 'This is required.'
              }}
              render={({ field }) => (
                <TextField
                  error={errors?.discountRules?.[index]?.title?.message}
                  {...field}
                  autoComplete="off"
                  label="Title"
                />
              )}
            />
          </Grid.Cell>
          <Grid.Cell columnSpan={{ xs: 4, sm: 3, md: 3, lg: 4, xl: 4 }}>
            <Controller
              control={control}
              name={`discountRules.${index}.subTitle`}
              render={({ field }) => <TextField {...field} autoComplete="off" label="Sub Title" />}
            />
          </Grid.Cell>
          <Grid.Cell columnSpan={{ xs: 4, sm: 3, md: 3, lg: 4, xl: 4 }}>
            <Controller
              control={control}
              name={`discountRules.${index}.label`}
              render={({ field }) => <TextField {...field} autoComplete="off" label="Label" />}
            />
          </Grid.Cell>
          <Grid.Cell columnSpan={{ xs: 4, sm: 3, md: 3, lg: 4, xl: 4 }}>
            <Controller
              control={control}
              name={`discountRules.${index}.quantity`}
              rules={{
                required: 'This is required.',
                valueAsNumber: true
              }}
              render={({ field }) => (
                <TextField
                  type="number"
                  error={errors?.discountRules?.[index]?.quantity?.message}
                  {...field}
                  autoComplete="off"
                  label="Quantity"
                />
              )}
            />
          </Grid.Cell>
          <Grid.Cell columnSpan={{ xs: 4, sm: 3, md: 3, lg: 4, xl: 4 }}>
            <Controller
              control={control}
              name={`discountRules.${index}.discountType`}
              rules={{
                required: true
              }}
              render={({ field: { value, onChange } }) => (
                <Select
                  label="Discount Type"
                  options={Object.values(DISCOUNT_TYPE)}
                  onChange={onChange}
                  value={value}
                />
              )}
            />
          </Grid.Cell>
          {renderDiscountType(watch(`discountRules.${index}.discountType`))}
        </Grid>
      </div>
      <Divider borderWidth="050" />
    </Box>
  )
}

export default OptionItem
