$(document).ready(function() {
	/*num*/
	$("body").on("click", ".box-num .ui-btn", function() {
		var $this = $(this);
		var $text = $this.siblings(".ui-input-text").find("input");
		var num = parseInt($text.val());
		if ($this.find(".left").length == 1) {
			num--;
			if (num == 0) {
				alert("删除");
				return false;
			} else {
				$text.val(num);
			}
		} else if ($this.find(".right").length == 1) {
			num++;
			$text.val(num);
		}
	});
	/*返回顶部*/
	$(window).on("scroll", function(){
		if($("body").scrollTop() > 0){
			$("#goTop").show();
		}
	});
	$("body").on("click", "#goTop", function(){
		$("body").scrollTop(0);
		$(this).fadeOut();
	});
});