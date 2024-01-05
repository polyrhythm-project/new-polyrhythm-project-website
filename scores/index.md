---
title: Scores
author: 
keywords: List of scores
permalink: /scores/index.html
vim: ts=3
layout: subpage
summary: 
---

{% include_relative styles-local.html %}
{% include_relative scripts-local.html %}


Below is a list of musical scores from which polyrhythm examples are extracted.  Two
sources are given for each work/example: the first is for the citation given by Suter,
and the second is the exact source edition used for the Polythm Project, which is usually
the first edition and/or the Suter source.

<p>
Sort scores by: 
<select id="sort-method" onchange="displayScoreList()">
<option value="workid">Work ID</option>
<option value="exid">Example ID</option>
<option value="cyear">Composition Date</option>
<option value="pyear">Publication Date</option>
</select>
</p>
<br/>

<div id="score-list"></div>

