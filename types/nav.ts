export interface NavItem {
  title: string
  href?: string
  paging?: {
    title: string
    href: string
    description?: string
  } | null
  disabled?: boolean
  external?: boolean
}
