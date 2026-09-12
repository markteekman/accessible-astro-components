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

// Each position story has to make room on the side it is demonstrating. The popover flips
// to the opposite side when the preferred one does not fit, so without the spacing below
// these would all render underneath the trigger and look identical to Default.
const spacerAbove = {
  before: '<div style="block-size: 14rem"></div>',
  beforeIsHtml: true,
}

export const PositionTop = {
  args: {
    ...baseArgs,
    ...spacerAbove,
    id: 'popover-position-top',
    position: 'top',
    slot: 'Above',
  },
}

export const PositionLeft = {
  args: {
    ...baseArgs,
    ...spacerAbove,
    id: 'popover-position-left',
    position: 'left',
    slot: 'Left',
    // pushed across so the popover has somewhere to go on the inline-start side
    style: 'margin-inline-start: 22rem; white-space: nowrap',
  },
}

export const PositionRight = {
  args: {
    ...baseArgs,
    ...spacerAbove,
    id: 'popover-position-right',
    position: 'right',
    slot: 'Right',
    style: 'white-space: nowrap',
  },
}
