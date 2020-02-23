import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ProductData } from './users-data';


export class AppData implements InMemoryDbService {

  createDb() {
    const users = ProductData.users;
    return { users };
  }
}