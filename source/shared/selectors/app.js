const KEY = "app";

export function getBusyMessage(state) {
    return state[KEY].busyMessage;
}

export function shouldShowBusyModal(state) {
    return state[KEY].busy;
}
