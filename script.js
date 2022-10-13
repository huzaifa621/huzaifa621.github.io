var count = 0;
document.getElementById("count").addEventListener("click", () => {
   count++;
   document.getElementById("count").innerHTML = count;
});
