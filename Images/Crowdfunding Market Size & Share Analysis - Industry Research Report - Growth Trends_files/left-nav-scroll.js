let show_fixed_form=true;window.addEventListener('scroll',function(){const components=document.querySelectorAll('.component');const navi_links=document.querySelectorAll('.rd-page-navigation .nav-links-rd');for(let i=0;i<components.length;i++){let component_top=components[i].offsetTop;let component_bottom=components[i].offsetTop+components[i].offsetHeight;if(window.pageYOffset>component_top-70&&window.pageYOffset<component_bottom-70){navi_links[i].classList.add('active-nav-link');}
else{navi_links[i].classList.remove('active-nav-link');}}
if(window.pageYOffset>200){document.querySelector('.about-report-menu').classList.add('show-about-report-menu')}
else{document.querySelector('.about-report-menu').classList.remove('show-about-report-menu')}
document.querySelector('.go-to-toc').addEventListener('click',function(){scrollToY(document.querySelector('.customize-toc').offsetTop-70,1500,'easeInOutQuint');});if(this.window.innerWidth>960){if(document.querySelector('.fixed-customize-form')&&document.querySelector('.close-fixed-customize-form')&&show_fixed_form){if(window.pageYOffset>document.querySelector('.customize-toc').offsetTop&&window.pageYOffset<document.querySelector('.customize-toc').offsetTop+document.querySelector('.customize-toc').offsetHeight){document.querySelector('.fixed-customize-form').classList.add('show-fixed-form');document.querySelector('.close-fixed-customize-form').classList.add('show-close-button');}
else{document.querySelector('.fixed-customize-form').classList.remove('show-fixed-form');document.querySelector('.close-fixed-customize-form').classList.remove('show-close-button');}
if(document.querySelector('.show-close-button')){document.querySelector('.show-close-button').addEventListener('click',function(){document.querySelector('.fixed-customize-form').classList.remove('show-fixed-form');document.querySelector('.close-fixed-customize-form').classList.remove('show-close-button');show_fixed_form=false;})}}}});