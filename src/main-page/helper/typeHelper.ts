export type PinFormStateProps = {
    userId: string;
    isFetchingVerifyPin: boolean;
}

export type FunnyRomanceFormProps = {
    isFetchingTriggerPin: boolean;
}

export type MainPageProps = {
    showHome: boolean;
    showFun: boolean;
    showRomance: boolean;
    showPin: boolean;
    showThanks: boolean;
}

export type InitialStateModule = {
    userId: string;
    isFetchingTriggerPin: boolean;
    isFetchingVerifyPin: boolean;
}
