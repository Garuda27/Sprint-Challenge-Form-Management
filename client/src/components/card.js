import React from 'react'

class Card extends React.Component {
    constructor() {
        super()

    }
    render() {
        return (<p>{this.props.data.name}</p>)
    }
}

export const add = (a, b) => {
    return (a + b)
}; 

export default Card