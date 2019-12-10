let template = `
    <header>
      <h1>Michael Foss</h1>
      <h2>{{title}}</h2>
    </header>

    <section class="main">
    <main>
      <p class="break-after">{{companyAddressCity}}, {{date}}</p>

      {{person}}

      <p class="break-after">
        {{companyName}}<br />
        {{companyAddressStreet}}<br />
        {{companyAddressCity}}, {{companyAddressState}}  {{companyAddressZip}}
      </p>

      <p class="break-after">{{salutation}}</p>

      <p class="break-after">
        I am excited at the opportunity to work at such a prestigious
        company. I've worked on several projects in the past with
        multi-million dollar international companies, and have been
        successful in leading teams of various sizes through all
        stages of projects. I have worn many hats, including 
        solution architect, team lead, senior developer, project manager,
        and even business analyst. I have over two decades of professional
        experience working with major brand name companies.
      </p>

      <p class="break-after">
        I have many years of proven experience taking start-ups
        to the next level. In my current position, I helped save
        my company's relationship with their number one client,
        and in my long term helped grow the company to three times
        its size. In a previous position, I assisted as the lead
        developer for the eCommerce platform and grew the start-up
        to over twice it's size.
      </p>

      <p class="break-after">
        In my current position at Valtech, I have shifted gears
        from being a OOP PHP solution architect on the back end to a
        lead developer on the front end. My interests and career growth
        have been more focused on ES6, React/React Native, and Node.
        I have also been working extensively with Vue.js, Backbone.js,
        Webpack, Gulp, and Redux.
      </p>

      <p class="break-after">
        My desire is to contribute to a company that has quality and
        attention to detail as core values. I am interested in getting
        things done on-time, but am willing to prepare the timeline
        to include getting them done <em>right</em> - that means
        code quality, code reviews, and thorough testing.
      </p>

      <p class="break-after">
        I would welcome the chance to discuss your development objectives
        and show you how my success at Valtech can translate into
        growth for {{companyName}}.
      </p>

      <p class="break-after">
        Kind regards,<br />
        {{fullName}}
      </p>

      <p>
        P.S. &ndash; If there is any chance of mentoring other employees,
        I would be very interested in hearing about it. I strongly believe
        that teaching is critical in growing a team that not just works
        well but works well together. Feel free to ask me about my
        experiences in the past at Valtech.
      </p>
    </main>

      <section class="personal-info">
        <h3>Personal Info</h3>
        <h4>Address</h4>
        <p>{{addressStreet}}</p>
        <p>{{addressCity}}, {{addressState}}  {{addressZip}}</p>

        <h4>Phone</h4>
        <p>{{phone}}</p>

        <h4>E-mail</h4>
        <p><a href="mailto:{{email}}">{{email}}</a></p>

        <h4>LinkedIn</h4>
        <p><a href="{{linkedIn}}">{{linkedIn}}</a></p>
      </section>
    </section>
`;

