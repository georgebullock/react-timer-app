import React from 'react';
import TimerButton from './../TimerButton/TimerButton';
import { helpers } from '../../helpers/helpers';

class Timer extends React.Component {
	state = {
		showStartButton: false
	};

	onFormEdit = () => {
		this.props.initiateUpdateTimer();
	};

	onFormDelete = () => {
		this.props.initiateDeleteTimer();
	};

	onStartClick = () => {
		this.props.onStartClick();
		this.setState({ showStartButton: false });
	};

	onPauseClick = () => {
		this.props.onPauseClick();
		this.setState({ showStartButton: true });
	};

	render() {
		const elapsedString = helpers.renderElapsedString(this.props.elapsed);

		return (
			<div className="ui centered card">
				<div className="content">
					<div className="header">{this.props.title}</div>
					<div className="meta">{this.props.project}</div>
					<div className="center aligned description">
						<h2>{elapsedString}</h2>
					</div>
					<div className="extra content">
						<span onClick={this.onFormEdit} className="right floated edit icon">
							<i className="edit icon" />
						</span>
						<span
							onClick={this.onFormDelete}
							className="right floated trash icon"
						>
							<i className="trash icon" />
						</span>
					</div>
				</div>
				<TimerButton
					showStartButton={this.state.showStartButton}
					onStartClick={this.onStartClick}
					onPauseClick={this.onPauseClick}
				/>
			</div>
		);
	}
}

export default Timer;
