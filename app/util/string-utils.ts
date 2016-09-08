export class StringUtils{
    /**
     * Sanitize a String with non ascii chars.
     * @param input any String
     * @returns {string} non ascii chars replaced by ascii chars. e.g. à -> a, é -> e
     */
    static sanitizeString(input:string){
        let result:string = input.toLowerCase();
        result = result.replace(/[àáâãäå]/g,"a");
        result = result.replace(/[èéêë]/g,"e");
        result = result.replace(/[ìîï]/g,"i");
        return result;
    }
}