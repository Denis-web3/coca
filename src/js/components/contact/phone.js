import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/styles';

export const usePhone = () => {
  const input = document.querySelector('#phone');

  if (!input) return;

  intlTelInput(input, {
    initialCountry: 'auto',

    geoIpLookup: (callback) => {
      fetch('https://ipapi.co/json/')
        .then((res) => res.json())
        .then((data) => callback(data.country_code))
        .catch(() => callback('us'));
    },

    loadUtils: () => import('intl-tel-input/utils'),
  });
};
