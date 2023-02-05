import {EditorType} from "../../core/types/types";
import {deepClone} from "../../core/functions/deepClone";
import {ActionType} from "../store";
import {Actions} from "../../core/types/types";

function setCurrentSeasonReducer(editor: EditorType, newSeason: string): EditorType {
    const newEditor = deepClone(editor) as EditorType;
    console.log(newSeason);
    return {
        ...newEditor,
        currentSeason: newSeason,
    }
}

function editorReducer(state: EditorType, action: ActionType) {
    switch (action.type) {
        case Actions.SET_CURRENT_SEASON:
            return action.newSeason !== undefined ? setCurrentSeasonReducer(state, action.newSeason) : deepClone(state) as EditorType;
        default:
            return deepClone(state) as EditorType
    }
}

export {editorReducer}