import React from 'react';

class TimerForm extends React.Component {
	state = {
		title: this.props.title || '',
		project: this.props.project || ''
	};

	onTitleNameChange = e => {
		this.setState({ title: e.target.value });
	};

	onProjectNameChange = e => {
		this.setState({ project: e.target.value });
	};

	onFormSubmitClick = () => {
		if (this.props.id) {
			this.props.updateTimer({
				id: this.props.id,
				title: this.state.title,
				project: this.state.project
			});
		} else {
			this.props.createTimer({
				title: this.state.title,
				project: this.state.project
			});
		}

		this.props.handleFormClose();
	};

	onFormCloseClick = () => {
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

export default TimerForm;
