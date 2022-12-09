import {GameType, EditorType, CardType} from "../../core/types/types";
import {deepClone} from "../../core/functions/deepClone";
import {ActionType} from "../store";

function editorReducer(state: EditorType, action: ActionType) {
    switch (action.type) {
        default:
            return deepClone(state) as EditorType
    }
}

export {editorReducer}