let btn = document.querySelector('.btn');
let txt = document.querySelector('.input');
let list = document.querySelector('.list');
let data = localStorage.getItem('data');
if(data){
	data = JSON.parse(data);
}else{
	data = [];
}
function appendLi(item){
	data.push(val);
	li.innerText = item;
	list.appendChild(li);
}
data.forEach(item => {
	appendLi(item);
})
btn.onclick = function(){
	let val = txt.value;
	if(!val.trim()) return;
	localStorage.data = JSON.stringify(data);
	let li = document.createElement('li');
	appendLi(val);
	txt.value = '';
}