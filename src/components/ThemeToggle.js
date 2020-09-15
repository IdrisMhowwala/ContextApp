import React, { Component } from 'react';
import {ThemeContext} from '../contexts/ThemeContext'

class ThemeToggle extends Component {
    static contextType=ThemeContext;
    render() {
        const {toggleTheme}=this.context;
        return (
            <div className="btn btn-primary" onClick={toggleTheme}>Toggle Theme
            </div>
        );
    }
}

export default ThemeToggle;