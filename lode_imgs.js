//2016年4月22日17:25:46

//加载图片
var imgs =  ['birds.png', 'land.png', 'pipe1.png', 'pipe2.png', 'sky.png'];

var imgObjects = [];
var loadCount = 0;
//图片完成的监听
function listener () {
	loadCount ++;
	if(loadCount >= imgs.length) {
		main();
	}
}

imgs.forEach(function(imgurl){
	//通过遍历，创建了五个img标签
	var img = new Image();
	img.addEventListener('load',listener);
	img.src = './imgs/' + imgurl;
	imgObjects.push(img);
});
