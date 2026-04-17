import Home from "../pages/Home.vue";
import Saved from "../pages/Saved.vue";
import Profile from "../pages/Profile.vue";

export const routes = [
    {
        path: '/', name: 'Home', component: Home,
    },
    {
        path: '/saved', name: 'Saved', component: Saved,
    },
    {
        path: '/profile', name: 'Profile', component: Profile,
    }
];