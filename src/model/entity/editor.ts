import {EditorType} from "../types/types";
import {deepClone} from "../../core/functions/deepClone";
import {ActionType} from "../store";
import {Actions} from "../types/types";

function setCurrentSeasonReducer(editor: EditorType, newSeason: string): EditorType {
    const newEditor = deepClone(editor) as EditorType;
    console.log(newSeason); // CR Убрать
    return {
        ...newEditor,
        currentSeason: newSeason,
    }
}

function editorReducer(state: EditorType, action: ActionType) /* CR return value type */ {
    // CR Избавится от дублирования <deepClone(state) as EditorType>, можно и Reducer`ах описанных сверху
    switch (action.type) {
        case Actions.SET_CURRENT_SEASON:
            return action.newSeason !== undefined ? setCurrentSeasonReducer(state, action.newSeason) : deepClone(state) as EditorType;
        default:
            return deepClone(state) as EditorType
    }
}

export {editorReducer}