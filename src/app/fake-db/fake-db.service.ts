import { InMemoryDbService } from 'angular-in-memory-web-api';

export class FakeDbService implements InMemoryDbService {
    createDb(): any {
        return {
        };
    }
}
