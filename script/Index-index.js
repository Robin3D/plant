$(document).ready(function() {
	// div层值
	var z_index_status = 0;
	// div此刻位置
	var div_x = 0;
	var div_y = 0;
	// 鼠标此刻位置
	var mouse_x = 0;
	var mouse_y = 0;
	// 是否在div中的标志
	var flag = 0;
	// 生成div
	$(document).dblclick(function(e) {
		if (flag == 0) {
			/*
			 * //随机位置 var x = parseInt(Math.random()*900+100); var y =
			 * parseInt(Math.random()*400+100);
			 */
			// 随机颜色
			var r = parseInt(Math.random() * 257);
			var g = parseInt(Math.random() * 257);
			var b = parseInt(Math.random() * 257);
			// 点击时出现在鼠标箭头处
			mouse_x = e.pageX;
			mouse_y = e.pageY;
			var x = 0;
			var y = 0;
			if (mouse_x < 50 || mouse_y < 40) {
				x = mouse_x;
				y = mouse_y;
			} else {
				x = mouse_x - 40;
				y = mouse_y - 40;
			}
			$('.welcome-head').after('<div class="div_box"></div>');
			$('.welcome-head').next('div').css( {
				'width' : '80px',
				'height' : '80px',
				'position' : 'absolute',
				'left' : x + 'px',
				'top' : y + 'px',
				'background-color' : 'rgb(' + r + ',' + g + ',' + b + ')',
				'box-shadow' : '0px 0px 8px #000',
				'border-radius' : '8px',
				'z-index' : r
			});
		} else {
			return false;
		}
	});
	// 删除div
	$('.div_box').live('dblclick', function() {
		$(this).remove();
	});
	// 确定鼠标在方块上
	$('.div_box').live('mouseover', function() {
		flag = 1;
	});
	// 确定鼠标不在方块上
	$('.div_box').live('mouseout', function() {
		flag = 0;
	});

	// 选中div时计算鼠标和方块此刻的坐标
	$('.div_box').live('mousedown', function(e) {
		var offset = $(this).offset();
		div_y = offset.top;
		div_x = offset.left;
		mouse_x = e.pageX;
		mouse_y = e.pageY;
		$(this).addClass('move');
		z_index_status = $(this).css('z-index');
		$(this).css('z-index', 300);
	});
	// 选中div鼠标弹起时
	$('.move').live('mouseup', function(e) {
		$(this).css('z-index', z_index_status);
		$(this).removeClass('move');
	});
	// 拖拽div
	$(document).mousemove(function(e) {
		var x = div_x + (e.pageX - mouse_x);
		var y = div_y + (e.pageY - mouse_y);
		$('.move').css( {
			'position' : 'absolute',
			'left' : x + 'px',
			'top' : y + 'px'
		});
	});
});