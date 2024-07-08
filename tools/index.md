---
title: Tools
author: 
keywords: List of tools for polyrhythm website
permalink: /tools/index.html
vim: ts=3
layout: default
summary: 
---

## <i>composite</i> tool

The <i>composite</i> tool is a filter that allows the viewer to view the score as composite rhythms, that is, sequential presentation of events, where an “event” includes all the notes that have the same onset time. 

The corpus examples have been encoded with the texture divided into two contrasting rhythmic groups, and users can interact with the examples using a set of options available on each example page accessed through the "Browse" page. Composite rhythms can be obtained for the full texture ("composite" option), coinciding events across parts ("coincidence" option), or for a combination of parts ("group" option renders Group A and Group B composite rhythms). Coincidence rhythm can ve viewed below the score or without the score ("analysis only" option). Groups can be colored on the score ("group color" option for Group A and Group B events, and "mark" option for coincidence events) and in the composite rhythm ("comp. color" option). Coincidence events are colored in green, Group A events are colored in red, and Group B events are colored in blue. The number of events in each composite rhythm can be viewed on the left side of the composite rhythm with the "event counts" option. For examples of how the tool is applied to examples from the corpse, see: Poudrier, È. & Sapp, C. S. (2022). Polyrhythm analysis using the composite tool. In <i>International Conference on Digital Libraries for Musicology,July 28, 2022, Prague, Czech Republic</i>. ACM, New York, NY, USA (available on the "Publications" page).

The <i>composite</i> tool is also implemented on Verovio Humdrum Viewer (https://verovio.humdrum.org) as a filter. If the score is comprised of two staves, each staff will be treated as a group automatically, with the lower staff assigned to Group A and the higher staff assigned to Group B. If the score has more than two staves, each staff has to be assigned to a group.  Full documentation for the composite filter is available at: https://doc.verovio.humdrum.org/filter/composite.

