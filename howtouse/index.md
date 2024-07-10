---
title: How to use
layout: default
permalink: /howtouse/index.html
---

{% include_relative listeners.html     %}
{% include_relative styles-local.html  %}


<section>
<div class="container">
<div class="row">
<div class="col-12">

<div class="accordion accordion-flush mb-5" id="accordionExample">
<div class="accordion-item">
<p class="accordion-header" id="headingOne">
<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">Browse page</button>
</p>
<div class="accordion-collapse collapse" id="collapseOne" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
<div class="accordion-body" markdown="1">
{% include_relative browse-page.md %}
</div>
</div>
</div>

<div class="accordion-item">
<p class="accordion-header" id="headingTwo">
<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Example pages</button>
</p>
<div class="accordion-collapse collapse" id="collapseTwo" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
<div class="accordion-body" markdown="1">
{% include_relative example-pages.md %}
</div>
</div>
</div>

</div>

</div>
</div>
</div>
</section>


