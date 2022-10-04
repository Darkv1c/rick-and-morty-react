import styled from 'styled-components'
import Card from './Card'
import { CardListProps } from './types/CardList'

function CardList({ fields, list, imgProperty, className }: CardListProps) {

    /** Gets the object fields to pass by parameter to the card
    * @param {Object} element the element from where to obtain the info
    */
    function getCardFieldsList(element: { [key: string]: string }) {
        let response: typeof fields = {}

        for (const prop in fields) {
            response[prop] = element[fields[prop]]
        }

        return response
    }

    /** Gets the image url from an object
     * @param {any} element The object with the image
     * @param {string} propertyName The name of the property where is the url
     */
    function getImgUrl(element: { [key: string]: string }, propertyName: string): string {
        return element[propertyName]
    }

    return <Container className={className}>
        {list.map((e, n) => <Card key={'card-' + n} fields={getCardFieldsList(e)} image={getImgUrl(e, imgProperty)} />)}
    </Container>
}

export default CardList

//#region styles
const Container = styled.div`
    display: flex;
    flex-direction: row !important;
    flex-wrap: wrap;
    width: 100%;
    box-sizing: border-box;
    overflow-y: scroll;
    justify-content: center;
 `
//#endregion