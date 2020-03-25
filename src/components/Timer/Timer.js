import React from 'react';
import { helpers } from '../../helpers/helpers';

class Timer extends React.Component {
	// This method is not here in example. Understand why and refactor if you agree with author.
	onFormEdit = () => {
		console.log('1: onFormEdit');
		this.props.initiateUpdateTimer();
	};

	onFormDelete = () => {
		console.log('1: onFormDelete');
		this.props.initiateDeleteTimer();
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
				<div className="ui bottom attached blue basic button">Start</div>
			</div>
		);
	}
}

export default Timer;
