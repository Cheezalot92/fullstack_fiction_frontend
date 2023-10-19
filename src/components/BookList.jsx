import {useState, useEffect} from 'react'

export const BookList = () => {
    const [bookList, setBookList] = useState([]);


    useEffect(() => {
        const url = 'http://127.0.0.1:8000/books/'
        const getList = async() => {
            const data = await fetch(url).then(response => response.json());
            console.log('hello', data);
            setBookList(data);
        };
        getList();
    }, []);


    return (
        <>
        <ul>
            {bookList?.map((books, index) => {
                return <li key = {index}>{books.title} - {books.author} - {books.description}</li>
            })}
        </ul>
        </>
    );
};