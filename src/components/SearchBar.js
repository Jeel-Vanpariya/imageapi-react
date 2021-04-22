import React from 'react';

class SearchBar extends React.Component{
    state = { term: '' };

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div>
                    <label className="form-label">Image Search</label>
                        <input type="text"
                            className="form-control bg-dark text-white"
                            value={this.state.term}
                            onChange={(e) => this.setState({ term: e.target.value })} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;