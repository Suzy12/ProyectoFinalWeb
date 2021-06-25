import { Example } from './examples.model';
import { Entry } from './entry.model';

export interface Exercise {
    key?: number,
    call: string,
    creator: string,
    code: string,
    examples: Example[],
    solution: {
        outputs: Entry[],
        code: string,
        inputs: Entry[]
    },
    level: string,
    created: string,
    name: string,
    section: string,
    details: string,
    idx?  : number
}


