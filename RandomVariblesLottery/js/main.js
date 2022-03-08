function init(){
	//页面键盘点击时触发
	document.onkeydown=showKeyDown;
}

function showKeyDown(evt){
	evt = (evt) ? evt : window.event ;

	if(evt.keyCode== 64 + 17){
		//q 幸运奖
		f_clearx();
		f_mathchinax();
	}
	if(evt.keyCode== 64 + 23){
		//w 三等奖
		f_clearx();
		f_mathx();
		f_eoox();
	}
	if(evt.keyCode== 64 + 05){
		//e 二等奖
		f_clearx();
		f_mathx();
		f_eoox();
		f_numx();
	}
	if(evt.keyCode== 64 + 18){
		//r 一等奖
		f_clearx();
		f_mathx();
		f_numxx();	
		}
	
	if(evt.keyCode== 64 + 19){
		//s 重抽奇偶性
		f_eoox();
	}
	if(evt.keyCode== 64 + 1){
		//a 重抽数学家
		f_mathx();
	}
	if(evt.keyCode== 64 + 04){
		//d 重抽0~9
		f_numx()   
	}
	if(evt.keyCode== 64 + 06){
		//f 重抽00~99
		f_numxx()
	}
	
	if(evt.keyCode== 64 + 26){
		//z 清屏
		f_resetx()
	}
	
	if(evt.keyCode== 64 + 24){
		//x 清屏
		f_clearx()
	}
	
	if(evt.keyCode== 64 + 16){
		// 清屏 + 黑幕
		f_clearx();
		f_mathx_black()
		f_numxx_black()
	}
	
}

var evenorodd = [
	"奇数 Odd",
	"偶数 Even"
]


var mathematicians_china = [
	"刘徽",
	"祖冲之",
	"陈景润",
	"华罗庚",
	"陈省身"
]

var mathematicians_china_src = [
	"img/card/刘徽.png",
	"img/card/祖冲之.png",
	"img/card/陈景润.png",
	"img/card/华罗庚.png",
	"img/card/陈省身.png"
]

var mathematicians_zh_src = [
	"img/card/毕达哥拉斯.png",
	"img/card/欧几里得.png",
	"img/card/芝诺.png",
	"img/card/高斯.png",
	"img/card/莱布尼茨.png",
	"img/card/康托尔.png",
	"img/card/狄利克雷.png",
	"img/card/笛卡尔.png",
	"img/card/拉格朗日.png",
	"img/card/费马.png",
	"img/card/柯西.png",
	"img/card/傅里叶.png",
	"img/card/罗素.png",
	"img/card/欧拉.png",
	"img/card/伯努利.png",
	"img/card/阿贝尔.png",
	"img/card/斐波那契.png",
	"img/card/刘徽.png",
	"img/card/祖冲之.png",
	"img/card/陈景润.png",
	"img/card/华罗庚.png",
	"img/card/陈省身.png"
]


var mathematicians_zh = [
	"毕达哥拉斯",
	"欧几里得",
	"芝诺 ",
	"高斯",
	"莱布尼茨",
	"康托尔",
	"狄利克雷",
	"笛卡尔",
	"拉格朗日",
	"费马",
	"柯西",
	"傅里叶",
	"罗素",
	"欧拉",
	"伯努利",
	"阿贝尔",
	"斐波那契",
	"刘徽",
	"祖冲之",
	"陈景润",
	"华罗庚",
	"陈省身"
]


var mathematicians_en = [
	"Pythagoras of Samos",
	"Euclid of Alexandria",
	"Zeno of Elea",
	"Johann Carl Friedrich Gauss",
	"Gottfried Wilhelm (von) Leibniz",
	"Georg Ferdinand Ludwig Philipp Cantor",
	"Peter Gustav Lejeune Dirichlet",
	"René Descartes",
	"Joseph-Louis Lagrange",
	"Pierre de Fermat",
	"Augustin-Louis Cauchy",
	"Jean-Baptiste Joseph Fourier",
	"Bertrand Arthur William Russell",
	"Leonhard Euler",
	"Jacob Bernoulli",
	"Niels Henrik Abel",
	"Leonardo Bonacci",
	"-",
	"-",
	"-",
	"-",
	"-"
]

function f_resetx(){ // 0~9
	document.getElementById("evenorodd").innerHTML = "现在进行"
	document.getElementById("mathematician_").innerHTML = "欢迎来到数学科学系学生节"
	document.getElementById("mathematician").innerHTML = "『未知数 · 结』"
	document.getElementById("numbers").innerHTML = "~抽奖环节~"
	document.getElementById("cardd").src = ""
}

function f_clearx(){ // 0~9
	document.getElementById("evenorodd").innerHTML = ""
	document.getElementById("mathematician").innerHTML = ""
	document.getElementById("mathematician_").innerHTML = ""
	document.getElementById("numbers").innerHTML = ""
	document.getElementById("cardd").src = ""
}

function sleep(delay) {
  return new Promise(reslove => {
	setTimeout(reslove, delay)
  })
}

function f_eoox(){
	!async function f_eoo() {
		for (let i = 0; i < 100; i++)
		{
			await sleep(i)
			var randomNumber = i % evenorodd.length;
			document.getElementById("evenorodd").innerHTML = evenorodd[randomNumber]
		}
		await sleep(400)
			var randomNumber = Math.floor(Math.random() * evenorodd.length);
			document.getElementById("evenorodd").innerHTML = evenorodd[randomNumber]				
	}()				
}


function f_mathchinax(){
	!async function f_math() {
		for (let i = 0; i < 100; i++)
		{
			await sleep(i)
			var randomNumber = i % mathematicians_china.length;
			document.getElementById("mathematician").innerHTML = mathematicians_china[randomNumber]
			document.getElementById("cardd").src = mathematicians_china_src[randomNumber]
		}
		await sleep(400)
			var randomNumber = Math.floor(Math.random() * mathematicians_china.length);
			document.getElementById("mathematician").innerHTML = mathematicians_china[randomNumber]
			document.getElementById("cardd").src = mathematicians_china_src[randomNumber]
	}()				
}

function f_mathx(){
	!async function f_math() {
		for (let i = 0; i < 100; i++)
		{
			await sleep(i)
			var randomNumber = i % mathematicians_en.length;
			document.getElementById("mathematician_").innerHTML = mathematicians_en[randomNumber]
			document.getElementById("mathematician").innerHTML = mathematicians_zh[randomNumber]
			document.getElementById("cardd").src = mathematicians_zh_src[randomNumber]
		}
		await sleep(400)
			var randomNumber = Math.floor(Math.random() * mathematicians_en.length);
			document.getElementById("mathematician_").innerHTML = mathematicians_en[randomNumber]
			document.getElementById("mathematician").innerHTML = mathematicians_zh[randomNumber]
			document.getElementById("cardd").src = mathematicians_zh_src[randomNumber]

	}()				
}

function f_mathx_black(){
	!async function f_math() {
		for (let i = 0; i < 100; i++)
		{
			await sleep(i)
			var randomNumber = i % mathematicians_en.length;
			document.getElementById("mathematician_").innerHTML = mathematicians_en[randomNumber]
			document.getElementById("mathematician").innerHTML = mathematicians_zh[randomNumber]
			document.getElementById("cardd").src = mathematicians_zh_src[randomNumber]
		}
		await sleep(400)
			var randomNumber = 4;
			document.getElementById("mathematician_").innerHTML = mathematicians_en[randomNumber]
			document.getElementById("mathematician").innerHTML = mathematicians_zh[randomNumber]
			document.getElementById("cardd").src = 	"img/card/tuo.png"

	}()				
}

function f_numxx(){ // 00~99
	!async function f_num() {
		for (let i = 0; i < 100; i++)
		{
			await sleep(i)
			var randomNumber = Math.floor(Math.random() * 100);
			var output = ""
			if (randomNumber < 10)
			{
				output = "0" + randomNumber
			}
			else
			{
				output = randomNumber
			}
			document.getElementById("numbers").innerHTML = output
		}
		await sleep(400)
			var randomNumber = Math.floor(Math.random() * 100);
			var output = ""
			if (randomNumber < 10)
			{
				output = "0" + randomNumber
			}
			else
			{
				output = randomNumber
			}
			document.getElementById("numbers").innerHTML = output
	}()				
}


function f_numxx_black(){ // 00~99
	!async function f_num() {
		for (let i = 0; i < 100; i++)
		{
			await sleep(i)
			var randomNumber = Math.floor(Math.random() * 100);
			var output = ""
			if (randomNumber < 10)
			{
				output = "0" + randomNumber
			}
			else
			{
				output = randomNumber
			}
			document.getElementById("numbers").innerHTML = output
		}
		await sleep(400)
			document.getElementById("numbers").innerHTML = "93"
	}()				
}


function f_numx(){ // 0~9
	!async function f_num() {
		for (let i = 0; i < 100; i++)
		{
			await sleep(i)
			var randomNumber = i % 10;
			document.getElementById("numbers").innerHTML = randomNumber
		}
		await sleep(400)
			var randomNumber = Math.floor(Math.random() * 10);
			document.getElementById("numbers").innerHTML = randomNumber
	}()				
}