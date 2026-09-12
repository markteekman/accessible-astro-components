import StorySlot from '../StorySlot.astro'
import Form from './Form.astro'
import Input from './Input.astro'
import Select from './Select.astro'
import Textarea from './Textarea.astro'
import Fieldset from './Fieldset.astro'
import Button from '../button/Button.astro'
import Checkbox from './Checkbox.astro'
import Radio from './Radio.astro'

export default {
  component: StorySlot,
}

const baseArgs = {
  Component: Form,
}

export const Basic = {
  args: {
    ...baseArgs,
    children: [
      {
        Component: Input,
        props: {
          name: 'full-name',
          label: 'Full name',
          required: true,
          'data-validation': 'Please enter your full name',
        },
      },
      {
        Component: Input,
        props: {
          name: 'email',
          label: 'Email address',
          type: 'email',
          required: true,
          autocomplete: 'email',
          'data-validation': 'Please provide a valid email address',
        },
      },
      {
        Component: Textarea,
        props: {
          name: 'message',
          label: 'Message',
          required: true,
          rows: 4,
          placeholder: 'Tell us a little about your project...',
          'data-validation': 'Please add a short message',
        },
      },
      {
        Component: Select,
        props: {
          name: 'country',
          label: 'Country',
          required: true,
          autocomplete: 'country-name',
          placeholder: 'Select a country',
          'data-validation': 'Please select a country',
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
              ],
            },
          ],
        },
      },
      {
        Component: Fieldset,
        props: {
          name: 'updates',
          legend: 'Email preferences',
          required: true,
          'data-validation': 'Please select at least one option',
        },
        children: [
          {
            Component: Checkbox,
            props: {
              name: 'updates',
              label: 'Product updates',
              value: 'product',
            },
          },
          {
            Component: Checkbox,
            props: {
              name: 'updates',
              label: 'Security alerts',
              value: 'security',
            },
          },
        ],
      },
      {
        Component: Fieldset,
        props: {
          name: 'plan',
          legend: 'Plan type',
          required: true,
          variant: 'minimal',
          'data-validation': 'Please choose a plan',
        },
        children: [
          {
            Component: Radio,
            props: {
              name: 'plan',
              label: 'Starter',
              value: 'starter',
            },
          },
          {
            Component: Radio,
            props: {
              name: 'plan',
              label: 'Team',
              value: 'team',
            },
          },
        ],
      },
      {
        Component: Button,
        props: { htmlType: 'submit' },
        slot: 'Send message',
      },
    ],
  },
}

export const LocalizedGerman = {
  args: {
    ...baseArgs,
    errorSummaryMessage:
      'Es gab ein Problem mit Ihrer Eingabe. Die folgenden Felder benoetigen Aufmerksamkeit:',
    defaultFieldValidationMessage: 'Dieses Feld ist erforderlich',
    defaultFieldsetValidationMessage: 'Bitte waehlen Sie mindestens eine Option',
    children: [
      {
        Component: Input,
        props: {
          name: 'full-name',
          label: 'Vollstaendiger Name',
          required: true,
          requiredText: '(Pflichtfeld)',
          requiredValidationMessage: 'Bitte geben Sie Ihren vollstaendigen Namen ein',
        },
      },
      {
        Component: Input,
        props: {
          name: 'email',
          label: 'E-Mail-Adresse',
          type: 'email',
          required: true,
          requiredText: '(Pflichtfeld)',
          autocomplete: 'email',
          emailValidationMessage: 'Bitte geben Sie eine gueltige E-Mail-Adresse ein',
        },
      },
      {
        Component: Textarea,
        props: {
          name: 'message',
          label: 'Nachricht',
          required: true,
          requiredText: '(Pflichtfeld)',
          rows: 4,
          placeholder: 'Erzaehlen Sie uns etwas ueber Ihr Projekt...',
          requiredValidationMessage: 'Bitte fuegen Sie eine kurze Nachricht hinzu',
        },
      },
      {
        Component: Select,
        props: {
          name: 'country',
          label: 'Land',
          required: true,
          requiredText: '(Pflichtfeld)',
          autocomplete: 'country-name',
          placeholder: 'Land auswaehlen',
          requiredValidationMessage: 'Bitte waehlen Sie ein Land aus',
          options: [
            { value: 'de', label: 'Deutschland' },
            { value: 'at', label: 'Oesterreich' },
            { value: 'ch', label: 'Schweiz' },
          ],
        },
      },
      {
        Component: Fieldset,
        props: {
          name: 'updates',
          legend: 'E-Mail-Einstellungen',
          required: true,
          requiredText: '(Pflichtfeld)',
          requiredValidationMessage: 'Bitte waehlen Sie mindestens eine Option',
        },
        children: [
          {
            Component: Checkbox,
            props: {
              name: 'updates',
              label: 'Produkt-Updates',
              value: 'product',
            },
          },
          {
            Component: Checkbox,
            props: {
              name: 'updates',
              label: 'Sicherheitsmeldungen',
              value: 'security',
            },
          },
        ],
      },
      {
        Component: Button,
        props: { htmlType: 'submit' },
        slot: 'Nachricht senden',
      },
    ],
  },
}
