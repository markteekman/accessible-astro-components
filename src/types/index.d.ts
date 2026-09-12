/**
 * Type definitions for accessible-astro-components.
 *
 * Table of contents (alphabetical):
 * - Global definitions
 * - Accordion
 * - AccordionItem
 * - Avatar
 * - AvatarGroup
 * - Badge
 * - Breadcrumbs
 * - BreadcrumbsItem
 * - Button
 * - Card
 * - Checkbox
 * - DataTable
 * - DataTableActions
 * - DataTableBody
 * - DataTableCell
 * - DataTableColumn
 * - DataTableHeader
 * - DataTableInfo
 * - DataTablePagination
 * - DataTableRow
 * - DataTableSearch
 * - DarkMode
 * - Drawer
 * - Fieldset
 * - Form
 * - Heading
 * - HighContrast
 * - Input
 * - Link
 * - Media
 * - Modal
 * - Notification
 * - Pagination
 * - Radio
 * - RangeSlider
 * - ReducedMotion
 * - SkipLink
 * - Switch
 * - Tabs
 * - TabsList
 * - TabsPanel
 * - TabsTab
 * - Textarea
 * - Toast
 * - ToastProvider
 * - Tooltip
 * - Video
 */

/**
 * Global closeModal function for Modal component
 */
declare global {
  type ToastType = 'info' | 'success' | 'warning' | 'error' | 'default'

  type ToastOptions = {
    message: string
    type?: ToastType
    duration?: number
    dismissible?: boolean
  }

  interface ToastShowDetail {
    id: string
    type: ToastType
    message: string
  }

  interface ToastDismissDetail {
    id: string
  }

  interface Window {
    /**
     * Closes a Modal. Defaults to the last open modal when no modal is passed.
     */
    closeModal: (modal?: HTMLDialogElement) => void
    /**
     * Closes a Drawer. Defaults to the last open drawer when no drawer is passed.
     */
    closeDrawer: (drawer?: HTMLDialogElement) => void
    /**
     * Dark mode API for external control
     */
    darkMode: {
      enable: () => void
      disable: () => void
      toggle: () => void
      isEnabled: () => boolean
    }
    darkModeInitialized?: boolean
    /**
     * High contrast API for external control
     */
    highContrast: {
      enable: () => void
      disable: () => void
      toggle: () => void
      isEnabled: () => boolean
    }
    highContrastInitialized?: boolean
    /**
     * Reduced motion API for external control
     */
    reducedMotion: {
      enable: () => void
      disable: () => void
      toggle: () => void
      isEnabled: () => boolean
    }
    reducedMotionInitialized?: boolean
    /**
     * Toast API for external control
     */
    toast: {
      show: (options: ToastOptions) => string
      success: (message: string, duration?: number) => string
      error: (message: string, duration?: number) => string
      info: (message: string, duration?: number) => string
      warning: (message: string, duration?: number) => string
      dismiss: (id: string, immediate?: boolean) => void
      dismissAll: () => void
    }
  }

  interface DocumentEventMap {
    'toast:show': CustomEvent<ToastShowDetail>
    'toast:dismiss': CustomEvent<ToastDismissDetail>
  }
}

/**
 * Accordion parent component
 *
 * @param _props - Record<string, any>
 * @param _props.class - Optional CSS class names
 * @param _props.children -
 *  - Expects one or more AccordionItem components. Parent element: `<ul>`
 *  - WARNING: Astro cannot currently enforce the type of children in a `<slot>`
 * @note Additional HTML attributes can be passed and will be spread to the root element
 */
type Accordion = typeof import('../../index.js').Accordion
export const Accordion: Accordion

/**
 * Accordion item child component
 *
 * @param _props - Record<string, any>
 * @param _props.class - Optional CSS class names
 * @param _props.title - Title text displayed in the accordion header (required)
 * @param _props.name - Optional name attribute for the details element
 * @param _props.headingLevel - Heading level for the title ('h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6') - default: 'h3'
 * @param _props.headingSize - Visual size of the heading ('h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6') - default: 'h6'
 * @param _props.variant - Visual style variant ('default' | 'chevron') - default: 'default'
 * @param _props.open - Whether the accordion item is initially open - default: false
 * @param _props.children - Any HTML elements. Parent element: `<div>`
 * @note Additional HTML attributes can be passed and will be spread to the root element
 * @note The component supports independent control of semantic level (headingLevel) and visual appearance (headingSize)
 */
export type AccordionItem = typeof import('../../index.js').AccordionItem
export const AccordionItem: AccordionItem

/**
 * Avatar component
 *
 * @param _props - Record<string, any>
 * @param _props.class - Optional CSS class names
 * @param _props.img - Image source URL for the avatar
 * @note Images are automatically optimized with loading="lazy" and decoding="async" attributes
 * @param _props.initials - Initials to display when no image is available
 * @param _props.type - Type of the avatar ('default' | 'info' | 'success' | 'warning' | 'error') - default: 'default'
 * @param _props.shape - Shape of the avatar ('round' | 'square') - default: 'round'
 * @param _props.size - Size of the avatar ('sm' | 'md' | 'lg' | string) - default: 'md'
 * @param _props.title - Primary text to display next to the avatar (e.g., name)
 * @param _props.subtitle - Secondary text to display next to the avatar (e.g., role)
 * @param _props.label - Accessible label for screen readers (required when no title is provided)
 * @note Additional HTML attributes can be passed and will be spread to the root element
 */
type Avatar = typeof import('../../index.js').Avatar
export const Avatar: Avatar

/**
 * AvatarGroup component
 *
 * @param _props - Record<string, any>
 * @param _props.class - Optional CSS class names
 * @param _props.display - Display mode for the avatar group ('condensed' | 'grid') - default: 'condensed'
 * @param _props.gridItemsSize - Size of the grid items (used for grid display mode) - default: '200px'
 * @param _props.gridGap - Gap between grid items (used for grid display mode) - default: '1rem'
 * @param _props.overlapAmount - Overlap amount for condensed mode (negative margin) - default: '-1rem'
 * @note When display is 'condensed', overlapAmount will be automatically converted to a negative value if a positive value is provided
 * @param _props.children -
 *  - Expects one or more Avatar components. Parent element: `<div>`
 *  - WARNING: Astro cannot currently enforce the type of children in a `<slot>`
 * @note Additional HTML attributes can be passed and will be spread to the root element
 */
type AvatarGroup = typeof import('../../index.js').AvatarGroup
export const AvatarGroup: AvatarGroup

/**
 * Badge component
 *
 * @param _props - Record<string, any>
 * @param _props.size - Size of the badge ('sm' | 'md' | 'lg') - default: 'md'
 * @param _props.type - Type/color variant ('info' | 'success' | 'warning' | 'error' | 'default') - default: 'default'
 * @param _props.isButton - Whether to render as a button element - default: false
 * @param _props.animateOnHover - Whether to animate the icon on hover (only works with isButton) - default: false
 * @param _props.animationType - Type of animation to apply on hover ('rotate' | 'boop' | 'bouncing' | 'nudge' | 'none') - default: 'boop'
 * @param _props.animationIntensity - Animation intensity (1-10) - default: 5
 * @param _props.isCircular - Whether to display the badge as a circle (best for single numbers/characters) - default: false
 * @param _props.isPill - Whether to display the badge with fully rounded corners (pill style) - default: false
 * @param _props.pulse - Whether to apply a pulsating animation to draw attention (pulses 3 times) - default: false
 * @param _props.srLabel - Additional text for screen readers (e.g., "New messages: " for a count badge) - default: undefined
 * @param _props.class - Optional CSS class names
 * @param _props.children - Any HTML elements. Parent element: `<span>` or `<button>`
 * @note Additional HTML attributes can be passed and will be spread to the root element
 */
type Badge = typeof import('../../index.js').Badge
export const Badge: Badge

/**
 * Breadcrumbs parent component
 *
 * @param _props - Record<string, any>
 * @param _props.class - Optional CSS class names
 * @param _props.ariaLabel - Accessible label for the breadcrumb navigation - default: 'Breadcrumbs'
 * @param _props.children -
 *  - Expects one or more BreadcrumbsItem components. Parent element: `<ol>`
 *  - WARNING: Astro cannot currently enforce the type of children in a `<slot>`
 * @note Additional HTML attributes can be passed and will be spread to the root element
 */
type Breadcrumbs = typeof import('../../index.js').Breadcrumbs
export const Breadcrumbs: Breadcrumbs

/**
 * Breadcrumbs item child component
 *
 * @param _props - Record<string, any>
 * @param _props.href - `<a href={href}>` Breadcrumb route string such as "/" or "/blog" - default: "#"
 * @param _props.label - `<a>` text content for descriptive route name
 * @param _props.currentPage - Boolean: isCurrentPage?
 * @param _props.hasIcon - Whether this item has an icon - default: false
 * @param _props.class - Optional CSS class names
 * @note Additional HTML attributes can be passed and will be spread to the root element
 */
export type BreadcrumbsItem = typeof import('../../index.js').BreadcrumbsItem
export const BreadcrumbsItem: BreadcrumbsItem

/**
 * Button component
 *
 * @param _props - Record<string, any>
 * @param _props.class - Optional CSS class names
 * @param _props.id - The id attribute
 * @param _props.htmlType - The HTML button type attribute ('button' | 'submit' | 'reset') - default: 'button'
 * @param _props.disabled - Whether the button is disabled - default: false
 * @param _props.variant - The variant of the button ('filled' | 'outlined') - default: 'filled'
 * @param _props.type - The type of the button affecting color scheme ('default' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error') - default: 'default'
 * @param _props.size - The size of the button ('sm' | 'md' | 'lg') - default: 'md'
 * @param _props.ariaLabel - The aria-label attribute
 * @param _props.ariaDescribedby - The aria-describedby attribute
 * @param _props.animateOnHover - Whether to animate the icon on hover - default: false
 * @param _props.animationType - Type of animation to apply on hover ('rotate' | 'boop' | 'bouncing' | 'nudge' | 'none') - default: 'boop'
 * @param _props.animationIntensity - Animation intensity (1-10) - default: 5
 * @param _props.pulse - Whether to apply a pulsating animation to draw attention (pulses 3 times) - default: false
 * @param _props.children - Any HTML elements. Parent element: `<button>`
 * @note Additional HTML attributes can be passed and will be spread to the root element
 */
type Button = typeof import('../../index.js').Button
export const Button: Button

/**
 * Card component
 *
 * @param _props - astroHTML.JSX.HTMLAttributes
 * @param _props.class - Optional CSS class names
 * @param _props.title - Card's title - default: "Default title"
 * @param _props.img - URL for the card's image - default: "https://fakeimg.pl/640x360"
 * @param _props.imageComponent - Optional Astro Image component (ImageMetadata or Promise from import())
 * @param _props.imageAlt - Alt text for the image - default: ""
 * @param _props.width - Width of the image (required for remote images) - default: 640
 * @param _props.height - Height of the image (required for remote images) - default: 360
 * @param _props.inferSize - Whether to infer the image size (for remote images) - default: false
 * @param _props.url - URL for the card's link - default: "#"
 * @param _props.headingLevel - Heading level for the title ('h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6') - default: 'h3'
 * @param _props.headingSize - Visual size of the heading ('h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6') - default: 'h6'
 * @param _props.footer - Footer content - default: ""
 * @param _props.fullHeight - Whether the card should take full height (useful for equal height card grids) - default: false
 * @param _props.children - textContent or any legal `<p>` tag innerHTML such as inline HTML elements. Parent element: `<p>`
 * @note Additional HTML attributes can be passed and will be spread to the root element
 * @note The component supports independent control of semantic level (headingLevel) and visual appearance (headingSize)
 * @note Supports named slot "meta" for metadata content
 */
type Card = typeof import('../../index.js').Card
export const Card: Card

/**
 * Checkbox component
 *
 * @param _props - Record<string, any>
 * @param _props.class - Optional CSS class names
 * @param _props.id - Unique identifier for the checkbox field
 * @param _props.name - Name attribute for the checkbox field (required for form submission)
 * @param _props.label - Label text for the checkbox field (required)
 * @param _props.value - Value attribute for the checkbox
 * @param _props.checked - Whether the checkbox is checked by default - default: false
 * @param _props.disabled - Whether the field is disabled - default: false
 * @param _props.children - Not applicable for checkbox components
 * @note Additional HTML attributes can be passed and will be spread to the root element
 * @note Uses grid layout with proper label association for accessibility
 */
type Checkbox = typeof import('../../index.js').Checkbox
export const Checkbox: Checkbox

/**
 * Data table parent component
 *
 * @param _props - Record<string, any>
 * @param _props.id - Optional ID for the table element
 * @param _props.caption - Table caption text (required)
 * @param _props.captionHidden - Whether to visually hide the caption while keeping it accessible - default: false
 * @param _props.pageSize - Opt into client pagination; render all rows
 * @param _props.initialPage - Initial client page - default: 1
 * @param _props.labels.results - Default result summary when DataTableInfo is omitted
 * @param _props.labels.filteredResults - Filtered summary when DataTableInfo is omitted
 * @param _props.labels.emptyResults - Empty summary when DataTableInfo is omitted
 * @param _props.labels - Optional labels for sorting announcements and hints
 * @param _props.labels.sortAscending - Label for ascending sort announcements - default: "ascending"
 * @param _props.labels.sortDescending - Label for descending sort announcements - default: "descending"
 * @param _props.labels.sortAnnouncement - Announcement template for sorting updates - default: "Sorted by {column} {direction}"
 * @param _props.labels.sortableHint - Screen reader hint for sortable columns - default: "Column headers with buttons are sortable."
 * @param _props.class - Optional CSS class names
 * @param _props.children - Expects DataTableHeader and DataTableBody components. Parent element: `<table>`
 * @note Supports named slots: "search" for DataTableSearch and "info" for DataTableInfo and "footer" for DataTablePagination
 * @note Additional HTML attributes can be passed and will be spread to the root element
 */
type DataTable = typeof import('../../index.js').DataTable
export const DataTable: DataTable

/**
 * Data table row actions component
 *
 * @param _props - Record<string, any>
 * @param _props.class - Optional CSS class names
 * @param _props.children - Row action controls. Parent element: `<td>`
 * @note The cell is excluded from DataTable filtering
 * @note Additional HTML attributes can be passed and will be spread to the root element
 */
type DataTableActions = typeof import('../../index.js').DataTableActions
export const DataTableActions: DataTableActions

/**
 * Data table body component
 *
 * @param _props - Record<string, any>
 * @param _props.class - Optional CSS class names
 * @param _props.children - Expects one or more DataTableRow components. Parent element: `<tbody>`
 * @note Additional HTML attributes can be passed and will be spread to the root element
 */
type DataTableBody = typeof import('../../index.js').DataTableBody
export const DataTableBody: DataTableBody

/**
 * Data table cell component
 *
 * @param _props - Record<string, any>
 * @param _props.class - Optional CSS class names
 * @param _props.as - Element to render ('td' | 'th') - default: 'td'
 * @param _props.scope - Scope for header cells ('row' | 'col' | 'rowgroup' | 'colgroup') - default: 'row' when as is 'th'
 * @param _props.numeric - Whether the cell contains numeric values - default: false
 * @param _props.sortValue - Optional value to use instead of the cell's text content when sorting
 * @param _props.sortKey - Optional key used to match a custom sort value to a column
 * @param _props.filterable - Whether the cell is included in filtering - default: true
 * @param _props.children - Cell contents. Parent element: `<td>` or `<th>`
 * @note Additional HTML attributes can be passed and will be spread to the root element
 */
type DataTableCell = typeof import('../../index.js').DataTableCell
export const DataTableCell: DataTableCell

/**
 * Data table column header component
 *
 * @param _props - Record<string, any>
 * @param _props.class - Optional CSS class names
 * @param _props.sortable - Whether the column is sortable - default: false
 * @param _props.sorted - Initial sort direction ('ascending' | 'descending')
 * @param _props.numeric - Whether the column contains numeric values - default: false
 * @param _props.sortKey - Optional key for matching custom cell sort values
 * @param _props.width - CSS column width (length or percentage); unspecified columns share remaining space
 * @param _props.children - Column heading contents. Parent element: `<th>`
 * @note Sortable columns render their contents inside a button
 * @note Additional HTML attributes can be passed and will be spread to the root element
 */
type DataTableColumn = typeof import('../../index.js').DataTableColumn
export const DataTableColumn: DataTableColumn

/**
 * Data table header component
 *
 * @param _props - Record<string, any>
 * @param _props.class - Optional CSS class names
 * @param _props.children - Expects one or more DataTableColumn components. Parent element: `<tr>` inside `<thead>`
 * @note Additional HTML attributes can be passed and will be spread to the root element
 */
type DataTableHeader = typeof import('../../index.js').DataTableHeader
export const DataTableHeader: DataTableHeader

/**
 * Data table result information component
 *
 * @param _props - Record<string, any>
 * @param _props.start - Start index for the current page (required)
 * @param _props.end - End index for the current page (required)
 * @param _props.total - Total number of entries (required)
 * @param _props.template - Template for the default information text - default: "Showing {start} to {end} of {total} entries"
 * @param _props.filteredTemplate - Template for filtered information text - default: 'Showing {start} to {end} of {filtered} entries matching "{query}"'
 * @param _props.emptyLabel - Empty-result template; supports {query} - default: 'No entries matching "{query}"'
 * @param _props.class - Optional CSS class names
 * @note Additional HTML attributes can be passed and will be spread to the root element
 */
type DataTableInfo = typeof import('../../index.js').DataTableInfo
export const DataTableInfo: DataTableInfo

/**
 * Data table pagination component
 *
 * @param _props.client - Use client pagination buttons with DataTable pageSize - default: false
 * @param _props.pageTemplate - Client progress template - default: "Page {page} of {pages}"
 *
 * @param _props - Record<string, any>
 * @param _props.currentPage - Current page number - default: 1
 * @param _props.totalPages - Total number of pages - default: 1
 * @param _props.baseUrl - Optional base URL used to generate pagination links
 * @param _props.firstPage - Optional route for the first page
 * @param _props.previousPage - Optional route for the previous page
 * @param _props.nextPage - Optional route for the next page
 * @param _props.lastPage - Optional route for the last page
 * @param _props.ariaLabel - Accessible label for the pagination navigation
 * @param _props.firstPageLabel - Accessible label for the first-page button
 * @param _props.previousPageLabel - Accessible label for the previous-page button
 * @param _props.nextPageLabel - Accessible label for the next-page button
 * @param _props.lastPageLabel - Accessible label for the last-page button
 * @param _props.renderProgress - Optional link-mode progress renderer; use pageTemplate for client mode
 * @param _props.renderPageLabel - Optional link-mode accessible-label renderer; use individual labels for client mode
 * @param _props.class - Optional CSS class names
 * @note Uses the Pagination component and supports its additional HTML attributes
 */
type DataTablePagination = typeof import('../../index.js').DataTablePagination
export const DataTablePagination: DataTablePagination

/**
 * Data table row component
 *
 * @param _props - Record<string, any>
 * @param _props.class - Optional CSS class names
 * @param _props.children - Expects DataTableCell or DataTableActions components. Parent element: `<tr>`
 * @note Additional HTML attributes can be passed and will be spread to the root element
 */
type DataTableRow = typeof import('../../index.js').DataTableRow
export const DataTableRow: DataTableRow

/**
 * Data table search component
 *
 * @param _props - Record<string, any>
 * @param _props.id - Optional ID for the search input
 * @param _props.label - Label text for the search input - default: "Search"
 * @param _props.placeholder - Placeholder text for the search input - default: "Search entries..."
 * @param _props.clearLabel - Clear button accessible name - default: "Clear search"
 * @param _props.showLabel - Whether to show the label visually - default: true
 * @param _props.class - Optional CSS class names for the search wrapper
 * @note Additional HTML attributes can be passed and will be spread to the search input
 */
type DataTableSearch = typeof import('../../index.js').DataTableSearch
export const DataTableSearch: DataTableSearch

/**
 * DarkMode toggle component
 * - Toggles class `darkmode` on `document.documentElement`
 * - Sets color-scheme CSS property
 *
 * @param _props - Props object
 * @param _props.initialMode - Optional: Sets initial theme mode ('light' | 'dark' | 'auto') - default: 'auto'
 * @param _props.label - Optional: Accessible label for the toggle button - default: 'Toggle Dark Mode'
 * @param _props.class - Optional CSS class names
 * @param _props.children - Optional: Custom elements for light/dark mode icons using named slots
 * @note Supports named slots: "light" for light mode icon and "dark" for dark mode icon
 * @note Additional HTML attributes can be passed and will be spread to the root element
 * ```
 * <style>
 * :root {
 *   color-scheme: light;
 * }
 *
 * :root.darkmode {
 *   color-scheme: dark;
 * }
 * </style>
 * ```
 */
type DarkMode = typeof import('../../index.js').DarkMode
export const DarkMode: DarkMode

/**
 * Drawer component
 *
 * @param _props - Record<string, any>
 * @param _props.class - Optional CSS class names
 * @param _props.title - Drawer title (required)
 * @param _props.triggerId - ID of the trigger element (required)
 * @param _props.position - Edge the drawer slides in from ('right' | 'left' | 'top' | 'bottom') - default: 'right'
 * @param _props.closeText - Close button text for screen readers - default: "Close"
 * @param _props.headingSize - Visual size of the heading ('h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6') - default: 'h6'
 * @param _props.showFooter - Whether to render the footer area for extra buttons - default: false
 * @param _props.children - Any HTML elements. Parent element: `<div>`
 * @note Additional HTML attributes can be passed and will be spread to the root element
 * @note Supports a named slot "footer" for footer content (requires showFooter)
 * @note Drawer title uses semantic h2 level with customizable visual appearance (headingSize)
 * @note Built on `<dialog>` with focus trapping, backdrop click and Escape to close
 * @note Exposes `window.closeDrawer` to close a drawer programmatically
 */
type Drawer = typeof import('../../index.js').Drawer
export const Drawer: Drawer

/**
 * Fieldset component
 *
 * @param _props - Record<string, any>
 * @param _props.name - Name attribute for the fieldset (used for group validation) - required
 * @param _props.id - Unique identifier for the fieldset
 * @param _props.legend - Legend text for the fieldset (required)
 * @param _props.required - Whether the fieldset group is required (at least one selection) - default: false
 * @param _props.requiredText - Text displayed next to required fieldset legends - default: '(required)'
 * @param _props.requiredValidationMessage - Default validation message for required fieldsets - default: 'Please select at least one option'
 * @param _props.data-validation - Error message to display when group validation fails
 * @param _props.class - Optional CSS class names
 * @param _props.variant - Variant of the fieldset ('default' | 'minimal') - default: 'default'
 * @param _props.children - Form controls to group together. Parent element: `<fieldset>`
 * @note Additional HTML attributes can be passed and will be spread to the root element
 * @note Provides group-level validation for checkbox and radio button groups
 * @note Automatically generates validation messages if not provided
 */
type Fieldset = typeof import('../../index.js').Fieldset
export const Fieldset: Fieldset

/**
 * Form component
 *
 * @param _props - Record<string, any>
 * @param _props.class - Optional CSS class names
 * @param _props.action - Form action URL
 * @param _props.name - Form name attribute
 * @param _props.method - HTTP method for form submission ('get' | 'post') - default: 'post'
 * @param _props.enctype - Encoding type for form data ('application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain') - default: 'application/x-www-form-urlencoded'
 * @param _props.target - Target for form submission ('_self' | '_blank' | '_parent' | '_top') - default: '_self'
 * @param _props.autocomplete - Autocomplete behavior ('on' | 'off') - default: 'on'
 * @param _props.errorSummaryMessage - Error summary message displayed when form validation fails
 * @param _props.defaultFieldValidationMessage - Fallback validation message for invalid fields without a custom data-validation value
 * @param _props.defaultFieldsetValidationMessage - Fallback validation message for invalid fieldsets without a custom data-validation value
 * @param _props.children - Form controls and content. Parent element: `<form>`
 * @note Additional HTML attributes can be passed and will be spread to the root element
 * @note Includes built-in progressive enhancement validation with error handling
 * @note Features accessibility-first error summary and inline validation messages
 * @note Supports custom validation patterns and functions
 */
type Form = typeof import('../../index.js').Form
export const Form: Form

/**
 * Heading component
 *
 * @param _props - Record<string, any>
 * @param _props.class - Optional CSS class names
 * @param _props.level - The tag name of the heading ('h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6') - default: 'h2'
 * @param _props.size - The size of the heading ('h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6') - default: same as level
 * @param _props.children - Text content or any legal heading innerHTML. Parent element: `<h1>` to `<h6>`
 * @note Additional HTML attributes can be passed and will be spread to the root element
 * @note The component supports independent control of semantic level (level) and visual appearance (size)
 */
type Heading = typeof import('../../index.js').Heading
export const Heading: Heading

/**
 * HighContrast toggle component
 * - Toggles class `high-contrast` on `document.documentElement`
 *
 * @param _props - Props object
 * @param _props.label - Optional: Accessible label for the toggle button - default: 'Toggle High Contrast'
 * @param _props.class - Optional CSS class names
 * @param _props.children - Optional: Custom elements for on/off icons using named slots
 * @note Supports named slots: "off" for normal mode icon and "on" for high contrast mode icon
 * @note Additional HTML attributes can be passed and will be spread to the root element
 * @note Includes global styles that enhance focus indicators and link visibility
 */
type HighContrast = typeof import('../../index.js').HighContrast
export const HighContrast: HighContrast

/**
 * Input component
 *
 * @param _props - Record<string, any>
 * @param _props.class - Optional CSS class names
 * @param _props.id - Unique identifier for the input field
 * @param _props.name - Name attribute for the input field (required for form submission)
 * @param _props.label - Label text for the input field (required)
 * @param _props.data-validation - Optional custom error message to override automatically generated validation messages
 * @param _props.type - Input type determining built-in validation rules ('text' | 'email' | 'password' | 'tel' | 'url') - default: 'text'
 * @param _props.required - Whether the field is required - default: false
 * @param _props.requiredText - Text displayed next to required field labels - default: '(required)'
 * @param _props.requiredValidationMessage - Default validation message for required text fields - default: 'This field is required'
 * @param _props.emailValidationMessage - Default validation message for email fields
 * @param _props.telValidationMessage - Default validation message for telephone fields
 * @param _props.passwordValidationMessage - Default validation message for password fields
 * @param _props.urlValidationMessage - Default validation message for URL fields
 * @param _props.data-validation-pattern - Custom validation pattern (regex)
 * @param _props.data-validation-fn - Custom validation function name (must be available on window)
 * @param _props.value - Default value for the input field
 * @param _props.disabled - Whether the field is disabled - default: false
 * @param _props.readonly - Whether the field is readonly - default: false
 * @param _props.autocomplete - Autocomplete attribute value - default: 'on'
 * @param _props.children - Not applicable for input components
 * @note Additional HTML attributes can be passed and will be spread to the root element
 * @note Progressive enhancement with built-in validation and accessibility features
 * @note Automatically generates validation messages based on input type; use data-validation to provide custom messages
 * @note Supports custom validation patterns and functions
 */
type Input = typeof import('../../index.js').Input
export const Input: Input

/**
 * Link component
 *
 * @param _props - Record<string, any>
 * @param _props.class - Optional CSS class names
 * @param _props.href - The URL to link to (required)
 * @param _props.isExternal - Whether the link is external - default: false (auto-detected for http/https URLs)
 * @param _props.isButton - Style the link as a button - default: false
 * @param _props.variant - The variant of the link when styled as button ('filled' | 'outlined') - default: 'filled'
 * @param _props.type - Type of the link when styled as button affecting color scheme ('default' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | 'ghost') - default: 'default'
 * @param _props.size - Button size when styled as button ('sm' | 'md' | 'lg') - default: 'md'
 * @param _props.ariaLabel - The aria-label attribute
 * @param _props.title - The title attribute
 * @param _props.rel - Additional rel tokens to merge with security defaults (external links always include "noopener noreferrer")
 * @param _props.animateOnHover - Whether to animate the icon on hover (only when isButton is true) - default: false
 * @param _props.animationType - Type of animation to apply on hover when isButton is true ('rotate' | 'boop' | 'bouncing' | 'nudge' | 'none') - default: 'boop'
 * @param _props.animationIntensity - Animation intensity (1-10) - default: 5
 * @param _props.pulse - Whether to apply a pulsating animation to draw attention (pulses 3 times) - default: false
 * @param _props.children - Text content or any legal anchor innerHTML. Parent element: `<a>`
 * @note External links automatically display an icon and screen reader text "Opens in a new tab"
 * @note Supports custom external link icons via the "icon" named slot
 * @note Additional HTML attributes can be passed and will be spread to the root element
 */
type Link = typeof import('../../index.js').Link
export const Link: Link

/**
 * Media component
 *
 * @param _props - Record<string, any>
 * @param _props.class - String of one or more CSS class names
 * @param _props.src - `<img src={src}>` - default: placeholder
 * @param _props.alt - `<img alt={alt}>` required for non-decorative images
 * @param _props.ratio - Aspect ratio of the media ('1:1' | '4:3' | '16:9' | '21:9' | 'auto') - default: 'auto'
 * @param _props.loading - Image loading strategy ('lazy' | 'eager') - default: 'lazy'
 * @param _props.decoding - Image decoding strategy ('async' | 'sync' | 'auto') - default: 'async'
 * @param _props.fetchpriority - Optional: fetch priority ('high' | 'low' | 'auto') - default: 'auto'
 * @note Additional HTML attributes can be passed and will be spread to the root element
 */
export type Media = typeof import('../../index.js').Media
export const Media: Media

/**
 * Modal component
 *
 * @param _props - Record<string, any>
 * @param _props.class - Optional CSS class names
 * @param _props.title - Modal title (required)
 * @param _props.triggerId - ID of the trigger element (required)
 * @param _props.closeText - Close button text - default: "Close"
 * @param _props.closeIcon - Whether to show close icon - default: true
 * @param _props.headingSize - Visual size of the heading ('h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6') - default: 'h4'
 * @param _props.children - Any HTML elements. Parent element: `<div>`
 * @note Additional HTML attributes can be passed and will be spread to the root element
 * @note Modal title uses semantic h3 level with customizable visual appearance (headingSize)
 * @note Features full accessibility with focus management and keyboard interactions
 */
type Modal = typeof import('../../index.js').Modal
export const Modal: Modal

/**
 * Notification component
 *
 * @param _props - Record<string, any>
 * @param _props.type - Specifies background color: 'info' | 'success' | 'warning' | 'error' | 'default' - default: 'default'
 * @param _props.element - Semantic element to use: 'div' | 'aside' - default: 'div'
 * @param _props.role - Type of aria role: 'none' | 'alert' | 'log' | 'marquee' | 'status' | 'timer' | 'region' - default: 'none'
 * @param _props.message - Optional text message
 * @param _props.class - Optional CSS class names
 * @param _props.children - Any HTML elements. Parent element: `<div>` or `<aside>` based on element prop
 * @note Use 'div' for system feedback, 'aside' for educational/supplementary content
 * @note 'status' role implies aria-live="polite", 'alert' role implies aria-live="assertive"
 * @note Additional HTML attributes can be passed and will be spread to the root element
 */
type Notification = typeof import('../../index.js').Notification
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
 * @param _props.renderProgress - Function rendering the progress. Defaults to the string "Page {currentPage} of {totalPages}"
 * @param _props.ariaLabel - Accessible label for the navigation - default: 'Pagination'
 * @param _props.firstPageLabel - Accessible label for the first page button - default: 'Go to the first page'
 * @param _props.previousPageLabel - Accessible label for the previous page button - default: 'Go to the previous page'
 * @param _props.nextPageLabel - Accessible label for the next page button - default: 'Go to the next page'
 * @param _props.lastPageLabel - Accessible label for the last page button - default: 'Go to the last page'
 * @param _props.renderPageLabel - Function to generate aria-labels for page links. Takes type ('first' | 'previous' | 'next' | 'last') and page number
 * @param _props.class - Optional CSS class names
 * @note Additional HTML attributes can be passed and will be spread to the root element
 */
type Pagination = typeof import('../../index.js').Pagination
export const Pagination: Pagination

/**
 * Radio component
 *
 * @param _props - Record<string, any>
 * @param _props.class - Optional CSS class names
 * @param _props.id - Unique identifier for the radio button field
 * @param _props.name - Name attribute for the radio button field (shared within group) - required
 * @param _props.label - Label text for the radio button field (required)
 * @param _props.value - Value attribute for the radio button (required for radio groups)
 * @param _props.checked - Whether the radio button is checked by default - default: false
 * @param _props.disabled - Whether the field is disabled - default: false
 * @param _props.children - Not applicable for radio components
 * @note Additional HTML attributes can be passed and will be spread to the root element
 * @note Uses grid layout with proper label association for accessibility
 * @note Radio buttons with the same name attribute form a group
 */
type Radio = typeof import('../../index.js').Radio
export const Radio: Radio

/**
 * RangeSlider component
 *
 * @param _props - Record<string, any>
 * @param _props.class - Optional CSS class names
 * @param _props.id - Unique identifier, used as the base for every generated id
 * @param _props.name - Name attribute for form submission - required
 * @param _props.label - Visible label for the single-thumb slider (required unless multiThumb)
 * @param _props.legend - Visible group label for the multi-thumb slider (required when multiThumb)
 * @param _props.multiThumb - Render two coupled thumbs for a minimum/maximum pair - default: false
 * @param _props.min - Lowest selectable value - default: 0
 * @param _props.max - Highest selectable value - default: 100
 * @param _props.step - Granularity of the value - default: 1
 * @param _props.value - Initial value in single-thumb mode - default: min
 * @param _props.valueMin - Initial lower value in multi-thumb mode - default: min
 * @param _props.valueMax - Initial upper value in multi-thumb mode - default: max
 * @param _props.nameMin - Name of the lower input in multi-thumb mode - default: `${name}-min`
 * @param _props.nameMax - Name of the upper input in multi-thumb mode - default: `${name}-max`
 * @param _props.labelMin - Label for the lower value in multi-thumb mode - default: "From"
 * @param _props.labelMax - Label for the upper value in multi-thumb mode - default: "To"
 * @param _props.minGap - Smallest allowed distance between the two thumbs - default: 0
 * @param _props.showNumberInput - Render number inputs for precise typed entry - default: true
 * @param _props.valueFormat - "number" | "currency" | "percent" - default: "number"
 * @param _props.currency - ISO 4217 currency code used when valueFormat is "currency" - default: "EUR"
 * @param _props.locale - BCP 47 locale used for formatting - default: "en-US"
 * @param _props.disabled - Whether the control is disabled - default: false
 * @param _props.children - Not applicable for range slider components
 * @note Additional HTML attributes can be passed and will be spread to the root element
 * @note Built on native input[type="range"], so arrows, Home/End and Page Up/Down work without JavaScript
 * @note Number inputs are rendered by default so a precise value can be typed rather than dragged
 * @note Formatted values are announced through aria-valuetext rather than a live region
 */
type RangeSlider = typeof import('../../index.js').RangeSlider
export const RangeSlider: RangeSlider

/**
 * ReducedMotion toggle component
 * - Toggles class `reduce-motion` on `document.documentElement`
 * - Respects system preference by default
 *
 * @param _props - Props object
 * @param _props.initialMode - Optional: Sets initial mode ('on' | 'off' | 'auto') - default: 'auto'
 * @param _props.label - Optional: Accessible label for the toggle button - default: 'Toggle Reduced Motion'
 * @param _props.class - Optional CSS class names
 * @param _props.children - Optional: Custom elements for on/off icons using named slots
 * @note Supports named slots: "off" for motion enabled icon and "on" for reduced motion icon
 * @note Additional HTML attributes can be passed and will be spread to the root element
 * @note Includes global styles that disable animations and transitions when active
 * @note When initialMode is 'auto', respects the user's prefers-reduced-motion system preference
 */
type ReducedMotion = typeof import('../../index.js').ReducedMotion
export const ReducedMotion: ReducedMotion

/**
 * Skip link component
 * - Expects either `#id=#main-content` or`<h1>` to be in document
 *
 * @param _props - Record<string, any>
 * @param _props.class - Optional CSS class names
 * @note Additional HTML attributes can be passed and will be spread to the root element
 */
type SkipLink = typeof import('../../index.js').SkipLink
export const SkipLink: SkipLink

/**
 * Switch component
 *
 * @param _props - Record<string, any>
 * @param _props.class - Optional CSS class names
 * @param _props.id - Unique identifier for the switch field
 * @param _props.name - Name attribute for the switch field (required for form submission)
 * @param _props.label - Label text for the switch field (required)
 * @param _props.value - Value attribute submitted when the switch is on - default: "on"
 * @param _props.checked - Whether the switch is on by default - default: false
 * @param _props.disabled - Whether the field is disabled - default: false
 * @param _props.children - Not applicable for switch components
 * @note Additional HTML attributes can be passed and will be spread to the root element
 * @note Built on a native checkbox with role="switch" - form-submittable and keyboard-operable without JS
 * @note Screen readers announce the on/off state; thumb position (not just color) conveys state
 */
type Switch = typeof import('../../index.js').Switch
export const Switch: Switch

/**
 * Tabs parent component
 *
 * @param _props - Record<string, any>
 * @param _props.class - Optional CSS class names
 * @param _props.children -
 *  - Expects TabsList and TabsPanel components. Parent element: `<div>`
 *  - WARNING: Astro cannot currently enforce the type of children in a `<slot>`
 * @note Additional HTML attributes can be passed and will be spread to the root element
 */
type Tabs = typeof import('../../index.js').Tabs
export const Tabs: Tabs

/**
 * TabsList component
 *
 * @param _props - Record<string, any>
 * @param _props.class - Optional CSS class names
 * @param _props.children -
 *  - Expects TabsTab components. Parent element: `<div role="tablist">`
 *  - WARNING: Astro cannot currently enforce the type of children in a `<slot>`
 * @note Additional HTML attributes can be passed and will be spread to the root element
 */
type TabsList = typeof import('../../index.js').TabsList
export const TabsList: TabsList

/**
 * TabsPanel component
 *
 * @param _props - Record<string, any>
 * @param _props.id - Unique identifier for the panel
 * @param _props.labelledby - ID of the tab that labels this panel
 * @param _props.selected - Boolean indicating if this panel is selected
 * @param _props.class - Optional CSS class names
 * @param _props.children - Panel content
 * @note Additional HTML attributes can be passed and will be spread to the root element
 */
type TabsPanel = typeof import('../../index.js').TabsPanel
export const TabsPanel: TabsPanel

/**
 * TabsTab component
 *
 * @param _props - Record<string, any>
 * @param _props.id - Unique identifier for the tab
 * @param _props.controls - ID of the panel this tab controls
 * @param _props.selected - Boolean indicating if this tab is selected
 * @param _props.class - Optional CSS class names
 * @param _props.children - Tab label content
 * @note Additional HTML attributes can be passed and will be spread to the root element
 */
type TabsTab = typeof import('../../index.js').TabsTab
export const TabsTab: TabsTab

/**
 * Textarea component
 *
 * @param _props - Record<string, any>
 * @param _props.class - Optional CSS class names
 * @param _props.id - Unique identifier for the textarea field
 * @param _props.name - Name attribute for the textarea field (required for form submission)
 * @param _props.label - Label text for the textarea field (required)
 * @param _props.data-validation - Error message to display when validation fails
 * @param _props.required - Whether the field is required - default: false
 * @param _props.requiredText - Text displayed next to required field labels - default: '(required)'
 * @param _props.requiredValidationMessage - Default validation message for required textareas - default: 'This field is required'
 * @param _props.data-validation-pattern - Custom validation pattern (regex)
 * @param _props.data-validation-fn - Custom validation function name (must be available on window)
 * @param _props.disabled - Whether the field is disabled - default: false
 * @param _props.readonly - Whether the field is readonly - default: false
 * @param _props.autocomplete - Autocomplete attribute value - default: 'on'
 * @param _props.rows - Number of visible text lines
 * @param _props.cols - Number of visible text columns
 * @param _props.placeholder - Placeholder text
 * @param _props.children - Not applicable for textarea components
 * @note Additional HTML attributes can be passed and will be spread to the root element
 * @note Progressive enhancement with built-in validation and accessibility features
 * @note Automatically generates validation messages if not provided
 * @note Features vertical resize and minimum height styling
 */
type Textarea = typeof import('../../index.js').Textarea
export const Textarea: Textarea

/**
 * Toast component
 *
 * @param _props - Record<string, any>
 * @param _props.class - Optional CSS class names
 * @param _props.id - Optional id for the toast
 * @param _props.message - Toast message content - default: 'Notification'
 * @param _props.type - Type of toast ('info' | 'success' | 'warning' | 'error' | 'default') - default: 'default'
 * @param _props.dismissible - Whether the toast is dismissible - default: true
 * @param _props.dismissLabel - Accessible label for the dismiss button - default: 'Dismiss notification'
 * @note Additional HTML attributes can be passed and will be spread to the root element
 */
type Toast = typeof import('../../index.js').Toast
export const Toast: Toast

/**
 * ToastProvider component
 *
 * @param _props - Record<string, any>
 * @param _props.class - Optional CSS class names
 * @param _props.position - Toast position in the viewport ('bottom-right' | 'bottom-left' | 'bottom-center' | 'top-right' | 'top-left' | 'top-center') - default: 'bottom-right'
 * @param _props.duration - Default duration before auto-dismiss in milliseconds - default: 5000
 * @param _props.maxToasts - Maximum number of toasts to display - default: 5
 * @param _props.ariaLabel - Accessible label for the toast region - default: 'Notifications'
 * @param _props.zIndex - CSS z-index value applied through `--toast-z-index` - default: 'var(--z-index-8, 80)'
 * @param _props.portal - Move the provider to document.body on initialization to escape ancestor stacking contexts - default: false
 * @param _props.style - Inline styles appended after the computed `zIndex` style. Avoid declaring `--toast-z-index` here unless intentionally overriding `zIndex`
 * @note Additional HTML attributes can be passed and will be spread to the root element
 * @note Exposes `window.toast` API with `show`, typed shortcut helpers, `dismiss`, and `dismissAll`
 * @note Dispatches `toast:show` and `toast:dismiss` CustomEvents on `document`
 */
type ToastProvider = typeof import('../../index.js').ToastProvider
export const ToastProvider: ToastProvider

/**
 * Tooltip component
 *
 * @param _props - Record<string, any>
 * @param _props.id - Unique ID for the tooltip (required)
 * @param _props.position - Preferred tooltip position ('top' | 'bottom' | 'left' | 'right') - default: 'top'
 * @param _props.offset - Offset distance from anchor - default: 'var(--space-2xs)'
 * @param _props.triggerLabel - Screen reader label for icon-only triggers
 * @param _props.showIcon - Whether to show the default help icon - default: true
 * @param _props.class - Optional CSS class names
 * @param _props.children -
 *  - Default slot: trigger content
 *  - Named slot "tooltip": tooltip content
 * @note Additional HTML attributes can be passed and will be spread to the wrapper element
 * @note Uses Popover API with CSS Anchor Positioning
 */
type Tooltip = typeof import('../../index.js').Tooltip
export const Tooltip: Tooltip

/**
 * Video component
 *
 * @param _props - Record<string, any>
 * @param _props.src - URL of the video (YouTube or direct embed)
 * @param _props.title - Accessible title for the video - default: 'YouTube video player'
 * @param _props.ratio - Aspect ratio of the video ('1:1' | '4:3' | '16:9' | '21:9') - default: '16:9'
 * @param _props.loading - Iframe loading strategy ('lazy' | 'eager') - default: 'lazy'
 * @param _props.class - Optional CSS class names
 * @note Additional HTML attributes can be passed and will be spread to the root element
 */
type Video = typeof import('../../index.js').Video
export const Video: Video
