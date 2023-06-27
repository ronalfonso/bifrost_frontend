
export enum TypeError {
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR',
    WARNING = 'WARNING',
    INFO = 'INFO',
    NONE = 'NONE',
}
export interface Toast {
    message: string,
    type: TypeError,
    subMessage: '',
    time: number
}