---
title: Recordings 
author: Craig Stuart Sapp
keywords: List of recordings
permalink: /recordings/index.html
vim: ts=3
layout: default
---

{% include_relative styles-local.html %}
{% include_relative scripts-local.html %}

<p>
This page lists the source recordings for audio examples used in
the Polyrhythm project, with links to the corresponding album on
the <a href="https://www.naxosmusiclibrary.com/login" target="_blank">
Naxos Music Library</a> (subscription required).
</p>

<p style="margin-bottom:50px">
Sort recordings by: 
<select id="sort-method" onchange="displayRecordingList()">
<option value="workid">Work ID</option>
<option value="exid">Example ID</option>
<option value="cyear">Composition Date</option>
<option value="ryear">Release Date</option>
</select>
</p>

<div id="recording-list"></div>



