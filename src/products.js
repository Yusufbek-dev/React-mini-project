import { PureComponent } from 'react';
import FilterableProductTable from './filterableProductTable';
const API_URL = "http://www.amock.io/api/Yusufbek01/produc";

class Products extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            isLoading: true,
        };
    }
    render() {
        if (this.state.isLoading) {
            return <p>Pease be patient. Date is loading...</p>
        } else {
            return (<FilterableProductTable products={this.state.products} />);
        }
    }

    componentDidMount() {
        fetch(API_URL)
            .then(response => response.json())
            .then(date => {
                let jsonDate = eval("(" + date + ")"); // eslint-disable-line
                this.setState({ products: jsonDate, isLoading: false });
            })
            .catch(error => {
                this.setState({ error, isLoading: false })
            });

    }
}

export default Products;





