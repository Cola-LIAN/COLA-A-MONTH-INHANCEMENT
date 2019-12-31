import React from 'react';

class Component1 extends React.Component{
    constructor(props){
        super(props);
        this.state = ({name: 'Component1', time: 0});
    }

    // componentWillMount(){
    //     this.setState({time:(new Date).getTime()});
    //     console.log(this.state.time); 
    // }

    componentDidMount(){
        this.props.add(this.state.name, ((new Date).getTime() - this.state.time)/1000 +'s');
        console.log(this.state.timeme); 
    }

    render(){
        return(
            <p>
                This is the content of {this.state.name}!
            </p>
        )
    }

}

export default Component1