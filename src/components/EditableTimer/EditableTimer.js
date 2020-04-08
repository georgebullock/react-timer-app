import React from 'react';
import TimerForm from './../TimerForm/TimerForm';
import Timer from './../Timer/Timer';

class EditableTimer extends React.Component {
	state = {
		editFormOpen: false
	};

	openForm = () => {
		this.setState({ editFormOpen: true });
	};

	closeForm = () => {
		this.setState({ editFormOpen: false });
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
						updateTimer={this.props.updateTimer}
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
						deleteTimer={this.props.deleteTimer}
						openForm={this.openForm}
					/>
				</li>
			);
		}
	}
}

export default EditableTimer;
