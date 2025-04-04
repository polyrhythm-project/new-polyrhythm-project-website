---
title: Documentation
author: Ève Poudrier
keywords: documentation
vim: ts=1 filetype=html
layout: default
permalink: /doc/index.html
---

{% include_relative styles-local.html %}


<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/5.1.3/js/bootstrap.bundle.min.js"></script>
<script>
  let initialLoad = true;
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
				<h2 class="mb-6">Data</h2>
					<p markdown="1">
						{% include_relative doc-intro-data.md %}
					</p>
					<div class="accordion accordion-flush mb-5" id="accordionExample">

<div class="accordion-item">
<p class="accordion-header" id="headingA"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseA" aria-expanded="false" aria-controls="collapseA">Digital scores</button></p>
<div class="accordion-collapse collapse" id="collapseA" aria-labelledby="headingA" data-bs-parent="#accordionExample">
<div class="accordion-body" markdown="1">
{% include_relative doc-github.md %}
</div>
</div>
</div>

<div class="accordion-item">
<p class="accordion-header" id="headingB"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseB" aria-expanded="false" aria-controls="collapseB">Audio files</button></p>
<div class="accordion-collapse collapse" id="collapseB" aria-labelledby="headingB" data-bs-parent="#accordionExample">
<div class="accordion-body" markdown="1">
{% include_relative doc-audio.md %}
</div>
</div>
</div>

					</div>
   </div>
  </div>
 </div>
</section>

<!-- ------------------------------------------------------------------ -->

<section>
	<div class="container">
		<div class="row">
			<div class="col-12">
				<h2 class="mb-6">Metadata</h2>
					<p markdown="1">
						{% include_relative doc-intro-metadata.md %}
					</p>
					<div class="accordion accordion-flush mb-5" id="accordionExample">

<div class="accordion-item">
<p class="accordion-header" id="headingOne"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">Composers</button></p>
<div class="accordion-collapse collapse" id="collapseOne" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
<div class="accordion-body" markdown="1">
{% include_relative doc-composers.md %}
</div>
</div>
</div>

<div class="accordion-item">
<p class="accordion-header" id="headingTwo"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Source Works</button></p>
<div class="accordion-collapse collapse" id="collapseTwo" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
<div class="accordion-body" markdown="1">
{% include_relative doc-source-works.md %}
</div>
</div>
</div>

<div class="accordion-item">
<p class="accordion-header" id="headingThree"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Premieres</button></p>
<div class="accordion-collapse collapse" id="collapseThree" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
<div class="accordion-body" markdown="1">
{% include_relative doc-premieres.md %}
</div>
</div>
</div>

<div class="accordion-item">
<p class="accordion-header" id="headingFour"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">Source Work Full Unit</button></p>
<div class="accordion-collapse collapse" id="collapseFour" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
<div class="accordion-body" markdown="1">
{% include_relative doc-source-work-full-unit.md %}
</div>
</div>
</div>

<div class="accordion-item">
<p class="accordion-header" id="headingFive"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">Examples</button></p>
<div class="accordion-collapse collapse" id="collapseFive" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
<div class="accordion-body" markdown="1">
{% include_relative doc-examples.md %}
</div>
</div>
</div>

<div class="accordion-item">
<p class="accordion-header" id="headingSix"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">Source Recordings</button></p>
<div class="accordion-collapse collapse" id="collapseSix" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
<div class="accordion-body" markdown="1">
{% include_relative doc-source-recordings.md %}
</div>
</div>
</div>

						</div>
					</div>
				</div>
		</div>
</section>



