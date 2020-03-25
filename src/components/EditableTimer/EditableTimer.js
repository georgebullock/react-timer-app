import React from 'react';
import TimerForm from './../TimerForm/TimerForm';
import Timer from './../Timer/Timer';

class EditableTimer extends React.Component {
	state = {
		editFormOpen: false
	};

	// Create reusable open AND close forms. Rename data for readability.

	openUpdateTimerForm = () => {
		console.log('2: openUpdateTimerForm');
		this.setState({ editFormOpen: true });
	};

	handleDeleteTimer = () => {
		console.log('2: handleDeleteTimer');
		this.props.deleteTimerFromList(this.props.id);
	};

	handleFormClose = () => {
		console.log('2: handleFormClose');
		this.closeForm();
	};

	closeForm = () => {
		console.log('3: closeForm');
		this.setState({ editFormOpen: false });
	};

	handleFormData = formData => {
		console.log('2: updateForm', formData);
		return this.props.passDataToDashboard(formData);
	};

	render() {
		if (this.state.editFormOpen) {
			return (
				<TimerForm
					id={this.props.id}
					title={this.props.title}
					project={this.props.project}
					isOpen={this.state.editFormOpen}
					handleFormSubmit={this.handleFormData}
					handleFormClose={this.closeForm}
				/>
			);
		} else {
			return (
				<Timer
					id={this.props.id}
					title={this.props.title}
					project={this.props.project}
					elapsed={this.props.elapsed}
					runningSince={this.props.runningSince}
					initiateDeleteTimer={this.handleDeleteTimer}
					initiateUpdateTimer={this.openUpdateTimerForm}
				/>
			);
		}
	}
}

export default EditableTimer;
