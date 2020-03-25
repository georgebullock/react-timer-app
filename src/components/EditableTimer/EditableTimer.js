import React from 'react';
import TimerForm from './../TimerForm/TimerForm';
import Timer from './../Timer/Timer';

class EditableTimer extends React.Component {
	state = {
		editFormOpen: false
	};

	openUpdateTimerForm = () => {
		this.setState({ editFormOpen: true });
	};

	handleDeleteTimer = () => {
		this.props.deleteTimerFromList(this.props.id);
	};

	handleFormClose = () => {
		this.closeForm();
	};

	closeForm = () => {
		this.setState({ editFormOpen: false });
	};

	handleFormData = formData => {
		return this.props.passDataToDashboard(formData);
	};

	render() {
		if (this.state.editFormOpen) {
			return (
				<li className="timer-form">
					<TimerForm
						id={this.props.id}
						title={this.props.title}
						project={this.props.project}
						isOpen={this.state.editFormOpen}
						handleFormSubmit={this.handleFormData}
						handleFormClose={this.closeForm}
					/>
				</li>
			);
		} else {
			return (
				<li className="timer">
					<Timer
						id={this.props.id}
						title={this.props.title}
						project={this.props.project}
						elapsed={this.props.elapsed}
						runningSince={this.props.runningSince}
						initiateDeleteTimer={this.handleDeleteTimer}
						initiateUpdateTimer={this.openUpdateTimerForm}
					/>
				</li>
			);
		}
	}
}

export default EditableTimer;
