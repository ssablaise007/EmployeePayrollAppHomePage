/* ---------------- UC4 -------------------- */
window.addEventListener('DOMContentLoaded',(event)=> {
    createInnerHtml();
});

// Template literal ES6 feature
const createInnerHtml = () => {
    const innerHtml = '
    <tr>
      <th></th>
      <th>Name</th>
      <th>Gender</th>
      <th>Department</th>
      <th>Salary</th>
      <th>Start Date</th>
      <th>Actions</th>
    </tr>
    <tr>
      <td><img class="profile"alt="" src="/assets/profile-images/Ellipse -2.png">
      </td>
      <td>Elon Musk</td>
      <td>Male</td>
      <td><div class='dept-label'></div>
      <div class='dept-label'></div></td>
      <td>30000000</td>
      <td>1 Nov 2000</td>
      <td>
        <img id="1" onclick="remove(this)" alt="delete"
        src="/assets/icons/delete-black-18dp.svg">
        <img id="1" alt="edit" onclick="update(this)"
        src="/assets/icons/create-black-18dp.svg">
      </td>
    </tr>
';
document.querySelector('#table-display').innerHtml = innerHtml;
}