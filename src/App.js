import React, {Component} from 'react';
import './App.css';
import ImageLoader from './components/imageLoader';
import ImagePanel from './components/imagePanel';

class App extends Component {
	state = {
		base64: 'image',
		imageData: [],
	};

	render() {
		const {base64} = this.state;

		return (
			<div className="App">
				<ImageLoader
					updateState={this.updateState}
				/>
				<ImagePanel
					src={base64}
				/>
			</div>
		);
	}

	updateState = (newState) => {
		this.setState(newState);
	};
}

export default App;
