import React from 'react';

class ErrorBoundary extends React.Component{

	constructor(props){
	
		super(props);

		this.state = {
			hasError : false
		}

	}


	componentDidCatch(error, info){

		this.setState( {hasError:true} );
	}

	render(){

		if(this.state.hasError === true){

			return <h1 className = 'f1'>Sorry for inconvenience</h1>

		}
		else{
			return this.props.children;
		}

	}
}

export default ErrorBoundary;