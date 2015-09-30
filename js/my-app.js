// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

if (localStorage.getItem("fameSlideIndex") === null) {
	localStorage.fameSlideIndex = 0;
}

if (localStorage.getItem("reputationSlideIndex") === null) {
	localStorage.reputationSlideIndex = 7;
}

var fameSwiper = myApp.swiper('.fame-swiper-container', {
	spaceBetween: 0,
	slidesPerView: 'auto',
	centeredSlides: 'true',
	initialSlide: localStorage.fameSlideIndex,
	pagination: '.swiper-pagination-c1',
	onSlideChangeStart: function (fameSwiper) {
	   localStorage.fameSlideIndex = fameSwiper.activeIndex;
	}
});
var reputationSwiper = myApp.swiper('.reputation-swiper-container', {
	spaceBetween: 0,
	slidesPerView: 'auto',
	centeredSlides: true,
	initialSlide: localStorage.reputationSlideIndex,
	onSlideChangeStart: function (reputationSwiper) {
	   localStorage.reputationSlideIndex = reputationSwiper.activeIndex;
	}
});

myApp.addNotification({
	title: 'Mage Knight Tracker',
	message: 'The Fame and Reputation tracks below are sliders. Swipe on each left and right to chage your score for each.',
	hold: 5000,
	closeIcon: false,
	closeOnClick: true
});


// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});


// Generate dynamic page
var dynamicPageIndex = 0;
function createContentPage() {
	mainView.router.loadContent(
        '<!-- Top Navbar-->' +
        '<div class="navbar">' +
        '  <div class="navbar-inner">' +
        '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
        '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
        '  </div>' +
        '</div>' +
        '<div class="pages">' +
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="dynamic-pages" class="page">' +
        '    <!-- Scrollable page content-->' +
        '    <div class="page-content">' +
        '      <div class="content-block">' +
        '        <div class="content-block-inner">' +
        '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
        '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>'
    );
	return;
}


$$('.reset-tracker').on('click', function(e) {
	myApp.confirm("Are you sure you want to reset the tracker?", "Mage Knight Tracker",
		function() {
			fameSwiper.slideTo(0);
			reputationSwiper.slideTo(7);
		}
	)
	 
});