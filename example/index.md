---
title: Example Page
author: Craig Stuart Sapp
keywords: polyrhythm example
permalink: /example/index.html
vim: ts=3
hnp: true
fontawesome: true
layout: default
summary:
---

{% include_relative styles-local.html %}
{% include_relative scripts-local.html %}
{% include_relative scripts-audio.html %}

<div style="font-size:2rem; position:sticky !important; position: -webkit-sticky; margin-left:-50px; top:200px !important;" title="Click to go to previous example" id="previous-example">
	<i class="navigate bi bi-caret-left-fill"></i>
</div>

<div style="font-size:2rem; position:sticky !important; position: -webkit-sticky; margin-right:-20px; top:200px !important" title="Click to go to next example" id="next-example">
	<i class="navigate bi bi-caret-right-fill"></i>
</div>

<div style="margin-top:20px;" id="example"></div>

<span id="vbutton"></span>
<script type="text/x-humdrum" id="example-notation"></script>

