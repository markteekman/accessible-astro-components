/**
 * Accordion item child component
 *
 * @param _props - Record<string, any>
 * @param _props.title - Title text content for the summary element
 * @param _props.name - Optional group name for exclusive accordion behavior
 * @param _props.children - Any HTML elements. Parent element: `<div>`
 */
export type AccordionItem = typeof import('../index.js').AccordionItem
export const AccordionItem: AccordionItem

/**
 * Accordion parent component
 *
 * @param _props - Record<string, any>
 * @param _props.children -
 *  - Expects one or more AccordionItem components. Parent element: `<ul>`
 *  - WARNING: Astro cannot currently enforce the type of children in a `<slot>`
 */
type Accordion = typeof import('../index.js').Accordion
export const Accordion: Accordion

/**
 * Breadcrumbs item child component
 *
 * @param _props - Record<string, any>
 * @param _props.href - `<a href={href}>` Breadcrumb route string such as "/" or "/blog" - default: "#"
 * @param _props.label - `<a>` text content for descriptive route name
 * @param _props.currentPage - Boolean: isCurrentPage?
 */
export type BreadcrumbsItem = typeof import('../index.js').BreadcrumbsItem
export const BreadcrumbsItem: BreadcrumbsItem

/**
 * Breadcrumbs parent component
 *
 * @param _props - Record<string, any>
 * @param _props.children -
 *  - Expects one or more BreadcrumbsItem components. Parent element: `<ol>`
 *  - WARNING: Astro cannot currently enforce the type of children in a `<slot>`
 */
type Breadcrumbs = typeof import('../index.js').Breadcrumbs
export const Breadcrumbs: Breadcrumbs

/**
 * Card component
 *
 * @param _props - Record<string, any>
 * @param _props.url - `<a href={url}>` - default: "#"
 * @param _props.img - `<img src={img}>` - default value = placeholder
 * @param _props.title - `<h3>` header > `<a>` text content
 * @param _props.footer - `<small>` text content
 * @param _props.children - textContent or any legal `<p>` tag innerHTML such as inline HTML elements. Parent element: `<p>`
 */
type Card = typeof import('../index.js').Card
export const Card: Card

/**
 * DarkMode toggle component
 * - Toggles class `darkmode` on `document.body`
 *
 * @param _props - Props object
 * @param _props.initialMode - Optional: Sets initial theme mode ('light' | 'dark' | 'auto') - default: 'auto'
 * ```
 * <style>
 * body.darkmode {
 *   // define your dark color scheme here
 * }
 * </style>
 * ```
 *
 * @example
 * ```astro
 * <DarkMode /> // Auto mode based on system preference
 * <DarkMode initialMode="dark" /> // Force dark mode initially
 * <DarkMode initialMode="light" /> // Force light mode initially
 * ```
 */
type DarkMode = typeof import('../index.js').DarkMode
export const DarkMode: DarkMode

/**
 * Media component
 *
 * @param _props - Record<string, any>
 * @param _props.class - String of one or more CSS class names
 * @param _props.src - `<img src={src}>` - default: placeholder
 * @param _props.alt - `<img alt={alt}>` required for non-decorative images
 */
export type Media = typeof import('../index.js').Media
export const Media: Media

/**
 * Modal component
 *
 * @param _props - Record<string, any>
 * @param _props.title - `<h3>` header text content
 * @param _props.closeText - `<button>` text content - default: "Close"
 * @param _props.children - Any HTML elements. Parent element: `<div>`
 */
type Modal = typeof import('../index.js').Modal
export const Modal: Modal

/**
 * Global closeModal function for Modal component
 */
declare global {
  interface Window {
    closeModal: () => void
  }
}

/**
 * Notification component
 *
 * @param _props - Record<string, any>
 * @param _props.type - Specifies background color: info = blue, success = green, warning = yellow, error = red - default: browser default color
 * @param _props.role - Type of aria role: 'alert' | 'log' | 'marquee' | 'status' | 'timer' | 'region' -  default: 'none'
 * @param _props.ariaLive -
 * - Defines urgency of live announcements, when used prefer 'polite'
 * - Warning: Because an interruption may disorient users or cause them to not complete their current task,
 *   don't use the assertive value unless the interruption is imperative.
 * @param _props.children - any HTML elements. Parent element: `<div>`
 */
type Notification = typeof import('../index.js').Notification
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
 * @param _props.totalPages - `<span>Page {currentPage} of {totalPages}</span>` - Default: '12'
 * @param _props.renderProgress - `Function rendering the progress. Defaults to the string "Page {currentPage} of {totalPages}"`
 */
type Pagination = typeof import('../index.js').Pagination
export const Pagination: Pagination

/**
 * Skip link component
 * - Expects either `#id=#main-content` or`<h1>` to be in document
 *
 * @param _props - Record<string, never>
 *
 */
type SkipLinks = typeof import('../index.js').SkipLinks
export const SkipLinks: SkipLinks

/**
 * Tabs parent component
 *
 * @param _props - Record<string, any>
 * @param _props.children -
 *  - Expects TabsList and TabsPanel components. Parent element: `<div>`
 *  - WARNING: Astro cannot currently enforce the type of children in a `<slot>`
 */
type Tabs = typeof import('../index.js').Tabs
export const Tabs: Tabs

/**
 * TabsList component
 *
 * @param _props - Record<string, any>
 * @param _props.children -
 *  - Expects TabsTab components. Parent element: `<div role="tablist">`
 *  - WARNING: Astro cannot currently enforce the type of children in a `<slot>`
 */
type TabsList = typeof import('../index.js').TabsList
export const TabsList: TabsList

/**
 * TabsTab component
 *
 * @param _props - Record<string, any>
 * @param _props.id - Unique identifier for the tab
 * @param _props.controls - ID of the panel this tab controls
 * @param _props.selected - Boolean indicating if this tab is selected
 * @param _props.children - Tab label content
 */
type TabsTab = typeof import('../index.js').TabsTab
export const TabsTab: TabsTab

/**
 * TabsPanel component
 *
 * @param _props - Record<string, any>
 * @param _props.id - Unique identifier for the panel
 * @param _props.labelledby - ID of the tab that labels this panel
 * @param _props.selected - Boolean indicating if this panel is selected
 * @param _props.children - Panel content
 */
type TabsPanel = typeof import('../index.js').TabsPanel
export const TabsPanel: TabsPanel
