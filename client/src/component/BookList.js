import {gql} from 'apollo-boost';
import {graphql} from '@apollo/react-hoc';
import {getBooksQuery} from '../queries/queries'


function displayBooks(props) {
    var data = props.data;
    if (data.loading) {
        return (<div>Loading books...</div>);
    } else {
        return data.books.map(book => {
            return (
                <li key={book.id}> {book.name} </li>
            );
        });
    }
}

function BookList(props) {
    // console.log(props.data)
    return (
    <div>
        <ul id="book-list"> 
            {displayBooks(props)}
        </ul>
    </div>
    );
}
  
export default graphql(getBooksQuery)(BookList);
  