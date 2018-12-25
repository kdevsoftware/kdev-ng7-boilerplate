import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { KDEV_CONFIG } from '@kdev/services/config.service';

@NgModule()
export class KdevModule
{
    constructor(@Optional() @SkipSelf() parentModule: KdevModule)
    {
        if ( parentModule )
        {
            throw new Error('KdevModule is already loaded. Import it in the AppModule only!');
        }
    }

    static forRoot(config): ModuleWithProviders
    {
        return {
            ngModule : KdevModule,
            providers: [
                {
                    provide : KDEV_CONFIG,
                    useValue: config
                }
            ]
        };
    }
}
