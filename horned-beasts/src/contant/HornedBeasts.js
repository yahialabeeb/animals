import React from 'react';

class HornedBeasts extends React.Component {
    render() {
        return (
            <div>
                <h2>
                {this.props.title}
                </h2>
                <p>
               {this.props.describtion}
                </p>
                <img src = {this.props.imgurl}  />

            </div>

        )
    }
}


export default HornedBeasts;