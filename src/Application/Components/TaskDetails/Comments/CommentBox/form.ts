import MobxReactForm from 'mobx-react-form';
import validatorjs from 'validatorjs';

const plugins = { dvr: validatorjs };

const getField =  () => [{
  label: ' ',
  name: 'comment',
  placeholder: 'Write a comment...',
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

const createForm = (callback) => {
  const fields = getField();
  const hooks = getHooks(callback);
  return new MobxReactForm({ fields }, { plugins, hooks });
}

export default createForm;
