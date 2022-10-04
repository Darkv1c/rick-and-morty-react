export interface CardProps {
    /** Info to show on the card */
    fields: {[x:string]: string},
    /** Url of the image to show on the card */
    image: String,
    className?: string
}