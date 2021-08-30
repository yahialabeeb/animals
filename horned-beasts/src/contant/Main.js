import React from 'react';
import HornedBeasts from './HornedBeasts';
class Main extends React.Component {
    render() {
        return (
            <main>
                <HornedBeasts
                title="UniWhal"
                imgurl= "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" 
                describtion= "A unicorn and a narwhal nuzzling their horns" />
                <HornedBeasts />

                <HornedBeasts
                title="Rhino Family"
                imgurl= "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" 
                describtion= "Mother (or father) rhino with two babies" />
                <HornedBeasts />

                <HornedBeasts
                title="Unicorn Head"
                imgurl= "https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80" 
                describtion= "Someone wearing a creepy unicorn head mask"/>
                <HornedBeasts />

            </main>
        )

    }
}


export default Main;