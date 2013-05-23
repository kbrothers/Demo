
				var tpj=jQuery;
				tpj.noConflict();

				tpj(document).ready(function() {

				if (tpj.fn.cssOriginal!=undefined)
					tpj.fn.css = tpj.fn.cssOriginal;

					var api = tpj('.banner').revolution(
						{
							delay:9000,
							startheight:510,
							startwidth:1000,

							hideThumbs:200,

							thumbWidth:100,							// Thumb With and Height and Amount (only if navigation Tyope set to thumb !)
							thumbHeight:50,
							thumbAmount:5,

							navigationType:"none",				// bullet, thumb, none
							navigationArrows:"solo",				// nexttobullets, solo (old name verticalcentered), none

							navigationStyle:"round",				// round,square,navbar,round-old,square-old,navbar-old, or any from the list in the docu (choose between 50+ different item), custom


							navigationHAlign:"center",				// Vertical Align top,center,bottom
							navigationVAlign:"bottom",					// Horizontal Align left,center,right
							navigationHOffset:0,
							navigationVOffset:20,

							soloArrowLeftHalign:"left",
							soloArrowLeftValign:"center",
							soloArrowLeftHOffset:20,
							soloArrowLeftVOffset:0,

							soloArrowRightHalign:"right",
							soloArrowRightValign:"center",
							soloArrowRightHOffset:20,
							soloArrowRightVOffset:0,

							touchenabled:"on",						// Enable Swipe Function : on/off
							onHoverStop:"on",						// Stop Banner Timet at Hover on Slide on/off



							stopAtSlide:2,							// Stop Timer if Slide "x" has been Reached. If stopAfterLoops set to 0, then it stops already in the first Loop at slide X which defined. -1 means do not stop at any slide. stopAfterLoops has no sinn in this case.
							stopAfterLoops:0,						// Stop Timer if All slides has been played "x" times. IT will stop at THe slide which is defined via stopAtSlide:x, if set to -1 slide never stop automatic

							shadow:1,								//0 = no Shadow, 1,2,3 = 3 Different Art of Shadows  (No Shadow in Fullwidth Version !)
							fullWidth:"off"							// Turns On or Off the Fullwidth Image Centering in FullWidth Modus
						});




					//########################################
					//	-	API HANDLING	-
					//########################################

					// listen for slide change event
					api.bind("revolution.slide.onchange",function (e,data) {
						jQuery('#callbackinfo').html('Last Event: Slide Changed to '+data.slideIndex);
					});

					api.bind("revolution.slide.onpause",function (e,data) {
						jQuery('#callbackinfo').html('Last Event: Timer Pause ');
					});

					api.bind("revolution.slide.onresume",function (e,data) {
						jQuery('#callbackinfo').html('Last Event: Timer Resume ');
					});

					api.bind("revolution.slide.onvideoplay",function (e,data) {
						jQuery('#videoinfo').html('YouTube / Vimeo Video Playing ');
					});

					api.bind("revolution.slide.onvideostop",function (e,data) {
						jQuery('#videoinfo').html('YouTube / Vimeo Video Stopped');
					});

					api.bind("revolution.slide.onstop",function (e,data) {
						jQuery('#stopinfo').html('Slider Stopped ');
					});

					api.bind("revolution.slide.onbeforeswap",function (e) {
						jQuery('#otherevents').html('Slider going to swap');
					});

					api.bind("revolution.slide.onafterswap",function (e) {
						jQuery('#otherevents').html('Slider is ready with swap');
					});

					api.bind("revolution.slide.onloaded",function (e) {
						jQuery('#loadevent').html('Slider is Loaded');
					});

					// bind to button click
					jQuery("input").click(apiHandler)

					function apiHandler(e) {
						switch (e.currentTarget.id) {
							case "pause":
								api.revpause();
							break;
							case "resume":
								api.revresume()
							break;
							case "prev":
								api.revprev()
							break;
							case "next":
								api.revnext()
							break;
							case "show":
								api.revshowslide(3);
							break;
							case "length":
								alert(api.revmaxslide());
							break;
							case "current":
								alert(api.revcurrentslide());
							break;
							case "lastslide":
								alert(api.revlastslide());
							break;

						}
						return false;
					}
				});
