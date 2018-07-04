/* Custom Javascript */
jQuery(document).ready(function($) {
	$("#side-menu").metisMenu();

	if ($(window).width() > 600) {
		$("#sidebar").height($("body").height());

		$(window).resize(function() {
			$("#sidebar").height($("body").height());
		});
	}

	/* =============== A site add page only ================= */
	var curVal = 1;
	$(".body1 .logo").addClass("anim-class");

	var animInterval = setInterval(animLogo, 400);

	function animLogo() {
		$(".body1 .logo span").html(curVal++);
		if( curVal > 99 ) {
			$(".body1 .logo").removeClass("anim-class");
			clearInterval(animInterval);
		}
	}
	/* A site add page only */

	/* ============= Settings page only =============== */
	$(".edit-btn").on("click", function() {
		var viewObj = $(this).parent().parent().find(".setting-content");
		var sitename = $(viewObj).find("h4").html();
		var siteurl = $(viewObj).find("h6").attr("value");
		//var sitelink = $(viewObj).find("span").html();

		var editObj = $(this).parent().parent().parent().find(".edit-item");
		$("#sitename").val(sitename);
		$("#siteurl").val(siteurl);
		//$("#sitelink").val(sitelink);

		$(editObj).addClass("list-appear");
	});

	$(".save-btn").on("click", function() {
		var viewObj = $(this).parent().parent().parent().find(".view-item").find(".setting-content");
		var editObj = $(this).parent().parent();
		$(viewObj).find("h4").html($("#sitename").val());
		$(viewObj).find("h6").html($("#siteurl").val() + ' <i class="fal fa-external-link-square"></i>');
		$(viewObj).find("h6").attr("value", $("#siteurl").val());
		//$(viewObj).find("span").html($("#sitelink").val());

		$(editObj).addClass("list-disappear");
		$(editObj).removeClass("list-appear");
		setTimeout(function(){ $(editObj).removeClass("list-disappear"); }, 1500);
	});

	/* Settings page only */

	$(".page-header #search").on("keyup", function(e) {
		var key = e.which || e.keyCode || 0;
		if( key == 13 ) {
			$("#searchForm").submit();
		}
	});


/* ======================== NEW ADDED ======================== */

	/* membership page */
	$(".mem_add_card").on("click", function() {
		alert($('input[name=memOption]:checked', '#memForm').val());
	});

	
	/* billing */
	var paymentItemCount = 1;
	$(document).on("click", ".set_default", function() {
		if ($(this).hasClass("sel")) return;
		$(".set_default").text("Make default");
		$(".set_default").attr("title", "Make default");
		$(".set_default").removeClass("sel");
		$(this).addClass("sel");
		$(this).text("Default");
		$(this).attr("title", "Default");
	});
	$(document).on("click", ".remove_pay", function() {
		if( paymentItemCount < 2 ) return;
		if( $(this).parent().find(".set_default").hasClass("sel") ) {
			$(".pay-item:first").find(".set_default").addClass("sel");
			$(".pay-item:first").find(".set_default").text("Default");
			$(".pay-item:first").find(".set_default").attr("title", "Default");
		}
		$(this).parent().remove();
		if( paymentItemCount == 2 ) {
			$(".no-boder").html('<img src="images/paypal.png" alt="PayPal"/>&nbsp;<span>XXXX-XXXX-XXXX-4962</span><div class="clear"></div>');
		}
		paymentItemCount--;
	});
	$("input[name=payOption]").on("change", function(e) {
		if( e.target.id == 'invoice' ) {
			$("#payment_item").fadeOut('fast', function() { $("#invoice_item").fadeIn(); });
		} else {
			$("#invoice_item").fadeOut('fast', function() { $("#payment_item").fadeIn(); });
		}
	});

	$(".add_card").on("click", function() {
		// Add information
		if( !$(".no-boder").is("set_default") )
			$(".no-boder").html('<img src="images/paypal.png" alt="PayPal"/>&nbsp;<span>XXXX-XXXX-XXXX-4962</span><a class="set_default sel" title="Default">Default</a><a class="remove_pay"><i class="fal fa-times-circle"></i></a><div class="clear"></div>');
		$(".pay-item:last").after('<div class="pay-item"><img src="images/paypal.png" alt="PayPal"/>&nbsp;<span>XXXX-XXXX-XXXX-4962</span><a class="set_default" title="Make default">Make default</a><a class="remove_pay"><i class="fal fa-times-circle"></i></a><div class="clear"></div></div>');
		paymentItemCount ++;
		//return false;
	});

	/* =================== Permission User ===================*/
	// Tooltip
	$(".per_r a").tooltip();

	// delete item
	$(document).on("click", ".per_body .col-md-5 .per-ico", function() {
		$(this).remove();
	});

})