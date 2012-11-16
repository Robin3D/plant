$(document).ready(function(){
	//标记鼠标状态
	var status = 0;
	//偏移量
	var offset_x = 0;
	var offset_y = 0;
	//生成div
	$('#add_div').click(function(){
		var x = parseInt(Math.random()*900+100);
		var y = parseInt(Math.random()*400+100);
		var r = parseInt(Math.random()*257);
		var g = parseInt(Math.random()*257);
		var b = parseInt(Math.random()*257);
		$(this).after('<div class="div_box"></div>');
		$(this).next('div').css({
			'width':'80px',
			'height':'80px',
			'position':'absolute',
			'left':x+'px',
			'top':y+'px',
			'background-color':'rgb('+r+','+g+','+b+')',
			'box-shadow':'0px 0px 8px #000',
			'border-radius':'8px',
			'z-index':r
		});
	});
	
	//选中div时计算偏移量并改变状态为按下鼠标
	$('.div_box').live('mousedown',function(e){
		var offset = $(this).offset();
		if(status == 0){
			var offset_y = e.pageY - offset.top;
			var offset_x = e.pageX - offset.left;
		}
		status = 1;
		$(this).html(status);
	});
	
	//拖拽div
	$('.div_box').live('mouseenter',function(e){
		if(status == 1){
			var x = e.pageY - offset_y;
			var y = e.pageX - offset_x;
			$(this).css({
				'position':'absolute',
				'left':x+'px',
				'top':y+'px'
			});
		}
		else{
			status = 0;
			$(this).html(status);
			return false;
		}
	});
});