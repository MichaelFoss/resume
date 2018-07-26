const init = () => {
	const jobTemplate = document.querySelector('#job-template').text;
	const careerGoalTemplate = document.querySelector('#career-goal-template').text;
	const accomplishmentTemplate = document.querySelector('#job-accomplishment-template').text;
	const $jobs = document.querySelector('#jobs');
	const $careerGoals = document.querySelector('#career-goals');

	data.jobs.forEach(job => {
		const accomplishments = [];

		job.accomplishments.forEach(accomplishment => {
			accomplishments.push(
				accomplishmentTemplate
					.replace(/\{accomplishment\}/, accomplishment)
			);
		});

		let classNames = '';
		if (job.classNames) {
			if (Array.isArray(job.classNames)) {
				job.classNames = ' ' + job.classNames.join(' ');
			}
			else {
				classNames = ' ' + job.classNames;
			}
		}
		const jobHTML = jobTemplate
			.replace(/\{classNames\}/, classNames)
			.replace(/\{title\}/, job.title)
			.replace(/\{company\}/, job.company)
			.replace(/\{startDate\}/, job.startDate)
			.replace(/\{endDate\}/, job.endDate)
			.replace(/\{location\}/, job.location)
			.replace(/\{skills\}/, job.skills.join(', '))
			.replace(/\{accomplishments\}/, accomplishments.join(''));

		$jobs.innerHTML += jobHTML;
	});

	data.careerGoals.forEach(careerGoal => {
		const careerGoalHTML = careerGoalTemplate
			.replace(/\{careerGoal\}/, careerGoal);
		$careerGoals.innerHTML += careerGoalHTML;
	});

	document.querySelector('header > .professional-titles').innerHTML = data.professionalTitles.join(', ');
	document.querySelector('header > .skills').innerHTML = data.skills.join(', ');
	document.querySelector('header > .professional-experience').innerHTML = data.professionalExperience.join(', ');
};

window.addEventListener('load', init);
