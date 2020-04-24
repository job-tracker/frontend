import React, { Component } from 'react';

import './JobsiteView.scss';

import JobsiteHeader from '../../components/JobsiteComponents/JobsiteHeader.js';
import BuildingNotesList from '../../components/ListComponents/Notes/BuildingNotesList.js';
import TaskList from '../../components/ListComponents/TaskList/TaskList.js';
import MilestoneTaskList from '../../components/ListComponents/TaskList/MilestoneTaskList.js';

class JobsiteView extends Component {
	render() {
		return (
			<div className="main-jobsite-wrapper">
				<JobsiteHeader />
				<section className="main-note-task-wrapper">
					<div className="top-task-wrapper">
						<div className="notes-wrapper">
							<BuildingNotesList />
						</div>
						<div className="daily-task-wrapper">
							<TaskList />
						</div>
					</div>
					<div className="bot-task-wrapper">
						<MilestoneTaskList />
					</div>
				</section>
			</div>
		);
	}
}

export default JobsiteView;
