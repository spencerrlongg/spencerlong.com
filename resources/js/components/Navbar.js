import React from 'react'
import { Link } from 'react-router-dom'
import { render } from 'sass'

const Navbar = () =>
    render(
        <header>
            <div>
                <p>spencerlong</p>
            </div>
            <div>
                <button type="button">
                    <svg viewBox="0 0 100 80" width="40" height="40">
                        <rect width="100" height="20"></rect>
                        <rect y="30" width="100" height="20"></rect>
                        <rect y="60" width="100" height="20"></rect>
                    </svg>
                </button>
            </div>
        </header>
    );

export default Navbar;

if (document.getElementById('navbar')) {
    ReactDOM.render(<Navbar />, document.getElementById('navbar'));
}
