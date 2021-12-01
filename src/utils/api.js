import { mapGetters } from 'vuex';
import { getResponse, filterKeys } from './utils';

class Api {
  constructor({
    url,
    login,
    user,
    cards,
    register,
  }) {
    this.url = url;
    this.user = user;
    this.cards = cards;
    this.login = login;
    this.register = register;
    this.token = mapGetters(['infoToken']);
  }

  register(arg) {
    return fetch(`${this.url}${this.register}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({ ...filterKeys(arg) }),
    })
      .then((res) => getResponse(res, 'Ошибка регистрации'));
  }

  authorizationPost({ password, email }) {
    return fetch(`${this.url}${this.login}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({ password, email }),
    })
      .then((res) => getResponse(res, 'Ошибка авторизации'));
  }

  getInfoUser() {
    return fetch(`${this.url}${this.user}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${this.token}`,
      },
    })
      .then((res) => getResponse(res, 'Ошибка данных пользователя'));
  }

  getAllCards() {
    return fetch(`${this.url}${this.cards}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${this.token}`,
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((res) => getResponse(res, 'Ошибка данных карточек'));
  }

  updateUserInfo(arg) {
    return fetch(`${this.url}${this.user}`, {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${this.token}`,
      },
      body: JSON.stringify({ ...filterKeys(arg) }),
    })
      .then((res) => getResponse(res, 'Ошибка изменения данных'));
  }

  addCard({ title, body }) {
    return fetch(`${this.url}${this.cards}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${this.token}`,
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        title,
        body,
      }),
    })
      .then((res) => getResponse(res, 'Ошибка добавления новой карточки'));
  }

  changeLikeCardStatus(infoId, isLike) {
    const toggleMethod = isLike ? 'PUT' : 'DELETE';
    return fetch(`${this.url}${this.cards}/${infoId}/likes`, {
      method: toggleMethod,

      headers: {
        Authorization: `Bearer ${this.token}`,
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((res) => getResponse(res, 'Ошибка метки карточки'));
  }

  deleteCard(id) {
    return fetch(`${this.url}${this.cards}/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${this.token}`,
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((res) => getResponse(res, 'Ошибка удаления карточки'));
  }
}
const api = new Api({
  url: '/',
  login: 'signin',
  user: 'users/me',
  cards: 'cards',
  register: 'signup',
});

export default api;
