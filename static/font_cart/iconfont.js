(function(window){var svgSprite="<svg>"+""+'<symbol id="icon-bao" viewBox="0 0 1024 1024">'+""+'<path d="M759.031744 175.784562l-76.352969 0 0-6.89913c0-58.354036-54.188156-105.659435-121.034611-105.659435l-92.790336 0c-66.846454 0-121.034611 47.305399-121.034611 105.659435l0 6.89913L263.023974 175.784562c-48.747237 0-88.26323 37.394678-88.26323 83.525322l0 615.227036c0 46.130643 39.515992 83.525322 88.26323 83.525322l496.007771 0c48.745191 0 88.26323-37.394678 88.26323-83.525322L847.294974 259.308861C847.294974 213.17924 807.776935 175.784562 759.031744 175.784562zM464.943776 114.814955l94.980211 0c34.856879 0 63.427588 26.835182 66.230424 60.969607L398.714376 175.784562C401.516188 141.650137 430.08792 114.814955 464.943776 114.814955zM791.654746 831.382051c0 39.658232-32.980135 71.808466-73.659627 71.808466L304.060599 903.190517c-40.680515 0-73.65758-32.150234-73.65758-71.808466l0-39.415708 561.251727 0L791.654746 831.382051zM791.654746 735.061308L230.403019 735.061308 230.403019 302.462706c0-39.658232 32.977066-71.807443 73.65758-71.807443l43.757596 0 0 151.815661c0 4.332678 0.305969 8.603959 0.886183 12.799514l49.673329 0 0-59.907415 0.091074 0L398.468782 230.656287 626.400005 230.656287l0 104.70776 0 59.907415 55.391565 0c0.581238-4.196579 0.887206-8.466835 0.887206-12.799514L682.678776 230.656287l35.316344 0c40.680515 0 73.659627 32.149211 73.659627 71.807443L791.654746 735.061308z" fill="" ></path>'+""+"</symbol>"+""+'<symbol id="icon-icon-copy" viewBox="0 0 1024 1024">'+""+'<path d="M893.176 231.798c-14.428-14.443-37.857-14.443-52.32 0l-441.195 477.632c-0.622-0.719-1.262-1.428-1.945-2.11l-212.452-212.435c-15.091-15.124-39.643-15.124-54.735 0-15.156 15.122-15.156 39.643 0 54.767l212.421 212.435c5.397 5.397 11.993 8.857 18.929 10.403 1.343 7.022 4.728 13.73 10.16 19.164 14.46 14.445 37.856 14.445 52.32 0l468.818-507.537c14.428-14.443 14.428-37.873 0-52.319z" fill="#EB6800" ></path>'+""+"</symbol>"+""+"</svg>";var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)