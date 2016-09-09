import {FlexibusEntityDescriptor} from "./flexibus-entity-descriptor";
import {StringUtils} from "../util/string-utils";
export class FlexibusUtils {

    static filter(descriptor:FlexibusEntityDescriptor, filterValue:string) {
        let sanitizedLabel = StringUtils.sanitizeString(descriptor.label);
        let visible = (sanitizedLabel.indexOf(filterValue) != -1);
        descriptor.customMetadata = {visible: visible}
        descriptor.subDescriptors.map((subDesc) => {
            return FlexibusUtils.filter(subDesc, filterValue);
        })
    }
}