class SlotMachine extends React.Component{
    render(){
        const output = (this.props.f1 === this.props.f2) && (this.props.f2 === this.props.f3)
        return (
            <div className="App">
                <p>{this.props.f1} {this.props.f2} {this.props.f3}</p>
                <p>{output ? 'You win!' : 'You lose'}</p>
            </div>
        );
    } 
}
