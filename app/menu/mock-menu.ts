import {MenuItem} from "./menu-item";
export const MENUITEMS: MenuItem[] = [
    {
        title: 'Send to map',
        icon: 'fa fa-globe',
        name: 'map',
        destination: 'MAP'
    },
    {
        title: 'Send to form',
        icon: 'fa fa-tasks',
        name: 'form',
        destination: 'FORM'
    },
    {
        title: 'Send to search',
        icon: 'fa fa-search',
        name: 'search',
        destination: 'SEARCH'
    }

];
