const init = () => {
	const summaryTemplate = document.querySelector('#summary-template').text;
	const jobTemplate = document.querySelector('#job-template').text;
	const careerGoalTemplate = document.querySelector('#career-goal-template').text;
	const accomplishmentTemplate = document.querySelector('#job-accomplishment-template').text;
	const $jobs = document.querySelector('#jobs');
	const $careerGoals = document.querySelector('#career-goals');
	const $summary = document.querySelector('#summary');

  if (data.hasOwnProperty('summary') && data.summary) {
    $summary.innerHTML = summaryTemplate
      .replace(/\{summary\}/, data.summary);
  }

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
      .replace(/\{id\}/, job.id)
			.replace(/\{classNames\}/, classNames)
			.replace(/\{title\}/, job.title)
			.replace(/\{company\}/, job.company)
			.replace(/\{startDate\}/g, job.startDate)
			.replace(/\{endDate\}/, job.endDate)
			.replace(/\{location\}/, job.location)
			.replace(/\{skills\}/, job.skills.join(', '))
			.replace(/\{accomplishments\}/, accomplishments.join(''));

		$jobs.innerHTML += jobHTML;

    const hasEndDate = job.hasOwnProperty('endDate');
    if (!hasEndDate || hasEndDate && job.startDate === job.endDate) {
      $jobs.querySelector(`#${job.id} .job-date`).classList.remove('hidden');
    }
    else {
      $jobs.querySelector(`#${job.id} .job-dates`).classList.remove('hidden');
    }
	});

	document.querySelector('header > .professional-titles').innerHTML = data.professionalTitles.join(', ');
	document.querySelector('header > .skills').innerHTML = data.skills.join(', ');
	document.querySelector('header > .professional-experience').innerHTML = data.professionalExperience.join(', ');
};

window.addEventListener('load', init);
