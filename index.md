---
title: "Search, Browse and Analyze Polyrhythm (1877 – 1969)"
vim: ts=3:nowrap:ft=html
layout: homepage
hnp: true
permalink: /index.html
---

{% include_relative scripts-local.html %}
{% include_relative styles-local.html %}

<!-- Example -->
<section>
	<div class="container px-3 my-4">
		<div class="row">
			<div class="col-12">
				<div class="text-center">
					<h2 id="sample-work" style="visibility:hidden; size:90% !important"><span>Sample work:</span> <span id="random-title"></span></h2>
				</div>
			</div>
		</div>
		<!-- Browse by -->
		{% include_relative browse-play.html %}
		<!-- Image -->
		<div class="row mt-5">
			<div class="col-12">
				<div class="text-center">
					{% include_relative random-score.html %}
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-12">
				<!-- Example page -->
				<button onclick="gotoRandomExamplePage()" type="button" class="btn btn-secondary btn-secondary-dark float-md-end mb-3 mb-lg-0 ms-1">
					Example page
				</button>
				<!-- Coincidence -->
				<button type="button" class="btn btn-secondary float-md-end mb-3 mb-lg-0 ms-1">
					Coincidence
				</button>
				<!-- Composite -->
				<button type="button" class="btn btn-secondary float-md-end mb-3 mb-lg-0 ms-1">
					Composite
				</button>
				<!-- Group color -->
				<button type="button" class="btn btn-secondary float-md-end mb-3 mb-lg-0">
					Group color
				</button>
			</div>
		</div>
	</div>
</section>

<!-- Project Resources-->
<section>
	<div class="container px-3 my-5">
		<div class="row justify-content-center">
			<div class="col-12">
				<div class="text-center">
					<h2>Project Resources</h2>
				</div>
			</div>
		</div>
		<div class="row g-3 g-lg-4 mt-2">
			<!-- 1 -->
			<div class="col-md-6 col-lg-4 mb-4" title="Kinnear Centre for Creativity & Innovation, located at Banff Centre for Arts and Creativity; work by Mzaki, https://creativecommons.org/licenses/by/4.0/deed.en, image adapted for layout" data-bs-toggle="tooltip" alt="updates">
				<div class="card h-100 border-0">
					<img class="card-img-top card-img-bottom mb-3 img-fluid" src="/img/homepage/banff-small.jpg" alt="updates">
					<div class="card-body p-0">
						<div class="category mb-2">UPDATES</div>
						<a class="text-decoration-none link-dark stretched-link" href="updates" role="button"><h3 class="card-title mb-3">Upcoming conference presentations at ESCOM 2024, July 3–6, and SMPC, July 25-28.</h3></a>
					</div>
				</div>
			</div>
			<!-- 2 -->
			<div class="col-md-6 col-lg-4 mb-4" title="Paul Klee, Polyphony (1932)" data-bs-toggle="tooltip" alt="about">
				<div class="card h-100 border-0">
					<img class="card-img-top card-img-bottom mb-3 img-fluid" src="/img/homepage/polyphony-small.jpg" alt="about">
					<div class="card-body p-0">
						<div class="category mb-2">ABOUT</div>
						<a class="text-decoration-none link-dark stretched-link" href="overview" role="button"><h3 class="card-title mb-3">This platform presents an online edition of 750 examples of polyphonic music with information about composers and their works.  You can explore our sources, listen to the music excerpts, use the analysis tools, and participate in an experiment.</h3></a>
					</div>
				</div>
			</div>
			<!-- 3 -->
			<div class="col-md-6 col-lg-4 mb-4" title="Headphones (1292150) - The Noun Project.svg icon from the Noun Project" data-bs-toggle="tooltip" alt="research">
				<div class="card h-100 border-0">
					<img class="card-img-top card-img-bottom mb-3 img-fluid" src="/img/homepage/headphones-small.png" alt="research">
					<div class="card-body p-0">
						<div class="category mb-2">RESEARCH</div>
						<a class="text-decoration-none link-dark stretched-link" href="research" role="button"><h3 class="card-title mb-3">We explore polyphonic music through close study, computational analysis, and listening experiments. To learn more, consult our publications, presentations, and website resources. </h3></a>
					</div>
				</div>
			</div>
			<!-- 4 -->
			<div class="col-md-6 col-lg-4 mb-4" title="Colomet1, Public domain, via Wikimedia Commons; https://creativecommons.org/licenses/by/4.0/deed.en, image adapted for layout" data-bs-toggle="tooltip" alt="worldmap">
				<div class="card h-100 border-0">
					<img class="card-img-top card-img-bottom mb-3" src="https://upload.wikimedia.org/wikipedia/commons/7/71/WorldMap-Blank-Noborders.svg" alt="maps">
					<div class="card-body p-0">
						<div class="category mb-2">MAPS</div>
						<a class="text-decoration-none link-dark stretched-link" href="maps" role="button"><h3 class="card-title mb-3">The Suter (1980) Corpus is represented by three interactive maps.  Maps feature composers' lifetime and places where the corpus works were first performed.</h3></a>
					</div>
				</div>
			</div>
			<!-- 5 -->
			<div class="col-md-6 col-lg-4 mb-4" title="Example from "Polyrhythm Sampler" on Verovio Humdrum Viewer with composite filter applied" data-bs-toggle="tooltip" alt="analysis tools">
				<div class="card h-100 border-0">
					<img class="card-img-top card-img-bottom mb-3" src="/img/homepage/vhv-view-of-r588-with-colours-small.jpg" alt="tools">
					<div class="card-body p-0">
						<div class="category mb-2">TOOLS</div>
						<a class="text-decoration-none link-dark stretched-link" href="tools" role="button"><h3 class="card-title mb-3">Visit the analysis page for interactive graphs of the corpus data.  Each example page also features interactive representations of the rhythmic structure.</h3></a>
					</div>
				</div>
			</div>
			<!-- 6 -->
			<div class="col-md-6 col-lg-4 mb-4" title="Project resources" data-bs-toggle="tooltip" alt="resources">
				<div class="card h-100 border-0">
					<img class="card-img-top card-img-bottom mb-3" src="assets/img/project-resources-2.jpg" alt="sources">
					<div class="card-body p-0">
						<div class="category mb-2">SOURCES</div>
						<a class="text-decoration-none link-dark stretched-link" href="sources" role="button"><h3 class="card-title mb-3">Learn more about the publications and recordings used in the creation of this digital edition.</h3></a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>



