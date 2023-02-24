import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: nanoid(),
    title: "Кадровое агенство",
    content: "Портал для работы с вакансиями и кандидатами",
    linkText: "Прием заявок завершен",
  },
  {
    id: nanoid(),
    title: "Короткие ссылки",
    content: "Сервис укорачивания ссылок и сбора аналитики о кликах",
    linkText: "Прием заявок завершен",
  },
  {
    id: nanoid(),
    title: "Райда",
    content: "Платформа для управления процессами",
    linkText: "Прием заявок завершен",
  },
  {
    id: nanoid(),
    title: "Записная книжка",
    content: "Управление нетворком человека или организации",
    linkText: "Прием заявок завершен",
  },
  {
    id: nanoid(),
    title: "Портфолио проектов",
    content: "Управление списком проектов и стажировок",
    linkText: "Прием заявок завершен",
  },
  {
    id: nanoid(),
    title: "Не нашли проект для старта?",
    content: "Пришлем письмо на почту, когда появится новый набор",
    linkText: "Оставить контакты",
  },
];

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {},
});

export const selectAllCards = (state) => state.cards;
// export const selectCardById = (state, cardId) =>
//   state.cards.find((card) => card.id === cardId);

export default cardsSlice.reducer;
