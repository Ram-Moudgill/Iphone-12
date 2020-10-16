const ham=document.getElementsByClassName('fa-bars');const sidebar=document.getElementById("sidebar");
console.log(ham[0]);
ham[0].addEventListener('click',()=>
{
    if(sidebar.style.right != "0px")
    {
    sidebar.style.right="0px";
    }
    else
    {
        sidebar.style.right="-300px";
    }
})