//倒车入库
var carMove = function(){
	this.r = 0;
	this.x = 0;
	this.y = 0;
	this.step = 20;
	this.rota = 8;
	this.css = {
		l: 420,
		t: 22
	}
	this.init();
}

carMove.prototype = {
	init: function(){
		this.move();
	},
	up: function(){
		if((this.css.t+this.y)>this.step){
			if(Math.abs(this.r)<75){
				this.y -= this.step;
			}else{
				if(this.x<0){
					this.x += this.step;
				}else{
					alert('撞墙了');
					return false;
				}
			}
		}else{
			alert('前面没路了');
			return false;
		}
		
		this.move();
		this.result();
	},
	down: function(){
		if(this.y<650){
			if(Math.abs(this.r)<75){
				this.y += this.step;
			}else{
				if(this.x>-380){
					this.x -= this.step;
				}else{
					alert('没有路了');
					return false;
				}
			}
		}else{
			alert('后面没路了');
			return false;
		}

		this.move();
		this.result();
	},
	left: function(){
		if(this.y>400){
			this.r-=this.rota;
		}else{
			this.r+=this.rota;
		}
		this.move();
		this.result();
	},
	right: function(){
		if(this.y>400){
			this.r+=this.rota;
		}else{
			this.r-=this.rota;
		}
		this.move();
		this.result();
	},
	move: function(){
		$('.car').attr({'data-r':this.r, 'data-x':this.x, 'data-y': this.y }).css({ 'left':this.css.l, 'top':this.css.t }).animate({'-webkit-transform':'translate('+this.x+'px, '+this.y+'px) rotate('+this.r+'deg)', 'transform':'translate('+this.x+'px, '+this.y+'px) rotate('+this.r+'deg)' }, 100)
	},
	result: function(){
		if(this.x>-370 && this.x<-330 && this.y>282 && this.y<330){
			alert('成功')
		}
	}
}
