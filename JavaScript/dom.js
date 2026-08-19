// Step 1: Selecting element:)
//Selecting the element by their id :
let a = document.getElementById("first");
console.log(a); //this will show us tag which is got selected 
console.dir(a); //this will gives you the real object
console.log(typeof a); //object


//select the element by className:
let b=document.getElementsByClassName("box");
console.dir(b); //why i got the collection with name HTMLCOLLECTION
console.log(b);

//one class name of mutliple tags:)
let c=document.getElementsByClassName("boxLink");
for(let i=0;i<c.length;i++){
    console.dir(c[i]);
}

//image clasname :)
let img=document.getElementsByClassName("oldImg");
for(let i=0;i<img.length;i++){
    console.log(img[i]);
}
console.log("Edit the images");
for(let i=0;i<img.length;i++)
{
    img[i].src="assets/creation_2.jpeg";
}
console.log("Images edited!!");
for(let i=0;i<img.length;i++){
    console.log(img[i]);
}

//Select elements by tagname:)

let d=document.getElementsByTagName("p");
// for(let i=0;i<d.length;i++)
// {
//     console.log(d[i]);
// }
console.dir(d[0].innerHTML="This is new para edited by tagname selector"); //it is edited by get object particular property through chaining and edit it by assigning;

//Query Selector:)
let e = document.querySelector('p'); //way to select the element
console.log("The first para it selected is :)");
console.dir(e);
console.log(document.querySelector('#first'));
console.log(document.querySelector('.boxLink'));

//Step2: Mainpulation :)
 