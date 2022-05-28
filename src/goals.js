export function createNewGoal(e) {
    const title = (e.target.elements['goal-title'].value);
    const description = (e.target.elements['goal-description'].value);
    const dueDate = (e.target.elements['goal-date'].value);
    let goal = new Goal(title, description, dueDate);
    saveGoalToLocalStorage(title, goal);
}

class Goal {
    constructor(title, description, dueDate) {
        this.title = title;
        this.description = description;
        this.due = dueDate;
    }
}

function saveGoalToLocalStorage(key, goal){
    window.localStorage.setItem(key, JSON.stringify(goal));
}

export function showGoals() {
    let sidebarGoalList = document.getElementById('sidebar-goal-list');
    const keys = Object.keys(localStorage);

    for(let key of keys){
        let goal = JSON.parse(window.localStorage.getItem(key));
        console.log(goal.title);

        //create li to hold goal
        const entry = document.createElement('li');
        entry.classList.add('list-group-item');
        //title
        const title = document.createElement('h5');
        title.innerText = goal.title;
        entry.appendChild(title);
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

