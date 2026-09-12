import StorySlot from '../StorySlot.astro'
import Select from './Select.astro'

export default {
  component: StorySlot,
}

const baseArgs = {
  Component: Select,
}

export const Default = {
  args: {
    ...baseArgs,
    name: 'sort',
    label: 'Sort by',
    placeholder: 'Choose an order',
    required: true,
    'data-validation': 'Please choose how to sort the results',
    options: [
      { value: 'relevance', label: 'Relevance' },
      { value: 'newest', label: 'Newest first' },
      { value: 'price-asc', label: 'Price: low to high' },
      { value: 'price-desc', label: 'Price: high to low' },
    ],
  },
}

export const PlainStringOptions = {
  args: {
    ...baseArgs,
    name: 'size',
    label: 'Size',
    options: ['Small', 'Medium', 'Large'],
  },
}

export const Preselected = {
  args: {
    ...baseArgs,
    name: 'currency',
    label: 'Currency',
    value: 'eur',
    options: [
      { value: 'eur', label: 'Euro' },
      { value: 'gbp', label: 'British pound' },
      { value: 'usd', label: 'US dollar' },
    ],
  },
}

export const OptionGroups = {
  args: {
    ...baseArgs,
    name: 'country',
    label: 'Country',
    autocomplete: 'country-name',
    placeholder: 'Select a country',
    required: true,
    options: [
      {
        label: 'Europe',
        options: [
          { value: 'nl', label: 'Netherlands' },
          { value: 'be', label: 'Belgium' },
          { value: 'de', label: 'Germany' },
        ],
      },
      {
        label: 'North America',
        options: [
          { value: 'ca', label: 'Canada' },
          { value: 'us', label: 'United States' },
          { value: 'mx', label: 'Mexico' },
        ],
      },
      {
        label: 'Coming soon',
        disabled: true,
        options: [{ value: 'jp', label: 'Japan' }],
      },
    ],
  },
}

export const DisabledOption = {
  args: {
    ...baseArgs,
    name: 'shipping',
    label: 'Shipping method',
    placeholder: 'Choose a shipping method',
    options: [
      { value: 'standard', label: 'Standard (3-5 days)' },
      { value: 'express', label: 'Express (next day)' },
      { value: 'pickup', label: 'Collect in store (unavailable)', disabled: true },
    ],
  },
}

export const SlottedOptions = {
  args: {
    ...baseArgs,
    name: 'variant',
    label: 'Variant',
    slotIsHtml: true,
    slot: `
      <option value="">Pick a variant</option>
      <optgroup label="Cotton">
        <option value="cotton-s">Cotton, small</option>
        <option value="cotton-m">Cotton, medium</option>
      </optgroup>
      <optgroup label="Wool">
        <option value="wool-s">Wool, small</option>
        <option value="wool-m">Wool, medium</option>
      </optgroup>
    `,
  },
}

export const Multiple = {
  args: {
    ...baseArgs,
    name: 'toppings',
    label: 'Toppings',
    multiple: true,
    value: ['cheese'],
    options: ['cheese', 'olives', 'basil', 'mushrooms'],
  },
}

export const ListBox = {
  args: {
    ...baseArgs,
    name: 'region',
    label: 'Region',
    size: 4,
    options: ['North', 'East', 'South', 'West'],
  },
}

export const Disabled = {
  args: {
    ...baseArgs,
    name: 'plan',
    label: 'Plan',
    disabled: true,
    value: 'team',
    options: [
      { value: 'starter', label: 'Starter' },
      { value: 'team', label: 'Team' },
    ],
  },
}

export const LongOptionText = {
  args: {
    ...baseArgs,
    name: 'jurisdiction',
    label: 'Jurisdiction',
    placeholder: 'Select the jurisdiction that applies to this order',
    options: [
      {
        value: 'eu-nl',
        label: 'Netherlands — Kingdom of the Netherlands, European Union member state',
      },
      { value: 'uk-sct', label: 'Scotland — United Kingdom of Great Britain and Northern Ireland' },
      { value: 'us-ca', label: 'California — United States of America, Pacific time zone' },
    ],
  },
}

export const Translated = {
  args: {
    ...baseArgs,
    name: 'anrede',
    label: 'Anrede',
    required: true,
    requiredText: '(Pflichtfeld)',
    requiredValidationMessage: 'Bitte waehlen Sie eine Anrede aus',
    placeholder: 'Bitte waehlen',
    options: ['Frau', 'Herr', 'Keine Angabe'],
  },
}

export const Invalid = {
  args: {
    ...baseArgs,
    name: 'delivery',
    label: 'Delivery window',
    placeholder: 'Choose a delivery window',
    required: true,
    'aria-invalid': 'true',
    'data-validation': 'Please choose a delivery window',
    options: ['Morning', 'Afternoon', 'Evening'],
  },
}
