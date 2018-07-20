import MobxReactForm from 'mobx-react-form';
import validatorjs from 'validatorjs';

const plugins = { dvr: validatorjs };

const fields = [{
  label: ' ',
  name: 'email',
  placeholder: 'Insert Email',
  value: new Date('Sat Jul 14 2018'),
}, {
  label: ' ',
  name: 'password',
  placeholder: 'Insert Password',
}];

const hooks = {
  onSuccess(form) {
    // alert('Form is valid! Send the request here.');
    // get field values
    // tslint:disable-next-line:no-console
    console.log('Form Values!', form.values());
  },
  onError(form) {
    // alert('Form has errors!');
    // get all form errors
    // tslint:disable-next-line:no-console
    console.log('All form errors', form.errors());
  }
}

export default new MobxReactForm({ fields }, { plugins, hooks });
