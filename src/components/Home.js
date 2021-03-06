import React from 'react';
import PropTypes from 'prop-types';

export class Home extends React.Component {
    constructor(props) {
        super();
        this.state = { 
            age: props.initialAge,
            status: 0,
            homeLink: props.initialLinkName
        };
        setTimeout(() => {
            this.setState({
                status: 1
            });
        },3000);
        console.log("Constructor");
    }
    
    componentWillMount() {
        console.log("Component will mount");
    }
    
    componentDidMount() {
        console.log("Component did mount");
    }
    
    componentWillReceiveProps(nextProps){
        console.log("Component will receive props", nextProps);
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        console.log("Should Component update", nextProps, nextState);
        //if (nextState.status === 1) {
        //    return false;
        //}
        return true;
    }
    
    componentWillUpdate(nextProps, nextState) {
        console.log("Component will update", nextProps, nextState);
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log("Component did update", prevProps, prevState);
    }
    
    componentWillUnMount() {
        console.log("Component will unmount");
    }
    
    onMakeOlder(){
        this.setState({ 
            age: this.state.age + 3
        });
    }
    
    onChangeLink() {
        this.props.changeLink(this.state.homeLink);
    }
    
    onHandleChange(event) {
        this.setState({
            homeLink: event.target.value
        });
    }
    render() {
        return (
            <div>
                <p>I'm in a component</p>
                <p>Your name is {this.props.name}, your age is {this.state.age}</p>
                <p>Status: {this.state.status}</p>
                <hr/>
                <button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Make me Older!</button>
                <hr/>
                <button onClick={this.props.greet} className="btn btn-warning">Greeting</button>
                <hr/>
                <input type="text" value={this.state.homeLink} 
                       onChange={(event) => this.onHandleChange(event)} />
                <button onClick={this.onChangeLink.bind(this)} className="btn btn-success">Change Header Link</button>
            </div>
        );
    }
}

Home.propTypes = {
    name: PropTypes.string,
    initialAge: PropTypes.number,
    greet: PropTypes.func,
    initialLinkName: PropTypes.string
};
