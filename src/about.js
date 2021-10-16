import React, { PureComponent } from 'react';
class About extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div style={{textAlign:'center'}}>
                <h1>About Us</h1>
                <p style={{fontSize:20}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Ut mollis mollis arcu et scelerisque. Suspendisse nunc ipsum,
                    scelerisque eu lorem at, feugiat vehicula purus.
                    Phasellus tincidunt malesuada aliquam. Praesent metus libero,
                    venenatis aliquet massa at, euismod tincidunt dui.
                </p>
            </div>

        );
    }
}

export default About;