export interface PaginatorProps {
    /** Range of visible pages in the paginator */
    maxPerView: number
    /** Last page avaliable */
    lastIndex: number
    /** Action to run on page change */
    onClick: (page:number) => void
}