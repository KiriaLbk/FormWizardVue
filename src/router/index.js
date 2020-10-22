import { createWebHistory, createRouter } from "vue-router";
import CheckBox from '../components/form/formElements/CheckBox.vue';
import TextArea from '../components/form/formElements/TextArea.vue';
import TextBox from '../components/form/formElements/TextBox.vue';
import DateTime from '../components/form/formElements/DateTime.vue';
import ComboBox from '../components/form/formElements/ComboBox.vue';
import Complete from '../components/form/formElements/Complete.vue';

const routes = [
    {
        path: '/',
        name: 'first',
        component: TextBox
    },
    {
        path: '/second',
        name: 'second',
        component: ComboBox
    },
    {
        path: '/third',
        name: 'third',
        component: CheckBox
    },
    {
        path: '/fourth',
        name: 'fourth',
        component: TextArea
    },
    {
        path: '/fifth',
        name: 'fifth',
        component: DateTime
    },
    {
        path: '/end',
        name: 'end',
        component: Complete
    }
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;