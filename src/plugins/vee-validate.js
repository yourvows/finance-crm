import { extend } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';

// No message specified.
extend('email', email);

// Override the default message.
extend('required', {
  ...required,
  message: 'Ushbu qator to`ldirilishi shart!'

});

// extend('error', {
//   validate(value, args) {
//     console.log(args[0]);
//     if(args[0] == true){
//       return 'Bu nom avval kiritilgan!'
//     }else{
//       return true;
//     }
//   }

// })


extend('error', (value, args) => {
  if (args[0] == 'true') {
    return args[1];
  }else{
    return true
  }
});
