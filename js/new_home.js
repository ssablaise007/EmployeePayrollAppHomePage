/* ---------------- UC4 -------------------- */
window.addEventListener('DOMContentLoaded',(event)=> {
    createInnerHtml();
});

// Template literal ES6 feature
const createInnerHtml = () => {
    
    const innerHtml = '${headerHtml}
    <tr>
      <td><img class="profile"src="/assets/profile-images/Ellipse -2.png" alt=""></td>
      <td>Elon Musk</td>
      <td>Male</td>
      <td><div class='dept-label'>HR</div><div class='dept-label'>Finance</div></td>
      <td>30000000</td>
      <td>1 Nov 2000</td>
      <td>
        <img id="1" onclick="remove(this)" src="/assets/icons/delete-black-18dp.svg">
        <img id="1" onclick="update(this)" src="/assets/icons/create-black-18dp.svg">
      </td>
    </tr>
    </td>
';
document.querySelector('#table-display').innerHtml = innerHtml;
}
 /* ---------------------- UC5 ------------------------*/
const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
    "<th>Salary</th><th>Start Date</th><th>Actions</th>";
    let empPayrollData = createEmployeePayrollJSON[0];
    const innerHtml = '${headerHtml}
    <tr>
        <td>img class ="profile" src ="${empPayrollData._profilePic}" alt=""</td>
        <td>${empPayrollData._name}</td>
        <td>${empPayrollData._gender</td>
        <td>
            <div class='dept-label'>${empPayrollData._department[0]}</div>
            <div class='dept-label'>${empPayrollData._department[1]}</div>
        </td>
        <td>${empPayrollData._salary}</td>
        <td>${empPayrollData._startDate}</td>
        </td>
        <img name="${empPayrollData._id}" onclick="remove(this)"
        src="/assets/icons/delete-black-18dp.svg" alt="delete">
        <img name="${empPayrollData._id}" onclick="update(this)"
        src="/assets/icons/create-black-18dp.svg" alt="edit">
</td>
</tr>
;
document.querySelector('#table-display').innerHTML = innerHtml;
        }
const createEmployeePayrollJSON = () => {
    let empPayrollListLocal = [
        {
            _name: 'elon Musk',
            _gender:'male',
            _department:[
                'Engineering',
                'Finance'
            ],
            _salary:'500000',
            _startDate:'29 Oct 2019',
            _note:'',
            _id:new Date().getTime(),
            _profilePic:'/assets/profile-images/Ellipse -1.png'
        }
    ];
    return empPayrollListLocal;
}

