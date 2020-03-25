import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { helpers } from './../../helpers/helpers';

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
					<TogglableTimerForm
						isOpen={false}
						onFormSubmit={this.handleCreateTimer}
					/>
				</div>
			</div>
		);
	}
}

class EditableTimerList extends React.Component {
	// This method doesn't have to live here. Think it's in Dashboard in FSR example.
	deleteEditableTimer = id => {
		console.log('deleteEditableTimer: ', id);
		this.props.deleteTimer(id);
	};

	// This method doesn't have to live here. Think it's in Dashboard in FSR example,
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

class TogglableTimerForm extends React.Component {
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

class TimerForm extends React.Component {
	state = {
		title: this.props.title || '',
		project: this.props.project || ''
	};

	// Refactor names for clarity
	onTitleNameChange = e => {
		this.setState({ title: e.target.value });
	};

	// Refactor names for clarity
	onProjectNameChange = e => {
		this.setState({ project: e.target.value });
	};

	onFormSubmitClick = () => {
		this.props.handleFormSubmit({
			id: this.props.id,
			title: this.state.title,
			project: this.state.project
		});
	};

	onFormCloseClick = () => {
		console.log('1: onFormCloseClick');
		this.props.handleFormClose();
	};

	render() {
		const submitText = this.props.id ? 'Update' : 'Create';

		return (
			<div className="ui centered card">
				<div className="content">
					<div className="ui form">
						<div className="field">
							<label htmlFor="">Title</label>
							<input
								type="text"
								onChange={this.onTitleNameChange}
								defaultValue={this.state.title}
							/>
						</div>
						<div className="field">
							<label htmlFor="">Project</label>
							<input
								type="text"
								onChange={this.onProjectNameChange}
								defaultValue={this.state.project}
							/>
						</div>
						<div className="ui two bottom attached buttons">
							<button
								onClick={this.onFormSubmitClick}
								className="ui basic blue button"
							>
								{submitText}
							</button>
							<button
								onClick={this.onFormCloseClick}
								className="ui basic red button"
							>
								Cancel
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default TimersDashboard;
