import { createApp } from 'vue';

import TheHeader from './component/layout/TheHeader.vue';
import BaseCard from './component/UI/BaseCard.vue';
import BaseButton from './component/UI/BaseButton.vue';
import BaseDialog from './component/UI/BaseDialog.vue';

import App from './App.vue';
const app = createApp(App);

app.component('the-header', TheHeader);
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-dialog', BaseDialog);

app.mount('#app');
