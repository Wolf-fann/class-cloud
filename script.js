const studentForm = document.getElementById("studentForm");
const studentList = document.getElementById("studentList");

studentForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const studentName = document.getElementById("studentName").value.trim();
    const studentId = document.getElementById("studentId").value.trim();

    if (studentName === "" || studentId === "") {
        alert("Please enter both student name and student ID.");
        return;
    }

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${studentId}</td>
        <td>${studentName}</td>
        <td>
            <select class="attendance-status">
                <option value="Present">Present</option>
                <option value="Absent">Absent</option>
                <option value="Late">Late</option>
            </select>
        </td>
        <td>
            <button class="delete-btn">Delete</button>
        </td>
    `;

    studentList.appendChild(row);

    studentForm.reset();
});

studentList.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-btn")) {
        event.target.closest("tr").remove();
    }
});
