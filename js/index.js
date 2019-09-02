let btn = document.querySelector('.btn');
let txt = document.querySelector('.input');
let list = document.querySelector('.list');
let data = localStorage.getItem('data');
if(data){
	data = JSON.parse(data);
}else{
	data = [];
}
let str = '';
data.forEach(item => {
	str += '<li>'+item+'</li>';
})
list.innerHTML = str;
btn.onclick = function(){
	let val = txt.value;
	data.push(val);
	console.log(data);
	localStorage.data = JSON.stringify(data);
	let str = '<li>'+val+'</li>';
	list.innerHTML += str;
	txt.value = '';
}