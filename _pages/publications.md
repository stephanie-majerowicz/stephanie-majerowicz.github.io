---
layout: page
permalink: /publications/
title: publications
nav: true
nav_order: 3
---

{% include bib_search.liquid %}

<div class="publications">

<h2>Published</h2>

{% bibliography --query @*[keywords=published] %}

<h2>Under Review</h2>

{% bibliography --query @*[keywords=under_review] %}

<h2>Academic Articles in Progress</h2>

{% bibliography --query @*[keywords=working_paper] %}

<h2>Policy Reports</h2>

{% bibliography --query @*[keywords=policy_report] %}

</div>
