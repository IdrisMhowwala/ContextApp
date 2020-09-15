import React,{createContext,Component} from 'react';

export const ThemeContext=createContext();

class ThemeContextProvider extends Component {
        state = {
            isLightTheme: true,
            light:{text:'#555',ui:"#ddd",bg:'#eee'},
            dark:{text:'#ddd',ui:'#333',bg:'#555'}
        }
    
    toggleTheme=()=>{
        this.setState({
            isLightTheme: !this.state.isLightTheme
            // isLightTheme: !isLightTheme
            });
    }
    render() { 
        return (
            <ThemeContext.Provider value={{...this.state, toggleTheme:this.toggleTheme}}>
                {/* by whatever we create context we can add provider to it here
                value tells the data to be provided */}
                {this.props.children}{/* This will allow the inside component of ThemeContext in app.js to display*/}

            </ThemeContext.Provider>
        );
    }
}
 
export default ThemeContextProvider;