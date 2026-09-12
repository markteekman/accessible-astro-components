import DataTableFixture from '../../fixtures/DataTableFixture.astro'

export default { component: DataTableFixture }

export const Default = { args: {} }
export const LongContent = { args: { sortable: true, search: true, info: true, longContent: true } }
export const CaptionHidden = { args: { captionHidden: true } }
export const WithSearch = { args: { search: true } }
export const WithInfo = { args: { info: true } }
export const Sortable = { args: { sortable: true } }
export const SortableWithSearch = { args: { sortable: true, search: true } }
export const FullFeatures = { args: { sortable: true, search: true, info: true } }
export const Empty = { args: { search: true, info: true, empty: true } }
export const InitialSearch = { args: { search: true, info: true, value: 'Beacon' } }
export const MultipleInstances = {
  args: { sortable: true, search: true, info: true, instances: 2 },
}
export const Paginated = { args: { sortable: true, search: true, info: true, pageSize: 2 } }
export const Reinitialization = {
  args: { sortable: true, search: true, info: true, lifecycle: true },
}
