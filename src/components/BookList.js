import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

class BookList extends Component {
    render() {
        return (
            <AuthContext.Consumer>{(authcontext)=>(
                <ThemeContext.Consumer>{(themecontext) =>{
                    const {isAuthenticated,toggleAuth}=authcontext;
                    const { isLightTheme, light, dark } = themecontext; //this is destructuring
                    const theme = isLightTheme ? light : dark;
                        return(
                        <div style={{ background: theme.bg, color: theme.text }}>
                            <div className="btn btn-secondary" onClick={toggleAuth}>
                            {isAuthenticated?"Logged In":"Logged Out"}
                            </div>
                            <ul className="list-group border border-dark p-5">
                                <li className="list-group-item mb-2" style={{ background: theme.ui }}>Harry Potter</li>
                                <li className="list-group-item mb-2" style={{ background: theme.ui }}>Lord of Rings</li>
                                <li className="list-group-item mb-2" style={{ background: theme.ui }}>Hunger Games</li>
                            </ul>
                        </div>
                        ) 
                    }
                }     
                </ThemeContext.Consumer>
            )}
            </AuthContext.Consumer>
        );
    }
}

export default BookList;