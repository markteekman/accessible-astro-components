import StorySlot from '../StorySlot.astro'
import RangeSlider from './RangeSlider.astro'

export default {
  component: StorySlot,
}

const baseArgs = {
  Component: RangeSlider,
}

export const Default = {
  args: {
    ...baseArgs,
    name: 'volume',
    label: 'Volume',
  },
}

export const WithStep = {
  args: {
    ...baseArgs,
    name: 'servings',
    label: 'Servings',
    min: 2,
    max: 12,
    step: 2,
    value: 6,
  },
}

export const WithoutNumberInput = {
  args: {
    ...baseArgs,
    name: 'brightness',
    label: 'Brightness',
    value: 70,
    showNumberInput: false,
    valueFormat: 'percent',
  },
}

export const MultiThumb = {
  args: {
    ...baseArgs,
    multiThumb: true,
    name: 'price',
    legend: 'Price range',
    min: 0,
    max: 500,
    step: 5,
    valueMin: 25,
    valueMax: 300,
    valueFormat: 'currency',
    currency: 'EUR',
  },
}

export const MultiThumbWithMinimumGap = {
  args: {
    ...baseArgs,
    multiThumb: true,
    name: 'delivery',
    legend: 'Delivery window in days',
    min: 0,
    max: 30,
    valueMin: 2,
    valueMax: 9,
    minGap: 2,
  },
}

export const MultiThumbWithoutNumberInput = {
  args: {
    ...baseArgs,
    multiThumb: true,
    name: 'weight',
    legend: 'Weight range',
    min: 0,
    max: 50,
    valueMin: 10,
    valueMax: 40,
    showNumberInput: false,
  },
}

export const Disabled = {
  args: {
    ...baseArgs,
    name: 'volume',
    label: 'Volume',
    value: 40,
    disabled: true,
  },
}
