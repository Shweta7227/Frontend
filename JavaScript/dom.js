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
console.dir(d[0].innerText="This is new para edited by tagname selector"); //it is edited by get object particular property through chaining and edit it by assigning;

//Query Selector:)
let e = document.querySelector('p'); //way to select the element
console.log("The first para it selected is :)");
console.dir(e);
console.log(document.querySelector('#first'));
console.log(document.querySelector('.boxLink'));

//Step2: Mainpulation :)
 let para2=document.querySelector("#description");
 para2.innerText=para2.textContent;
// console.log(para2.innerHTML);

let heading =document.querySelector('h1');
// heading.innerText=heading.innerHTML;
// conoso.log()
heading.innerText=`<u>${heading.innerHTML}</u>` //<u><b>Spider Man</b></u>
heading.innerHTML=`<u>${heading.innerText}</u>`//Spider Man with underline


//Manipulation of attribute
let imgs=document.querySelector('img'); //select an element by id, classname, tag
console.log(imgs.getAttribute('src')); //you'll get the value of the src atribute of the image
imgs.setAttribute('src','assets/creation_3.jpeg');
console.log(imgs.getAttribute('src'));

let head=document.querySelector('h1');
head.style.color="purple"; //this manipulation can change inline css only

let links=document.querySelectorAll(".boxLink");
for(link of links){
    link.style.color="yellow";
}

//using classList : we can add multiple classes in one element
// to add class
head.classList.add('head'); //now we can see the all classnames by : console.log(head)
head.classList.add('first');
console.log(head.classList.contains('heading')); //false
head.classList.remove('first');
console.log(head.classList.toggle('first')); // added into the classList because previously removed by remove method
console.log(head.classList.toggle('first')); //if present then remove else add 

//Navigation
//  types of navigation: 1. parentElement 2.children                    3. previousElementSibling / nextElementSibling

// head.document.querySelector('h1')
console.log(head.parentElement);
console.log(head.children);
console.log(head.childElementCount);
console.log(head.nextElementSibling);

let p1=document.querySelector('p');
console.log(p.children); //length 6: b,a,b,b,a,a
console.log(p.children[0]); //first : b tag
console.log(p.children[0].nextElementSibling); // <a>marvel comic</a>
console.log(p.children[0].previousElementSibling); //null itself is first sibling
console.log(p.children[2].previousElementSibling);


//adding element on page:

// 1. document.createElement('element name');
// 2.appendChild('element_name');
//3.append('element_name')
// 4. prepand('element_name')
// 5. insertAdjacent(where,whom)
 
let newh=document.createElement('h3');
console.dir(newh);
newh.innerText="hello this is  heading with size 3";
console.dir(newh);
let body1=document.querySelector('body');
body.appendChild(newh); //added at the last of the parent
head.append(newh); //added inside the head object but just before ending of it
head.prepend(newh); //added inside the  head but at the starting of it even before their own content
let para=document.querySelector("#description");
para.insertAdjacentElement('beforebegin',newh);
para.insertAdjacentElement('afterbegin',newh);
para.insertAdjacentElement('beforeend',newh);
// para.insertAdjacentElement('afterend',newh);


//Removing element:)


para.removeChild(newh);
para.remove();

//Practice Questions
let p=document.createElement('p');
let val="Hey,I'm red!"
p.innerText=p.innerHTML=`"${val}"`
p.style.color="red";
let body=document.querySelector('body');
body.append(p);
let h3=document.createElement('h3');
// lval=;
h3.innerText=h3.innerHTML=`"${"I'm a blue h3!"}"`;
h3.style.color="blue";
body.append(h3);
let div=document.createElement('div');
div.style.border="2px solid black";
div.style.backgroundColor="pink";
div.innerText="This is div";
let h=document.createElement('h1');
let pd=document.createElement('p');
pd.innerText=h.innerHTML=`"${"Me Too!"}"`;
h.innerText=h.innerHTML=`"${"I'm in a div"}"`;
div.append(h);
div.append(pd);
body.append(div);
