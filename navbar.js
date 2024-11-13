const link_html = document.getElementsByClassName("menu__link");
const link_button = Array.from(link_html);
const active_link = "var(--active-link-color)";
const disabled_link = "var(--disabled-link-color)";

function ChangeLinkColor(menu_link){
    link_button.forEach((slot)=>{
        slot.style.color = disabled_link;
    })
    menu_link.style.color = active_link;
}
// Set click event on menu links
link_button.forEach((link)=>{
    link.addEventListener("click", ()=>{
            ChangeLinkColor(link);
    })
})

