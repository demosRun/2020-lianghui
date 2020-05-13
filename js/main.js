$(document).ready(function() {
	
	/*p0Con*/
	var swiperP0 = new Swiper('.swiper-container-p0', {
	    mode: 'horizontal',
	    autoplay: 5000,
	    autoplayDisableOnInteraction: false,
	    loop: true,
	    slidesPerView: 1,
	    pagination: '.swiper-pagination0',
	    paginationClickable: true,
	    mousewheelControl: false,
	    onSlideChangeStart: function(swiper){
	        $(".num0 .thisp").html(swiperP0.activeLoopIndex+1);
	    }
	});
	var allNump0 = $(".swiper-pagination0").find(".swiper-pagination-switch").length;
	$(".num0 .thisp").html(1);
	$(".num0 .allp").html(allNump0);
	$(".swiper-container-p0").mouseenter(function () {
	    swiperP0.stopAutoplay();
	}).mouseleave(function () {
	    swiperP0.startAutoplay();
	});
	$(".prev0").click(function(){
	    swiperP0.swipePrev();
	});
	$(".next0").click(function(){
	    swiperP0.swipeNext();
	});
	$('.p0_1 li:nth-child(4n+1)').css("margin-left",0);
    /*p1Con*/
    var mySwiperP1 = new Swiper('.swiper-container-p1',{
    	pagination: '.pagination1',
    	loop:true,
    	grabCursor: true,
    	paginationClickable: true
  	})
  	/*p2Con*/
  	var swiperP2 = new Swiper('.swiper-container-p2', {
	    mode: 'horizontal',
	    autoplay: 5000,
	    autoplayDisableOnInteraction: false,
	    loop: true,
	    slidesPerView: 1,
	    pagination: '.swiper-pagination2',
	    paginationClickable: true,
	    mousewheelControl: false,
	    onSlideChangeStart: function(swiper){
	        $(".num1 .thisp").html(swiperP2.activeLoopIndex+1);
	    }
	});
	var allNump1 = $(".swiper-pagination2").find(".swiper-pagination-switch").length;
	$(".num1 .thisp").html(1);
	$(".num1 .allp").html(allNump1);
	$(".swiper-container-p2").mouseenter(function () {
	    swiperP2.stopAutoplay();
	}).mouseleave(function () {
	    swiperP2.startAutoplay();
	});
	$(".prev1").click(function(){
	    swiperP2.swipePrev();
	});
	$(".next1").click(function(){
	    swiperP2.swipeNext();
	});
	/*p16Con*/
	// var swiperP16 = new Swiper('.swiper-container-p16', {
	//     mode: 'horizontal',
	//     autoplay: 5000,
	//     autoplayDisableOnInteraction: false,
	//     loop: true,
	//     slidesPerView: 1,
	//     pagination: '.swiper-pagination16',
	//     paginationClickable: true,
	//     mousewheelControl: false,
	//     onSlideChangeStart: function(swiper){
	//         $(".num16 .thisp").html(swiperP16.activeLoopIndex+1);
	//     }
	// });
	// p16轮播图

	// var allNump16 = $(".swiper-pagination16").find(".swiper-pagination-switch").length;
	// $(".num16 .thisp").html(1);
	// $(".num16 .allp").html(allNump16);
	// $(".prev16").click(function(){
	//     swiperP16.swipePrev();
	// });
	// $(".next16").click(function(){
	//     swiperP16.swipeNext();
	// });

	var mySwiper17 = new Swiper('.swiper-container-p17',{
			pagination: '.pagination17',
			autoplay: 3000,
	    paginationClickable: true,
	    loop:true,
	    mode : 'vertical',
	    slidesPerView: 2
	})

	/*p3Con*/
	$(".tit2 li").bind('mouseover',function(){
        $(".tit2 li").attr("class","");
        $(".list2").hide();
      
        $(this).attr("class","active");
        $(".list2").eq($(this).index()).show();
    });
	/*p4Con*/
	var mySwiperP3 = new Swiper('.swiper-container-p3',{
	    pagination: '.pagination3',
	    paginationClickable: true,
	    loop:true,
	    slidesPerView: 3
	})
	$('.prev2').on('click', function(e){
	    e.preventDefault()
	    mySwiperP3.swipePrev()
	})
	$('.next2').on('click', function(e){
	    e.preventDefault()
	    mySwiperP3.swipeNext()
	})
	/*p7Con*/
		$(".list4 li").bind('mouseover',function(){
			$(".list4 li").attr("class","");
			$(".pic5").hide();
		
			$(this).attr("class","active");
			$(".pic5").eq($(this).index()).show();
		});
		$(".p7Con .next-button").bind('click',function(){
			$(".pic5").hide();
			$(".list4 li").each(function (ind, el) {
				
				if ($(el).hasClass('active')) {
					setTimeout(function() {
						$(el).attr("class","");
						if ($(".list4 li")[ind + 1]) {
							$($(".list4 li")[ind + 1]).attr("class","active");
							$(".pic5").eq($($(".list4 li")[ind + 1]).index()).show();
						} else {
							$($(".list4 li")[0]).attr("class","active");
							$(".pic5").eq($($(".list4 li")[0]).index()).show();
						}
						return
					}, 0);
				}
			})
		});
		var viewSwiper = new Swiper('.view .swiper-container',{
    	pagination: '.pagination4',
	    paginationClickable: true,
	    onSlideChangeStart: function() {
			updateNavPosition()
		}
	})
	$('.preview .arrow-left').on('click', function(e) {
		e.preventDefault()
		if (viewSwiper.activeIndex == 0) {
			viewSwiper.swipeTo(viewSwiper.slides.length - 1, 1000);
			return
		}
		viewSwiper.swipePrev()
	})
	$('.preview .arrow-right').on('click', function(e) {
		e.preventDefault()
		if (viewSwiper.activeIndex == viewSwiper.slides.length - 1) {
			viewSwiper.swipeTo(0, 1000);
			return
		}
		viewSwiper.swipeNext()
	})

	var previewSwiper = new Swiper('.preview .swiper-container', {
		slidesPerView: 3,
		onSlideClick: function() {
			viewSwiper.swipeTo(previewSwiper.clickedSlideIndex)
		}
	})
	$('.preview .swiper-container .swiper-slide').click(function(evt){
		evt.preventDefault();
	})

	function updateNavPosition() {
		$('.preview .active-nav').removeClass('active-nav')
		var activeNav = $('.preview .swiper-slide').eq(viewSwiper.activeIndex).addClass('active-nav')
		if (!activeNav.hasClass('swiper-slide-visible')) {
			if (activeNav.index() > previewSwiper.activeIndex) {
				var thumbsPerNav = Math.floor(previewSwiper.width / activeNav.width()) - 1
				previewSwiper.swipeTo(activeNav.index() - thumbsPerNav)
			} else {
				previewSwiper.swipeTo(activeNav.index())
			}
		}
	}

	$(".pic7 div").jCarouselLite({
	    btnNext: ".next4",
	    btnPrev: ".prev4",
	    speed: 1000,
	    vertical:true,
	    auto: null
	});
	/*p9Con*/
	var mySwiperP5 = new Swiper('.swiper-container-p5',{
	    pagination: '.pagination5',
	    loop:true,
	    grabCursor: true,
	    paginationClickable: true
	})
	$('.prev5').on('click', function(e){
	    e.preventDefault()
	    mySwiperP5.swipePrev()
	})
	$('.next5').on('click', function(e){
	    e.preventDefault()
	    mySwiperP5.swipeNext()
	})
	var len = $('.swiper-container-p5 .swiper-slide').length;
	for(i = 0; i <= len; i++){
		$('.pagination5 span:eq('+i+')').text(i+1);
	};
	$('.pic8 li:nth-child(2n+1)').css("margin-left",0);
	$('.pic4 li:nth-child(3n)').css("margin-right",0);
	/*p10Con*/
	var swiperP10a = new Swiper('.swiper-container-p10a', {
	    mode: 'horizontal',
	    autoplay: 5000,
	    autoplayDisableOnInteraction: false,
	    loop: true,
	    slidesPerView: 1,
	    pagination: '.swiper-pagination10a',
	    paginationClickable: true,
	    mousewheelControl: false,
	    onSlideChangeStart: function(swiper){
	        $(".num10 .thisp").html(swiperP10a.activeLoopIndex+1);
	    }
	});
	var allNump10 = $(".swiper-pagination10a").find(".swiper-pagination-switch").length;
	$(".num10 .thisp").html(1);
	$(".num10 .allp").html(allNump10);
	$(".swiper-container-p10a").mouseenter(function () {
	    swiperP10a.stopAutoplay();
	}).mouseleave(function () {
	    swiperP10a.startAutoplay();
	});
	$(".prev10a").click(function(){
	    swiperP10a.swipePrev();
	});
	$(".next10a").click(function(){
	    swiperP10a.swipeNext();
	});

	var mySwiperP10b = new Swiper('.swiper-container-p10b',{
	    pagination: '.pagination10b',
	    paginationClickable: true,
	    loop:true,
	    slidesPerView: 2
	})
	$('.prev10b').on('click', function(e){
	    e.preventDefault()
	    mySwiperP10b.swipePrev()
	})
	$('.next10b').on('click', function(e){
	    e.preventDefault()
	    mySwiperP10b.swipeNext()
	})

	var mySwiperP10d = new Swiper('.swiper-container-p10d',{
	    pagination: '.pagination10d',
	    paginationClickable: true,
	    loop:true,
	    slidesPerView: 2
	})
	$('.prev10d').on('click', function(e){
	    e.preventDefault()
	    mySwiperP10d.swipePrev()
	})
	$('.next10d').on('click', function(e){
	    e.preventDefault()
	    mySwiperP10d.swipeNext()
	})

	var mySwiperP10e = new Swiper('.swiper-container-p10e',{
	    pagination: '.pagination10e',
	    paginationClickable: true,
	    loop:true,
	    slidesPerView: 2
	})
	$('.prev10e').on('click', function(e){
	    e.preventDefault()
	    mySwiperP10e.swipePrev()
	})
	$('.next10e').on('click', function(e){
	    e.preventDefault()
	    mySwiperP10e.swipeNext()
	})

	var mySwiperP10f = new Swiper('.swiper-container-p10f',{
	    pagination: '.pagination10f',
	    paginationClickable: true,
	    loop:true,
	    slidesPerView: 2
	})
	$('.prev10f').on('click', function(e){
	    e.preventDefault()
	    mySwiperP10f.swipePrev()
	})
	$('.next10f').on('click', function(e){
	    e.preventDefault()
	    mySwiperP10f.swipeNext()
	})
	/*p11Con*/
	var swiperP6 = new Swiper('.swiper-container-p6', {
	    mode: 'horizontal',
	    autoplay: 5000,
	    autoplayDisableOnInteraction: false,
	    loop: true,
	    slidesPerView: 1,
	    pagination: '.swiper-pagination6',
	    paginationClickable: true,
	    mousewheelControl: false,
	    onSlideChangeStart: function(swiper){
	        $(".num6 .thisp").html(swiperP6.activeLoopIndex+1);
	    }
	});
	var allNump6 = $(".swiper-pagination6").find(".swiper-pagination-switch").length;
	$(".num6 .thisp").html(1);
	$(".num6 .allp").html(allNump6);
	$(".swiper-container-p6").mouseenter(function () {
	    swiperP6.stopAutoplay();
	}).mouseleave(function () {
	    swiperP6.startAutoplay();
	});
	$(".prev6").click(function(){
	    swiperP6.swipePrev();
	});
	$(".next6").click(function(){
	    swiperP6.swipeNext();
	});
	/*p12Con*/
	var mySwiperP7 = new Swiper('.swiper-container-p7',{
	    pagination: '.pagination7',
	    paginationClickable: true,
	    loop:true,
	    slidesPerView: 4
	})
	$('.prev7').on('click', function(e){
	    e.preventDefault()
	    mySwiperP7.swipePrev()
	})
	$('.next7').on('click', function(e){
	    e.preventDefault()
	    mySwiperP7.swipeNext()
	})
	/*p13Con*/
	
	// 特别策划3d轮播
	// console.log(swiperIt)
	if ($('.swiper-3d')[0]) {
		var swiper3DisBusy = false
		var swiper3d = swiperIt.init($('.swiper-3d')[0], {
			autoplay: false,
			showSlider: 5,
			width: 77.4,
			step: 0.9
		});
		var selectList = $('.select-list li')
		for (var index = 0; index < selectList.length; index++) {
			var element = selectList[index];
			element.setAttribute('ind', index)
			element.classList.remove('active')
			$(element).on('click', function(e) {
				if (swiper3DisBusy) return
				swiper3DisBusy = true
				$(".select-list li").each(function(){
					this.classList.remove('active')
				});
				this.classList.add('active')
				
				setTimeout(function() {
					swiper3DisBusy = false
				}, 1000);
				swiper3d.turn(parseInt(this.getAttribute('ind')))
			});
		}
		// 默认活跃第一项
		$(".select-list li")[0].classList.add('active')
	}

});

// 日历区域
var changing = false
function changeText(dom, text, height) {
	height = height || 40
	var _this = this;
	// 限制刷新频率
	if (changing) return;
	var firstChild = dom.children[0];
	// 判断是否低版本浏览器
	if (!firstChild.remove) {
		dom.getElementsByClassName('scoreboard-item')[0].innerHTML = text
		return
	}
	changing = true;
	var newEl = document.createElement('div');
	newEl.classList.add('scoreboard-item');
	newEl.innerHTML = text;
	dom.appendChild(newEl);
	newEl.style.top = height + "px";
	setTimeout(function() {
		firstChild.style.top = -height + "px";
		newEl.style.top = "0";
		setTimeout(function() {
			firstChild.remove();
			changing = false;
		}, 500);
	}, 100);
}
function nextCalendar () {
	var newIndex = activeCalendarIndex + 1
	if (newIndex < calendarEditList.length - 1) {
		changeCalendar(newIndex, $('.date-item')[newIndex])
	} else {
		changeCalendar(0, $('.date-item')[0])
	}
}
function lastCalendar () {
	var newIndex = activeCalendarIndex - 1
	if (newIndex >= 0) {
		changeCalendar(newIndex, $('.date-item')[newIndex])
	} else {
		changeCalendar(calendarEditList.length - 1, $('.date-item')[calendarEditList.length - 1])
	}
}
var calendarEditList = []
// 生成日历
$(function () {
	calendarEditList = $('.calendar-box .edit .edit-item')
	// console.log(calendarEditList)
	var dateListHTML = ''
	for (var index = 0; index < calendarEditList.length; index++) {
		var element = calendarEditList[index];
		if (element.getElementsByClassName('date')[0]) {
			dateListHTML += '<div class="date-item" onclick="changeCalendar(' + index + ', this)">' + element.getElementsByClassName('date')[0].innerHTML + '</div>'
		}
	}
	// 最后一天的坐标
	var lastIndex = calendarEditList.length - 1
	// 更改计分板的日期
	$('.scoreboard-item')[0].innerHTML = calendarEditList[lastIndex].getElementsByClassName('number')[0].innerHTML
	// 更改主标题
	$('.calendar h1')[0].innerHTML = calendarEditList[lastIndex].getElementsByTagName('h1')[0].innerHTML
	// 更改时间表
	$('.calendar ul')[0].innerHTML = calendarEditList[lastIndex].getElementsByTagName('ul')[0].innerHTML
	// 更改直播
	$('.calendar .zhibo')[0].innerHTML = calendarEditList[lastIndex].getElementsByClassName('zhibo')[0].innerHTML
	// 更改访谈
	$('.calendar .fangtan')[0].innerHTML = calendarEditList[lastIndex].getElementsByClassName('fangtan')[0].innerHTML
	// 更改人民网两会特刊图片
	$('.calendar .show-main')[0].src = calendarEditList[lastIndex].getElementsByTagName('img')[0].src
	// 更改版本
	$('.calendar .right h2')[0].innerHTML = calendarEditList[lastIndex].getElementsByClassName('banben')[0].innerHTML
	// 更改文案
	$('.calendar .right p')[0].innerHTML = calendarEditList[lastIndex].getElementsByClassName('wenan')[0].innerHTML
	activeCalendarIndex = lastIndex
	// 活跃第一项
	setTimeout(function () {
		$('.calendar .date-list .date-item:last').addClass("active")
	}, 0);
	$('.calendar .date-list')[0].innerHTML = dateListHTML
})
var activeCalendarIndex = null
// 日历切换方法
function changeCalendar (index, activeEl) {
	activeCalendarIndex = index
	// 更改计分板的日期
	changeText(document.getElementsByClassName('scoreboard')[0], calendarEditList[index].getElementsByClassName('number')[0].innerHTML, 80)
	$('.calendar .date-list .date-item').removeClass('active')
	$(activeEl).addClass("active")
	// 更改主标题
	$('.calendar h1')[0].innerHTML = calendarEditList[index].getElementsByTagName('h1')[0].innerHTML
	// 更改时间表
	$('.calendar ul')[0].innerHTML = calendarEditList[index].getElementsByTagName('ul')[0].innerHTML
	// 更改直播
	$('.calendar .zhibo')[0].innerHTML = calendarEditList[index].getElementsByClassName('zhibo')[0].innerHTML
	// 更改访谈
	$('.calendar .fangtan')[0].innerHTML = calendarEditList[index].getElementsByClassName('fangtan')[0].innerHTML
	// 更改人民网两会特刊图片
	$('.calendar .show-main')[0].src = calendarEditList[index].getElementsByTagName('img')[0].src
	// 更改版本
	$('.calendar .right h2')[0].innerHTML = calendarEditList[index].getElementsByClassName('banben')[0].innerHTML
	// 更改文案
	$('.calendar .right p')[0].innerHTML = calendarEditList[index].getElementsByClassName('wenan')[0].innerHTML
	// $('.scoreboard-item')[0].innerHTML = calendarEditList[0].getElementsByClassName('number')[0].innerHTML
}


// 多语种切换功能
$(function () {
	// 自动生成外文第一项
	var first = $('.languageTabTop span')[0]
	first.style.background = 'url("http://www.people.com.cn/img/2019lh/static/images/' + $(first).attr('class') + '_hover.png") center center no-repeat rgb(199, 31, 41)'
	// 自动寻找内容填充
	if (first.getElementsByClassName('edit')[0]) {
		$('.auto-box-waiwen')[0].innerHTML = first.getElementsByClassName('edit')[0].innerHTML
	} else {
		$('.auto-box-waiwen')[0].innerHTML = ''
	}
	$('.languageTabTop span').each(function (ind, el) {
		$(el).bind('mouseover',function(){
			$('.languageTabTop span').each(function (ind, el) {
				el.style.background = ''
			})
			$('.languageTabBottom span').each(function (ind, el) {
				el.style.background = ''
			})
			this.style.background = 'url("http://www.people.com.cn/img/2019lh/static/images/' + $(this).attr('class') + '_hover.png") center center no-repeat rgb(199, 31, 41)'
			// 自动寻找内容填充
			if (this.getElementsByClassName('edit')[0]) {
				$('.auto-box-waiwen')[0].innerHTML = this.getElementsByClassName('edit')[0].innerHTML
			} else {
				$('.auto-box-waiwen')[0].innerHTML = ''
			}
		});
	})
	$('.languageTabBottom span').each(function (ind, el) {
		$(el).bind('mouseover',function(){
			$('.languageTabTop span').each(function (ind, el) {
				el.style.background = ''
			})
			$('.languageTabBottom span').each(function (ind, el) {
				el.style.background = ''
			})
			this.style.background = 'url("http://www.people.com.cn/img/2019lh/static/images/' + $(this).attr('class') + '_hover.png") center center no-repeat rgb(199, 31, 41)'
		});
	})
})


// 视频窗口播放
function playVideo (id) {
	var videoBox = document.querySelector('.tvplayshow')
	// 显示
	videoBox.style.display = 'block'
	// 停止自动轮播
	if (p16Slide) p16Slide.stopAutoPlay()
	p16Slide.isBusy = true
	showPlayerBox({
		id: id,
		width: 514,
		height: 352,
		// 播放视频的盒子
		box: videoBox.querySelector('.video-play')
	});
}
function stopVideoPlay () {
	var videoBox = document.querySelector('.tvplayshow')
	// 显示
	videoBox.style.display = 'none'
	videoBox.querySelector('.video-play').innerHTML = ''
	p16Slide.isBusy = false
	// 开启自动轮播
	if (p16Slide) p16Slide.startAutoPlay(3000)
}

var p16Slide = null

$(document).ready(function() {
	// 加载轮播图
	p16Slide = new Slide($(".swiper-container-p16")[0], '.swiper-wrapper', '.swiper-slide', {
		// 自动播放间隔
		autoPlay:4000,
		// 切换下一个轮播图的class或ID
		nextEl: ".next16",
		// 切换上一个轮播图的class或ID
		prevEl: ".prev16",
		// 数字分页器
		numberPaginationEL: ".num16",
	})
	
});

function showMore (el) {
	if (el.innerHTML == '点击加载更多') {
		el.innerHTML = '点击收起更多'
		$('.pic4').css('height', 'auto')
	} else {
		$('.pic4').css('height', '404px')
		el.innerHTML = '点击加载更多'
	}
}