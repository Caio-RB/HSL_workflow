const  menu_click =  document.getElementsByClassName("menu__click")[0];
const menu_button = document.getElementsByClassName("menu__button")[0];

menu_click.addEventListener("click",() =>{
	if(menu_button.className.includes("bx-menu")){
		menu_button.classList.remove("bx-menu");
		menu_button.classList.add("bx-x");
	}
	else{
		menu_button.classList.remove("bx-x");
		menu_button.classList.add("bx-menu");
	}
})