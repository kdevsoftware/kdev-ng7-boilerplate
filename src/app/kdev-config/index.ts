import { KdevConfig } from '@kdev/types';

export const kdevConfig: KdevConfig = {
    colorTheme: 'theme-default',
    customScrollbars: true,
    layout: {
        style: 'backend',
        width: 'fullwidth',
        navbar: {
            primaryBackground: 'kdev-navy-700',
            secondaryBackground: 'kdev-navy-900',
            folded: false,
            hidden: false,
            position: 'left',
            variant: 'admin'
        },
        toolbar: {
            customBackgroundColor: false,
            background: 'kdev-white-500',
            hidden: false,
            position: 'below-static'
        },
        footer: {
            customBackgroundColor: true,
            background: 'kdev-navy-900',
            hidden: false,
            position: 'below-fixed'
        },
        sidepanel: {
            hidden: false,
            position: 'right'
        }
    }
};
