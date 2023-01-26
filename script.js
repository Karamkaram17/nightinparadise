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

/// finance section
const finnaceSection = document.getElementById("finance-section");
//daily expences section
const expDailyNext = document.getElementById("expence-next");
const expDailyPrev = document.getElementById("expence-prev");
const expDailyDate = document.getElementById("expence-date");
const expDailyTable = document.getElementById("daily-expence-table");
let expM = new Date().getMonth();
let expY = new Date().getFullYear();
//monthly expences section
const expMonthlyNext = document.getElementById("expence-next-monthly");
const expMonthlyPrev = document.getElementById("expence-prev-monthly");
const expMonthlyDate = document.getElementById("expence-date-monthly");
const expMonthlyTable = document.getElementById("monthly-expence-table");
const expMonthlybtns = document.getElementById("exp-monthly-thead");
let expMM = new Date().getMonth();
let expMY = new Date().getFullYear();
// add expences section
const addExpenceForm = document.getElementById("add-expence-form");
const addExpenceTitle = document.getElementById("add-expence-title");
const addExpenceDate = document.getElementById("add-expence-date");
const addExpencePrice = document.getElementById("add-expence-price");
//daily revenues section
const revDailyNext = document.getElementById("revenue-next");
const revDailyPrev = document.getElementById("revenue-prev");
const revDailyDate = document.getElementById("revenue-date");
const revDailyTable = document.getElementById("daily-revenue-table");
let revM = new Date().getMonth();
let revY = new Date().getFullYear();
//monthly revenues section
const revMonthlyNext = document.getElementById("revenue-next-monthly");
const revMonthlyPrev = document.getElementById("revenue-prev-monthly");
const revMonthlyDate = document.getElementById("revenue-date-monthly");
const revMonthlyTable = document.getElementById("monthly-revenue-table");
const revMonthlybtns = document.getElementById("rev-monthly-thead");
let revMM = new Date().getMonth();
let revMY = new Date().getFullYear();
// add revenues section
const addRevenueForm = document.getElementById("add-revenue-form");
const addRevenueTitle = document.getElementById("add-revenue-title");
const addRevenueDate = document.getElementById("add-revenue-date");
const addRevenuePrice = document.getElementById("add-revenue-price");
// profit section
const profitNext = document.getElementById("profit-next");
const profitPrev = document.getElementById("profit-prev");
const profitDate = document.getElementById("profit-date");
const profityearlyRev = document.getElementById("profit-rev-y");
const profityearlyExp = document.getElementById("profit-exp-y");
const profityearlyResult = document.getElementById("profit-result-y");
const profitSelect = document.getElementById("profit-select");
const profitMonthlyRev = document.getElementById("profit-rev-m");
const profitMonthlyExp = document.getElementById("profit-exp-m");
const profitMonthlyResult = document.getElementById("profit-result-m");
profY = new Date().getFullYear();
profM = new Date().getMonth();

/// edit expence modal
const editExpenceForm = document.getElementById("edit-expence-form");
const editExpenceAlert = document.getElementById("edit-expence-alert");
const editExpenceTitle = document.getElementById("edit-expence-title");
const editExpenceDate = document.getElementById("edit-expence-date");
const editExpencePrice = document.getElementById("edit-expence-price");

/// edit revenue modal
const editRevenueForm = document.getElementById("edit-revenue-form");
const editRevenueAlert = document.getElementById("edit-revenue-alert");
const editRevenueTitle = document.getElementById("edit-revenue-title");
const editRevenueDate = document.getElementById("edit-revenue-date");
const editRevenuePrice = document.getElementById("edit-revenue-price");

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
var EXPENCES = [];
var EXPENCE_ID;
var REVENUES = [];
var REVENUE_ID;
const MY_URL = "http://localhost:5000";

/// =============== login form ================
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = loginUsername.value.toLowerCase();
  const password = loginPassword.value;
  fetch(`${MY_URL}/auth`, {
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
  fetch(`${MY_URL}/users`, {
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
        changeDisplay("login-section");
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
    fetch(`${MY_URL}/users/${username}`, {
      method: "DELETE",
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
          changeDisplay("login-section");
          throw new Error(response.statusText);
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
  fetch(`${MY_URL}/users/${username}`, {
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
        changeDisplay("login-section");
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
  fetch(`${MY_URL}/users/${editUserUsername.textContent}`, {
    method: "PATCH",
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
        closeUserModal();
        throw new Error(response.statusText);
      } else if (response.status === 403) {
        displayCustomResponce("Forbidden");
        changeDisplay("login-section");
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
  fetch(`${MY_URL}/users`, {
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
        changeDisplay("login-section");
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
  fetch(`${MY_URL}/reservations`, {
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
        changeDisplay("login-section");
        throw new Error(response.statusText);
      } else {
        displayCustomResponce("An unexpected error occurred");
        throw new Error(response.statusText);
      }
    })
    .then((data) => {
      RESERVATIONS = [];
      RESERVATIONS = data.reservations;
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
    fetch(`${MY_URL}/reservations/${number}/date/${date}`, {
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
  fetch(`${MY_URL}/reservations/${number}/date/${date}`, {
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
        changeDisplay("login-section");
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
      editReservationNotes.value = data.reservation.notes;
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
    modificationUser: USER_NAME,
    person: {
      name: editReservationName.value,
      contact: editReservationCont.value,
    },
  };
  fetch(`${MY_URL}/reservations/${number}/date/${date}`, {
    method: "PATCH",
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
        closeReservationModal();
        throw new Error(response.statusText);
      } else if (response.status === 403) {
        displayCustomResponce("Forbidden");
        changeDisplay("login-section");
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
  fetch(`${MY_URL}/reservations`, {
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
        changeDisplay("login-section");
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

/// ================ expences functions and forms =====================
function showAllExpences() {
  fetch(`${MY_URL}/expences`, {
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
        changeDisplay("login-section");
        throw new Error(response.statusText);
      } else {
        displayCustomResponce("An unexpected error occurred");
        throw new Error(response.statusText);
      }
    })
    .then((data) => {
      EXPENCES = [];
      EXPENCES = data.expences;
      resfreshExpences();
      resfreshMonthlyExpences();
      updateProfits();
    })
    .catch((error) => {
      console.error(error);
    });
}

function deleteExpence(id) {
  const response = window.confirm("Confirm Delete");
  if (response === true) {
    fetch(`${MY_URL}/expences/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else if (response.status === 401) {
          displayCustomResponce("Unauthorized");
          closeExpenceModal();
          throw new Error(response.statusText);
        } else if (response.status === 403) {
          displayCustomResponce("Forbidden");
          changeDisplay("login-section");
          closeExpenceModal();
          throw new Error(response.statusText);
        } else {
          throw new Error(response.statusText);
        }
      })
      .then(() => {
        closeDailyExpenceModal();
        showAllExpences();
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

function showExpence(id) {
  editExpenceAlert.innerHTML = "loading...";
  fetch(`${MY_URL}/expences/${id}`, {
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
        changeDisplay("login-section");
        throw new Error(response.statusText);
      } else if (response.status === 404) {
        displayCustomResponce("expence not found");
        throw new Error(response.statusText);
      } else {
        displayCustomResponce("An unexpected error occurred");
        throw new Error(response.statusText);
      }
    })
    .then((data) => {
      EXPENCE_ID = data.expence._id;
      editExpenceAlert.innerHTML = "";
      editExpenceTitle.value = data.expence.title;
      editExpenceDate.value = data.expence.date;
      editExpencePrice.value = data.expence.price;
    })
    .catch((error) => console.error(error));
}

editExpenceForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = editExpenceTitle.value;
  const date = editExpenceDate.value;
  const price = editExpencePrice.value;
  fetch(`${MY_URL}/expences/${EXPENCE_ID}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + accessToken,
    },
    body: JSON.stringify({ title, date, price }),
    credentials: "include",
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else if (response.status === 401) {
        displayCustomResponce("Unauthorized");
        closeExpenceModal();
        throw new Error(response.statusText);
      } else if (response.status === 403) {
        displayCustomResponce("Forbidden");
        changeDisplay("login-section");
        closeExpenceModal();
        throw new Error(response.statusText);
      } else {
        displayCustomResponce("An unexpected error occurred");
        closeExpenceModal();
        throw new Error(response.statusText);
      }
    })
    .then(() => {
      closeExpenceModal();
      closeDailyExpenceModal();
      showAllExpences();
    })
    .catch((error) => {
      console.error(error);
    });
});

addExpenceForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = addExpenceTitle.value;
  const date = addExpenceDate.value;
  const price = addExpencePrice.value;
  fetch(`${MY_URL}/expences`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + accessToken,
    },
    body: JSON.stringify({ title, date, price }),
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
        changeDisplay("login-section");
        throw new Error(response.statusText);
      } else {
        displayCustomResponce("An unexpected error occurred");
        throw new Error(response.statusText);
      }
    })
    .then(() => {
      addExpenceDate.value = "";
      addExpencePrice.value = "";
      addExpenceTitle.value = "";
    })
    .catch((error) => {
      console.error(error);
    });
});

/// functions and event listener for reservations calendar
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
            cell.innerHTML = `<button class="btn btn-outline-secondary w-100" disabled>${day}</button>`;
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

/// functions and event listener for expences daily calendar
function resfreshExpences() {
  expDailyTable.innerHTML = "";
  showExpencesCalendar(expM, expY, expDailyTable);
}

function showExpencesCalendar(month, year, target) {
  let firstDay = new Date(year, month).getDay();
  let daysInMonth = 32 - new Date(year, month, 32).getDate();
  expDailyDate.innerHTML = monthName[month] + " " + year;
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
          cell.innerHTML = `<button class="btn btn-outline-secondary w-100" disabled>${day}</button>`;
          EXPENCES.forEach((element) => {
            if (element.date == newdate) {
              cell.innerHTML = `<button data-bs-toggle="modal"
              data-bs-target="#show-daily-expences" onclick="showDailyExpence('${newdate}')" class="btn btn-success w-100">${day}</button>`;
            }
          });

          row.appendChild(cell);
        }
      }
    }
    target.appendChild(row);
  }
}

function showDailyExpence(date) {
  let modal = document.getElementById("daily-expence-modal");
  modal.innerHTML = "";
  EXPENCES.forEach((elm) => {
    if (elm.date == date) {
      modal.innerHTML += `<tr>
      <td class="text-start">${elm.title}</td><td class="text-center">${elm.price}</td>
      <td class="text-center admin-toggle ">
      <button class="btn btn-sm btn-outline-info" data-bs-toggle="modal" data-bs-target="#edit-expence-modal" onclick="showExpence('${elm._id}')">
        <i class="fas fa-edit"></i>
      </button>
    </td>
    <td class="text-center admin-toggle">
      <button class="btn btn-sm btn-outline-danger" onclick="deleteExpence('${elm._id}')">
        <i class="fas fa-trash"></i>
      </button>
    </td>
    </tr>`;
    }
  });
  checkForRoles();
}

expDailyPrev.addEventListener("click", () => {
  expM--;
  if (expM < 0) {
    expM = 11;
    expY--;
  }
  resfreshExpences();
});

expDailyNext.addEventListener("click", () => {
  expM++;
  if (expM > 11) {
    expM = 0;
    expY++;
  }
  resfreshExpences();
});

/// functions and event listener for expences monthly calendar
function setExpMM() {
  expMM = parseInt(expMonthlybtns.value);
  resfreshMonthlyExpences();
}

function resfreshMonthlyExpences() {
  expMonthlyTable.innerHTML = "";
  expMonthlyDate.innerHTML = expMY;
  drawMonthlySelectEXP();
}

function drawMonthlySelectEXP() {
  let filteredExpences = [];
  EXPENCES.forEach((elm) => {
    if (elm.date.startsWith(formatDateM(expMY, expMM))) {
      filteredExpences.push(elm);
    }
  });
  if (filteredExpences.length == 0) {
    expMonthlyTable.innerHTML = `<tr><td colspan="5" class="text-start text-center" style="color:red">No Expences Found</td></tr>`;
  } else {
    filteredExpences = sortByDate(filteredExpences);
    filteredExpences.forEach((elm) => {
      expMonthlyTable.innerHTML += `<tr>
      <td class="text-start">${elm.title}</td><td class="text-center">${elm.date[8]}${elm.date[9]}</td><td class="text-center">${elm.price} $</td>
      <td class="text-center admin-toggle">
      <button class="btn btn-sm btn-outline-info " data-bs-toggle="modal" data-bs-target="#edit-expence-modal" onclick="showExpence('${elm._id}')">
        <i class="fas fa-edit"></i>
      </button>
    </td>
    <td class="text-center admin-toggle">
      <button class="btn btn-sm btn-outline-danger" onclick="deleteExpence('${elm._id}')">
        <i class="fas fa-trash"></i>
      </button>
    </td>
    </tr>`;
    });
  }
  checkForRoles();
}

expMonthlyPrev.addEventListener("click", () => {
  expMY--;
  resfreshMonthlyExpences();
});

expMonthlyNext.addEventListener("click", () => {
  expMY++;
  resfreshMonthlyExpences();
});

/// ================ revenues functions and forms =====================
function showAllRevenues() {
  fetch(`${MY_URL}/revenues`, {
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
        changeDisplay("login-section");
        throw new Error(response.statusText);
      } else {
        displayCustomResponce("An unexpected error occurred");
        throw new Error(response.statusText);
      }
    })
    .then((data) => {
      REVENUES = [];
      REVENUES = data.revenues;
      resfreshRevenues();
      resfreshMonthlyRevenues();
      updateProfits();
    })
    .catch((error) => {
      console.error(error);
    });
}

function deleteRevenue(id) {
  const response = window.confirm("Confirm Delete");
  if (response === true) {
    fetch(`${MY_URL}/revenues/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else if (response.status === 401) {
          displayCustomResponce("Unauthorized");
          closeRevenueModal();
          throw new Error(response.statusText);
        } else if (response.status === 403) {
          displayCustomResponce("Forbidden");
          changeDisplay("login-section");
          closeRevenueModal();
          throw new Error(response.statusText);
        } else {
          throw new Error(response.statusText);
        }
      })
      .then(() => {
        closeDailyRevenueModal();
        showAllRevenues();
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

function showRevenue(id) {
  editRevenueAlert.innerHTML = "loading...";
  fetch(`${MY_URL}/revenues/${id}`, {
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
        changeDisplay("login-section");
        throw new Error(response.statusText);
      } else if (response.status === 404) {
        displayCustomResponce("revenue not found");
        throw new Error(response.statusText);
      } else {
        displayCustomResponce("An unexpected error occurred");
        throw new Error(response.statusText);
      }
    })
    .then((data) => {
      REVENUE_ID = data.revenue._id;
      editRevenueAlert.innerHTML = "";
      editRevenueTitle.value = data.revenue.title;
      editRevenueDate.value = data.revenue.date;
      editRevenuePrice.value = data.revenue.price;
    })
    .catch((error) => console.error(error));
}

editRevenueForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = editRevenueTitle.value;
  const date = editRevenueDate.value;
  const price = editRevenuePrice.value;
  fetch(`${MY_URL}/revenues/${REVENUE_ID}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + accessToken,
    },
    body: JSON.stringify({ title, date, price }),
    credentials: "include",
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else if (response.status === 401) {
        displayCustomResponce("Unauthorized");
        closerevenueModal();
        throw new Error(response.statusText);
      } else if (response.status === 403) {
        displayCustomResponce("Forbidden");
        changeDisplay("login-section");
        closerevenueModal();
        throw new Error(response.statusText);
      } else {
        displayCustomResponce("An unexpected error occurred");
        closerevenueModal();
        throw new Error(response.statusText);
      }
    })
    .then(() => {
      closeRevenueModal();
      closeDailyRevenueModal();
      showAllRevenues();
    })
    .catch((error) => {
      console.error(error);
    });
});

addRevenueForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = addRevenueTitle.value;
  const date = addRevenueDate.value;
  const price = addRevenuePrice.value;
  fetch(`${MY_URL}/revenues`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + accessToken,
    },
    body: JSON.stringify({ title, date, price }),
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
        changeDisplay("login-section");
        throw new Error(response.statusText);
      } else {
        displayCustomResponce("An unexpected error occurred");
        throw new Error(response.statusText);
      }
    })
    .then(() => {
      addRevenueDate.value = "";
      addRevenuePrice.value = "";
      addRevenueTitle.value = "";
    })
    .catch((error) => {
      console.error(error);
    });
});

/// functions and event listener for revenues daily calendar
function resfreshRevenues() {
  revDailyTable.innerHTML = "";
  showRevenuesCalendar(revM, revY, revDailyTable);
}

function showRevenuesCalendar(month, year, target) {
  let firstDay = new Date(year, month).getDay();
  let daysInMonth = 32 - new Date(year, month, 32).getDate();
  revDailyDate.innerHTML = monthName[month] + " " + year;
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
          cell.innerHTML = `<button class="btn btn-outline-secondary w-100" disabled>${day}</button>`;
          REVENUES.forEach((element) => {
            if (element.date == newdate) {
              cell.innerHTML = `<button data-bs-toggle="modal"
              data-bs-target="#show-daily-revenues" onclick="showDailyRevenue('${newdate}')" class="btn btn-success w-100">${day}</button>`;
            }
          });

          row.appendChild(cell);
        }
      }
    }
    target.appendChild(row);
  }
}

function showDailyRevenue(date) {
  let modal = document.getElementById("daily-revenue-modal");
  modal.innerHTML = "";
  REVENUES.forEach((elm) => {
    if (elm.date == date) {
      modal.innerHTML += `<tr>
      <td class="text-start">${elm.title}</td><td class="text-center">${elm.price}</td>
      <td class="text-center admin-toggle ">
      <button class="btn btn-sm btn-outline-info" data-bs-toggle="modal" data-bs-target="#edit-revenue-modal" onclick="showRevenue('${elm._id}')">
        <i class="fas fa-edit"></i>
      </button>
    </td>
    <td class="text-center admin-toggle">
      <button class="btn btn-sm btn-outline-danger" onclick="deleteRevenue('${elm._id}')">
        <i class="fas fa-trash"></i>
      </button>
    </td>
    </tr>`;
    }
  });
  checkForRoles();
}

revDailyPrev.addEventListener("click", () => {
  revM--;
  if (revM < 0) {
    revM = 11;
    revY--;
  }
  resfreshRevenues();
});

revDailyNext.addEventListener("click", () => {
  revM++;
  if (revM > 11) {
    revM = 0;
    revY++;
  }
  resfreshRevenues();
});

/// functions and event listener for revenues monthly calendar
function setrevMM() {
  revMM = parseInt(revMonthlybtns.value);
  resfreshMonthlyRevenues();
}

function resfreshMonthlyRevenues() {
  revMonthlyTable.innerHTML = "";
  revMonthlyDate.innerHTML = revMY;
  drawMonthlySelectrev();
}

function drawMonthlySelectrev() {
  let filteredrevenues = [];
  REVENUES.forEach((elm) => {
    if (elm.date.startsWith(formatDateM(revMY, revMM))) {
      filteredrevenues.push(elm);
    }
  });
  if (filteredrevenues.length == 0) {
    revMonthlyTable.innerHTML = `<tr><td colspan="5" class="text-start text-center" style="color:red">No Revenues Found</td></tr>`;
  } else {
    filteredrevenues = sortByDate(filteredrevenues);
    filteredrevenues.forEach((elm) => {
      revMonthlyTable.innerHTML += `<tr>
      <td class="text-start">${elm.title}</td><td class="text-center">${elm.date[8]}${elm.date[9]}</td><td class="text-center">${elm.price} $</td>
      <td class="text-center admin-toggle">
      <button class="btn btn-sm btn-outline-info " data-bs-toggle="modal" data-bs-target="#edit-revenue-modal" onclick="showRevenue('${elm._id}')">
        <i class="fas fa-edit"></i>
      </button>
    </td>
    <td class="text-center admin-toggle">
      <button class="btn btn-sm btn-outline-danger" onclick="deleteRevenue('${elm._id}')">
        <i class="fas fa-trash"></i>
      </button>
    </td>
    </tr>`;
    });
  }
  checkForRoles();
}

revMonthlyPrev.addEventListener("click", () => {
  revMY--;
  resfreshMonthlyRevenues();
});

revMonthlyNext.addEventListener("click", () => {
  revMY++;
  resfreshMonthlyRevenues();
});

/// profit section
function setProfM() {
  profM = parseInt(profitSelect.value);
  showAllExpences();
  showAllRevenues();
}

profitPrev.addEventListener("click", () => {
  profY--;
  updateProfits();
});

profitNext.addEventListener("click", () => {
  profY++;
  updateProfits();
});

function updateProfits() {
  const yearlyRev = [];
  const yearlyExp = [];
  const monthlyRev = [];
  const monthlyExp = [];
  let yearlyRevValue = 0;
  let yearlyExpValue = 0;
  let monthlyRevValue = 0;
  let monthlyExpValue = 0;
  let YearlyresultValue = 0;
  let monthlyResultValue = 0;
  REVENUES.forEach((elm) => {
    if (elm.date.startsWith(profY)) {
      yearlyRevValue += elm.price;
      yearlyRev.push(elm);
    }
  });
  EXPENCES.forEach((elm) => {
    if (elm.date.startsWith(profY)) {
      yearlyExpValue += elm.price;
      yearlyExp.push(elm);
    }
  });
  yearlyRev.forEach((elm) => {
    if (elm.date.startsWith(formatDateM(profY, profM))) {
      monthlyRevValue += elm.price;
      monthlyRev.push(elm);
    }
  });
  yearlyExp.forEach((elm) => {
    if (elm.date.startsWith(formatDateM(profY, profM))) {
      monthlyExpValue += elm.price;
      monthlyExp.push(elm);
    }
  });
  YearlyresultValue = yearlyRevValue - yearlyExpValue;
  monthlyResultValue = monthlyRevValue - monthlyExpValue;

  profityearlyRev.innerHTML = yearlyRevValue;
  profityearlyExp.innerHTML = yearlyExpValue;
  profityearlyResult.innerHTML = YearlyresultValue;
  profitMonthlyRev.innerHTML = monthlyRevValue;
  profitMonthlyExp.innerHTML = monthlyExpValue;
  profitMonthlyResult.innerHTML = monthlyResultValue;
  profitDate.innerHTML = profY;
}

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
function closeExpenceModal() {
  let button = document.getElementById("expence-modal-btn");
  let event = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: true,
  });
  button.dispatchEvent(event);
  clearExpenceModal();
}
function clearExpenceModal() {
  editExpenceAlert.innerHTML = "";
  editExpenceDate.value = "";
  editExpenceTitle.value = "";
  editExpencePrice.value = "";
}
function closeRevenueModal() {
  let button = document.getElementById("revenue-modal-btn");
  let event = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: true,
  });
  button.dispatchEvent(event);
  clearRevenueModal();
}
function closeHeader() {
  const screenWidth = window.innerWidth;
  if (screenWidth < 580) {
    let button = document.getElementById("header-btn");
    let event = new MouseEvent("click", {
      view: window,
      bubbles: true,
      cancelable: true,
    });
    button.dispatchEvent(event);
  }
}
function clearRevenueModal() {
  editRevenueAlert.innerHTML = "";
  editRevenueDate.value = "";
  editRevenueTitle.value = "";
  editRevenuePrice.value = "";
}
function closeDailyExpenceModal() {
  let button = document.getElementById("daily-expence-modal-btn");
  let event = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: true,
  });
  button.dispatchEvent(event);
}
function closeDailyRevenueModal() {
  let button = document.getElementById("daily-revenue-modal-btn");
  let event = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: true,
  });
  button.dispatchEvent(event);
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
function formatDateM(year, month) {
  month += 1;
  let newMonth = month < 10 ? `0${month}` : String(month);
  return `${year}-${newMonth}`;
}
function setAddReservationData(date, numb) {
  addReservationDate.value = date;
  addReservationNumb.innerHTML = numb;
}
function setAddExpenceData(date) {
  addExpenceDate.value = date;
}
function changeDisplay(target) {
  loginSection.style.display = "none";
  allUsersSection.style.display = "none";
  reservationSection.style.display = "none";
  finnaceSection.style.display = "none";
  waitingResponse.style.display = "none";
  document.getElementById(target).style.display = "block";
}
function showElements() {
  const navUL = document.getElementById("header-content");
  navUL.innerHTML = `
          <a class="navbar-brand">Night In Paradise</a>
          <button
            class="navbar-toggler d-lg-none"
            id="header-btn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul class="navbar-nav me-auto mt-2 mt-lg-0">
             <li class="nav-item">
              <a
                class="nav-link "
                aria-current="page"
                onclick="changeDisplay('reservations-section'),closeHeader()"
                >Home </a>
              </li>
              <li class="nav-item admin-toggle" >
                <a class="nav-link" onclick="changeDisplay('all-users-section'),showAllUsers(),closeHeader()">Users</a>
              </li>
              <li class="nav-item" >
                <a class="nav-link" onclick="changeDisplay('finance-section'),showAllExpences(),closeHeader()">Finance</a>
              </li>
            </ul>
          </div>`;
  checkForRoles();
}
function checkForRoles() {
  let admin = document.querySelectorAll(".admin-toggle");
  let editor = document.querySelectorAll(".editor-toggle");
  let adminInput = document.querySelectorAll(".admin-input");
  let editorInput = document.querySelectorAll(".editor-input");
  if (USER_ROLES.includes(5150)) {
  } else if (USER_ROLES.includes(2001)) {
    admin.forEach((elm) => {
      elm.style.display = "none";
    });
    adminInput.forEach((elm) => {
      elm.setAttribute("disabled", "true");
    });
  } else {
    admin.forEach((elm) => {
      elm.style.display = "none";
    });
    adminInput.forEach((elm) => {
      elm.setAttribute("disabled", "true");
    });
    editor.forEach((elm) => {
      elm.style.display = "none";
    });
    editorInput.forEach((elm) => {
      elm.setAttribute("disabled", "true");
    });
  }
}
function sortByDate(arr) {
  return arr.sort((a, b) => new Date(b.date) - new Date(a.date));
}
function ScaleUp() {
  fetch(`${MY_URL}/data`, {
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
      ServerResponse.innerHTML = `<img src="./img/JM - P - BW - PNG.png" style="width: 250px" /><h1 style="color:red">An unexpected error occurred</h1><h2 style="color:red">try again later</h2>`;
      console.error(error);
    });
}
ScaleUp();

// footer
let date = new Date().getFullYear();
let copy = document.getElementById("copy");
copy.innerHTML = `&copy; ${date}`;
