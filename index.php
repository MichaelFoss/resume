<?php

header('Content-Type: text/html; charset=utf-8');

?><!doctype html>
<html>
<head>
	<title>Résumé</title>
	<style>
		body, div, h1, h2, h3, h4, li, ul {
			margin: 0;
			padding: 0;
		}

		body, html {
			height: 100%;
			font-size: 14px;
		}

		*, :after, :before {
			-webkit-box-sizing: border-box;
			-moz-box-sizing: border-box;
			box-sizing: border-box;
		}

		body {
			background: #f7f7f7;
			color: #333;
			font-family: HelveticaNeue, "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
			font-style: normal;
			cursor: auto;
		}

		.personal-contact,
		.professional-titles,
		.education-detail,
		.job-accomplishment,
		.job-skills,
		.professional-experience,
		.skills {
			color: #666;
			font-family: Georgia, serif;
			font-size: 11px;
		}

		.education-header,
		.employment-history-header,
		.professional-summary-header {
			color: #0098BA;
			font-family: HelveticaNeue-CondensedBold, "Helvetica Neue", Helvetica, sans-serif;
			font-size: 20px;
			text-transform: uppercase;
			margin-top: 19px;
			border-top: dotted #0098BA 2px;
			padding-top: 16px;
			margin-bottom: 10px;
		}

		.professional-summary-header {
			text-align: center;
		}

		.professional-titles,
		.professional-experience,
		.skills {
			display: inline-block;
			text-align: center;
			vertical-align: text-bottom;
			width: 100%;
			line-height: 14px;
			margin: 2px 0;
		}

		.employment-history-header {
			margin-bottom: 0;
		}

		.job {
			margin-top: 20px;
		}

		.job-title {
			font-family: Georgia, serif;
			font-size: 12px;
			color: #343434;
			width: 75%;
			display: inline-block;
			word-wrap: break-word;
		}

		.job-dates,
		.job-location {
			font-family: Georgia, serif;
			font-size: 10px;
			color: #343434;
			font-weight: bold;
		}

		.job-title {
			font-weight: bold;
		}

		.job-dates {
			float: right;
		}

		.job-skills {
			line-height: 14px;
			margin: 2px 0;
		}

		.education-detail,
		.job-accomplishment {
			list-style-position: inside;
			word-wrap: break-word;
			line-height: 14px;
			margin: 4px 0
		}

		main {
			background-color: #FFF;
			margin: 75px auto;
			min-height: 792px;
			padding: 75px;
			width: 662px;
		}

		.full-name {
			text-align: center;
			line-height: 1;
			color: #0098BA;
			display: block;
			font-family: HelveticaNeue-CondensedBold, "Helvetica Neue", Helvetica, sans-serif;
			font-size: 32px;
		}

		address {
			margin-top: 10px;
			text-align: center;
			color: #666;
			font-family: Georgia, serif;
			font-size: 10px;
			font-style: normal;
		}

		.personal-contact {
			text-align: center;
		}

		a,
		a:visited {
			color: inherit;
			text-decoration: none;
		}

		a:hover,
		a:active {
			color: blue;
			text-decoration: underline;
		}

		.job-accomplishment {
			text-indent: -9px;
			padding-left: 9px;
		}

		@media print {
			body {
				margin: 0;
				background-color: white;
				border: 1px solid transparent;
			}

			main {
				width: 662px;
				min-height: 642px;
				padding: 0;
			}
		}
	</style>
</head>
<body>
<main id="resumeElement">
	<h1 class="full-name">
		Michael Foss
	</h1>
	<address>
		<a href="https://www.google.com/maps/place/910+Avenue+P,+Matamoras,+PA+18336" target="_blank">910 Ave. P, Matamoras, PA 18336</a>
	</address>
	<div class="personal-contact">
		<a type="email" href="mailto:michael@mikefoss.com">michael@mikefoss.com</a> | <a href="tel:8459787113">(845) 978-7113</a>
	</div>

	<h2 class="professional-summary-header">
		Professional Summary
	</h2>
	<div class="professional-titles">
		Solution Architect - Team Lead - Full Stack Developer
	</div>
	<div class="skills">
		PHP - Javascript - Object-Oriented Programming - Databases
	</div>
	<div class="professional-experience">
		Detailed Problem-Solving - Client Management - eCommerce &amp; CMS Solutions - Technical Writing
	</div>

	<h3 class="employment-history-header ">
		Employment History
	</h3>

	<div class="job">
		<div>
			<h4 class="job-title">
				Solution Architect and Team Lead, Valtech, Inc.
			</h4>
			<span class="job-dates">
				2012 - Present
			</span>
		</div>
		<div class="job-location">
			New York, NY
		</div>
		<div class="job-skills">
			PHP, Javascript, Git, Apache, eCommerce, MS SQL, XML, Linux, Composer
		</div>
		<ul class="job-accomplishments">
			<li class="job-accomplishment">
				Grew company start-up size from 17 employees to 70+
			</li>
			<li class="job-accomplishment">
				Saved failing relationship with &num;1 client
			</li>
			<li class="job-accomplishment">
				Rebuilt eCommerce website in 6 months
			</li>
			<li class="job-accomplishment">
				Created sister eCommerce website in 6 months
			</li>
			<li class="job-accomplishment">
				Managed teams ranging from 2-6 developers
			</li>
		</ul>
	</div>

	<div class="job">
		<div>
			<h4 class="job-title">
				Full Stack Developer, Jack Morton Worldwide
			</h4>
			<span class="job-dates">
				2011 - 2012
			</span>
		</div>
		<div class="job-location">
			New York, NY
		</div>
		<div class="job-skills">
			PHP, Javascript, MySQL, Apache
		</div>
		<ul class="job-accomplishments">
			<li class="job-accomplishment">
				Contributed to Verizon advertisement platform
			</li>
			<li class="job-accomplishment">
				Created internal task list application using LAMP stack
			</li>
		</ul>
	</div>

	<div class="job">
		<div>
			<h4 class="job-title">
				Lead Web Developer, Clarion Safety Systems
			</h4>
			<span class="job-dates">
				2003 - 2010
			</span>
		</div>
		<div class="job-location">
			Milford, PA
		</div>
		<div class="job-skills">

		</div>
		<ul class="job-accomplishments">
			<li class="job-accomplishment">
				Maintained eCommerce website running on LAMP
			</li>
			<li class="job-accomplishment">
				Transitioned website into .NET architecture and integrated with SAP Business One
			</li>
			<li class="job-accomplishment">
				Created &amp; managed data application tool used by over 50 employees
			</li>
		</ul>
	</div>

	<h3 class="education-header">
		Education
	</h3>
	<ul class="education-history">
		<li class="education-detail">
			Master of Science, Computer Science, East Stroudsburg University
		</li>
		<li class="education-detail">
			Bachelor of Science, Computer Science, East Stroudsburg University, 2003
		</li>
	</ul>
</main>
</body>
</html>