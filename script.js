const templates = {};

const loadTemplates = () => {
	templates.company = document.querySelector('#company-template').text;
	templates.project = document.querySelector('#project-template').text;
	templates.companyAccomplishment = document.querySelector('#company-accomplishment-template').text;
	templates.projectDetail = document.querySelector('#project-detail-template').text;
};

const renderDates = dates => {
	if (dates.start === dates.end) {
		return dates.start;
	}
	else {
		return `${dates.start}-${dates.end}`;
	}
};

const renderProjectDetail = projectDetail => {
	return templates.projectDetail
		.replace(/\{projectDetail\}/, projectDetail || '');
};

const renderCompanyAccomplishment = companyAccomplishment => {
	return templates.companyAccomplishment
		.replace(/\{companyAccomplishment\}/, companyAccomplishment || '');
};

const renderProject = project => {
	return templates.project
		.replace(/\{classNames\}/, (project.classNames || []).map(className => ` ${className}`))
		.replace(/\{name\}/, project.name || '')
		.replace(/\{role\}/, project.role || '')
		.replace(/\{dates\}/, renderDates(project.dates))
		.replace(/\{skills\}/, (project.skills || []).join(', '))
		.replace(/\{details\}/, project.details.map(renderProjectDetail).join(''));
};

const renderCompany = company => {
	const companyHTML = templates.company
		.replace(/\{classNames\}/, (company.classNames || []).map(className => ` ${className}`))
		.replace(/\{name\}/, company.name || '')
		.replace(/\{company\}/, company.company || '')
		.replace(/\{dates\}/, renderDates(company.dates))
		.replace(/\{location\}/, company.location || '')
		.replace(/\{projects\}/, (company.projects || []).map(renderProject).join(''))
		.replace(/\{companyAccomplishments\}/, (company.accomplishments || []).map(renderCompanyAccomplishment).join(''));

	return companyHTML;
};

const init = () => {
	loadTemplates();
	const $companies = document.querySelector('#companies');

	data.companies.forEach(company => {
		$companies.innerHTML += renderCompany(company);
	});

	document.querySelector(
		'header > .professional-titles',
	).innerHTML = data.professionalTitles.join(', ');
	document.querySelector('header > .skills').innerHTML = data.skills.join(
		', ',
	);
	document.querySelector(
		'header > .professional-experience',
	).innerHTML = data.professionalExperience.join(', ');
};

window.addEventListener('load', init);
