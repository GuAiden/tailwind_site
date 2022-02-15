/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyBuE_xZS55u5kuw8Q_rFaQZtobEyEEyZgE',
  authDomain: 'asoc-tailwind.firebaseapp.com',
  projectId: 'asoc-tailwind',
  storageBucket: 'asoc-tailwind.appspot.com',
  messagingSenderId: '684425698263',
  appId: '1:684425698263:web:ed77cefc9ecdb150fb4992',
  measurementId: 'G-0DLJFYK32R',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
