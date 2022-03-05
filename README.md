# Accessible Astro Components
A set of accessible front-end components for [Astro](https://astro.build/). Can be used with the [Accessible Astro Starter](https://github.com/markteekman/accessible-astro-starter), which also contains accessible `DarkMode.astro`, `Navigation.astro`, `ResponsiveToggle.astro` and `SkipLink.astro` components.

## Installation
Run the following command in your project folder to get started:
```console
npm install accessible-astro-components --save-dev
```

## Usage
You can import the different components from the package using the following import statement:
```html
---
import { Accordion, AccordionItem, Card, Modal, ... } from 'accessible-astro-components'
---
```

**Skip to**: [Accordion](#accordion), [Card](#card), [Modal](#Modal), [Notification](#Notification)

### Accordion

- [Live demo](https://accessible-astro.markteekman.nl/accordion)
- [When (not) to use](https://www.nngroup.com/articles/accordions-complex-content/)

Accordions are great from grouping big chunks of content into easer to scan headers which the user can expand when he or she wants to read what is associated with that header.

**Some (accessibility) features of the Accordion**:
- Navigation the AccordionItems using the <kbd>ArrowUp</kbd> and <kbd>ArrowDown</kbd> keys
- Closing an opened AccordionItem using the <kbd>Escape</kbd> key
- Help identify content to screen reader users with `aria-controls`, `aria-labelledby`, `aria-expanded`
- Using an unordered list structure to tell screen readers users how many items there are and which they are currently on

#### Example

```html
---
import { Accordion, AccordionItem } from 'accessible-astro-components'
---
<Accordion>
  <AccordionItem
    header="First Item"
  >
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quasi nobis optio? Qui in quo accusantium debitis sapiente obcaecati magnam incidunt sit. Molestiae exercitationem quibusdam quod veritatis laboriosam est tenetur. </p>
    <a href="#">Tab to me!</a>
  </AccordionItem>
  <AccordionItem
    header="Second Item"
  >
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quasi nobis optio? Qui in quo accusantium debitis sapiente obcaecati magnam incidunt sit. Molestiae exercitationem quibusdam quod veritatis laboriosam est tenetur. </p>
  </AccordionItem>

  <!-- ... -->

</Accordion>
```

#### Overwriting styles
You can apply your own styles by either setting the individual properties using `:global(.accordion__item)` for example, or set up a global style tag and define your styles in there:

```scss
<style lang="scss" global>
  .accordion__item {
    button {
      background-color: purple;

      &:hover
      &:focus {
        background-color: peru;
      }
    }

    &.is-active button {
      background-color: peru;
    }
  }
</style>
```

### Card

- [Live demo](https://accessible-astro.markteekman.nl/card)

Cards are usually used in groups. By wrapping them in an unordered list we provide screen reader users with shortcuts to lists and list items. Screen readers also let the users know how many items there are in a list. In the example below you'll find the structure using an unordered list and `display: grid`, making sure we leave enough of a gap between Cards on touch devices for people who find they have low accuracy when targeting items, including those with Parkinson's disease and rheumatism. Leaving a bigger gap makes it easer to scroll without accidentally activating a Cards link.

**Some (accessibility) features of the Card**:
- The whole Card is made clickable using the `<a>` `::after` pseudo element
- The user still has access to the context menu when right clicking on the Card
- The title is an `<h3>` so it can be used in many contexts (`<h2>` would be too limiting
- To maintain readable text within the Card on larger screen sizes, `max-width` is set to `70ch`

#### Example

```html
---
import { Card } from 'accessible-astro-components'
---
<ul>
  <li>
    <Card
      url="/link-to-my-post"
      img="/assets/post-cover.jpg"
      title="My Awesome Post"
      footer="Tony Stark"
    >
      Lorem ipsum dolor sit amet.
    </Card>
  </li>
  <li>
    <!-- ... -->
  </li>
</ul>

```
```scss
<style lang="scss">
  ul {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 4rem;

    @media (min-width: 550px) {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 2rem;
    }

    @media (min-width: 950px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>
```

#### Overwriting styles
You can apply your own styles by either setting the individual properties using `:global(.card)` for example, or set up a global style tag and define your styles in there:

```scss
<style lang="scss" global>
  .card {
    color: purple;
    background-color: blue;

    a {
      color: gold;
    }
  }

  // set your own image height
  .card__image {
    height: 10rem;
  }
</style>
```

### Modal

- [Live demo](https://accessible-astro.markteekman.nl/modal)
- [When (not) to use](https://www.nngroup.com/articles/modal-nonmodal-dialog/)

Modals are windows that appear on top of the parent screen, usually disabling the use of the parent screen and demanding immediate action from the user. They are pretty intrusive, so use them wisely. Though, they can be handy to confirm (destructive) actions from the user before proceeding. If you only want to communicate a notification, don't use a Modal but use the Notification component (**coming soon**) instead. Always combine the Modal with some kind of user action, for example, confirming the deletion of an item in an application. Modals are usually triggered by a `<button>`. By providing the button with an `id` you can link the button to the Modal, providing necessary functionality for opening the targeted Modal. You can also customize the text of the close Modal action using the `closeText` prop on the Modal.

**Some (accessibility) features of the Modal**:
- Closing Modal with the <kbd>Escape</kbd> key
- Trapping focus inside Modal using <kbd>Tab</kbd> and <kbd>Shift + Tab</kbd>
- Linking the trigger element and the Modal using `id` and `aria-labbeledby`
- Setting focus back on the element that triggered the Modal after closing the Modal
- Teleporting the Modal from where you call it to the root of the `<body>`
- Exposing `closeModal()` function to use as a callback in your own JavaScript

#### Example

```html
---
import { Modal } from 'accessible-astro-components'
---
<button id="modal1">Modal 1</button>
<button id="modal2">Modal 2</button>

<Modal
  id="modal1"
  title="Modal 1"
>
  <p>Why hello, I be the <strong>first</strong> Modal.</p>
</Modal>
<Modal
  id="modal2"
  title="Modal 2"
  closeText="Cancel"
>
  <p>Ah yes, and I be the <strong>second</strong> Modal.</p>
  <!-- 
    calls the closeModal function, you can also use this 
    as a callback in your own function
  -->
  <button onclick="closeModal()">Confirm action</button>
</Modal>
```

#### Overwriting styles
You can apply your own styles by either setting the individual properties using `:global(.modal)` for example, or set up a global style tag and define your styles in there:

```scss
<style lang="scss" global>
  .modal__inner {
    color: purple;
    background-color: gold;
    border-color: orange;
  }

  .modal__content {
    gap: 1.5rem;
    padding: 1rem;
  }

  .modal__close button {
    background-color: blue;

    &:hover,
    &:focus {
      background-color: green;
    }
  }
</style>
```

### Notification

- [Live demo](https://accessible-astro.markteekman.nl/notification)

Notifications are often used to keep the user updated about changing state on a website or application. They can also be used as a general way to display some highlighted information in an article for example. There are two rules of thumb when it comes to Notifications and those are to always add contextual information about the Notification (such as starting with "Tip:", "Info:", "Error:") and when adding a Notification to the DOM in response to a user action, you should always use`role="status"` and `aria-live="polite"` tot inform screen reader users. To add some extra visuals you can combine the Notification component with [Astro Icon](https://github.com/natemoo-re/astro-icon).

**Some (accessibility) features of the Notification**:
- Use color to identify the type of Notification (info, success, warning, error)
- Provide contextual feedback besides just color by mentioning what type of Notification is displayed
- Help identify content to screen reader users with `role="status"` and `aria-live="polite"`

#### Example

```html
---
import { Notification } from 'accessible-astro-components'
---
<Notification
  type="info"
>
  <p><strong>Info:</strong> This is a notification of type info.</p>
</Notification>

<!-- example using Astro Icon -->
<Notification
  type="info"
>
  <Icon pack="ion" name="information-circle-outline" /><p><strong>Info:</strong> This is a notification of type info.</p>
</Notification>

<!-- when added to the DOM after a user interaction -->
<Notification
  type="info"
  role="status"
  aria-live="polite"
>
  <p><strong>Info:</strong> This is a notification of type info.</p>
</Notification>
```

#### Overwriting styles
You can apply your own styles by either setting the individual properties using `:global(.notification)` for example, or set up a global style tag and define your styles in there:

```scss
<style lang="scss">
  .notification {
    color: var(--neutral-900, #202427);
    background-color: var(--neutral-200, #f6f8f9);
    border: 2px solid var(--neutral-600, #858d93);

    &.type-info {
      color: var(--info-900, #035486);
      background-color: var(--info-100, #e0f7ff);
      border-color: var(--info-600, #1a91d1);
    }

    &.type-success {
      color: var(--success-900, #014b3e);
      background-color: var(--success-100, #eefcf6);
      border-color: var(--success-500, #28a980);
    }

    &.type-warning {
      color: var(--warning-900, #8e2a0b);
      background-color: var(--warning-100, #fffbeb);
      border-color: var(--warning-600, #dc901e);
    }

    &.type-error {
      color: var(--error-900, #5e0317);
      background-color: var(--error-100, #ffe0e0);
      border-color: var(--error-500, #df2a39);
    }
  }
</style>
```

## Roadmap/Ideas
- [x] Accordions
- [x] Cards
- [X] Modals
- [X] Notifications
- [ ] Breadcrumbs
- [ ] Form Elements
- [ ] Menu's & Menu Buttons
- [ ] Navigation
- [ ] Tabbed Interface
- [ ] Toggle Buttons
- [ ] Tooltips & Toggle tips
- [ ] Skip links

## Helping out

If you find that something isn't working right then I'm also happy to hear it to improve this starter! Let me know by either:

1. [Filing an issue](https://github.com/markteekman/accessible-astro-components/issues)
2. [Submitting a pull request](https://github.com/markteekman/accessible-astro-components/pulls)
2. [Starting a discussion](https://github.com/markteekman/accessible-astro-components/discussions)

## Thank you!

A big thank you to the creators of Astro and to all using these components and the information to make the web a bit more accessible for all people around the world :) Also a big thanks to creators around the web for providing us with information to build accessible web interfaces, such as Zell Liew from Learn JavaScript Today and Heydon Pickering, the author of Inclusive Components and many more.

[![buymeacoffee-button](https://user-images.githubusercontent.com/3909046/150683481-be070424-7bb0-4dd7-a3cb-43b5605163f5.png)](https://www.buymeacoffee.com/markteekman)

