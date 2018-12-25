import { KdevNavigation } from '@kdev/types';

export const navigation: KdevNavigation[] = [
    {
        id: 'pages',
        title: 'Pages',
        type: 'group',
        icon: 'pages',
        children: [
            {
                id: 'page-1',
                title: 'Page 1',
                type: 'item',
                icon: 'receipt',
                url: '/backend/page-1'
            },
            {
                id: 'page-2',
                title: 'Page 2',
                type: 'item',
                icon: 'receipt',
                url: '/backend/page-2'
            },
            {
                id: 'page-3',
                title: 'Page 3',
                type: 'item',
                icon: 'receipt',
                url: '/backend/page-3'
            },
            {
                id: 'folder',
                title: 'Folder',
                type: 'collapsable',
                icon: 'folder',
                children: [
                    {
                        id: 'page-4',
                        title: 'Page 4',
                        type: 'item',
                        url: '/backend/page-4',
                        exactMatch: true
                    },
                    {
                        id: 'page-5',
                        title: 'Page 5',
                        type: 'item',
                        url: '/backend/page-5',
                        exactMatch: true
                    },
                    {
                        id: 'page-6',
                        title: 'Page 6',
                        type: 'item',
                        url: '/backend/page-6',
                        exactMatch: true
                    }
                ]
            }
        ]
    },
    {
        id: 'profile',
        title: 'Profile',
        type: 'group',
        icon: 'profile',
        children: [
            {
                id: 'settings',
                title: 'Settings',
                type: 'item',
                icon: 'settings',
                url: '/backend/profile'
            }
        ]
    }
];
