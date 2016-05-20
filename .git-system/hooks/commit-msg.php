#!/usr/bin/php
<?php

function cancelCommit($msg) {
	echo $msg . PHP_EOL;
	exit(1);
}

// Define the commit message filename
define('COMMIT_MESSAGE_FILENAME', __DIR__ . '/../../.git/COMMIT_EDITMSG');

// Check for a commit message
$message = trim(file_get_contents(COMMIT_MESSAGE_FILENAME));
if (!$message) {
	cancelCommit('You must have a commit message.');
}

// Get the lines
$lines = explode(PHP_EOL, $message);

// Get the summary
$summary = $lines[0];

// Trim the summary
$summary = trim($summary);

// Check for a summary
if (!$summary) {
	cancelCommit('You must have a summary in your commit message.');
}

// Look for a summary with a JIRA key in front
$keyPos = stripos($summary, 'usfb');
if ($keyPos !== false && $keyPos >= 0 && $keyPos <= 5) {
	cancelCommit('The JIRA key should not be in the summary, but in the body.');
}

// Look for a summary with a period at the end
if (substr($summary, -1) == '.') {
	cancelCommit('The summary should not end with a period.');
}

// Look for a summary that is too long,
// but ignore merge commits
if (strlen($summary) > 50 && !preg_match('/^merge.*$/i', $summary)) {
	cancelCommit('The summary cannot be longer than 50 characters.');
}

// Rewrite the filtered commit message
$lines[0] = $summary;
file_put_contents(COMMIT_MESSAGE_FILENAME, implode(PHP_EOL, $lines));
