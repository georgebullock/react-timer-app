import React from 'react';
import EditableTimer from './../EditableTimer/EditableTimer';

class EditableTimerList extends React.Component {
	deleteEditableTimer = id => {
		this.props.deleteTimer(id);
	};

	passDataToDashboard = formData => {
		return this.props.updateTimer(formData);
	};

	onStartClick = id => {
		this.props.onStartClick(id);
	};

	onPauseClick = id => {
		this.props.onPauseClick(id);
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
					onStartClick={this.props.onStartClick}
					onPauseClick={this.props.onPauseClick}
				/>
			);
		});

		return <ul className="timers">{timers}</ul>;
	}
}

export default EditableTimerList;
