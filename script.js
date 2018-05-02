const init = () => {
	const jobTemplate = document.querySelector('#job-template').text;
	const accomplishmentTemplate = document.querySelector('#job-accomplishment-template').text;
	const $jobs = document.querySelector('#jobs');
	data.jobs.forEach(job => {
		const accomplishments = [];

		job.accomplishments.forEach(accomplishment => {
			accomplishments.push(
				accomplishmentTemplate
					.replace(/\{accomplishment\}/, accomplishment)
			);
		});

		const jobHTML = jobTemplate
			.replace(/\{title\}/, job.title)
			.replace(/\{company\}/, job.company)
			.replace(/\{startDate\}/, job.startDate)
			.replace(/\{endDate\}/, job.endDate)
			.replace(/\{location\}/, job.location)
			.replace(/\{skills\}/, job.skills.join(', '))
			.replace(/\{accomplishments\}/, accomplishments.join(''));

		$jobs.innerHTML += jobHTML;
	});
};

window.addEventListener('load', init);
