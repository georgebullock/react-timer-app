import React from 'react';
import EditableTimer from './../EditableTimer/EditableTimer';

class EditableTimerList extends React.Component {
	deleteEditableTimer = id => {
		this.props.deleteTimer(id);
	};

	passDataToDashboard = formData => {
		return this.props.updateTimer(formData);
	};

	render() {
		const timers = this.props.timers.map(timer => {
			return (
				<EditableTimer
					key={timer.id}
					id={timer.id}
					title={timer.title}
					project={timer.project}
					elapsed={timer.elapsed}
					runningSince={timer.runningSince}
					deleteTimerFromList={this.deleteEditableTimer}
					passDataToDashboard={this.passDataToDashboard}
				/>
			);
		});

		return <div id="timers">{timers}</div>;
	}
}

export default EditableTimerList;
