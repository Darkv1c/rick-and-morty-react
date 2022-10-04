import { useAppDispatch, RootState } from "store"
import { useSelector} from 'react-redux'
import { getCharacters } from 'actions/character' 
import { useEffect, useState } from "react"
import styled from 'styled-components'
import Navbar from "@/components/Navbar"
import CardList from "@/components/CardList"
import { breakPoints } from 'styles/constants'
import Paginator from "@/components/Paginator"
import { useQuery } from "@/utils"

function Index() {
    const dispatch = useAppDispatch()
    const [list, setList] = useState<{[key: string]: any}[]>([])
    const characters = useSelector((state: RootState) => state.character)
    const query = useQuery()
    const fields = {
		Name: 'name',
		Species: 'species',
		Status: 'status'
	}
    useEffect(() => { 
        loadPage(Number(query.get('page')))
    }, [])
    useEffect(() => { 
        if (characters?.results && (Number(query.get('page') || 1) % 2 == 0)) {
            characters && setList(characters.results.slice(0, 10))
        } else {
            characters && setList(characters.results.slice(10, 20))
        }
    }, [characters])

    function loadPage(page:number) {
        dispatch(getCharacters(Math.ceil((Number(page || 1)/2))))
    }

    return (
        <Container>
            <Navbar title="Rick & Morty" className="index-navbar"/>
            {list && <CardList className="index-card-list" list={list} fields={fields} imgProperty='image'/>}            
		    <Paginator lastIndex={(characters?.info.pages ? characters?.info.pages/2 : 0 )} onClick={loadPage} maxPerView={10} />
        </Container>
    )
}

export default Index

//#region styles
const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: hidden;
	justify-content: space-between;
    .index-card-list{
        margin: auto;
        max-height: 70vh;
        overflow-y: scroll;
    }
    @media screen and (max-width: ${breakPoints.phone}) {
        .index-card-list {
            padding: 0;
            margin: 0;
            max-height: calc(100vh - 60px);
        }
        .index-navbar {
            display: none !important;
        }
    }
`
//#endregion