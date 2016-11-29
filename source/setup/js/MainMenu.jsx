'use strict';

const React = require("react");

const {
    Link
} = require("react-router");

class MainMenu extends React.Component {

    render() {
        return <div>
            <ul>
                <li><Link to="/add-archive">Add archive</Link></li>
            </ul>
        </div>
    }

}

module.exports = MainMenu;
