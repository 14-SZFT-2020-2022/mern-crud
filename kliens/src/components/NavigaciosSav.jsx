import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    height: 2em;
    background-color: teal;
`;

const NavigaciosSav = () => {
    return (
        <Container>
            <Link style={{ textDecoration: 'none', color: 'white', marginLeft: '20px'}} to='/'>Kiiratas</Link>
            <Link style={{ textDecoration: 'none', color: 'white', marginLeft: '20px'}} to='/feltolt'>Feltöltés</Link>
        </Container>
    )
}

export default NavigaciosSav;