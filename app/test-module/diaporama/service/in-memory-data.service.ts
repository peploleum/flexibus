/**
 * Created by Vincent on 06/09/2016.
 */
import { InMemoryDbService } from 'angular2-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let photos = [
            {index:1, url:'app/test-module/diaporama/service/resources/anaxa-gore.jpg'},
            {index:2, url:'app/test-module/diaporama/service/resources/magnarox.jpg'},
            {index:3, url:'app/test-module/diaporama/service/resources/peploleum.png'},
            {index:4, url:'app/test-module/diaporama/service/resources/darkavus.jpg'},
            {index:5, url:'app/test-module/diaporama/service/resources/flower.png'},
        ];

        return {photos};
    }
}