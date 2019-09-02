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
	let li = document.createElement('li');
	li.innerText = item;
	list.appendChild(li);
}
data.forEach(item => {
	appendLi(item);
})
btn.onclick = function(){
	let val = txt.value;
	if(!val.trim()) return;
	data.push(val);
	localStorage.data = JSON.stringify(data);
	appendLi(val);
	txt.value = '';
}