export interface Tab {
    label: string;
    name: string;
}

export interface TabPanels {
    tabs: Tab[];
    activeTab: Tab['name'];
}
