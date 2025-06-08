
<script>
// vim: ts=3:nowrap
</script>

<div class="card mb-3">
	<div class="row g-0">
		<div class="col-md-6">
			<div class="card-body">
				<h5 class="category mb-2 card-title">Works by Composer</h5>
				<p class="card-text">The word cloud presents corpus source works by composer. We can observe that the corpus is most strongly represented by the works of the Czech composer Bohuslav Martinů and the German composer Paul Hindemith, and more weakly represented by the works of the American composer George Gershwin. While this may be related to some bias on the part of Suter (1980), it is also related to his sampling method, which involved taking into account the compositional output of each composer in terms of time period and productivity. Thus, more works were sampled for composers with a larger body of works than for composer with a smaller one. For a list of the number of source works by composer, visit the <a href="https://polyrhythm.humdrum.org/composers">Composers</a> page.</p>
			</div>
		</div>
		<div class="col-md-6">
			<img src="Works_by_Composer_cloud.png" class="img-fluid rounded-start" alt="Works by Composer">
		</div>
	</div>
</div>

<div class="card mb-3">
	<div class="row g-0">
		<div class="col-md-8">
			<div class="card-body">
				<h5 class="category mb-2 card-title">Works vs. Examples</h5>
				<p class="card-text">This graph provides a percentage comparison of works surveyed against works sampled and extracted examples. The percentages are based on the total number of works and examples in the corpus. As in the source works by composer word cloud, Martinů and Hindemith have the highest percentages in all categories, although the percentage of extracted examples for Martinů is lower than the number of works surveyed and sampled. The graph also shows that the percentage of extracted examples is much higher than the surveyed and sampled works for the French composer Olivier Messiaen. This is the result of the relatively large number of examples (20) extracted from <i>Turangalîla</i>, a Symphony for Solo Piano, Ondes Martenot and Orchestra (Mes-22). A similar pattern can be observed for extracted examples from works by the German composer Alban Berg and the American composer Charles Ives. These differences may also be related to those composers' more frequent use of polyrhythm as a compositional technique as compared to the other corpus composers. For a list of the number of works and examples by composer, visit the <a href="https://polyrhythm.humdrum.org/composers">Composers</a> page. To identify examples by work, visit the <a href="https://polyrhythm.humdrum.org/browse">Browse</a> page.</p>
			</div>
		</div>
		<div class="col-md-10">
			<!-- <img src="Works_Examples_graph.png" class="img-fluid rounded-start" alt="Works vs. Examples"> -->
			<div id="worksVsExamples"></div>
		</div>
	</div>
</div>

<div class="card mb-3">
	<div class="row g-0">
		<div class="col-md-8">
			<div class="card-body">
				<h5 class="category mb-2 card-title">Composition Year by Decade</h5>
				<p class="card-text">The graph and accompanying table present the corpus works by year of composition. The graph shows a slightly left-skewed distribution of works or movements, with a peak in the 1920s (108 works) and a larger number of works in the decades after (216 works as compared with 126 works before 1920). To sort or select examples by year of composition, visit the <a href="https://polyrhythm.humdrum.org/browse">Browse</a> page. You can also do a quick search by decade on the <a href="https://polyrhythm.humdrum.org/index.html">Home</a> page.</p>
			</div>
		</div>
		<div class="col-md-10">
			<table>
				<tr>
					<td style="padding-left: 20px; vertical-align:top"><div id="CompositionYearByDecadeTable"></div></td>
					<td style="padding-left:100px; vertical-align:top"><div id="CompositionYearByDecadeGraph"></div></td>
				</tr>
			</table>
			<!-- img src="Composition_Year_by_Decade_table_graph.png" class="img-fluid rounded-start" alt="Composition Year by Decade" -->
		</div>
	</div>
</div>

<div class="card mb-3">
	<div class="row g-0">
		<div class="col-md-6">
			<div class="card-body">
				<h5 class="category mb-2 card-title">Genre Percentage Distribution</h5>
				<p class="card-text">This pie chart presents the proportional representation by source works genres. The most represented categories are orchestral and instrumental works, each of which represent about a third of the corpus. The last third is shared between vocal (12.8%) and stage (13.1%) works. To identify examples by genre, visit the <a href="https://polyrhythm.humdrum.org/browse">Browse</a> page.</p>
			</div>
		</div>
		<div class="col-md-6">
			<div id="GenrePercentageDistribution"></div>
		</div>
	</div>
</div>

<div class="card mb-3">
	<div class="row g-0">
		<div class="col-md-6">
			<div class="card-body">
				<h5 class="category mb-2 card-title">Sub-genre Percentage Distribution</h5>
				<p class="card-text">This pie chart shows how each genre is subdivided into sub-genres in the corpus. For example, programmatic works represent a smaller proportion within orchestral works (7%) than symphonic (16.4%) and concerto (14.6%) works. While vocal and stage works are more evenly partitioned, instrumental works are represented by more chamber (24.3%) than keyboard (11.7%) works, whith chamber works representing the largest sub-genre featured in the corpus.To identify examples by sub-genre, visit the <a href="https://polyrhythm.humdrum.org/browse">Browse</a> page.</p>
			</div>
		</div>
		<div class="col-md-6">
			<div id="SubgenrePercentageDistribution"></div>
		</div>
	</div>
</div>



