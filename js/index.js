var cardData = [{
	name:'小兔兔说：',
	context: '耿昌宇老师，我是7月5日购买课程的学员，还有一个视频就全部学完了。你的课程简单易学非常感谢，恰逢新年来临送上我的祝福！'
},{
	name:'小兔兔说：',
	context: '耿昌宇老师，我是7月5日购买课程的学员，还有一个视频就全部学完了。你的课程简单易学非常感谢，恰逢新年来临送上我的祝福！'
},{
	name:'小兔兔说：',
	context: '耿昌宇老师，我是7月5日购买课程的学员，还有一个视频就全部学完了。你的课程简单易学非常感谢，恰逢新年来临送上我的祝福！'
},{
	name:'小兔兔说：',
	context: '耿昌宇老师，我是7月5日购买课程的学员，还有一个视频就全部学完了。你的课程简单易学非常感谢，恰逢新年来临送上我的祝福！'
},{
	name:'小兔兔说：',
	context: '耿昌宇老师，我是7月5日购买课程的学员，还有一个视频就全部学完了。你的课程简单易学非常感谢，恰逢新年来临送上我的祝福！'
},{
	name:'小兔兔说：',
	context: '耿昌宇老师，我是7月5日购买课程的学员，还有一个视频就全部学完了。你的课程简单易学非常感谢，恰逢新年来临送上我的祝福！'
},{
	name:'小兔兔说：',
	context: '耿昌宇老师，我是7月5日购买课程的学员，还有一个视频就全部学完了。你的课程简单易学非常感谢，恰逢新年来临送上我的祝福！'
},{
	name:'小兔兔说：',
	context: '耿昌宇老师，我是7月5日购买课程的学员，还有一个视频就全部学完了。你的课程简单易学非常感谢，恰逢新年来临送上我的祝福！'
},{
	name:'小兔兔说：',
	context: '耿昌宇老师，我是7月5日购买课程的学员，还有一个视频就全部学完了。你的课程简单易学非常感谢，恰逢新年来临送上我的祝福！'
},{
	name:'小兔兔说：',
	context: '耿昌宇老师，我是7月5日购买课程的学员，还有一个视频就全部学完了。你的课程简单易学非常感谢，恰逢新年来临送上我的祝福！'
},{
	name:'小兔兔说：',
	context: '耿昌宇老师，我是7月5日购买课程的学员，还有一个视频就全部学完了。你的课程简单易学非常感谢，恰逢新年来临送上我的祝福！'
},{
	name:'小兔兔说：',
	context: '耿昌宇老师，我是7月5日购买课程的学员，还有一个视频就全部学完了。你的课程简单易学非常感谢，恰逢新年来临送上我的祝福！'
},{
	name:'小兔兔说：',
	context: '耿昌宇老师，我是7月5日购买课程的学员，还有一个视频就全部学完了。你的课程简单易学非常感谢，恰逢新年来临送上我的祝福！'
},{
	name:'小兔兔说：',
	context: '耿昌宇老师，我是7月5日购买课程的学员，还有一个视频就全部学完了。你的课程简单易学非常感谢，恰逢新年来临送上我的祝福！'
},{
	name:'小兔兔说：',
	context: '耿昌宇老师，我是7月5日购买课程的学员，还有一个视频就全部学完了。你的课程简单易学非常感谢，恰逢新年来临送上我的祝福！'
},{
	name:'小兔兔说：',
	context: '耿昌宇老师，我是7月5日购买课程的学员，还有一个视频就全部学完了。你的课程简单易学非常感谢，恰逢新年来临送上我的祝福！'
},{
	name:'小兔兔说：',
	context: '耿昌宇老师，我是7月5日购买课程的学员，还有一个视频就全部学完了。你的课程简单易学非常感谢，恰逢新年来临送上我的祝福！'
},{
	name:'小兔兔说：',
	context: '耿昌宇老师，我是7月5日购买课程的学员，还有一个视频就全部学完了。你的课程简单易学非常感谢，恰逢新年来临送上我的祝福！'
},]
var indexPage = {
	init:function(){
		this.bind();
		this.setDiv();
	},
	bind:function(){
		$('.saying-wall').on('mousedown','.wall-item',this.mouseDownEvent);
		$('.saying-wall').on('mousemove',this.mouseMoveEvent);
		$('.saying-wall').on('mouseup','.wall-item',this.mouseUpEvent);
		$('.saying-wall').on('mouseleave',this.mouseLeaveEvent);
		$('#submit-btn').on('click',this.addDiv)
	},
	h:null,
	w:null,
	lock:false,
	startX:null,
	stratY:null,
	this_item:null,
	newIndex:cardData.length,
	setDiv:function(){
		cardData.forEach(data =>{
			indexPage.h = $('.saying-wall').height()-165;
			indexPage.w = $('.saying-wall').width()-320;
			var itemLeft = Math.floor(Math.random()*indexPage.w);
			var itemTop = Math.floor(Math.random()*indexPage.h);
			// console.log(itemLeft,itemTop);
			var newItem = `<div class="wall-item" style="left:${itemLeft + "px"};top:${itemTop + "px"}"><span class="item-name">${data.name}</span><span class="item-context">${data.context}</span></div>`;
			$('.saying-wall').append(newItem);

		})
	},
	addDiv:function(e){
		e.preventDefault();
		var itemLeft = Math.floor(Math.random()*indexPage.w);
		var itemTop = Math.floor(Math.random()*indexPage.h);
		var contentValue = $('#text-content').val();
		console.log(contentValue);
		if($('#text-content').val() !== ''){
			var newItem = `<div class="wall-item" style="left:${itemLeft + "px"};top:${itemTop + "px"}"><span class="item-name">${'username'}</span><span class="item-context">${contentValue}</span></div>`;
			$('.saying-wall').append(newItem);
		}
	},
	mouseDownEvent:function(e){
		indexPage.lock = true;
		indexPage.this_item = $(this);
		indexPage.startX = e.clientX - $(this).position().left;
		indexPage.startY = e.clientY - $(this).position().top;
		indexPage.newIndex += 1;
		console.log(e.clientX,$(this).position().left,"x");
		console.log(e.clientY,$(this).position().top,"y")

		$(this).css("z-index",indexPage.newIndex)
	},
	mouseMoveEvent:function(e){
		e.preventDefault();
		if(indexPage.lock){
			indexPage.this_item.css({
				"left":e.clientX - indexPage.startX,
				"top":e.clientY - indexPage.startY
			});
			if (indexPage.this_item.position().left <= 0) {
					indexPage.this_item.css('left', 0 + "px");
				}
				if (indexPage.this_item.position().top <= 0) {
					indexPage.this_item.css('top',0 + "px");
				}
				if (indexPage.this_item.position().left >= 618) {
					indexPage.this_item.css('left', 618 + "px");
				}
				if (indexPage.this_item.position().top >= 366) {
					indexPage.this_item.css('top', 366 + "px");
				}
			
		}
	},
	mouseUpEvent:function(){
		indexPage.lock = false;
		indexPage.mouseMoveEvent = null;
		indexPage.mouseUpEvent = null;
		console.log('lock')
	},
	mouseLeaveEvent:function(){
		indexPage.lock = false;
		indexPage.mouseUpEvent = null

	}
}
indexPage.init();