---
title: Scores
author: 
keywords: List of scores
permalink: /scores/index.html
vim: ts=3
layout: default
summary: 
---

{% include_relative styles-local.html %}
{% include_relative scripts-local.html %}

This page lists the musical scores for works from which polyrhythm examples
were extracted. Two sources are given for each work: the
first is the citation given by Suter (1980), and the second is the
source edition used for encoding the examples, with a link to an
online score, when available. In some cases, more than one published
score was referenced.

Scores can be sorted by Work ID, Example ID, Composition Date, and Publication Date. You can click on the Example ID to access the Example Page.

<p>
Sort scores by: 
<select id="sort-method" onchange="displayScoreIndex()">
<option value="workid">Work ID</option>
<option value="exid">Example ID</option>
<option value="cyear">Composition Date</option>
<option value="pyear">Publication Date</option>
</select>
</p>
<br/>

<div id="score-list"></div>



