/**
 * Created by Vincent on 06/09/2016.
 */
import { InMemoryDbService } from 'angular2-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let photos = [
            {name:'Peploleum', description:'A plant man', url:'app/test-module/diaporama/service/resources/peploleum.png'},
            {name:'Anaxa-Gore', description:'A statue man', url:'app/test-module/diaporama/service/resources/anaxa-gore.jpg'},
            {name:'Magnarox', description:'A candy man', url:'app/test-module/diaporama/service/resources/magnarox.jpg'},
            {name:'Darkavus', description:'A fuck man', url:'app/test-module/diaporama/service/resources/darkavus.jpg'},
            {name:'Flower', description:'Just a flower', url:'app/test-module/diaporama/service/resources/flower.png'},
        ];

        return {photos};
    }
}