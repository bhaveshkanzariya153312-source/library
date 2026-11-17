/* =========================================================
   MY LIBRARY - APPLICATION JAVASCRIPT
   Functionality preserved
   UI/Layout improved
   ========================================================= */

const demoBooks = [
    {
        id: 1,
        name: "Java Programming",
        author: "James Gosling",
        category: "Programming",
        quantity: 5,
        available: 5
    },
    {
        id: 2,
        name: "Web Technology",
        author: "Tim Berners-Lee",
        category: "Web",
        quantity: 4,
        available: 4
    },
    {
        id: 3,
        name: "Database Management",
        author: "C. J. Date",
        category: "Database",
        quantity: 3,
        available: 3
    }
];

const demoStudents = [
    {
        id: 1,
        name: "Demo Student",
        email: "student@example.com",
        phone: "9999999999",
        course: "Computer Engineering"
    }
];

/* =========================================================
   LOCAL STORAGE
   ========================================================= */

function initData() {

    if (!localStorage.getItem("books")) {
        localStorage.setItem(
            "books",
            JSON.stringify(demoBooks)
        );
    }

    if (!localStorage.getItem("students")) {
        localStorage.setItem(
            "students",
            JSON.stringify(demoStudents)
        );
    }

    if (!localStorage.getItem("issues")) {
        localStorage.setItem("issues", "[]");
    }
}

function getBooks() {
    initData();
    return JSON.parse(localStorage.getItem("books"));
}

function setBooks(x) {
    localStorage.setItem("books", JSON.stringify(x));
}

function getStudents() {
    initData();
    return JSON.parse(localStorage.getItem("students"));
}

function setStudents(x) {
    localStorage.setItem("students", JSON.stringify(x));
}

function getIssues() {
    initData();
    return JSON.parse(localStorage.getItem("issues"));
}

function setIssues(x) {
    localStorage.setItem("issues", JSON.stringify(x));
}

/* =========================================================
   HOME STATISTICS
   ========================================================= */

function homeStats() {

    initData();

    if (document.getElementById("bookCount")) {
        bookCount.innerText = getBooks().length;
    }

    if (document.getElementById("studentCount")) {
        studentCount.innerText = getStudents().length;
    }

    if (document.getElementById("issueCount")) {
        issueCount.innerText =
            getIssues().filter(x => x.status === "Issued").length;
    }
}

/* =========================================================
   LOGIN
   ========================================================= */

function adminLogin(e) {

    e.preventDefault();

    if (
        adminUser.value === "admin" &&
        adminPass.value === "admin123"
    ) {

        location.href = "admin-dashboard.html";

    } else {

        msg.innerHTML =
            '<div class="alert alert-danger">Incorrect username or password.</div>';
    }
}

function studentLogin(e) {

    e.preventDefault();

    if (
        studentUser.value === "student" &&
        studentPass.value === "1234"
    ) {

        location.href = "student-dashboard.html";

    } else {

        msg.innerHTML =
            '<div class="alert alert-danger">Incorrect Student ID or password.</div>';
    }
}

/* =========================================================
   ADMIN LAYOUT
   ========================================================= */

function renderLayout(active) {

    document.getElementById("layout").innerHTML = `

        <aside class="sidebar">

            <div class="sidebar-header">

                <div class="sidebar-brand">
                    📚 My Library
                </div>

                <div class="sidebar-subtitle">
                    Management System
                </div>

            </div>

            <div class="sidebar-section">
                Main Menu
            </div>

            <a class="${active === 'Dashboard' ? 'active' : ''}"
               href="admin-dashboard.html">
                <span>🏠</span>
                <span>Dashboard</span>
            </a>

            <a class="${active === 'Books' ? 'active' : ''}"
               href="books.html">
                <span>📚</span>
                <span>Books</span>
            </a>

            <a class="${active === 'Students' ? 'active' : ''}"
               href="students.html">
                <span>👨‍🎓</span>
                <span>Students</span>
            </a>

            <div class="sidebar-section">
                Library Operations
            </div>

            <a class="${active === 'Issue Book' ? 'active' : ''}"
               href="issue.html">
                <span>📖</span>
                <span>Issue Book</span>
            </a>

            <a class="${active === 'Return Book' ? 'active' : ''}"
               href="return.html">
                <span>↩️</span>
                <span>Return Book</span>
            </a>

            <a class="${active === 'Fine' ? 'active' : ''}"
               href="fine.html">
                <span>💰</span>
                <span>Fine</span>
            </a>

            <a class="${active === 'Reports' ? 'active' : ''}"
               href="reports.html">
                <span>📊</span>
                <span>Reports</span>
            </a>

            <a class="logout"
               href="index.html">
                <span>🚪</span>
                <span>Logout</span>
            </a>

        </aside>

        <header class="topbar">

            <div>
                <div class="topbar-title">
                    ${active}
                </div>

                <div class="topbar-subtitle">
                    My Library Management System
                </div>
            </div>

            <div>
                <span class="badge text-bg-light">
                    👤 Admin
                </span>
            </div>

        </header>
    `;

    if (active === "Dashboard") {
        setTimeout(showDashboard, 0);
    }
}

/* =========================================================
   STUDENT LAYOUT
   ========================================================= */

function renderStudentLayout() {

    document.getElementById("layout").innerHTML = `

        <aside class="sidebar">

            <div class="sidebar-header">

                <div class="sidebar-brand">
                    📚 My Library
                </div>

                <div class="sidebar-subtitle">
                    Student Portal
                </div>

            </div>

            <div class="sidebar-section">
                Student Menu
            </div>

            <a href="student-dashboard.html">
                <span>🏠</span>
                <span>Dashboard</span>
            </a>

            <a href="search-books.html">
                <span>🔎</span>
                <span>Search Books</span>
            </a>

            <a href="my-books.html">
                <span>📖</span>
                <span>My Books</span>
            </a>

            <a href="profile.html">
                <span>👤</span>
                <span>My Profile</span>
            </a>

            <a class="logout"
               href="index.html">
                <span>🚪</span>
                <span>Logout</span>
            </a>

        </aside>

        <header class="topbar">

            <div>

                <div class="topbar-title">
                    Student Panel
                </div>

                <div class="topbar-subtitle">
                    My Library Management System
                </div>

            </div>

            <div>

                <span class="badge text-bg-light">
                    👨‍🎓 Student
                </span>

            </div>

        </header>
    `;
}

/* =========================================================
   ADMIN DASHBOARD
   ========================================================= */

function showDashboard() {

    document.querySelector(".content")?.remove();

    const d = document.createElement("main");

    d.className = "content";

    d.innerHTML = `

        <div class="page-header">

            <h2>Admin Dashboard</h2>

            <p>
                Manage your library records from one place.
            </p>

        </div>

        <div class="row g-4">

            <div class="col-sm-6 col-xl-3">

                <div class="card stat-card dashboard-stat">

                    <div class="card-body">

                        <div class="stat-icon">
                            📚
                        </div>

                        <h5>Total Books</h5>

                        <h2>
                            ${getBooks().length}
                        </h2>

                    </div>

                </div>

            </div>

            <div class="col-sm-6 col-xl-3">

                <div class="card stat-card dashboard-stat">

                    <div class="card-body">

                        <div class="stat-icon">
                            👨‍🎓
                        </div>

                        <h5>Total Students</h5>

                        <h2>
                            ${getStudents().length}
                        </h2>

                    </div>

                </div>

            </div>

            <div class="col-sm-6 col-xl-3">

                <div class="card stat-card dashboard-stat">

                    <div class="card-body">

                        <div class="stat-icon">
                            📖
                        </div>

                        <h5>Issued Books</h5>

                        <h2>
                            ${getIssues().filter(
                                x => x.status === "Issued"
                            ).length}
                        </h2>

                    </div>

                </div>

            </div>

            <div class="col-sm-6 col-xl-3">

                <div class="card stat-card dashboard-stat">

                    <div class="card-body">

                        <div class="stat-icon">
                            ↩️
                        </div>

                        <h5>Returned</h5>

                        <h2>
                            ${getIssues().filter(
                                x => x.status === "Returned"
                            ).length}
                        </h2>

                    </div>

                </div>

            </div>

        </div>

        <div class="card welcome-panel p-4 mt-4">

            <h5>
                Welcome Admin 👋
            </h5>

            <p>
                Use the sidebar to manage books, students,
                issue, return, fine and reports.
            </p>

        </div>
    `;

    document.body.appendChild(d);
}

/* =========================================================
   BOOK MANAGEMENT
   ========================================================= */

function addBook(e) {

    e.preventDefault();

    let b = getBooks();

    b.push({

        id: b.length
            ? Math.max(...b.map(x => x.id)) + 1
            : 1,

        name: bookName.value,
        author: author.value,
        category: category.value,
        quantity: +quantity.value,
        available: +quantity.value

    });

    setBooks(b);

    e.target.reset();

    showBooks();
}

function showBooks() {

    let q =
        (document.getElementById("bookSearch")?.value || "")
            .toLowerCase();

    bookTable.innerHTML =
        getBooks()
            .filter(b =>
                (b.name + b.author + b.category)
                    .toLowerCase()
                    .includes(q)
            )
            .map(b => `

                <tr>

                    <td>${b.id}</td>

                    <td>
                        <strong>${b.name}</strong>
                    </td>

                    <td>${b.author}</td>

                    <td>
                        <span class="badge text-bg-light">
                            ${b.category}
                        </span>
                    </td>

                    <td>${b.quantity}</td>

                    <td>
                        <span class="badge bg-success">
                            ${b.available}
                        </span>
                    </td>

                    <td>

                        <button
                            class="btn btn-sm btn-danger"
                            onclick="deleteBook(${b.id})">

                            Delete

                        </button>

                    </td>

                </tr>

            `)
            .join("");
}

function deleteBook(id) {

    if (confirm("Delete this book?")) {

        setBooks(
            getBooks().filter(b => b.id !== id)
        );

        showBooks();
    }
}

/* =========================================================
   STUDENTS
   ========================================================= */

function addStudent(e) {

    e.preventDefault();

    let s = getStudents();

    s.push({

        id: s.length
            ? Math.max(...s.map(x => x.id)) + 1
            : 1,

        name: sname.value,
        email: semail.value,
        phone: sphone.value,
        course: scourse.value

    });

    setStudents(s);

    e.target.reset();

    showStudents();
}

function showStudents() {

    studentTable.innerHTML =
        getStudents()
            .map(s => `

                <tr>

                    <td>${s.id}</td>

                    <td>
                        <strong>${s.name}</strong>
                    </td>

                    <td>${s.email}</td>

                    <td>${s.phone}</td>

                    <td>${s.course}</td>

                    <td>

                        <button
                            class="btn btn-sm btn-danger"
                            onclick="deleteStudent(${s.id})">

                            Delete

                        </button>

                    </td>

                </tr>

            `)
            .join("");
}

function deleteStudent(id) {

    if (confirm("Delete this student?")) {

        setStudents(
            getStudents().filter(s => s.id !== id)
        );

        showStudents();
    }
}

/* =========================================================
   ISSUE BOOK
   ========================================================= */

function issueBook(e) {

    e.preventDefault();

    let sid = +issueStudent.value;
    let bid = +issueBookId.value;

    let b = getBooks();
    let s = getStudents();

    let st = s.find(x => x.id === sid);
    let bk = b.find(x => x.id === bid);

    if (!st || !bk) {

        issueMsg.innerHTML =
            '<div class="alert alert-danger">Invalid Student ID or Book ID.</div>';

        return;
    }

    if (bk.available < 1) {

        issueMsg.innerHTML =
            '<div class="alert alert-warning">Book is not available.</div>';

        return;
    }

    bk.available--;

    setBooks(b);

    let arr = getIssues();

    arr.push({

        id: arr.length
            ? Math.max(...arr.map(x => x.id)) + 1
            : 1,

        studentId: sid,
        student: st.name,

        bookId: bid,
        book: bk.name,

        issueDate:
            new Date()
                .toISOString()
                .slice(0, 10),

        dueDate: dueDate.value,

        status: "Issued"

    });

    setIssues(arr);

    issueMsg.innerHTML =
        '<div class="alert alert-success">Book issued successfully.</div>';

    e.target.reset();

    showIssues();
}

function showIssues() {

    issueTable.innerHTML =
        getIssues()
            .filter(x => x.status === "Issued")
            .map(x => `

                <tr>

                    <td>${x.id}</td>

                    <td>${x.student}</td>

                    <td>
                        <strong>${x.book}</strong>
                    </td>

                    <td>${x.issueDate}</td>

                    <td>${x.dueDate}</td>

                    <td>
                        <span class="badge bg-success">
                            Issued
                        </span>
                    </td>

                    <td>

                        <button
                            class="btn btn-sm btn-primary"
                            onclick="returnBook(${x.id})">

                            Return

                        </button>

                    </td>

                </tr>

            `)
            .join("");
}

/* =========================================================
   RETURN BOOK
   ========================================================= */

function returnBook(id) {

    let arr = getIssues();

    let x = arr.find(a => a.id === id);

    if (!x) return;

    x.status = "Returned";

    x.returnDate =
        new Date()
            .toISOString()
            .slice(0, 10);

    let b = getBooks();

    let bk = b.find(a => a.id === x.bookId);

    if (bk) {
        bk.available++;
    }

    setBooks(b);
    setIssues(arr);

    if (document.getElementById("issueTable")) {
        showIssues();
    }

    if (document.getElementById("returnTable")) {
        showReturn();
    }

    if (document.getElementById("fineTable")) {
        showFine();
    }
}

function showReturn() {

    returnTable.innerHTML =
        getIssues()
            .filter(x => x.status === "Issued")
            .map(x => `

                <tr>

                    <td>${x.id}</td>

                    <td>${x.student}</td>

                    <td>${x.book}</td>

                    <td>${x.dueDate}</td>

                    <td>
                        <span class="badge bg-success">
                            Issued
                        </span>
                    </td>

                    <td>

                        <button
                            class="btn btn-primary btn-sm"
                            onclick="returnBook(${x.id})">

                            Return

                        </button>

                    </td>

                </tr>

            `)
            .join("");
}

/* =========================================================
   FINE
   ========================================================= */

function showFine() {

    fineTable.innerHTML =
        getIssues()
            .filter(x => x.status === "Returned")
            .map(x => {

                let fine =
                    daysLate(
                        x.dueDate,
                        x.returnDate
                    ) * 5;

                return `

                    <tr>

                        <td>${x.id}</td>

                        <td>${x.student}</td>

                        <td>${x.book}</td>

                        <td>${x.dueDate}</td>

                        <td>${x.returnDate}</td>

                        <td>
                            <strong>₹${fine}</strong>
                        </td>

                    </tr>

                `;

            })
            .join("");
}

function daysLate(d1, d2) {

    return Math.max(
        0,
        Math.ceil(
            (new Date(d2) - new Date(d1))
            / 86400000
        )
    );
}

/* =========================================================
   REPORTS
   ========================================================= */

function showReports() {

    rBooks.innerText = getBooks().length;

    rStudents.innerText =
        getStudents().length;

    rIssued.innerText =
        getIssues()
            .filter(x => x.status === "Issued")
            .length;

    rReturned.innerText =
        getIssues()
            .filter(x => x.status === "Returned")
            .length;
}

/* =========================================================
   STUDENT SEARCH
   ========================================================= */

function studentSearch() {

    let q =
        (document.getElementById("search")?.value || "")
            .toLowerCase();

    searchTable.innerHTML =
        getBooks()
            .filter(b =>
                (b.name + b.author + b.category)
                    .toLowerCase()
                    .includes(q)
            )
            .map(b => `

                <tr>

                    <td>${b.id}</td>

                    <td>
                        <strong>${b.name}</strong>
                    </td>

                    <td>${b.author}</td>

                    <td>${b.category}</td>

                    <td>

                        <span class="badge bg-success">
                            ${b.available}
                        </span>

                    </td>

                </tr>

            `)
            .join("");
}

/* =========================================================
   MY BOOKS
   ========================================================= */

function showMyBooks() {

    myBookTable.innerHTML =
        getIssues()
            .map(x => `

                <tr>

                    <td>${x.id}</td>

                    <td>${x.student}</td>

                    <td>
                        <strong>${x.book}</strong>
                    </td>

                    <td>${x.dueDate}</td>

                    <td>

                        <span class="badge ${
                            x.status === "Issued"
                                ? "bg-success"
                                : "bg-secondary"
                        }">

                            ${x.status}

                        </span>

                    </td>

                </tr>

            `)
            .join("");
}

/* =========================================================
   INITIALIZE
   ========================================================= */

initData(); 