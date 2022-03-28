import placeholderService from '../../services/placeholder.service';
import {
    RETRIEVE_PLACEHOLDERS
} from './placeholder.types'

export const retrievePlaceholder = () => async (dispatch) => {
    try {
        const response = await placeholderService.getAll()

        dispatch({
            type: RETRIEVE_PLACEHOLDERS,
            payload: response.data
        })
    } catch (error) {
        console.log(error);
    }
} 