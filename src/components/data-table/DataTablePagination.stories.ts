import DataTablePagination from './DataTablePagination.astro'

export default { component: DataTablePagination }

export const RootFirstPage = { args: { baseUrl: '/', currentPage: 1, totalPages: 3 } }
export const RootMiddlePage = { args: { baseUrl: '/', currentPage: 2, totalPages: 3 } }
export const RootLastPage = { args: { baseUrl: '/', currentPage: 3, totalPages: 3 } }
export const NestedBase = { args: { baseUrl: '/users', currentPage: 2, totalPages: 3 } }
export const TrailingSlash = { args: { baseUrl: '/users/', currentPage: 2, totalPages: 3 } }
export const WithoutBase = { args: { currentPage: 2, totalPages: 3 } }
export const ExplicitRoutes = {
  args: {
    baseUrl: '/',
    currentPage: 2,
    totalPages: 3,
    firstPage: '/custom/first',
    previousPage: '/custom/previous',
    nextPage: '/custom/next',
    lastPage: '/custom/last',
  },
}
