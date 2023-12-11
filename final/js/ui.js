// setup materialize components
document.addEventListener("DOMContentLoaded", function () {
    var modals = document.querySelectorAll(".modal");
    M.Modal.init(modals);
  
    var items = document.querySelectorAll(".collapsible");
    M.Collapsible.init(items);
  });
  
  const orders = document.querySelector(".orders");
  const loggedOutLinks = document.querySelectorAll(".logged-out");
  const loggedInLinks = document.querySelectorAll(".logged-in");
  
  const setupUI = (user) => {
    if (user) {
      //toggle UI elements
      loggedInLinks.forEach((item) => (item.style.display = "block"));
      loggedOutLinks.forEach((item) => (item.style.display = "none"));
    } else {
      //toggle UI elements
      loggedInLinks.forEach((item) => (item.style.display = "none"));
      loggedOutLinks.forEach((item) => (item.style.display = "block"));
    }
  };
  
  document.addEventListener("DOMContentLoaded", function () {
    //Nav Menu
    const menus = document.querySelectorAll(".side-menu");
    M.Sidenav.init(menus, { edge: "right" });
    // Add Orders
    const forms = document.querySelectorAll(".side-form");
    M.Sidenav.init(forms, { edge: "left" });
  });
  
  //Populate data
  const setupOrders = (data) => {
    let html = "";
    data.forEach((doc) => {
      const order = doc.data();
      const li = `    
      <div class="card-panel order white row" data-id ="${order.id}">
      <img src="/img/task.png" class="responsive-img materialboxed" alt="">
      <div class="order-detail">
          <div class="order-title">${order.title}</div>
          <div class="order-description">${order.description}</div>
      </div>
      <div class="order-delete">
          <i class="material-icons" data-id ="${order.id}">delete_outline</i>
      </div>
  </div>`;
      html += li;
    });
  
    orders.innerHTML = html;
  };
  
  const renderOrder = (data, id) => {
    const html = `
    <div class="card-panel order white row" data-id ="${id}">
              <img src="/img/task.png" class="responsive-img materialboxed" alt="">
              <div class="order-detail">
                  <div class="order-title">${data.title}</div>
                  <div class="order-description">${data.description}</div>
              </div>
              <div class="order-delete">
                  <i class="material-icons" data-id ="${id}">delete_outline</i>
              </div>
          </div>
    `;
  
    orders.innerHTML += html;
  };
  
  //remove order from DOM
  const removeOrder = (id) => {
    const order = document.querySelector(`.order[data-id ='${id}']`);
    // console.log(order);
    order.remove();
  };

