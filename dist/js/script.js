"use strict";var sections=document.querySelectorAll("section"),options={threshold:.35},observer=new IntersectionObserver(function(e,o){e.forEach(function(e){e.isIntersecting&&(console.log(e),console.log(e.target),e.target.classList.add("observer-fade-in"),o.unobserve(e.target))})},options);sections.forEach(function(e){observer.observe(e)});