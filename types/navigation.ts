import { defineAsyncComponent } from 'vue';

export interface NavItem {
    title: string;
    icon: ReturnType<typeof defineAsyncComponent>;
    navPath: string;
}

export interface NavigationGroup {
    title: string;
    items: NavItem[],
}