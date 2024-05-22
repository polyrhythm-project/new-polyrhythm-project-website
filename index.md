---
title: "Search, Browse and Analyze Polyrhythm (1877 – 1969)"
vim: ts=3:nowrap:ft=html
layout: homepage
permalink: /index.html
---

{% include_relative scripts-local.html %}
{% include_relative styles-local.html %}

<!-- Sample Work -->
<section>
	<div class="container px-3 my-4">
		<div class="row">
			<div class="col-12">
				<div class="text-center">
					<h2><span>Sample work:</span> Charles Ives, Largo for Violin Clarinet and Piano</h2>
				</div>
			</div>
		</div>
		<!-- Browse by -->
		<div class="row">
			<div class="col-12 col-lg-6">
				<p role="heading"><small>Browse by</small></p>
				<!-- Composer -->
				<div class="browse-list btn-group mb-3 mb-lg-0">
					<select id="composerSelect" class="form-select form-select--primary" aria-label="Composer">
						<option selected>Composer</option>
						<option value="1">One</option>
						<option value="2">Two</option>
						<option value="3">Three</option>
					</select>
				</div>
				<!-- Genre -->
				<div class="browse-list btn-group mb-3 mb-lg-0">
					<select id="genreSelect" class="form-select form-select--primary" aria-label="Genre">
						<option selected>Genre</option>
						<option value="1">One</option>
						<option value="2">Two</option>
						<option value="3">Three</option>
					</select>
				</div>
				<!-- Premiered -->
				<div class="browse-list btn-group mb-3 mb-lg-0">
					<select id="premieredSelect" class="form-select form-select--primary" aria-label="Premiered">
						<option selected>Premiered</option>
						<option value="1">One</option>
						<option value="2">Two</option>
						<option value="3">Three</option>
					</select>
				</div>
			</div>
			<!-- Listen -->
			<div class="col-12 col-lg-6 float-lg-end mt-4 mt-lg-0">
				<p class="float-lg-end" role="heading"><small>Listen</small></p>
				<a href="listen"><img class="float-lg-end play-icon" src="assets/img/play.svg" alt="play button"></a>
			</div>
		</div>
		<!-- Image -->
		<div class="row mt-5">
			<div class="col-12">
				<div class="text-center">
					<img class="img-fluid mb-3" src="assets/img/sample-work.jpg" alt="sample work">
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-12">
				<!-- Example page -->
				<button type="button" class="btn btn-secondary btn-secondary-dark float-md-end mb-3 mb-lg-0 ms-1">
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
			<div class="col-md-6 col-lg-4 mb-4">
				<div class="card h-100 border-0">
					<img class="card-img-top card-img-bottom mb-3" src="https://upload.wikimedia.org/wikipedia/commons/0/05/Kinnear_Centre_at_Banff_Centre.jpg" alt="updates">
					<div class="card-body p-0">
						<div class="category mb-2">UPDATES</div>
						<a class="text-decoration-none link-dark stretched-link" href="updates" role="button"><h3 class="card-title mb-3">Upcoming conference presentations at ESCOM 2024, July 3–6, and SMPC, July 25-28.</h3></a>
					</div>
				</div>
			</div>
			<!-- 2 -->
			<div class="col-md-6 col-lg-4 mb-4">
				<div class="card h-100 border-0">
					<img class="card-img-top card-img-bottom mb-3" style="width:413px" src="https://upload.wikimedia.org/wikipedia/commons/2/25/Polyphony.JPG" alt="about">
					<div class="card-body p-0">
						<div class="category mb-2">ABOUT</div>
						<a class="text-decoration-none link-dark stretched-link" href="overview" role="button"><h3 class="card-title mb-3">This platform presents an online edition of 750 examples of polyphonic music with information about composers and their works.  You can explore our sources, listen to the music excerpts, use the analysis tools, and participate in an experiment.</h3></a>
					</div>
				</div>
			</div>
			<!-- 3 -->
			<div class="col-md-6 col-lg-4 mb-4">
				<div class="card h-100 border-0">
					<img class="card-img-top card-img-bottom mb-3" style="height:300px;" src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Headphones_%281292150%29_-_The_Noun_Project.svg" alt="research">
					<div class="card-body p-0">
						<div class="category mb-2">RESEARCH</div>
						<a class="text-decoration-none link-dark stretched-link" href="research" role="button"><h3 class="card-title mb-3">We explore polyphonic music through close study, computational analysis, and listening experiments. To learn more, consult our publications, presentations, and website resources. </h3></a>
					</div>
				</div>
			</div>
			<!-- 4 -->
			<div class="col-md-6 col-lg-4 mb-4">
				<div class="card h-100 border-0">
					<img class="card-img-top card-img-bottom mb-3" src="https://upload.wikimedia.org/wikipedia/commons/7/71/WorldMap-Blank-Noborders.svg" alt="maps">
					<div class="card-body p-0">
						<div class="category mb-2">MAPS</div>
						<a class="text-decoration-none link-dark stretched-link" href="maps" role="button"><h3 class="card-title mb-3">The Suter (1980) Corpus is represented by three interactive maps.  Maps feature composers' lifetime and places where the corpus works were first performed.</h3></a>
					</div>
				</div>
			</div>
			<!-- 5 -->
			<div class="col-md-6 col-lg-4 mb-4">
				<div class="card h-100 border-0">
					<img class="card-img-top card-img-bottom mb-3" src="/img/homepage/vhv-view-of-r588-with-colours-small.jpg" alt="tools">
					<div class="card-body p-0">
						<div class="category mb-2">TOOLS</div>
						<a class="text-decoration-none link-dark stretched-link" href="tools" role="button"><h3 class="card-title mb-3">Visit the analysis page for interactive graphs of the corpus data.  Each example page also features interactive representations of the rhythmic structure.</h3></a>
					</div>
				</div>
			</div>
			<!-- 6 -->
			<div class="col-md-6 col-lg-4 mb-4">
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



