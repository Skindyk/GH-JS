import TaskModel from './taskModel';

let options = {
	year: 'numeric',
	month: 'long',
	day: 'numeric',
};

let tasks = new TaskModel([
    {
        text: 'Brew coffee',
        done: true
    },
    {
        text: 'Write some code',
        done: false
    },
    {
        text: 'Sleep',
        done: false
    }
]);
export default tasks;