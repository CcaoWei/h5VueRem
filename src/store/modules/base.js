import { getStore, setStore } from '@/util/store';
// import languageConfig from '@/config/language';

const base = {
    state: {
        dateSelect: getStore({ name: 'dateSelect' }) || { date: 9, afterDay: "", day: "" },
    },
    mutations: {
        SET_DATE (state, dateSelect) {
            state.dateSelect.date = dateSelect.date;
            state.dateSelect.afterDay = dateSelect.afterDay || "";
            state.dateSelect.day = dateSelect.day || "";
            setStore({
                name: 'dateSelect',
                content: state.dateSelect
            })
        },

    },

    actions: {},
};

export default base;
