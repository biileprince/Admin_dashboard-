const sideMenu = document.querySelector("aside");
const MenuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

////////////////////////////////show sidebar menu////////////////////////////////
MenuBtn.addEventListener("click", function () {
  sideMenu.style.display = "block";
});
////////////////////////////////hide sidebar menu////////////////////////////////
closeBtn.addEventListener("click", function () {
  sideMenu.style.display = "none";
});
////////////////////////////////Change theme////////////////////////////////
themeToggler.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme-variables");
  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
});

//Fill orders in Table
orders.forEach((order) => {
  const tr = document.createElement("tr");
  const trContent = ` <td>${order.productName}</td>
                <td>${order.productNumber}</td>
                <td>${order.paymentStatus}</td>
                <td class=${
                  order.shipping === "declined"
                    ? "danger"
                    : order.shipping === "pending"
                    ? "warning"
                    : "primary"
                }> ${order.shipping}</td>
                <td class="primary">Details</td>`;
  tr.innerHTML = trContent;
  document.querySelector("body tbody").appendChild(tr);
});
