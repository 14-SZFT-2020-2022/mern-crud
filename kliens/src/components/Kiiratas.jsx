import { useContext } from 'react';
import styled from 'styled-components';
import { BookContext } from '../App';

const Container = styled.div`
    font-family: Consolas;
`;

const Lista = styled.ul`
    list-style-type: none;
`;

const ListaElem = styled.li`
    img {
        width: 100px;
    }
`;

const Kiiratas = () => {
    const { bookList } = useContext(BookContext);

    return (
        <Container>
            {bookList.map(book => (
                <Lista key={ book._id }>
                    <ListaElem><img src={`/kepek/${book.picture}`} alt="cica" /></ListaElem>
                    <ListaElem>{ book.author }</ListaElem>
                    <ListaElem>{ book.title }</ListaElem>
                </Lista>
            ))}
        </Container>
    )
}

export default Kiiratas;
