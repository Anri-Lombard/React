import { useState, useEffect } from 'react';

let globalState = {};
let listeners = [];
let actions = {};

const useStore = () => {
    // Updated snapshot
    const setState = useState(globalState)[1];

    useEffect(() => {
        listeners.push(setState);

        return () => {
            listeners = listeners.filter(li => li !== setState);
        }
    }, [setState])
}