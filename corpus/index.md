---
title: Corpus
author:
keywords: corpus
highcharts: true
wordcloud2: true
vegalite: true
permalink: /corpus/index.html
vim: ts=3:nowrap
layout: default
summary:
---
{% include_relative styles-local.html  %}
{% include_relative listeners.html     %}
{% include_relative scripts-local.html %}
{% include scripts/scripts-common.html %}

<section>
	<div class="container">
		<div class="row">
			<div class="col-12">
				<h2 class="mb-6">Metadata</h2>
					<p markdown="1">

This page presents different types of visualization of the corpus
metadata (i.e., information about sources and materials), such as
tables, figures, graphs, and word clouds. These materials are
organized by type of metadata. The bulleted list below provides
the types of metadata collected for composers, works, premieres
(first public performance of a work), and extracted examples.
To explore visualizations, click on the categories below the
table. The hamburger menu on the top right of pie charts provide different options, including viewing the associated data table.
</p>


<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/5.1.3/js/bootstrap.bundle.min.js"></script>
<script>
  let initialLoad = true;
  let hash = window.location.hash;
  if (!hash) {
     initialLoad = false;
  }
  if (hash === "#") {
     initialLoad = false;
  }
  
  document.addEventListener('shown.bs.collapse', function (event) {
    if (initialLoad) {
      initialLoad = false;
      return;
    }
    const offset = 150; // Height of the fixed header
    const elementTop = event.target.getBoundingClientRect().top;
    const offsetPosition = elementTop + window.pageYOffset - offset;
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
</script>

<section>
<div class="container">
<div class="row">
<div class="col-12">
<p>
{% include_relative metadata-table.md %}
</p>
<div class="accordion accordion-flush mb-5" id="accordionExample">
<div class="accordion-item">
<p class="accordion-header" id="headingOne">
<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">Composers</button>
</p>
<div class="accordion-collapse collapse" id="collapseOne" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
<div class="accordion-body" markdown="1">
{% include_relative composers.md %}
</div>
</div>
</div>
<div class="accordion-item">
<p class="accordion-header" id="headingTwo">
<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Works</button>
</p>
<div class="accordion-collapse collapse" id="collapseTwo" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
<div class="accordion-body" markdown="1">
{% include_relative works.md %}
</div>
</div>
</div>
<div class="accordion-item">
<p class="accordion-header" id="headingThree">
<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Premieres</button>
</p>
<div class="accordion-collapse collapse" id="collapseThree" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
<div class="accordion-body" markdown="1">
{% include_relative premieres.md %}
</div>
</div>
</div>
<div class="accordion-item">
<p class="accordion-header" id="headingFour">
<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">Examples</button>
</p>
<div class="accordion-collapse collapse" id="collapseFour" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
<div class="accordion-body" markdown="1">
{% include_relative examples.md %}
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>



