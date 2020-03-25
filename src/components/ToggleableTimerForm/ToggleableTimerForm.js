import React from 'react';
import TimerForm from './../TimerForm/TimerForm';

class ToggleableTimerForm extends React.Component {
	state = {
		isOpen: false
	};

	handleFormOpen = () => {
		return this.setState({ isOpen: true });
	};

	handleFormClose = () => {
		return this.setState({ isOpen: false });
	};

	handleFormSubmit = timer => {
		this.props.onFormSubmit(timer);
		this.setState({ isOpen: false });
	};

	render() {
		if (this.state.isOpen) {
			return (
				<TimerForm
					handleFormSubmit={this.handleFormSubmit}
					handleFormClose={this.handleFormClose}
				/>
			);
		} else {
			return (
				<div className="ui basic content center aligned segment">
					<button
						onClick={this.handleFormOpen}
						className="ui basic button icon"
					>
						<i className="plus icon"></i>
					</button>
				</div>
			);
		}
	}
}

export default ToggleableTimerForm;
