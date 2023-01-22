/// login section
const loginSection = document.getElementById("login-section");
const loginForm = document.getElementById("login-form");
const loginUsername = document.getElementById("username-login-input");
const loginPassword = document.getElementById("password-login-input");
const waitingResponse = document.getElementById("waiting-response");

/// users section
const allUsersSection = document.getElementById("all-users-section");
const allUsersAlert = document.getElementById("allusers-alert");
const displayAllUsersDOM = document.getElementById("all-users-table");
const addUserForm = document.getElementById("add-user-form");
const addUserUsername = document.getElementById("username-adduser-input");
const addUserPassword = document.getElementById("password-adduser-input");
const addUsernameAdmin = document.getElementById("admin-adduser-checkbox");
const addUsernameEditor = document.getElementById("editor-adduser-checkbox");
const editUserForm = document.getElementById("edit-user-form");
const editUserUsername = document.getElementById("edit-user-usename");
const editUserPassCheck = document.getElementById("password-edituser-checkbox");
const editUserPassword = document.getElementById("password-edituser-input");
const editUserAdmin = document.getElementById("admin-edituser-checkbox");
const editUserEditor = document.getElementById("editor-edituser-checkbox");

/// reservation section
const reservationSection = document.getElementById("reservations-section");
const editReservationForm = document.getElementById("edit-reservation-form");
const editReservationUser = document.getElementById("edit-reservation-User");
const editReservationNumb = document.getElementById("edit-reservation-number");
const editReservationName = document.getElementById("edit-reservation-name");
const editReservationCont = document.getElementById("edit-reservation-contact");
const editReservationDate = document.getElementById("edit-reservation-date");
const editReservationPrice = document.getElementById("edit-reservation-price");
const editReservationNotes = document.getElementById("edit-reservation-notes");
const editReservationAlert = document.getElementById("edit-reservation-alert");
const addReservationForm = document.getElementById("add-reservation-form");
const addReservationNumb = document.getElementById("add-reservation-number");
const addReservationName = document.getElementById("add-reservation-name");
const addReservationCont = document.getElementById("add-reservation-contact");
const addReservationDate = document.getElementById("add-reservation-date");
const addReservationPrice = document.getElementById("add-reservation-price");
const addReservationNotes = document.getElementById("add-reservation-notes");
const addReservationAlert = document.getElementById("add-reservation-alert");

/// calendar
const prev = document.getElementById("b1-prev");
const bDate = document.getElementById("b1-date");
const next = document.getElementById("b1-next");
const b1TableBody = document.getElementById("b1-table-body");
const b2TableBody = document.getElementById("b2-table-body");
let month = new Date().getMonth();
let year = new Date().getFullYear();
const monthName = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

/// custom msg
const customResponseContainer = document.getElementById("custom-responce");
const customResponceMSG = document.getElementById("custom-responce-msg");
var accessToken;
var USER_ROLES;
var USER_NAME;
var RESERVATIONS = [];

/// =============== login form ================
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = loginUsername.value.toString();
  const password = loginPassword.value;
  fetch("https://moonlight-znjk.onrender.com/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
    credentials: "include",
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else if (response.status === 400) {
        displayCustomResponce("Username and password are required");
        throw new Error(response.statusText);
      } else if (response.status === 401) {
        displayCustomResponce("Invalid username or password");
        throw new Error(response.statusText);
      } else {
        displayCustomResponce("An unexpected error occurred");
        throw new Error(response.statusText);
      }
    })
    .then((data) => {
      USER_ROLES = data.roles;
      USER_NAME = data.username;
      accessToken = data.accessToken;
      // Store the refresh token in a cookie
      const refreshToken = data.refreshToken;
      document.cookie =
        "jwt=" +
        refreshToken +
        "; httpOnly=true; sameSite=none; secure=true; maxAge=86400000";
    })
    .then(() => {
      loginUsername.value = "";
      loginPassword.value = "";
      changeDisplay("reservations-section");
      showElements();
      showAllReservations();
    })
    .catch((error) => console.error(error));
});

/// =============== user function and forms ==================
function showAllUsers() {
  displayAllUsersDOM.innerHTML = "";
  allUsersAlert.style.display = "block";
  fetch(`https://moonlight-znjk.onrender.com/users`, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else if (response.status === 401) {
        displayCustomResponce("Unauthorized");
        throw new Error(response.statusText);
      } else if (response.status === 403) {
        displayCustomResponce("Forbidden");
        throw new Error(response.statusText);
      } else {
        displayCustomResponce("An unexpected error occurred");
        throw new Error(response.statusText);
      }
    })
    .then((data) => {
      allUsersAlert.style.display = "none";
      const users = data.users;
      users.forEach((user) => {
        let role;
        if (user.roles.admin) {
          role = "Admin";
        } else if (user.roles.editor) {
          role = "Editor";
        } else {
          role = "User";
        }
        const addContent = ` <tr>
                              <td class="text-start">${user.username}</td>
                              <td>${role}</td>
                              <td class="text-center">
                                <button class="btn btn-sm btn-outline-info" data-bs-toggle="modal" data-bs-target="#edit-user-modal" onclick="showUser('${user.username}')">
                                  <i class="fas fa-edit"></i>
                                </button>
                              </td>
                              <td class="text-center">
                                <button class="btn btn-sm btn-outline-danger" onclick="deleteUser('${user.username}')">
                                  <i class="fas fa-trash"></i>
                                </button>
                              </td>
                            </tr>`;
        displayAllUsersDOM.innerHTML += addContent;
      });
    })
    .catch((error) => {
      console.error(error);
    });
}

function deleteUser(username) {
  const response = window.confirm("Confirm Delete");
  if (response === true) {
    fetch(`https://moonlight-znjk.onrender.com/users/${username}`, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.statusText);
        }
      })
      .then(() => {
        showAllUsers();
      })
      .catch((error) => {
        showAllUsers();
        console.error(error);
      });
  }
}

function showUser(username) {
  editUserUsername.innerHTML = "loading...";
  fetch(`https://moonlight-znjk.onrender.com/users/${username}`, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else if (response.status === 401) {
        displayCustomResponce("Unauthorized");
        throw new Error(response.statusText);
      } else if (response.status === 403) {
        displayCustomResponce("Forbidden");
        throw new Error(response.statusText);
      } else {
        displayCustomResponce("An unexpected error occurred");
        throw new Error(response.statusText);
      }
    })
    .then((data) => {
      editUserUsername.innerHTML = data.user.username;
      editUserAdmin.checked = data.user.roles.admin ? true : false;
      editUserEditor.checked = data.user.roles.editor ? true : false;
    })
    .catch((error) => console.error(error));
}

editUserForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const password = editUserPassword.value;
  const response = {
    password: password,
    roles: { user: 1984 },
  };
  password == "" || !password ? delete response.password : null;
  editUserAdmin.checked ? (response.roles.admin = 5150) : null;
  editUserEditor.checked ? (response.roles.editor = 2001) : null;
  fetch(
    `https://moonlight-znjk.onrender.com/users/${editUserUsername.textContent}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
      body: JSON.stringify(response),
      credentials: "include",
    }
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else if (response.status === 401) {
        displayCustomResponce("Unauthorized");
        closeUserModal();
        throw new Error(response.statusText);
      } else if (response.status === 403) {
        displayCustomResponce("Forbidden");
        closeUserModal();
        throw new Error(response.statusText);
      } else if (response.status === 409) {
        displayCustomResponce("username already exists");
        closeUserModal();
        throw new Error(response.statusText);
      } else {
        displayCustomResponce("An unexpected error occurred");
        closeUserModal();
        throw new Error(response.statusText);
      }
    })
    .then(() => {
      closeUserModal();
      showAllUsers();
    })
    .catch((error) => {
      console.error(error);
    });
});

addUserForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = addUserUsername.value;
  const password = addUserPassword.value;
  const roles = { user: 1984 };
  addUsernameAdmin.checked ? (roles.admin = 5150) : null;
  addUsernameEditor.checked ? (roles.editor = 2001) : null;
  fetch("https://moonlight-znjk.onrender.com/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + accessToken,
    },
    body: JSON.stringify({ username, password, roles }),
    credentials: "include",
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else if (response.status === 401) {
        displayCustomResponce("Unauthorized");
        throw new Error(response.statusText);
      } else if (response.status === 403) {
        displayCustomResponce("Forbidden");
        throw new Error(response.statusText);
      } else if (response.status === 409) {
        displayCustomResponce("username already exists");
        throw new Error(response.statusText);
      } else {
        displayCustomResponce("An unexpected error occurred");
        throw new Error(response.statusText);
      }
    })
    .then(() => {
      addUserUsername.value = "";
      addUserPassword.value = "";
      addUsernameAdmin.checked = false;
      addUsernameEditor.checked = false;
      showAllUsers();
    })
    .catch((error) => {
      console.error(error);
    });
});

// password event listener for edit user
editUserPassCheck.addEventListener("change", () => {
  if (editUserPassCheck.checked) {
    editUserPassword.removeAttribute("disabled", "");
  } else {
    editUserPassword.setAttribute("disabled", "");
  }
});

/// ================= reservation functions and forms ====================
function showAllReservations() {
  fetch(`https://moonlight-znjk.onrender.com/reservations`, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else if (response.status === 401) {
        displayCustomResponce("Unauthorized");
        throw new Error(response.statusText);
      } else if (response.status === 403) {
        displayCustomResponce("Forbidden");
        throw new Error(response.statusText);
      } else {
        displayCustomResponce("An unexpected error occurred");
        throw new Error(response.statusText);
      }
    })
    .then((data) => {
      RESERVATIONS = [];
      let newdata = data.reservations;
      newdata.forEach((elm) => {
        RESERVATIONS.push(elm);
      });
      resfreshReservation();
    })
    .catch((error) => {
      console.error(error);
    });
}

function deleteReservation() {
  const number = parseInt(editReservationNumb.innerHTML);
  const date = editReservationDate.value;
  const response = window.confirm("Confirm Delete");
  if (response === true) {
    fetch(
      `https://moonlight-znjk.onrender.com/reservations/${number}/date/${date}`,
      {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.statusText);
        }
      })
      .then(() => {
        closeReservationModal();
        showAllReservations();
      })
      .catch((error) => {
        closeReservationModal();
        console.error(error);
      });
  }
}

function showReservation(number, date) {
  editReservationAlert.innerHTML = "loading...";
  fetch(
    `https://moonlight-znjk.onrender.com/reservations/${number}/date/${date}`,
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    }
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else if (response.status === 401) {
        displayCustomResponce("Unauthorized");
        throw new Error(response.statusText);
      } else if (response.status === 403) {
        displayCustomResponce("Forbidden");
        throw new Error(response.statusText);
      } else {
        displayCustomResponce("An unexpected error occurred");
        throw new Error(response.statusText);
      }
    })
    .then((data) => {
      editReservationAlert.innerHTML = "";
      editReservationUser.innerHTML = data.reservation.modificationUser;
      editReservationNumb.innerHTML = data.reservation.number;
      editReservationName.value = data.reservation.person.name;
      editReservationCont.value = data.reservation.person.contact;
      editReservationDate.value = data.reservation.bookedDate;
      editReservationPrice.value = data.reservation.price;
      editReservationNotes.innerHTML = data.reservation.notes;
    })
    .catch((error) => console.error(error));
}

editReservationForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const number = editReservationNumb.innerText;
  const date = editReservationDate.value;
  const response = {
    price: editReservationPrice.value,
    notes: editReservationNotes.value,
    person: {
      name: editReservationName.value,
      contact: editReservationCont.value,
    },
  };
  fetch(
    `https://moonlight-znjk.onrender.com/reservations/${number}/date/${date}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
      body: JSON.stringify(response),
      credentials: "include",
    }
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else if (response.status === 401) {
        displayCustomResponce("Unauthorized");
        closeReservationModal();
        throw new Error(response.statusText);
      } else if (response.status === 403) {
        displayCustomResponce("Forbidden");
        closeReservationModal();
        throw new Error(response.statusText);
      } else if (response.status === 409) {
        displayCustomResponce("date already taken");
        closeReservationModal();
        throw new Error(response.statusText);
      } else {
        displayCustomResponce("An unexpected error occurred");
        closeReservationModal();
        throw new Error(response.statusText);
      }
    })
    .then(() => {
      closeReservationModal();
      showAllReservations();
    })
    .catch((error) => {
      console.error(error);
    });
});

addReservationForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const response = {
    number: parseInt(addReservationNumb.textContent),
    bookedDate: addReservationDate.value,
    person: {
      name: addReservationName.value,
      contact: addReservationCont.value,
    },
    modificationUser: USER_NAME,
    price: addReservationPrice.value,
    notes: addReservationNotes.value,
  };
  fetch(`https://moonlight-znjk.onrender.com/reservations`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + accessToken,
    },
    body: JSON.stringify(response),
    credentials: "include",
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else if (response.status === 401) {
        displayCustomResponce("Unauthorized");
        closeAddReservationModal();
        throw new Error(response.statusText);
      } else if (response.status === 403) {
        displayCustomResponce("Forbidden");
        closeAddReservationModal();
        throw new Error(response.statusText);
      } else if (response.status === 409) {
        displayCustomResponce("date already taken");
        closeAddReservationModal();
        throw new Error(response.statusText);
      } else {
        displayCustomResponce("An unexpected error occurred");
        closeAddReservationModal();
        throw new Error(response.statusText);
      }
    })
    .then(() => {
      closeAddReservationModal();
      showAllReservations();
    })
    .catch((error) => {
      console.error(error);
    });
});

/// functions and event listener for calendar
function resfreshReservation() {
  b1TableBody.innerHTML = "";
  b2TableBody.innerHTML = "";
  showCalendar(month, year, b1TableBody, 1);
  showCalendar(month, year, b2TableBody, 2);
}

function showCalendar(month, year, target, bnumber) {
  let firstDay = new Date(year, month).getDay();
  let daysInMonth = 32 - new Date(year, month, 32).getDate();
  bDate.innerHTML = monthName[month] + " " + year;
  // filling the calendar with days
  for (let i = 0; i < 6; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDay) {
        let cell = document.createElement("td");
        let cellText = document.createTextNode("");
        cell.appendChild(cellText);
        row.appendChild(cell);
      } else {
        let day = i * 7 + j - firstDay + 1;
        if (day <= daysInMonth) {
          let cell = document.createElement("td");
          let newdate = formatDate(day, year, month);
          if (USER_ROLES.includes(2001) || USER_ROLES.includes(5150)) {
            cell.innerHTML = `<button class="btn btn-outline-secondary w-100" data-bs-toggle="modal" data-bs-target="#add-reservation-modal" onclick="setAddReservationData('${newdate}','${bnumber}')">${day}</button>`;
          } else {
            cell.innerHTML = `<button class="btn btn-outline-secondary w-100">${day}</button>`;
          }
          RESERVATIONS.forEach((element) => {
            if (element.bookedDate == newdate && element.number == bnumber) {
              cell.innerHTML = `<button data-bs-toggle="modal" data-bs-target="#edit-reservation-modal" onclick="showReservation('${bnumber}','${newdate}')" class="btn btn-success w-100">${day}</button>`;
            }
          });

          row.appendChild(cell);
        }
      }
    }
    target.appendChild(row);
  }
}

prev.addEventListener("click", () => {
  month--;
  if (month < 0) {
    month = 11;
    year--;
  }
  showAllReservations();
});

next.addEventListener("click", () => {
  month++;
  if (month > 11) {
    month = 0;
    year++;
  }
  showAllReservations();
});

/// global functions
function newAlert(target, message) {
  target.innerHTML = message;
  setTimeout(() => {
    target.innerHTML = "";
  }, 5000);
}
function closeCustomResponce() {
  allUsersAlert.style.display = "none";
  customResponseContainer.style.display = "none";
}
function displayCustomResponce(msg) {
  customResponceMSG.innerHTML = msg;
  customResponseContainer.style.display = "block";
}
function closeUserModal() {
  let button = document.getElementById("user-modal-btn");
  let event = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: true,
  });
  button.dispatchEvent(event);
  clearUserModal();
}
function clearUserModal() {
  editUserUsername.innerHTML = "";
  editUserPassword.value = "";
  editUserAdmin.checked = false;
  editUserEditor.checked = false;
  editUserPassCheck.checked = false;
}
function closeReservationModal() {
  let button2 = document.getElementById("reservation-modal-btn");
  let event = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: true,
  });
  button2.dispatchEvent(event);
  clearReservationModal();
}
function clearReservationModal() {
  editReservationAlert.innerhtml = "";
  editReservationCont.value = "";
  editReservationDate.value = "";
  editReservationName.value = "";
  editReservationNotes.value = "";
  editReservationNumb.innerHTML = "";
  editReservationPrice.value = "";
  editReservationUser.innerHTML = "";
}
function closeAddReservationModal() {
  let button2 = document.getElementById("add-reservation-modal-btn");
  let event = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: true,
  });
  button2.dispatchEvent(event);
  clearAddReservationModal();
}
function clearAddReservationModal() {
  addReservationAlert.innerhtml = "";
  addReservationCont.value = "";
  addReservationDate.value = "";
  addReservationName.value = "";
  addReservationNotes.value = "";
  addReservationNumb.innerHTML = "";
  addReservationPrice.value = "";
}
function formatDate(day, year, month) {
  month += 1;
  let newMonth = month < 10 ? `0${month}` : String(month);
  let newDay = day < 10 ? `0${day}` : String(day);
  return `${year}-${newMonth}-${newDay}`;
}
function setAddReservationData(date, numb) {
  addReservationDate.value = date;
  addReservationNumb.innerHTML = numb;
}
function changeDisplay(target) {
  loginSection.style.display = "none";
  allUsersSection.style.display = "none";
  reservationSection.style.display = "none";
  waitingResponse.style.display = "none";
  document.getElementById(target).style.display = "block";
}
function showElements() {
  const navUL = document.getElementById("header-ul");
  if (USER_ROLES.includes(5150)) {
    removeDisabled();
    document.getElementById("edit-reservation-button").style.display = "block";
    document.getElementById("delete-reservation-button").style.display =
      "block";
    document.getElementById("edit-reservation-contact-div").style.display =
      "block";
    navUL.innerHTML = `<li class="nav-item">
                        <a
                          class="nav-link "
                          aria-current="page"
                          onclick="changeDisplay('reservations-section')"
                          >Home </a>
                        </li>
                        <li class="nav-item" id="">
                          <a class="nav-link" onclick="changeDisplay('all-users-section'),showAllUsers()">Users</a>
                        </li>`;
  } else if (USER_ROLES.includes(2001)) {
    removeDisabled();
    document.getElementById("edit-reservation-button").style.display = "block";
    document.getElementById("delete-reservation-button").style.display =
      "block";
    document.getElementById("edit-reservation-contact-div").style.display =
      "block";
    navUL.innerHTML = `<li class="nav-item">
                        <a
                          class="nav-link "
                          aria-current="page"
                          onclick="changeDisplay('reservations-section')"
                          >Home </a
                        >
                      </li>`;
  } else {
    navUL.innerHTML = `<li class="nav-item">
                        <a
                          class="nav-link "
                          aria-current="page"
                          onclick="changeDisplay('reservations-section')"
                          >Home </a
                        >
                      </li>`;
  }
}
function removeDisabled() {
  editReservationName.removeAttribute("disabled", "");
  editReservationCont.removeAttribute("disabled", "");
  editReservationPrice.removeAttribute("disabled", "");
  editReservationNotes.removeAttribute("disabled", "");
}
function ScaleUp() {
  fetch(`https://moonlight-znjk.onrender.com/data`, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  })
    .then((response) => response.json())
    .then(() => {
      changeDisplay("login-section");
    })
    .catch((error) => {
      const ServerResponse = document.getElementById("server-up");
      ServerResponse.innerHTML = `<h1 style="color:red">An unexpected error occurred</h1><h2 style="color:red">try again later</h2>`;
      console.error(error);
    });
}
ScaleUp();
