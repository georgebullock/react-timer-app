import React from 'react';
import EditableTimerList from './../EditableTimerList/EditableTimerList';
import ToggleableTimerForm from './../ToggleableTimerForm/ToggleableTimerForm';
import { v4 as uuidv4 } from 'uuid';
import { helpers } from '../../helpers/helpers';

class TimersDashboard extends React.Component {
	state = {
		timers: [
			{
				id: uuidv4(),
				title: 'Level Up Your React Skills',
				project: 'Get a React job',
				elapsed: 8986300,
				runningSince: Date.now()
			},
			{
				id: uuidv4(),
				title:
					'Learn Data Structures, Algorithms, Design Patterns, and Architecture',
				project: 'Become a senior developer',
				elapsed: 6986300,
				runningSince: Date.now()
			}
		]
	};

	createTimer = newTimerData => {
		const newTimer = helpers.newTimer(newTimerData);

		this.setState({
			timers: this.state.timers.concat(newTimer)
		});
	};

	updateTimer = formData => {
		const state = Object.assign({}, this.state);

		state.timers = state.timers.map(timer => {
			if (timer.id !== formData.id) return timer;
			return (timer = Object.assign({}, timer, formData));
		});

		this.setState(state);
	};

	deleteTimer = id => {
		const state = Object.assign({}, this.state);
		state.timers = state.timers.filter(timer => timer.id !== id);

		this.setState(state);
	};

	render() {
		return (
			<div className="ui two column centered grid">
				<div className="column">
					<EditableTimerList
						timers={this.state.timers}
						deleteTimer={this.deleteTimer}
						updateTimer={this.updateTimer}
					/>
					<ToggleableTimerForm isOpen={false} createTimer={this.createTimer} />
				</div>
			</div>
		);
	}
}

export default TimersDashboard;
