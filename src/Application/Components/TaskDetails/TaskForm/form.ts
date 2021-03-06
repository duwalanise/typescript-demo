import MobxReactForm from 'mobx-react-form';
import validatorjs from 'validatorjs';

const plugins = { dvr: validatorjs };

const getField =  (task) => [{
  label: ' ',
  name: 'project',
  placeholder: 'Select Project',
  value: task.project,
}, {
  label: ' ',
  name: 'title',
  placeholder: 'Write your task name',
  rules: 'required',
  value: task.title,
}, {
  label: ' ',
  name: 'dueDate',
  placeholder: 'Due Date',
  value: task.dueDate ? new Date(task.dueDate) : null,
}, {
  label: ' ',
  name: 'assignee',
  placeholder: 'Select Assignee',
  value: task.assignee,
}, {
  label: ' ',
  name: 'description',
  placeholder: 'Add description to your task',
  value: task.description
}];

const getHooks = (callback) => ({
  onSuccess(form: {values: () => object}) {
    // alert('Form is valid! Send the request here.');
    // get field values
    // tslint:disable-next-line:no-console
    // console.log('Form Values!', form.values());
    callback.success(form.values());
  },
  onError(form: {errors: () => object}) {
    // alert('Form has errors!');
    // get all form errors
    // tslint:disable-next-line:no-console
    // console.log('All form errors', form.errors());
    callback.error(form.errors());
  }
});

const createForm = (task, callback) => {
  const fields = getField(task);
  const hooks = getHooks(callback);
  return new MobxReactForm({ fields }, { plugins, hooks });
}

export default createForm;
