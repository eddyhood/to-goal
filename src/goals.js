class Goal {
    constructor(title, description, dueDate) {
        this.title = title;
        this.description = description;
        this.due = dueDate;
    }
}

export function createNewGoal(e) {
    const title = (e.target.elements['goal-title'].value);
    const description = (e.target.elements['goal-description'].value);
    const dueDate = (e.target.elements['goal-date'].value);
    let goal = new Goal(title, description, dueDate);
    saveGoalToLocalStorage(title, goal);
}


function saveGoalToLocalStorage(key, goal){
    window.localStorage.setItem(key, JSON.stringify(goal));
}

export function showGoals() {
    let sidebarGoalList = document.getElementById('sidebar-goal-list');
    const keys = Object.keys(localStorage);

    for(let key of keys){
        let goal = JSON.parse(window.localStorage.getItem(key));

        //create li to hold goal
        const entry = document.createElement('li');
        entry.classList.add('list-group-item');

        //header (title)
        const header = document.createElement('div');
        header.classList.add('goal-header')
        const title = document.createElement('h5');
        title.innerText = goal.title;
        header.appendChild(title);

        //header (icons)
        const icons = document.createElement('div');
        const editEntry = document.createElement('i');
        editEntry.classList.add('flaticon-pencil');
        icons.appendChild(editEntry);

        const deleteGoal = document.createElement('i');
        deleteGoal.classList.add('flaticon-delete');
        icons.appendChild(deleteGoal);
        header.appendChild(icons);

        entry.appendChild(header);

        //Due Date
        const dueDate = document.createElement('p');
        dueDate.innerText = 'Due: ' + goal.due;
        entry.appendChild(dueDate);

        //Description
        const description = document.createElement('p');
        description.innerText = goal.description;
        entry.appendChild(description);

        sidebarGoalList.appendChild(entry);
    }
}

