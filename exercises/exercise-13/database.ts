type KeysOf<T> = Array<keyof T>;
type SimpleQueryOperators = '$eq' | '$lt' | '$gt';
type ArrayOperators = '$and' | '$or';

type SimpleQuery<T> = {
    [k in keyof T]?: {
        [s in SimpleQueryOperators]?: T[k];
    }
}

type ArrayQuery<T> = {
    [s in ArrayOperators]?: Array<SimpleQuery<T>>
}

type TextQuery = {
    $text: string;
}

type InQuery<T> = {
    [k in keyof T]?: {
        $in: Array<T[k]>;
    }
}

type Query<T> = SimpleQuery<T> | ArrayQuery<T> | TextQuery | InQuery<T>;

export class Database<T> {
    protected filename: string;
    protected fullTextSearchFieldNames: KeysOf<T>;
    constructor(filename: string, fullTextSearchFieldNames: KeysOf<T>) {
        this.filename = filename;
        this.fullTextSearchFieldNames = fullTextSearchFieldNames;
    }

    async find(query: Query<T>): Promise<T[]> {
        return [];
    }
}
