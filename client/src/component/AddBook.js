import {gql} from 'apollo-boost';
import {graphql} from '@apollo/react-hoc';
import { render } from 'react-dom';
import {getAuthorsQuery} from '../queries/queries'


function displayAuthors(props){
    var data = props.data;
    if(data.loading){
        return( <option disabled>Loading authors</option> );
    } else {
        return data.authors.map(author => {
            return( <option key={ author.id } value={author.id}>{ author.name }</option> );
        });
    }
}

function AddBook(props) {
    return(
        <form id="add-book">
            <div className="field">
                <label>Book name:</label>
                <input type="text" />
            </div>
            <div className="field">
                <label>Genre:</label>
                <input type="text" />
            </div>
            <div className="field">
                <label>Author:</label>
                <select>
                    <option>Select author</option>
                    { displayAuthors(props) }
                </select>
            </div>
            <button>+</button>

        </form>
    );
}

export default graphql(getAuthorsQuery)(AddBook);