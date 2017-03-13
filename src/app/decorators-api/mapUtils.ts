import {
    getJsonProperty,
    getClazz,
    getJsonEnum,
    IEnumMetaData,
    IJsonMetaData,
    IMapMetaData,
    getJsonMap,
    PASS_ROOT_OBJECT
} from './jsonProperty';

export class MapUtils {
    static isPrimitive(obj: any) {
        switch (typeof obj) {
            case 'string':
            case 'number':
            case 'boolean':
                return true;
        }

        return (obj instanceof String || obj === String ||
        obj instanceof Number || obj === Number ||
        obj instanceof Boolean || obj === Boolean);
    }

    static isArray(object: any) {
        if (object === Array) {
            return true;
        } else if (typeof Array.isArray === 'function') {
            return Array.isArray(object);
        } else {
            return object instanceof Array;
        }
    }

    static deserializeList<T>(clazz: {new(): T}, jsonArray: any) {
        let data: T[] = [];
        jsonArray.forEach((item: any) => data.push(MapUtils.deserialize(clazz, item)));
        return data;
    }


    static deserialize<T>(clazz: {new(): T}, jsonObject: any) {
        if ((clazz === undefined) || (jsonObject === undefined)) return undefined;
        let obj: any = new clazz();
        Object.keys(obj).forEach((key) => {
            let propertMetadataFn: (IJsonMetaData: any) => any = (propertyMetadata: IJsonMetaData<any>) => {
                let propertyName = propertyMetadata.name || key;
                let innerJson: any = undefined;
                if (propertyMetadata.name === PASS_ROOT_OBJECT) {
                    innerJson = jsonObject;
                } else {
                    innerJson = jsonObject ? jsonObject[propertyName] : undefined;
                }
                let clazz = getClazz(obj, key);
                if (MapUtils.isArray(clazz)) {
                    let metadata = getJsonProperty(obj, key);
                    if (metadata.clazz || MapUtils.isPrimitive(clazz)) {
                        if (innerJson) {
                            if (MapUtils.isArray(innerJson)) {
                                //noinspection TypeScriptUnresolvedFunction
                                return innerJson.map((item: any) => MapUtils.deserialize(metadata.clazz, item));
                            } else {
                                // We are dealing with an object which has been annotated as an array.
                                return Object.keys(innerJson).map((item) => MapUtils.deserialize(metadata.clazz, innerJson[item]));
                            }
                        } else {
                            return undefined;
                        }
                    } else {
                        return innerJson;
                    }

                } else if (!MapUtils.isPrimitive(clazz)) {
                    return MapUtils.deserialize(clazz, innerJson);
                } else {
                    return jsonObject ? jsonObject[propertyName] : undefined;
                }
            };

            let propertyMetadata: IJsonMetaData<any> = getJsonProperty(obj, key);
            let enumMetadata: IEnumMetaData<any> = (propertyMetadata !== undefined) ? undefined : getJsonEnum(obj, key);
            let mapMetadata: IMapMetaData<any> = (enumMetadata !== undefined) ? undefined : getJsonMap(obj, key);
            if (mapMetadata) {
                let name = mapMetadata.name || key;
                let clazz = mapMetadata.clazz;
                let dictionary = Object.create(null);
                let targetMap = (name === PASS_ROOT_OBJECT) ? jsonObject : jsonObject[name];
                obj[key] = dictionary;
                Object.keys(targetMap).map((key) => {
                    dictionary[key] = this.isPrimitive(clazz) ? targetMap[key] : MapUtils.deserialize(clazz, targetMap[key]);
                });
            } else if (propertyMetadata) {
                obj[key] = propertMetadataFn(propertyMetadata);
            } else if (enumMetadata) {
                if (jsonObject) {
                    let propertyName = enumMetadata.name || key;
                    let innerJson: any = (propertyName !== undefined) ? jsonObject[propertyName] : jsonObject;
                    if (this.isArray(innerJson)) {
                        let innjerJsonValues = Object.keys(innerJson).map((key) => innerJson[key]);
                        obj[key] = innjerJsonValues.map((value: any) => enumMetadata.clazz[value]);
                    } else {
                        obj[key] = enumMetadata.clazz[innerJson];
                    }
                } else {
                    obj[key] = undefined;
                }
            } else {
                if (jsonObject && jsonObject[key] !== undefined) {
                    obj[key] = jsonObject[key];
                }
            }
        });
        return obj;
    }
}
