let data;
let data_arr = [];
let task_list;
let delete_btn;
let update_btn;
let task_container,
  filteredElements,
  elements,
  filter,
  filter_arr,
  all_task_list;

// if(document.getElementById('task_container') != null){
//   filter_data = document.getElementById('task_container').querySelectorAll('task')
// }

let oninput = (event) => {
  data = event.target.value;
  filter = data.toUpperCase();

  // for (i = 0; i < filter_arr.length; i++) {
  //   if (filter_arr[i].toUpperCase().includes(filter)) {
  //     console.log(filter_arr[i]);
  //   }

  //   // txtValue = a.textContent || a.innerText;
  //   // if (txtValue.toUpperCase().indexOf(filter) > -1) {
  //   //   li[i].style.display = "";
  //   // } else {
  //   //   li[i].style.display = "none";
  //   // }
  // }
};

let onClick = (event) => {
  if (data == undefined) {
    event.preventDefault();
    console.log("error");
  } else {
    event.preventDefault();
    if (document.getElementById("task_container") != null) {
      document.querySelectorAll(".task_container").forEach((value) => {
        value.remove();
      });
    }

    data_arr.push(data);
    document.getElementById("form_data").value = "";

    data = undefined;

    data_arr.forEach((value, index) => {
      task_container = document.createElement("div");
      task_container.className = "task_container";
      task_container.className = "task_container";
      task_container.setAttribute("id", "task_container");

      task_list = document.createElement("div");
      task_list.className = "task";
      task_list.textContent = value;
      task_list.setAttribute("id", `task_list-${index}`);

      delete_btn = document.createElement("div");
      delete_btn.className = "dlt_btn";
      delete_btn.textContent = "delete";
      delete_btn.setAttribute("value", value);

      update_btn = document.createElement("div");
      update_btn.className = "upt_btn";
      update_btn.textContent = "Update";
      update_btn.setAttribute("id", index);
      update_btn.setAttribute("value", value);

      document
        .getElementById("sibling")
        .insertAdjacentElement("afterend", task_container)
        .append(task_list);
      task_container.append(delete_btn);
      task_container.append(update_btn);

      filter_arr = data_arr;
      all_task_list = document
        .getElementById("task_container")
        .querySelectorAll("task").textContent;

      function ondelete(event) {
        event.preventDefault();
        if (value == event.target.getAttribute("value")) {
          event.target.parentNode.remove();
          data_arr.splice(data_arr.indexOf(value), 1);
          filter_arr = data_arr;
          all_task_list = document
            .getElementById("task_container")
            .querySelectorAll("task").textContent;
        }
      }

      function onupdate(event) {
        // console.log(event.target.id, "event new weeew  ");
        // console.log(event, "event");
        event.preventDefault();
        // console.log(value);
        const task_list_value = document.getElementById(
          `task_list-${event.target.id}`
        ).innerHTML;
        console.log(task_list_value, "task_list_value");

        let updated_value = prompt("let update your task", task_list_value);

        if (updated_value == null || updated_value == "") {
          console.log("User cancelled the prompt.");
        } else {
          // console.log(event.target.parentNode.childNodes[0]);
          event.target.parentNode.childNodes[0].textContent = updated_value;

          update_btn.setAttribute("value", updated_value);
          delete_btn.setAttribute("value", updated_value);

          // console.log(data_arr, "data_arr");
          // console.log(task_list_value, " new value");
          // console.log(
          //   data_arr[data_arr.indexOf(task_list_value)],
          //   "update new value "
          // );
          // console.log(updated_value, "updated_value");
          data_arr[data_arr.indexOf(task_list_value)] = updated_value;
          filter_arr = data_arr;
          all_task_list = document
            .getElementById("task_container")
            .querySelectorAll("task").textContent;

          // console.log(data_arr);
          // console.log(event.target.parentNode);
        }
      }

      update_btn.addEventListener("click", onupdate);

      delete_btn.addEventListener("click", ondelete);
    });
  }
};

document.getElementById("form_data").addEventListener("input", oninput);

document.getElementById("btn").addEventListener("click", onClick);
document.getElementById("Search").addEventListener("click", searchData);

function searchData() {
  console.log("called", data_arr);
  const datavalue = document.querySelectorAll(".task");
  for (let index = 0; index < datavalue.length; index++) {
    console.log(datavalue[index].innerHTML, " pp");
    for (i = 0; i < filter_arr.length; i++) {
      if (filter_arr[i].toUpperCase().includes(filter)) {
        // console.log();

        if (data_arr.includes(filter_arr[i])) {
          console.log(filter_arr[i], "new value in array");
          if (datavalue[index].innerHTML === filter_arr[i]) {
            datavalue[index].parentNode.style.display = "";
          } else {
            datavalue[index].parentNode.style.display = "none";
          }
        }
      }
    }
  }
  document.getElementById("form_data").value = "";
  data = undefined;
}

// document.getElementById("filter_title").addEventListener("click", () => {
//   document.getElementById("filter_items").classList.toggle("show");
//   console.log(
//     document.getElementsByClassName("task").forEach((child) => {
//       console.log(child);
//     })
//   );
// });

// document.getElementById("form_data").addEventListener('focus',()=>{
//   console.log('hello');
// })
