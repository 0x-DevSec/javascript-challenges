const workers = [
  { id: 1, name: 'Alice Dupont', role: 'Manager', city: 'Paris', salary: 60000, active: true, hireDate: '2023-01-15' },
  { id: 2, name: 'Bob Martin', role: 'Developer', city: 'Lyon', salary: 55000, active: true, hireDate: '2022-06-10' },
  { id: 3, name: 'Claire Bernard', role: 'Designer', city: 'Paris', salary: 48000, active: false, hireDate: '2024-02-01' },
  { id: 4, name: 'David Leroy', role: 'Developer', city: 'Lyon', salary: 52000, active: true, hireDate: '2021-08-20' },
  { id: 5, name: 'Eve Dubois', role: 'Manager', city: 'Marseille', salary: 62000, active: true, hireDate: '2020-03-05' },
]


// Challenge #01 : Total Employee Count
 const ch1 = document.querySelector('.chall1 p');
 const Total = workers.length;
 ch1.innerHTML = `Total Employee : ${Total}`;

// Challenge #02: Employee List
 const ch2 = document.querySelector('.chall2 ul');

 function employeeList()
 {
    workers.forEach(element => {
        const li = document.createElement('li');
        li.textContent = element.name,
        ch2.appendChild(li);
    });
 }
 employeeList();

 // Challenge #03: Display name and role of employee ID 3
 // Name: Claire Bernard | Role: Designer
 const ch3 = document.querySelector('.chall3 p');
 workers.forEach( element => {
    if (element.id  === 3)
    {
        ch3.innerHTML = `Name: ${element.name} Role: ${element.role}`;
    }
 })

 // Challenge #04 : Show "Active" or "Inactive" for each employee
 const ch4 = document.querySelector('.chall4 ul');

workers.forEach(element => {
    const li = document.createElement('li');

    const status = document.createElement('span');
    status.textContent = element.active ? "active" : "inactive";
    status.style.color = element.active ? "green" : "red";

    li.textContent = `${element.name} `;
    li.appendChild(status);

    ch4.appendChild(li);
});

// Challenge #05: Role Alert Button (Button that shows employee role in an alert)












