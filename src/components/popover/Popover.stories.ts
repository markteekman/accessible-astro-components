import StorySlot from '../StorySlot.astro'
import Popover from './Popover.astro'

export default {
  component: StorySlot,
}

const baseArgs = {
  Component: Popover,
  slot: 'Why do we need this?',
  popoverSlot: 'We only use your phone number to contact you about this delivery.',
}

export const Default = {
  args: {
    ...baseArgs,
    id: 'popover-default',
  },
}

export const IconOnly = {
  args: {
    Component: Popover,
    id: 'popover-icon-only',
    slot: '',
    triggerLabel: 'More information about VAT',
    popoverSlot: 'VAT is calculated at checkout based on your delivery address.',
  },
}

export const WithLinks = {
  args: {
    Component: Popover,
    id: 'popover-with-links',
    slot: 'Size guide',
    popoverSlotIsHtml: true,
    popoverSlot:
      '<p>Measurements are in centimetres and taken flat.</p><p><a href="#size-chart">Open the full size chart</a></p>',
  },
}

export const PlainTextDescription = {
  args: {
    ...baseArgs,
    id: 'popover-plain-text',
    association: 'description',
    showClose: false,
    slot: 'Shipping',
    popoverSlot: 'Orders placed before 16:00 ship the same working day.',
  },
}

export const Position = {
  args: {
    ...baseArgs,
    id: 'popover-position',
    position: 'top',
  },
}
