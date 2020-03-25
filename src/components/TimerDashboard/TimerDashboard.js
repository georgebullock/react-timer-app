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

	handleCreateTimer = timer => this.createTimer(timer);

	createTimer = newTimerData => {
		const newTimer = helpers.newTimer(newTimerData);

		// Using concat to modify state is safe because concat does not modify the original array
		this.setState({
			timers: this.state.timers.concat(newTimer)
		});
	};

	// Could refactor to do work directly on a new object that's passed to this.setState
	updateTimer = formData => {
		console.log('updateTimer: ', formData);
		const tempState = Object.assign({}, this.state);

		tempState.timers = tempState.timers.map(timer => {
			if (timer.id !== formData.id) return timer;
			return (timer = Object.assign({}, timer, formData));
		});

		this.setState(tempState);
	};

	// Refactor to do work directly inside a new object that's passed to this.setState
	deleteTimer = id => {
		console.log('deleteTimer: ', id);
		const tempState = Object.assign({}, this.state);
		tempState.timers = tempState.timers.filter(timer => timer.id !== id);

		this.setState(tempState);
	};

	render() {
		return (
			<div className="ui three column centered grid">
				<div className="column">
					<EditableTimerList
						timers={this.state.timers}
						deleteTimer={this.deleteTimer}
						updateTimer={this.updateTimer}
					/>
					<ToggleableTimerForm
						isOpen={false}
						onFormSubmit={this.handleCreateTimer}
					/>
				</div>
			</div>
		);
	}
}

export default TimersDashboard;
