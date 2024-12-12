# Accessible Astro Components

A set of Accessible, easy to use, Front-end UI Components for [Astro](https://astro.build/). Most of these components are used in the [Accessible Astro Starter](https://github.com/markteekman/accessible-astro-starter) and the [Accessible Astro Dashboard](https://github.com/markteekman/accessible-astro-dashboard) themes and they provide exemplary use cases for these components. As a bonus, these themes also have their own dedicated components (like keyboard accessible and responsive navigations) and many **Design System** utility classes, patterns and primitives (such as grids, buttons, lists, spacings, sizes and more).

🚀 [Live preview](https://accessible-astro.netlify.app/accessible-components/)

## Installation

Run the following command in your project folder to get started:

```console
npm install accessible-astro-components --save-dev
```

## Usage

You can import the different components from the package using the following import statement:

```astro
---
import { Accordion, AccordionItem, Card, Modal, ... } from 'accessible-astro-components'
---
```

**Skip to**: [Accordion](#accordion), [Breadcrumbs](#breadcrumbs), [Card](#card), [DarkMode](#darkMode), [Media](#media), [Modal](#modal), [Notification](#notification), [Pagination](#pagination), [SkipLinks](#skiplinks)

### Accordion


- [When (not) to use](https://www.nngroup.com/articles/accordions-complex-content/)

Accordions are great for grouping big chunks of content into easier to scan headers which the user can expand when they want to read what is associated with that header. This component uses the native HTML `<details>` and `<summary>` elements for built-in accessibility and functionality.

**Some (accessibility) features of the Accordion**:

- Uses native HTML elements for built-in accessibility
- Optional exclusive behavior using the `name` prop
- Built-in keyboard support from the browser
- No JavaScript required!
- Progressively enhanced transition between open and closed states using `allow-discrete` and `allow-keywords` on the `::details-content` pseudo element
- Using an unordered list structure to tell screen readers users how many items there are and 
which they are currently on

#### Example

```astro
---
import { Accordion, AccordionItem } from 'accessible-astro-components'
---
<Accordion>
  <AccordionItem
    title="First Item"
  >
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <a href="#">Tab to me!</a>
  </AccordionItem>
  
  <!-- Items in the same group will close others when opened -->
  <AccordionItem
    name="group1"
    title="Second Item"
  >
    <p>Content for second item</p>
  </AccordionItem>
  <AccordionItem
    name="group1"
    title="Third Item"
  >
    <p>Content for third item</p>
  </AccordionItem>
</Accordion>
```

#### Props

**AccordionItem**
- `title` (required): The text shown in the accordion header
- `name` (optional): Group name for exclusive behavior - items with the same name will close others when opened
- `children`: The content shown when the accordion is expanded

#### Overwriting styles

You can apply your own styles by either setting the individual properties using `:global(body .accordion__item)` for example, or set up a global style tag and define your styles in there:

```scss
<style lang="scss" is:global>
  body .accordion__wrapper {
    background-color: purple;

    &[open] {
      background-color: peru;
    }
  }
</style>
```

### Breadcrumbs

- [When (not) to use](https://www.nngroup.com/articles/breadcrumbs/)

Breadcrumbs are a great way to help users navigate back to a previous page or section. They are also a great way to help screen reader users understand where they are in the website.

**Some (accessibility) features of the Breadcrumbs**:

- Helps identify content to screen reader users with `aria-label="Breadcrumbs"`
- Using an unordered list structure to tell screen readers users how many items there are and which they are currently on
- Using a `<nav>` element to tell screen readers users that this is a navigation element

#### Example

```astro
---
import { Breadcrumbs, BreadcrumbsItem } from 'accessible-astro-components'
---
<Breadcrumbs>
  <BreadcrumbsItem
    href="/"
    label="Home"
  />
  <BreadcrumbsItem
    href="/blog"
    label="Blog"
  />
  <BreadcrumbsItem
    currentPage={true}
    label="My blog post"
  />
</Breadcrumbs>
```

#### Overwriting styles

You can apply your own styles by either setting the individual properties using `:global(body .breadcrumbs__item)` for example, or set up a global style tag and define your styles in there:

```scss
<style lang="scss" is:global>
  body .breadcrumbs__item {
    li::after {
      content: '>';
    }
  }
</style>
```

### Card

Cards are usually used in groups. By wrapping them in an unordered list we provide screen reader users with shortcuts to lists and list items. Screen readers also let the users know how many items there are in a list. In the example below you'll find the structure using an unordered list and `display: grid`, making sure we leave enough of a gap between Cards on touch devices for people who find they have low accuracy when targeting items, including those with Parkinson's disease and rheumatism. Leaving a bigger gap makes it easier to scroll without accidentally activating a Cards link.

**Some (accessibility) features of the Card**:

- The whole Card is made clickable using the `<a>` `::after` pseudo element
- The user still has access to the context menu when right clicking on the Card
- The title is an `<h3>` so it can be used in many contexts (`<h2>` would be too limiting
- To maintain readable text within the Card on larger screen sizes, `max-width` is set to `70ch`

#### Example

```astro
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

You can apply your own styles by either setting the individual properties using `:global(body .card)` for example, or set up a global style tag and define your styles in there:

```scss
<style lang="scss" is:global>
  body .card {
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

### DarkMode

DarkMode is a toggle button component to add and remove a class of `.darkmode` to the `<body>` based on the user's preference for either a light or dark color scheme. The user's preference is saved to the `localStorage` to preserve their choice for future visits.

**Some (accessibility) features of the DarkMode**:

- Utilizes `aria-pressed` to indicate to screen reader users whether the dark scheme is toggled or not
- Gives feedback to screen reader users which state is toggled using `aria-label`s
- Uses `aria-hidden` to hide the icons for dark and light mode and uses the `aria-labels`s instead
- Sets the `color-scheme` to `light` or `dark` based on the user's preference so you can use the `light-dark()` function in your CSS

#### Props

- `initialMode` (optional): Sets the initial color scheme. Accepts `'light'`, `'dark'`, or `'auto'` (default: `'auto'`)
  - `'light'`: Forces light mode on first visit
  - `'dark'`: Forces dark mode on first visit
  - `'auto'`: Uses system preferences on first visit

#### Example

```astro
---
import { DarkMode } from 'accessible-astro-components'
---

<!-- Uses system preferences by default -->
<DarkMode />

<!-- Forces dark mode on first visit -->
<DarkMode initialMode="dark" />

<!-- Forces light mode on first visit -->
<DarkMode initialMode="light" />
```

```scss
<style lang="scss">
  body.darkmode {
    // define your dark color scheme
  }
</style>
```

Note: After the first visit, the user's chosen preference will be saved to localStorage and will take precedence over the `initialMode` setting.

### Media

- [When is an image descriptive](https://www.w3.org/WAI/tutorials/images/decorative/)

Media is a very simple component used for `<img>` tags. It has a default empty `alt` tag which is required for non-decorative images. Should the image be descriptive, for example when there's no (complementary) text, then you should always write a good descriptive `alt` tag. The Media component also utilizes the `loading="lazy"` tag to optimize performance from the browsers side.

**Some (accessibility) features of the Media**:

- Sets a default empty `alt` tag which is always required for non descriptive images.

#### Example

```astro
---
import { Media } from 'accessible-astro-components'
---
<Media
  classes="elevation-300 radius-large"
  src="https://unsplash.com/photos/d0oYF8hm4GI"
  alt="A tiny toy astronaut, sitting on a yellow toy moon"
/>
```

### Modal

- [When (not) to use](https://www.nngroup.com/articles/modal-nonmodal-dialog/)

Modals are windows that appear on top of the parent screen, usually disabling the use of the parent screen and demanding immediate action from the user. This component uses the native HTML `<dialog>` element for built-in accessibility and functionality, enhanced with smooth transitions.

**Some (accessibility) features of the Modal**:

- Uses native HTML `<dialog>` element for built-in accessibility
- Closing Modal with the <kbd>Escape</kbd> key
- Trapping focus inside Modal using <kbd>Tab</kbd> and <kbd>Shift + Tab</kbd>
- Linking the trigger element and the Modal using `id` and `aria-labeledby`
- Setting focus back on the element that triggered the Modal after closing
- Smooth transitions using `@starting-style` and `allow-discrete`
- Respects user's reduced-motion preferences

#### Example

```astro
---
import { Modal } from 'accessible-astro-components'
---
<button id="modal1-trigger">Modal 1</button>
<button id="modal2-trigger">Modal 2</button>

<Modal
  triggerId="modal1-trigger"
  title="Modal 1"
>
  <p>Why hello, I be the <strong>first</strong> Modal.</p>
</Modal>
<Modal
  triggerId="modal2-trigger"
  title="Modal 2"
  closeText="Cancel"
>
  <p>Ah yes, and I be the <strong>second</strong> Modal.</p>
  <!--
    calls the closeModal() function, you can also use this
    as a callback in your own function
  -->
  <button onclick="closeModal()">Confirm action</button>
</Modal>
```

#### Overwriting styles

You can apply your own styles by either setting the individual properties using `:global(body .modal)` for example, or set up a global style tag and define your styles in there:

```scss
<style lang="scss" is:global>
  body {
    .modal {
        color: purple;
        background-color: gold;
      }

    .modal__inner {
      border-color: orange;
    }

    .modal__content {
      gap: 1.5rem;
      padding: 1rem;
    }

    .modal__close button {
      color: white;
      background-color: blue;

      &:hover,
      &:focus {
        background-color: green;
      }
    }
  }
</style>
```

### Notification

Notifications are often used to keep the user updated about changing state on a website or application. They can also be used as a general way to display some highlighted information in an article for example. There are two rules of thumb when it comes to Notifications and those are to always add contextual information about the Notification (such as starting with "Tip:", "Info:", "Error:") and when adding a Notification to the DOM in response to a user action, you should always use `role="status"` and `aria-live="polite"` to inform screen reader users. To add some extra visuals you can combine the Notification component with [Astro Icon](https://github.com/natemoo-re/astro-icon).

**Some (accessibility) features of the Notification**:

- Use color to identify the type of Notification (info, success, warning, error)
- Provide contextual feedback besides just color by mentioning what type of Notification is displayed
- Help identify content to screen reader users with `role="status"` and `aria-live="polite"`

#### Example

```astro
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

You can apply your own styles by either setting the individual properties using `:global(body .notification)` for example, or set up a global style tag and define your styles in there:

```scss
<style lang="scss" is:global>
  body {
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
  }
</style>
```

### Pagination

A fairly simple yet effective Pagination component which has a first, previous, next, and last page button. It also tells the user how many pages there are and what page they are currently on. The Pagination component is also fully accessible and keyboard navigable.

**Some (accessibility) features of the Pagination**:

- Uses `aria-label`s to tell the user whether they will go to the previous or next page and which page number
- Uses `aria-hidden` to hide the icons for the previous and next pages
- Disables the first and previous page buttons when on the first page
- Disables the last and next page buttons when on the last page

#### Example

```astro
---
import { Pagination } from 'accessible-astro-components'
---
<Pagination
  firstPage="/1"
  previousPage="/4"
  nextPage="/6"
  lastPage="/10"
  currentPage="/5"
  totalPages="10"
/>
```

#### Example using Astro's [Dynamic Pages](https://docs.astro.build/core-concepts/astro-pages#dynamic-pages)

```astro
---
import { Pagination } from 'accessible-astro-components'

export async function getStaticPaths({ paginate }) {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json()

  return paginate(data, { pageSize: 6 })
}

const { page } = Astro.props
---
<Pagination
  firstPage={page.url.prev ? '/blog' : null}
  previousPage={page.url.prev ? page.url.prev : null}
  nextPage={page.url.next ? page.url.next : null}
  lastPage={page.url.next ? `/blog/${Math.round(page.total / page.size)}` : null}
  currentPage={page.currentPage}
  totalPages={Math.round(page.total / page.size)}
/>
```

#### Overwriting styles

You can apply your own styles by either setting the individual properties using `:global(body .pagination)` for example, or set up a global style tag and define your styles in there:

```scss
<style lang="scss" is:global>
  body .pagination a {
    svg path {
      stroke: gold;
    }

    &:hover,
    &:focus-visible {
      background-color: purple;

      svg path {
        stroke: white;
      }
    }

    .disabled {
      border-color: red;
      opacity: 0.1;
    }
  }
</style>
```

### SkipLinks

SkipLinks provide a way for users using assistive technologies to skip repeated content on pages to go directly to the main content of a website or application. To use this component properly, make sure you give the main content of your project an `id` of `#main-content` so that the SkipLink can target it. As a fallback the SkipLink will try to target the `h1` of the page. If neither are found a warning will be logged to the console.

**Some (accessibility) features of the SkipLinks**:

- Lets assistive technologies skip to the main navigation and main content of a website

#### Example

```astro
---
import { SkipLinks } from 'accessible-astro-components'
---
<SkipLinks />
```

#### Overwriting styles

You can apply your own styles by either setting the individual properties using `:global(body .skiplinks)` for example, or set up a global style tag and define your styles in there:

```scss
<style lang="scss" is:global>
  body .skiplinks a {
    color: white;
    background-color: purple;

    &:hover
    &:focus {
      background-color: indigo;
    }
  }
</style>
```

### Tabs

A fully accessible tabs component that follows WAI-ARIA guidelines. Tabs are a great way to organize content into different sections, allowing users to switch between them easily.

**Some (accessibility) features of the Tabs**:

- Keyboard accessible using <kbd>ArrowLeft</kbd> and <kbd>ArrowRight</kbd>
- Tabbing through the tabs using <kbd>Tab</kbd> and <kbd>Shift + Tab</kbd>
- Linking the trigger element and the tabs using `id`, `aria-controls` and `aria-labelledby`
- Using proper roles to inform screen reader users about the tabs and panels
- Responsive design with mobile-first approach
- Smooth transitions (respecting reduced-motion preferences)

#### Example

```astro
---
import { Tabs, TabsList, TabsPanel, TabsTab } from 'accessible-astro-components'
---
<Tabs>
  <TabsList>
    <TabsTab id="tab1" controls="panel1" selected>Tab 1</TabsTab>
    <TabsTab id="tab2" controls="panel2">Tab 2</TabsTab>
    <TabsTab id="tab3" controls="panel3">Tab 3</TabsTab>
  </TabsList>
  <TabsPanel id="panel1" labelledby="tab1" selected>
    <h2>Panel 1</h2>
    <p>Content for first panel</p>
  </TabsPanel>
  <TabsPanel id="panel2" labelledby="tab2">
    <h2>Panel 2</h2>
    <p>Content for second panel</p>
  </TabsPanel>
  <TabsPanel id="panel3" labelledby="tab3">
    <h2>Panel 3</h2>
    <p>Content for third panel</p>
  </TabsPanel>
</Tabs>
```

#### Props

**Tabs**
- `class` - Optional string for additional CSS classes

**TabsList**
- `class` - Optional string for additional CSS classes

**TabsTab**
- `id` - Required string for unique tab identification
- `controls` - Required string matching the panel ID this tab controls
- `selected` - Optional boolean to set initial selected state
- `class` - Optional string for additional CSS classes

**TabsPanel**
- `id` - Required string for unique panel identification
- `labelledby` - Required string matching the tab ID that labels this panel
- `selected` - Optional boolean to set initial selected state
- `class` - Optional string for additional CSS classes

#### Overwriting styles

You can apply your own styles by either setting the individual properties using `:global(body .tabs)` for example, or set up a global style tag and define your styles in there:

```scss
<style lang="scss" is:global>
  body .tabs-list {
    background-color: purple;
  }
</style>
```

## 📦 Other Accessible Astro projects

- [Accessible Astro Starter](https://github.com/markteekman/accessible-astro-starter/)
- [Accessible Astro Dashboard](https://github.com/markteekman/accessible-astro-dashboard/)

## ❤️ Helping out

If you find that something isn't working right then I'm always happy to hear it to improve these components! You can contribute in many ways and forms. Let me know by either:

1. [Filing an issue](https://github.com/markteekman/accessible-astro-components/issues)
2. [Submitting a pull request](https://github.com/markteekman/accessible-astro-components/pulls)
3. [Starting a discussion](https://github.com/markteekman/accessible-astro-components/discussions)
4. [Sponsoring this project](https://www.buymeacoffee.com/markteekman)

## ☕ Thank you!

I'd like to extend my gratitude to the creators of Astro and all those who have utilized these components and shared valuable insights to enhance web accessibility worldwide. Additionally, I'd like to acknowledge the contributions of notable figures in the web development community, including Zell Liew from Learn JavaScript Today and Heydon Pickering, the author of Inclusive Components, among others. Special thanks go out to all the contributors to this repository, with particular recognition for [David Abell](https://github.com/david-abell), whose substantial contributions, such as the addition of TypeScript support, have greatly benefited the project. Your collective efforts are highly appreciated!

[![buymeacoffee-button](https://user-images.githubusercontent.com/3909046/150683481-be070424-7bb0-4dd7-a3cb-43b5605163f5.png)](https://www.buymeacoffee.com/markteekman)
