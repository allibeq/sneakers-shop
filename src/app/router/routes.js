import HomePage from "../../pages/home/ui/HomePage.vue";
import SavedPage from "../../pages/saved/ui/SavedPage.vue";
import ProfilePage from "../../pages/profile/ui/ProfilePage.vue";

export const routes = [
    {
        path: '/', name: 'Home', component: HomePage,
    },
    {
        path: '/saved', name: 'Saved', component: SavedPage,
    },
    {
        path: '/profile', name: 'Profile', component: ProfilePage,
    }
];