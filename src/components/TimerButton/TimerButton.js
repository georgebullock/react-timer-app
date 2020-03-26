import React from 'react';

class TimerButton extends React.Component {
	render() {
		if (this.props.isRunning) {
			return (
				<div
					className="ui bottom attached blue basic button"
					onClick={this.props.onStartClick}
				>
					Start
				</div>
			);
		} else {
			return (
				<div
					className="ui bottom attached red basic button"
					onClick={this.props.onPauseClick}
				>
					Stop
				</div>
			);
		}
	}
}

export default TimerButton;
