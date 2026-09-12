# Accessible Astro Components

A comprehensive library of accessible, easy-to-use UI components for Astro websites, built with WCAG compliance and inclusive design principles.

## Project Overview

- **Type**: NPM package / component library
- **Published**: https://www.npmjs.com/package/accessible-astro-components
- **Documentation**: https://accessible-astro.incluud.dev/components/overview/
- **Repository**: https://github.com/incluud/accessible-astro-components

Check `package.json` for current version and dependencies.

### Key Characteristics

- **Zero dependencies**: Pure Astro components
- **NPM package**: Consumed by multiple projects (starter, dashboard, docs)
- **Shared styles**: Exports `index.css` with all component styles
- **TypeScript**: Full type definitions in `src/types/index.d.ts`
- **Modern CSS**: Uses logical properties, custom properties, `light-dark()` for theming

## Package Structure

This is an **NPM package** that exports components and styles:

```
src/
├── components/          # All UI components organized by feature
│   ├── accordion/       # Expandable content sections
│   ├── avatar/          # User avatars and avatar groups
│   ├── badge/           # Labels and status indicators
│   ├── forms/           # Complete form component suite
│   ├── tabs/            # Tabbed interface components
│   └── ... (see "Available Components" below)
├── styles/              # Shared CSS exported with the package
│   └── index.css        # Main styles file (imports all component styles)
└── types/
    └── index.d.ts       # TypeScript definitions for all components

index.js                 # Main export file - check here for full component list
```

See `index.js` for the complete, current list of exported components.

## Available Components

Check `index.js` for the current, complete list. Major component categories include:

### Navigation & Structure

- **Accordion** / **AccordionItem**: Expandable sections with keyboard support
- **Breadcrumbs** / **BreadcrumbsItem**: Navigation trail
- **Pagination**: Paginated content navigation
- **SkipLink**: Keyboard navigation aid
- **Tabs** suite: Tabbed interface with proper ARIA support

### Interactive Elements

- **Button**: Accessible button with variants and animations
- **Link**: Link component for internal/external navigation
- **Modal**: Accessible dialog with focus trap
- **Drawer**: Slide-in dialog panel from any screen edge with focus trap
- **Tooltip**: Contextual help using the Popover API and CSS Anchor Positioning

### Preference Toggles

- **DarkMode**: Theme toggle with system preference support
- **HighContrast**: High contrast mode toggle
- **ReducedMotion**: Reduced motion toggle respecting system preferences

### Forms (Complete Suite)

- **Checkbox**: Accessible checkbox with proper labeling
- **Fieldset**: Form field grouping with legend
- **Form**: Form wrapper with validation
- **Input**: Text inputs with validation states
- **Radio**: Radio buttons with proper grouping
- **Switch**: Toggle switch built on a native checkbox with `role="switch"`
- **Textarea**: Multi-line text input

### Content Display

- **Avatar** / **AvatarGroup**: User avatars with images, initials, or icons
- **Badge**: Labels and status indicators with animations
- **Card**: Flexible content container
- **DataTable** suite: Native tables with sorting, debounced search, result announcements, and optional client pagination; render all rows for client operations
- **Heading**: Semantic heading with proper hierarchy
- **Media**: Responsive image component
- **Notification**: Info and alert messages
- **Video**: YouTube embed component

## Dev Environment Setup

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Development workflow**:

   - This is a pure component library (no dev server)
   - Test components in consuming projects (starter, dashboard, docs)
   - Use symlinks for local testing (see below)

3. **Link to consuming projects**:

   ```bash
   # From the components directory
   npm link

   # Then in consuming project (starter/dashboard/docs)
   cd ../accessible-astro-starter
   npm link accessible-astro-components
   ```

4. **Format code**:
   ```bash
   npx prettier --write .
   ```

## Code Style Guidelines

### Component Architecture

- **Single Responsibility**: Each component has one clear purpose
- **Composition**: Components can be nested (e.g., Accordion + AccordionItem)
- **Props**: Use Astro props with TypeScript types
- **Styles**: Component styles in `src/styles/`, imported via `index.css`
- **No Dependencies**: Pure Astro components only

### TypeScript

- Type definitions in `src/types/index.d.ts`
- Export all component prop types
- Use Astro's `Astro.props` typing

### Formatting

- **Prettier** configured with:
  - `prettier-plugin-astro`
  - `prettier-plugin-css-order`
- Run: `npx prettier --write .`

### CSS Guidelines

- **Modern CSS**: Use logical properties (`inline-start`, `block-end`, etc.)
- **Custom Properties**: Use CSS variables for theming
- **Dark Mode**: Use `light-dark()` function for color theming
- **No Frameworks**: Pure CSS, no Tailwind or other frameworks
- **BEM-style**: Use clear class naming conventions
- **Performance**: Keep specificity low, avoid deep nesting

## Accessibility Requirements

All components follow **WCAG 2.2 AA** standards:

### Essential Practices

1. **Semantic HTML**: Use proper elements (`<button>`, `<nav>`, `<dialog>`, etc.)
2. **Keyboard Navigation**: All interactive components are keyboard accessible
3. **Focus Management**: Visible focus indicators, proper focus trapping (modals)
4. **ARIA**: Use ARIA attributes when necessary (roles, states, properties)
5. **Screen Readers**: Provide proper labels and announcements
6. **Color Contrast**: Ensure 4.5:1 contrast minimum
7. **Animations**: Respect `prefers-reduced-motion`

### Component-Specific Guidelines

- **Accordion**: Use proper ARIA states (`aria-expanded`)
- **Modal**: Focus trap, close on Escape, return focus on close
- **Tabs**: Arrow key navigation, proper ARIA roles
- **Forms**: Proper labels, error messages, validation feedback
- **DarkMode**: No flash of unstyled content, respects system preference

## Testing Components

Since this is a library package, testing happens in consuming projects:

1. **Link the package** to a consuming project (see Dev Environment Setup)
2. **Import and use** the component in a test page
3. **Test accessibility**:

   - Keyboard navigation (Tab, Enter, Space, Arrow keys)
   - Screen reader compatibility (VoiceOver, NVDA, JAWS)
   - Color contrast with browser dev tools
   - Focus indicators are visible
   - Check `prefers-reduced-motion` behavior

4. **Visual testing**: Check in consuming project's browser
5. **Live demos**: Test on starter's `/accessible-components` page

## Making Changes to Components

### Adding a New Component

1. Create component directory in `src/components/[component-name]/`
2. Create `ComponentName.astro` file
3. Add component styles to `src/styles/` if needed
4. Export component in `index.js`
5. Add TypeScript types to `src/types/index.d.ts`
6. Update documentation in `accessible-astro-docs`
7. Test in consuming projects

### Modifying Existing Components

1. Edit component file in `src/components/[component-name]/`
2. Update styles in `src/styles/` if needed
3. Update TypeScript types if props changed
4. Test changes in consuming projects (with symlinks for live reload)
5. Update documentation if API changed
6. Check for breaking changes - bump version accordingly

### Versioning

- **Patch** (5.0.x): Bug fixes, no API changes
- **Minor** (5.x.0): New components, backward-compatible changes
- **Major** (x.0.0): Breaking changes to existing components

## Publishing to NPM

1. **Update version** in `package.json` (follow semver)
2. **Test thoroughly** in all consuming projects
3. **Format code**: `npx prettier --write .`
4. **Commit changes**: Follow conventional commits
5. **Publish**:
   ```bash
   npm publish
   ```
6. **Update consuming projects**:
   ```bash
   cd ../accessible-astro-starter
   npm update accessible-astro-components
   ```

## Consuming Projects

This package is used by:

- **accessible-astro-starter**: Primary consumer, extensively uses components throughout
- **accessible-astro-dashboard**: Dashboard-specific implementation
- **accessible-astro-docs**: Documents all components with live examples

Check each project's `package.json` to see which version they're currently using.

### Breaking Changes Impact

When making breaking changes, consider:

1. **All three consuming projects** need to update - test in each one
2. Update documentation with migration guide in the docs project
3. Consider deprecation warnings for one minor version before removal
4. Coordinate version bumps across all projects
5. Follow semantic versioning strictly (major.minor.patch)

## File Structure Conventions

```
src/components/[component-name]/
├── ComponentName.astro        # Main component file
└── SubComponent.astro         # Sub-components if needed (e.g., AccordionItem)
```

**Naming**:

- PascalCase for component files
- kebab-case for component directories
- Match Astro conventions

## Commit Guidelines

Follow conventional commits format:

```
type(scope): subject

[optional body]
```

**Types**: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

**Scopes**: Use component name (e.g., `accordion`, `button`, `forms`)

**Examples**:

- `feat(badge): add pulse animation variant`
- `fix(modal): resolve focus trap issue on mobile`
- `a11y(tabs): improve keyboard navigation`
- `docs(avatar): update API documentation`

## PR Instructions

- **Title format**: `[components] Brief description`
- **Check before submitting**:
  - Run `npx prettier --write .` - code is formatted
  - Test in at least one consuming project
  - Verify keyboard accessibility
  - Check screen reader compatibility
  - Ensure no console errors
  - Verify `prefers-reduced-motion` is respected
  - Confirm color contrast meets WCAG AA
- **Include in PR description**:
  - What changed and why
  - Which components are affected
  - Breaking changes (if any)
  - Accessibility considerations
  - Testing performed in which consuming projects

## Troubleshooting

### Symlink Not Working

1. Verify link: `ls -la ../accessible-astro-starter/node_modules/accessible-astro-components`
2. Check consuming project's `astro.config.mjs` has symlink detection
3. Restart dev server in consuming project
4. Clear cache: `rm -rf node_modules/.astro node_modules/.vite`

### Changes Not Reflecting

1. Consuming projects need symlink detection enabled (check `astro.config.mjs`)
2. Restart dev server in consuming project
3. Hard refresh browser (Cmd+Shift+R / Ctrl+Shift+R)
4. Check console for errors

### Styles Not Loading

1. Styles must be in `src/styles/` and imported in `index.css`
2. Verify `index.js` imports `./src/styles/index.css`
3. Check consuming project imports styles (usually automatic with component import)

## Related Projects

- **[Accessible Astro Starter](https://github.com/incluud/accessible-astro-starter)**: Primary consumer, showcases all components
- **[Accessible Astro Dashboard](https://github.com/incluud/accessible-astro-dashboard)**: Dashboard consumer
- **[Accessible Astro Docs](https://github.com/incluud/accessible-astro-docs)**: Complete documentation

## Resources

- [WCAG 2.2 Guidelines](https://www.w3.org/TR/WCAG22/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [Astro Documentation](https://docs.astro.build/)
- [NPM Package](https://www.npmjs.com/package/accessible-astro-components)
- [Project Roadmap](https://github.com/orgs/incluud/projects/4/views/1)
