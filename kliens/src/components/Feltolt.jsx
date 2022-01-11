import { useContext, useState } from 'react';
import styled from 'styled-components';
import { BookContext } from '../App';
import Axios from 'axios';

const Urlap = styled.form`

`;

const Feltolt = () => {
    const { bookList, setBookList} = useContext(BookContext);

    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [fileName, setFileName] = useState('');

    const formData = new FormData();

    formData.append('author', author);
    formData.append('title', title);
    formData.append('picture', fileName);

    const feltolt = () => {
        Axios.post('http://localhost:5000/book/tolt', formData)
          .then(setBookList([...bookList, { author, title }])) 
          .catch(error => console.log(error.message));
      };

    return (
        <Urlap onSubmit={ feltolt } encType='multipart/form-data'>
            <input type="text" placeholder='Author...' onChange={(e) => setAuthor(e.target.value)} />
            <input type="text" placeholder='Title...' onChange={(e) => setTitle(e.target.value)} />
            <input type="file" onChange={(e) => setFileName(e.target.files[0])} />
            <button type='submit'>Feltölt</button>
        </Urlap>
    )
}

export default Feltolt;
