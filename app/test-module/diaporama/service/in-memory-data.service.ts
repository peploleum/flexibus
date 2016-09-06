/**
 * Created by Vincent on 06/09/2016.
 */
import { InMemoryDbService } from 'angular2-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let photos = [
            {index:1, url:'url1'},
            {index:2, name:'url2'},
            {index:3, name:'url3'},
            {index:4, name:'url4'},
            {index:5, name:'url5'},
        ];

        return {photos};
    }
}