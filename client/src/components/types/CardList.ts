export interface CardListProps {
    /** An Object with the name and value of the fieds, being the property name the name of the field and the value
     * the name of the property from where to take the value of the field
     * @example {Name: 'name', City: 'city', Department: 'state' }
     */
    fields: {[x:string]: string},
     /** An array of 'fields' objects */
    list: {[x:string]: any}[],
    /** The name of the property that contains the url of the image to show in the card */
    imgProperty: string,
    className?: string
}