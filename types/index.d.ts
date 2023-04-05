/**
 * Accordion Item child component
 *
 * @param _props - Record<string, any>
 * @param _props.header - `<H3>` header text content
 * @param _props.children - any HTML element/s, Parent element: `<div>`
 */
export type AccordionItem = typeof import('./AccordionItem.astro').default
export const AccordionItem: AccordionItem

/**
 * Accordion Parent component
 *
 * @param _props - Record<string, any>
 * @param _props.children -
 *  - Expects one or more AccordionItem components, Parent Element: `<ul>`
 *  - WARNING: Astro cannot currently enforce the type of children in a Slot)
 */
type Accordion = typeof import('./Accordion.astro').default
export const Accordion: Accordion

/**
 * Breadcrumbs item child component
 *
 * @param _props - Record<string, any>
 * @param _props.href - `<a href={href}>` Breadcrumb route string such as "/" or "/blog" - default: "#"
 * @param _props.label - `<a>` text content for descriptive route name
 * @param _props.currentPage - Boolean: isCurrentPage?
 */
export type BreadcrumbsItem = typeof import('./BreadcrumbsItem.astro').default
export const BreadcrumbsItem: BreadcrumbsItem

/**
 * Breadcrumbs Parent component
 *
 * @param _props - Record<string, any>
 * @param _props.children -
 *  - Expects one or more BreadcrumbsItem components, Parent Element: `<ol>`
 *  - WARNING: Astro cannot currently enforce the type of children in a Slot)
 */
type Breadcrumbs = typeof import('./Breadcrumbs.astro').default
export const Breadcrumbs: Breadcrumbs

/**
 * Card component
 *
 * @param _props - Record<string, any>
 * @param _props.url - `<a href={url}>` - default: "#"
 * @param _props.img - `<img src={img}>` - default value = placeholder
 * @param _props.title - `<H3>` header > `<a>` text content
 * @param _props.footer - `<small>` text content
 * @param _props.children - textContent or any legal P tag innerHtml such as inline HTML elements, Parent Element: `<p>`
 */
type Card = typeof import('./Card.astro').default
export const Card: Card

/**
 * DorkMode toggle component
 * - toggles class `darkmode` on `document.body`
*
* @param _props - Record<string, never>
* ```
* <style>
 body.darkmode {
   // define your dark color scheme here
 }
</style>
```
 */
type DarkMode = typeof import('./DarkMode.astro').default
export const DarkMode: DarkMode

/**
 * Media component
 *
 * @param _props - Record<string, any>
 * @param _props.class - string of one or more css class names
 * @param _props.src - `<img src={src}>` - default: placeholder
 * @param _props.alt - `<img alt={alt}>` required for non-decorative images
 */
type Media = typeof import('./Media.astro').default
export const Media: Media

/**
 * Modal component
 *
 * @param _props - Record<string, any>
 * @param _props.title - `<H3>` header text content
 * @param _props.closeText - `<button>` text content - default: "Close"
 * @param _props.children - any HTML element/s, Parent element: `<div>`
 */
type Modal = typeof import('./Modal.astro').default
export const Modal: Modal

/**
 * Notification component
 *
 * @param _props - Record<string, any>
 * @param _props.type - Specifies background colore: info = blue, success = green, warning = yellow, error = red - default: browser default color
 * @param _props.role - type of aria role: 'alert' | 'log' | 'marquee' | 'status' | 'timer' -  default: 'none'
 * @param _props.ariaLive -
 * - Defines urgency of live announcements, when used prefer 'polite'
 * - Warning: Because an interruption may disorient users or cause them to not complete their current task,
 *   don't use the assertive value unless the interruption is imperative.
 * @param _props.children - any HTML element/s, Parent element: `<div>`
 */
type Notification = typeof import('./Notification.astro').default
export const Notification: Notification

/**
 * Pagination component
 * @type `NumericalString` `` `${number}` ``
 * @type `RouteString` `string | null | undefined`
 * @param _props - Record<string, any>
 * @param _props.firstPage - Falsy value = disabled link icon | `<a href={firstPage}>` route string such as "/" or "/blog" - default: "#"
 * @param _props.previousPage - Falsy value = disabled link icon | `<a href={previousPage}>` route string such as "/" or "/blog/5" - default: "#"
 * @param _props.nextPage - Falsy value = disabled link icon | `<a href={nextPage}>` route string such "/blog/2" - default: "#"
 * @param _props.lastPage - Falsy value = disabled link icon | `<a href={lastPage}>` route string such "/blog/20" - default: "#"
 * @param _props.currentPage - `<span>Page {currentPage} of {totalPages}</span>` - Default: '1'
 * @param _props.totalPages - `<span>Page {currentPage} of {totalPages}</span>` - Default: '12
 */
type Pagination = typeof import('./Pagination.astro').default
export const Pagination: Pagination

/**
 * Skip link component
 * - Expects either `#id=#main-content` or`<h1>` to be in document
 *
 * @param _props - Record<string, never>
 *
 */
type SkipLinks = typeof import('./SkipLinks.astro').default
export const SkipLinks: SkipLinks
