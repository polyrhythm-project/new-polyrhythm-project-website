---
title: Recordings 
author: Craig Stuart Sapp
keywords: List of recordings
permalink: /recordings/index.html
vim: ts=3
layout: default
summary: 
---

{% include_relative styles-local.html %}
{% include_relative scripts-local.html %}

The following list recordings give the source of audio examples used in Polyrhythm project
experiments.

<p>
Sort recordings by: 
<select id="sort-method" onchange="displayRecordingList()">
<option value="workid">Work ID</option>
<option value="exid">Example ID</option>
<option value="cyear">Composition Date</option>
<option value="ryear">Release Date</option>
</select>
</p>

<div id="recording-list"></div>

