function mainSlider(){$("#main-slider").length&&$("#main-slider").bxSlider({mode:"fade",captions:!0})}mainSlider(),$(".vacancy__header").click(function(i){var e=$(this).next();e.is(":hidden")?($(".vacancy__header").removeClass("active"),$(".vacancy__content").slideUp(350),e.slideDown(350),$(this).addClass("active")):(e.slideUp(350),$(this).removeClass("active"))}),$(".info-toggle").click(function(i){var e=$(this).next(),a=$(this).find(".arrow");e.is(":hidden")?(e.show(),a.addClass("active")):(e.hide(),a.removeClass("active"))});