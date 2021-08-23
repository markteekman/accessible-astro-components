# Accessible Astro Components
A set of accessible front-end components for the Astro static site builder. Can be used with the [Accessible Astro Starter](https://github.com/markteekman/accessible-astro-starter), which also contains accessible `SkipLink.astro`, `DarkMode.astro` and `Navigation.astro` components.

## Installation
Run the following command in your project folder to get started:
```console
npm install accessible-astro-compoments --save-dev
```

## Usage

> :warning: **At this moment there is a bug in Astro where component styles aren't imported when you use this package. I've submitted a bug and I'm trying to see if it can be resolved. In the meantime you can copy the styles from AccordionItem.astro into the page where you are using the accordion if you would like to use it anyways.**

### Accordion
Accordions are great from grouping bug chunks of content into easer to scan headers which the user can expand when he want to read what associated with that header. This accordion is made accessible by using `aria-controls`, `aria-labelledby`, `aria-expanded` and by integrating keyboard interactions such as moving through the headers using the ArrowUp and ArrowDown keys and closing the panel by using the Escape key.

- [Live demo](https://accessible-astro.markteekman.nl/accordion)
- [When (not) to use](https://www.nngroup.com/articles/accordions-complex-content/)

#### Import

```html
---
import Accordion from 'accessible-astro-components/Accordion.astro'
import AccordionItem from 'accessible-astro-components/AccordionItem.astro'
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
