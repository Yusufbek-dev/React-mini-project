import React, { PureComponent } from 'react';
class Home extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div style={{textAlign:'center'}}>
                <h1 >Home page</h1>
                <p>Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                    Ut mollis mollis arcu et scelerisque.
                    Suspendisse nunc ipsum,
                    scelerisque eu lorem at,
                    feugiat vehicula purus. </p>
            </div>
        );
    }
}

export default Home;