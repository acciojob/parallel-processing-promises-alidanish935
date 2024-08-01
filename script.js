//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

btn.addEventListener('click',()=>{
	const dawnloadPromisses = images.map(dawnloadImage)
	Promise.all(dawnloadPromisses)
	.then(displayImage)
	.catch(error=>console.log(error))
})

function dawnloadImage(image){
	return new Promise((resolve,reject)=>{
		const img = new Image();
		img.onload = ()=> resolve(img);
		img.onerror = ()=> reject(new Error(`Failed to load image's URL: ${image.url}`));
		img.src = image.url;
	})
}
function displayImage(images){
	images.forEach(img=> output.appendChild(img));
}
