const transecton_list = document.getElementById("transection_list");
const main_balance = document.getElementById("main_balance");
const create_transaction_form = document.getElementById("create_transaction_form");
const btn_close = document.querySelector(".btn-close");


const mainTransecton =()=> {
  
let transectionUi = "";
let cashIn =0;
let cashOut =0;
  const mainData = JSON.parse(localStorage.getItem("Data"));
  mainData.reverse().forEach((item, index) => {
    if (item.type === "Cash In") {
      cashIn += item.amount
    } else {
      cashOut += item.amount;
    }
    transectionUi += `
        <div class="transaction-item">
              <div class="trans-info">
                <img
                  src="https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-1/333936078_1361956414655948_834213367116914942_n.jpg?stp=c4.48.545.546a_dst-jpg_s320x320_tt6&_nc_cat=102&ccb=1-7&_nc_sid=e99d92&_nc_ohc=AYcCqHOm9YkQ7kNvgFZgcB5&_nc_zt=24&_nc_ht=scontent.fdac5-2.fna&_nc_gid=AoU6hBZ2RW_cybF33GF1VPN&oh=00_AYB2AD67hwpaL1s7RZc2INydLgCbG130HIZ7nURDaxZmHw&oe=67AF84D7"
                  alt=""
                />
                <div class="details">
                  <span class="trans-type">${item.type}</span>
                  <span class="trans-user">${
                    item.userName ? item.userName : item.phone
                  }</span>
                  <span class="trans-id">TrxID : ${item.id}</span>
                </div>
              </div>
              <div class="trans-data">
                <span class="trans-amount ${
                  item.type == "Cash In" ? "" : "trans-out"
                }"> ${item.type == "Cash In" ? "+" : "-"} ${item.amount}</span>
                <span class="trans-date">${teansactionTime(item.cratedAt)}</span>
              </div>
            </div>
      `;
  });

  transecton_list.innerHTML = transectionUi;
main_balance.innerHTML = `BDT : ${cashIn - cashOut} TK`;
}

mainTransecton();





create_transaction_form.onsubmit = (e)=> {
  e.preventDefault();
  const form_data = new FormData(e.target);
  const data = Object.fromEntries(form_data);
  
  const oldData = JSON.parse(localStorage.getItem("Data")) ?? [];

  oldData.push({
    id: trxID(),
    type: data.type,
    amount: Number(data.amount),
    userName: data.userName,
    phone: data.phone,
    photo: data.photo,
    status: true,
    trash: false,
    cratedAt: Date.now(),
    updatedAt: "",
  })

  localStorage.setItem("Data", JSON.stringify(oldData));
  mainTransecton();
  btn_close.click();

  e.target.reset();

}

