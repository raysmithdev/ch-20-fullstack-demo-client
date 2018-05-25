import { API_BASE_URL } from '../config'

const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    users
  }
}

export const fetchUserFromApi = () => {
  return (dispatch) => {
    // do some async work

    fetch(`${API_BASE_URL}/users`)
    .then(response => response.json())
    .then(users => dispatch(fetchUsersSuccess(users)))
    .catch(error => console.log(error))
  }
}
