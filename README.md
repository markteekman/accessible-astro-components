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
import { Accordion, AccordionItem, ... } from 'accessible-astro-components'
---
```

### Accordion
Accordions are great from grouping bug chunks of content into easer to scan headers which the user can expand when he want to read what associated with that header. This accordion is made accessible by using `aria-controls`, `aria-labelledby`, `aria-expanded`, by using an unordered list structure so screen readers users get notified about the amount of items and which item they are currently on and by integrating keyboard interactions such as moving through the headers using the `ArrowUp` and `ArrowDown` keys and closing the panel by using the `Escape` key.

- [Live demo](https://accessible-astro.markteekman.nl/accordion)
- [When (not) to use](https://www.nngroup.com/articles/accordions-complex-content/)

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

## Roadmap/Ideas
- [x] Accordions
- [ ] Breadcrumbs
- [ ] Callouts
- [ ] Cards
- [ ] Form Elements
- [ ] Menu's & Menu Buttons
- [ ] Modals Dialogs
- [ ] Notifications
- [ ] Tabbed Interface
- [ ] Toggle Buttons
- [ ] Tooltips & Toggletips

## Helping out

If you find that something isn't working right then I'm also happy to hear it to improve this starter! Let me know by either:

1. [Filing an issue](https://github.com/markteekman/accessible-astro-components/pulls)
2. Or sending a [pull request](https://github.com/markteekman/accessible-astro-components/pulls)

## Thank you!

A big thank you to the creators of this awesome Astro static site builder and to all using these components to make the web a bit more accessible for all people around the world :)
