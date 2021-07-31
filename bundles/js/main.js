let flag1 = false;
function showBlog1() {
    flag1 = !flag1;
    if (flag1) {
        document.getElementById("first").style.display = "block";
    } else {
        document.getElementById("first").style.display = "none";
    }
}
