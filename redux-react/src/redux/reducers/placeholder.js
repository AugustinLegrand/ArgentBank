import {
    RETRIEVE_PLACEHOLDERS
} from '../actions/placeholder.types'

const initialState = []

function placeholderReducer(placeholder = initialState, action) {

    const { type, payload } = action

    switch (type) {

        case RETRIEVE_PLACEHOLDERS:
            return payload

        default:
            return placeholder
    }

}

export default placeholderReducer