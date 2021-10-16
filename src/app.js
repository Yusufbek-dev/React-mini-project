import { PureComponent } from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import About from './about';
import Products from './products';
import Home from './home'


const navbarStyle = {
    background:'yellow',
    TextDecoder: 'none',
    listStyle:'none',
    padding: '1% 1%',
    fontSize:25
}

class App extends PureComponent {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <ul style ={navbarStyle}>
                        <li>
                            <Link to="/">Main</Link>
                        </li>
                        <li>
                            <Link to="/products">Products</Link>
                        </li>
                        <li>
                            <Link to="/about">About us</Link>
                        </li>
                    </ul>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/products" component={Products} />
                        <Route exact path="/about" component={About} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }

}

export default App;





