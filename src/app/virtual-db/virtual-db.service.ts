import { InMemoryDbService } from 'angular-in-memory-web-api';

export class VirtualDbService implements InMemoryDbService {
    createDb(): any {
        return {
        };
    }
}
