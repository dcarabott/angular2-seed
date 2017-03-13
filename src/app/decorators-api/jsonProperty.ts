import 'reflect-metadata';

export const PASS_ROOT_OBJECT = String('$this');

const jsonMetadataKey = 'jsonProperty';
const enumMetadataKey = 'jsonEnum';
const mapMetadataKey = 'jsonMap';


export class Primitive<T> {
    value: T;
}

export interface IJsonMetaData<T> {
    name?: string;
    clazz?: {new(): T};
}

export interface IEnumMetaData<T> {
    name?: string;
    clazz?: {new(): T};
}

export interface IMapMetaData<T> {
    name?: string;
    clazz?: {new(): T};
}


export interface IMetaData<T> {
    name?: string;
    clazz?: {new(): T};
}

export interface IEnumData<T> {
    name?: string;
    enumeration: any;
}

export interface IMapData<S, T> {
    name?: string;
    clazz?: {new(): T};
}

export function JsonProperty<T>(metadata?: IMetaData<T>|string): any {
    if (metadata instanceof String || typeof metadata === 'string') {
        return Reflect.metadata(jsonMetadataKey, {
            name: metadata,
            clazz: undefined
        });
    } else {
        let metadataObj = <IMetaData<T>>metadata;
        return Reflect.metadata(jsonMetadataKey, {
            name: metadataObj ? metadataObj.name : undefined,
            clazz: metadataObj ? metadataObj.clazz : undefined
        });
    }
}

export function JsonEnum<T>(metadata: IEnumData<T>): any {
    let metadataObj = <IEnumData<T>>metadata;
    return Reflect.metadata(enumMetadataKey, {
        name: metadataObj ? metadataObj.name : undefined,
        clazz: metadataObj ? metadataObj.enumeration : undefined
    });
}

export function JsonMap<S, T>(metadata: IMapData<S, T>): any {
    return Reflect.metadata(mapMetadataKey, {
        name: metadata.name,
        clazz: metadata.clazz
    });
}

export function getClazz(target: any, propertyKey: string): any {
    return Reflect.getMetadata('design:type', target, propertyKey);
}

export function getJsonProperty<T>(target: any, propertyKey: string): IJsonMetaData<T> {
    return Reflect.getMetadata(jsonMetadataKey, target, propertyKey);
}

export function getJsonEnum<T>(target: any, propertyKey: string): IEnumMetaData<T> {
    return Reflect.getMetadata(enumMetadataKey, target, propertyKey);
}

export function getJsonMap<T>(target: any, propertyKey: string): IMapMetaData<T> {
    return Reflect.getMetadata(mapMetadataKey, target, propertyKey);
}
