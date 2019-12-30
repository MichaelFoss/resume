let template = `
  <section class="main">
    <header>
      <address>
        {{fullName}}<br />
        {{addressStreet}}<br />
        {{addressCity}}, {{addressState}} {{addressZip}}
      </address>
    </header>

    <main>
      <p class="break-after">{{longDate}}</p>

      <address class="break-after">
        {{companyName}}<br />
        {{companyAddressStreet}}<br />
        {{companyAddressCity}}, {{companyAddressState}} {{companyAddressZip}}
      </address>

      <p class="break-after">Dear {{supervisorName}},</p>

      <p class="break-after">
        Please accept this letter as my formal resignation from {{title}}
        at {{companyName}}, effective {{resignationDate}}.
      </p>

      <p class="break-after">
        During my time at {{companyName}}, I have been fortunate
        for the opportunity to grow and learn more in my field.
        Your guidance and support have prepared me well for the future,
        and I hope that we will have the chance to collaborate again.
      </p>

      <p class="break-after">
        Please let me know how I can be of help during the transition period.
        I wish you and the company the very best going forward.
      </p>

      <p class="break-after">
        Sincerely,
      </p>

      <p class="signature"></p>

      <p>
        {{fullName}}
      </p>
    </main>
  </section>
`;
