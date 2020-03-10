function awardbadge(i){
	let badge=document.querySelector(`ul li:nth-of-type(${i+1})`);
	badge.style.backgroundColor="green";
}
let data=[0,1999,0,1000,0,0,5,0,0,0];
// pehle paanch categories, sixth is rank, warrior attempt, warrior correct, total attempt, total correct
const max=2000;
const totalque = 22;
const totalwar = 5;
for(i=0;i<5;i++)
{
	if(data[i]>0.85*2000)
	{
	awardbadge(i);
	}
}

if(data[5]<101)
{
	awardbadge(5);
}
if(data[6]===totalwar) //braveheart
{
	awardbadge(6);
}
if(data[7]===totalwar) //god!!!
{
	awardbadge(7);
}
if((data[9]*100.0)/data[8]>=85)
{
awardbadge(8)
}
