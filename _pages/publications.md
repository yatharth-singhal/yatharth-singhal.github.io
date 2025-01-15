---
layout: page
permalink: /publications/
title: publications
description: 
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

<h1> Conference Publications </h1>

{% bibliography --file papers %}

<h1> Conference Demonstrations </h1> 

{% bibliography --file demos %}

</div>
