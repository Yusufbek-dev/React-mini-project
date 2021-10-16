import React, { PureComponent } from 'react';
class SearchBar extends PureComponent {


    handleFilterTextChange = (e) => {
        this.props.onFilterTextChange(e.target.value);
    }
    handleInStockChange = (e) => {
        if (e) {
            this.props.onInStockChange(e.target.checked);
        }
        return
    }
    render() {

        return (
            <div>
                <input type="text" placeholder="Search..." value={this.props.inputText} onChange={this.handleFilterTextChange} />
                <p>
                    <input type="checkbox" id="onlyInStock" name="onlyInStock" value={this.props.inStockOnly} checked={this.props.inStockOnly} onChange={this.handleInStockChange} />
                    <label htmlFor="onlyInStock">Only products available in stock</label>
                </p>
            </div>
        );
    }
}

export default SearchBar;