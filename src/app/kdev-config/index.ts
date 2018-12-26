import { KdevConfig } from '@kdev/types';

export const kdevConfig: KdevConfig = {
    colorTheme: 'theme-default',
    customScrollbars: true,
    layout: {
        style: 'frontend',
        width: 'fullwidth',
        navbar: {
            primaryBackground: 'kdev-navy-700',
            secondaryBackground: 'kdev-navy-900',
            folded: false,
            hidden: false,
            variant: 'style-2'
        },
        toolbar: {
            customBackgroundColor: true,
            background: 'kdev-navy-900',
            hidden: false,
            position: 'below-static'
        },
        footer: {
            customBackgroundColor: true,
            background: 'kdev-navy-900',
            hidden: false,
            position: 'below-fixed'
        }
    }
};
