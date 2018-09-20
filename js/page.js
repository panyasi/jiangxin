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

const indexPage = {
	data:{
		isLock:false,
		newIndex:cardData.length,
		this_item:null,
		maxWidth:null,
		maxHeight:null,
		initClientX:null,
		initClientY:null,
		initOffsetLeft:null,
		initOffsetTop:null
	},
	init:function(){
		this.bind();
		this.setItem();
	},
	bind:function(){
		$('#submit-btn').on('click',this.addItem);
		$('.saying-wall').on('mousedown','.wall-item',this.mouseDownEvent);
		$('.saying-wall').on('mousemove',this.mouseMoveEvent);
		$('.saying-wall').on('mouseup','.wall-item',this.mouseUpEvent);
		$('.saying-wall').on('mouseleave',this.mouseLeaveEvent);
	},
	setItem:function(){
		let item = document.getElementsByClassName('wall-item');
		let sayingWallWidth = $('.saying-wall').width();
		let sayingWallHeight = $('.saying-wall').height();
		let itemWidth = item[0].clientWidth;
		let itemHeight = item[0].clientHeight;
		let maxWidth = sayingWallWidth - itemWidth;
		let maxHeight = sayingWallHeight - itemHeight;
		indexPage.data.maxWidth = maxWidth;
		indexPage.data.maxHeight = maxHeight;
		let html = '';
		cardData.forEach(data =>{
			let randomTop = indexPage.randomBetween(0,maxHeight);
			let randomLeft = indexPage.randomBetween(0,maxWidth);
			let tmp = 
			`<div class="wall-item" style="left:${randomLeft + "px"};top:${randomTop + "px"}">
			<span class="item-name">${data.name}</span><span class="item-context">${data.context}</span>
			</div>`;
			html += tmp
		})
		$('.saying-wall').append(html);
	},
	addItem:function(e){
		e.preventDefault();
		let maxWidth = indexPage.data.maxWidth;
		let maxHeight = indexPage.data.maxHeight;
		let randomTop = indexPage.randomBetween(0,maxHeight);
		let randomLeft = indexPage.randomBetween(0,maxWidth);
		let contentValue = $('#text-content').val();
		if(contentValue !== ''){
			var newItem = `<div class="wall-item" style="left:${randomLeft + "px"};top:${randomTop + "px"}"><span class="item-name">${'username'}</span><span class="item-context">${contentValue}</span></div>`;
			$('.saying-wall').append(newItem);
		}
	},
	mouseDownEvent:function(e){
		indexPage.data.isLock = true;
		indexPage.this_item = $(this);
		//存储原始鼠标点击位置
		indexPage.data.initClientX = e.clientX;
		indexPage.data.initClientY = e.clientY;
		//存储item相对于父级元素的距离
		indexPage.data.initOffsetLeft = $(this).position().left;
		indexPage.data.initOffsetTop = $(this).position().top;
		//点击更新存储index，为item设置index
		indexPage.data.newIndex += 1;
		$(this).css("z-index",indexPage.data.newIndex)
	},
	mouseMoveEvent:function(e){
		if(!indexPage.data.isLock){
			return
		}
		let curentClientX = e.clientX;
		let curentClientY = e.clientY;
		let initClientX = indexPage.data.initClientX;
		let initClientY = indexPage.data.initClientY;
		let initOffsetLeft = indexPage.data.initOffsetLeft;
		let initOffsetTop = indexPage.data.initOffsetTop;
		let tanslateX = curentClientX - initClientX + initOffsetLeft;
		let tanslateY = curentClientY - initClientY + initOffsetTop;
		indexPage.this_item.css({
				"left":tanslateX,
				"top":tanslateY
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
	},
	mouseUpEvent:function(){
		indexPage.data.isLock = false;
		indexPage.mouseMoveEvent = null;
		indexPage.mouseUpEvent = null;
	},
	mouseLeaveEvent:function(){
		indexPage.data.isLock = false;
		indexPage.mouseUpEvent = null
	},
	randomBetween:function(min,max){
		return Math.floor( Math.random() * (max - min) + min);
	}
}
indexPage.init();
