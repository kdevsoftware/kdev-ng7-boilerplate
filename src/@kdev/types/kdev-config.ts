export interface KdevConfig {
    colorTheme: string;
    customScrollbars: boolean;
    layout: {
        style: string,
        width: 'fullwidth' | 'boxed',
        navbar: {
            primaryBackground: string,
            secondaryBackground: string,
            hidden: boolean,
            folded: boolean,
            variant: string
        },
        toolbar: {
            customBackgroundColor: boolean,
            background: string,
            hidden: boolean,
            position: 'above' | 'above-static' | 'above-fixed' | 'below' | 'below-static' | 'below-fixed'
        }
        footer: {
            customBackgroundColor: boolean,
            background: string,
            hidden: boolean,
            position: 'above' | 'above-static' | 'above-fixed' | 'below' | 'below-static' | 'below-fixed'
        }
    };
}
