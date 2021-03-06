import React from 'react';
import EditableTimer from './../EditableTimer/EditableTimer';

class EditableTimerList extends React.Component {
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
					deleteTimer={this.props.deleteTimer}
					updateTimer={this.props.updateTimer}
				/>
			);
		});

		return <ul className="timers">{timers}</ul>;
	}
}

export default EditableTimerList;
