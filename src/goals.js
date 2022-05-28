let goalKey = 0;

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
