const splashlist=document.querySelector(".splashlist");
const splash=document.querySelector(".splash");
function endsplash(){
	splash.style.transform="translateX(-100%)";
}
function awardBadge(n){
	let badge=document.querySelector(`.badgelist>li:nth-child(${n+1}) img`);
	badge.style.filter="none";
	let splashitem=document.createElement("li");
	splashitem.appendChild(badge.cloneNode(false));
	splashlist.appendChild(splashitem);
	document.querySelector(".splash div h1").innerHTML="Congratulations! You've won some badges!"
}
splash.addEventListener("click",endsplash);

let data=[1999,1990,1990,0,0,9,0,0,0,0];
// pehle paanch categories, sixth is rank, warrior attempt, warrior correct, total attempt, total correct
const max=2000;
const totalque = 22;
const totalwar = 5;
for(i=0;i<5;i++)
{
	if(data[i]>0.85*2000)
	{
	awardBadge(i);
	}
}

if(data[5]<101) //rank
{
	awardBadge(5);
}
if(data[6]===totalwar) //braveheart
{
	awardBadge(6);
}
if(data[7]===totalwar) //god!!!
{
	awardBadge(7);
}
if((data[9]/data[8]*100)>=85)
{
awardBadge(8);
}
