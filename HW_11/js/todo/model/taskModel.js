function TaskModel(tasks) {

    let arrTasks = JSON.parse(localStorage.getItem('arrTasks'));
    this.listeners = [];
    tasks = arrTasks || tasks;
    tasks.forEach(task => {
        this.push(task);
    });
}

function addToLs() {
    let arrTasks = [];
    for (let i = 0; i < tasks.length; i++) {
        arrTasks.push(tasks[i]);
    }
    localStorage.setItem('arrTasks', JSON.stringify(arrTasks));
}

TaskModel.prototype = Object.create(Array.prototype);
TaskModel.prototype.constructor = TaskModel;

TaskModel.prototype.done = function (task, status) {
    task.done = status;
    addToLs();
    this.trigger('done', [task]);
};

TaskModel.prototype.add = function (text) {
    let task = {
        text,
        done: false,
        date: new Date().toLocaleString('en-US')
    };
    this.push(task);
    addToLs();
    this.trigger('add', [task]);
};

TaskModel.prototype.move = function (task) {
    let index = this.indexOf(task);

    if (event.target.className === 'move-up') {
        if (index !== 0) {
            let inter = this[index - 1];

            this[index - 1] = task;
            this[index] =	inter;
        }
    } else {
        if (index !== this.length - 1) {
            let	inter = this[index + 1];

            this[index + 1] = task;
            this[index] =	inter;
        }
    }
    addToLs();
    this.trigger('move', [task]);
};

TaskModel.prototype.delete = function (task) {
    let index = this.indexOf(task);
    if (index >= 0) {
        this.splice(index, 1);
    }
    addToLs();
    this.trigger('delete', [task]);
};

TaskModel.prototype.on = function (event, callback) {
    this.listeners.push({
        event,
        callback
    });
};

TaskModel.prototype.trigger = function (event, args) {
    let tasks = this;
    this.listeners.forEach(listener => {
        if (listener.event === event) {
            listener.callback.apply(tasks, args);
        }
    });

};