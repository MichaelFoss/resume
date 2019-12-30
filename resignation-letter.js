const now = () => {
    const d = new Date();
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();

    if (month.length < 2) {
        month = '0' + month;
    }

    if (day.length < 2) {
        day = '0' + day;
    }

    return [month, day, year].join('-');
};

const getOrdinal = number => {
    switch (number) {
        case 1:
            return 'st';
        case 2:
            return 'nd';
        case 3:
            return 'rd';
        default:
            return 'th';
    }
};

const longNow = () => {
    const d = new Date();
    const dayName = d.toLocaleString('default', { weekday: 'long' });
    const monthName = d.toLocaleString('default', { month: 'long' });
    const day = d.getDate() + getOrdinal(d.getDate());
    const year = d.getFullYear();
    return `${dayName}, ${monthName} ${day}, ${year}`;
};

const onLoad = () => {
    // Closures:
    // {string} template
    // {object} data
    const body = document.querySelector('body');
    Object.keys(data).forEach(key => {
        const re = new RegExp(`{{${key}}}`, 'g');
        template = template.replace(re, data[key]);
    });

    // Dates
    template = template.replace(/\{\{date\}\}/gi, now());
    template = template.replace(/\{\{longDate\}\}/gi, longNow());

    // HR full name & title
    if (data.companyPersonFullName && data.companyPersonTitle) {
        template = template.replace(
            /\{\{person\}\}/gi,
            `
      <h4>${data.companyPersonFullName}</h4>
      <p class="break-after">${data.companyPersonTitle}</p>
`,
        );
    } else {
        template = template.replace(/\{\{person\}\}/gi, '');
    }

    // HR first name
    if (data.companyPersonFirstName) {
        template = template.replace(
            /\{\{salutation\}\}/gi,
            `Dear ${data.companyPersonFirstName},`,
        );
    } else {
        template = template.replace(
            /\{\{salutation\}\}/gi,
            `To Whom It May Concern,`,
        );
    }

    // Final replacement
    body.innerHTML = template;
};

window.addEventListener('load', onLoad);
