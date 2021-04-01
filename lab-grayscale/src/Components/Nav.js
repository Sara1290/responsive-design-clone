import React, { Component } from 'react'



class Nav extends Component {
    constructor(){
        super();

        this.state = {
            menu: "closed"
        }
    }
    
    menu = () => {
        if(this.state.menu === 'closed'){
            this.setState({ menu: "open"})
        } else {
            this.setState({menu : "closed"})
        }
        }
    

    render(){
        return(
            <nav>
                <div className="horizontal-menu">
                    <a>About</a>
                    <a>Projects</a>
                    <a>Contact</a>
                </div>
                <button className='nav-button' onClick={this.menu}>Menu</button>
            <ul className={this.state.menu === 'closed' ? "closed" : "open"} >
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

}


export default Nav