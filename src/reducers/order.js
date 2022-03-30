const init = {
  tables: {
    byId: {
      1: {
        id: 1,
        items: [],
        quantities: [],
        cartPrice: 0,
      },
      2: {
        id: 2,
        items: [],
        quantities: [],
        cartPrice: 0,
      },
      3: {
        id: 3,
        items: [],
        quantities: [],
        cartPrice: 0,
      },
      4: {
        id: 4,
        items: [],
        quantities: [],
        cartPrice: 0,
      },
      5: {
        id: 5,
        items: [],
        quantities: [],
        cartPrice: 0,
      },
      6: {
        id: 6,
        items: [],
        quantities: [],
        cartPrice: 0,
      },
      7: {
        id: 7,
        items: [],
        quantities: [],
        cartPrice: 0,
      },
      8: {
        id: 8,
        items: [],
        quantities: [],
        cartPrice: 0,
      },
      9: {
        id: 9,
        items: [],
        quantities: [],
        cartPrice: 0,
      },
      10: {
        id: 10,
        items: [],
        quantities: [],
        cartPrice: 0,
      },
      11: {
        id: 11,
        items: [],
        quantities: [],
        cartPrice: 0,
      },
      12: {
        id: 12,
        items: [],
        quantities: [],
        cartPrice: 0,
      },
    },
    allIds: [],
  },
};

export const orderReducer = (state = init, action) => {
  switch (action.type) {
    case "ADD_TABLE": {
      let table = action.payload.table;

      if (state.tables.allIds.indexOf(table) === -1) {
        return {
          ...state,
          tables: {
            byId: {
              ...state.tables.byId,
              [table]: {
                id: table,
                items: [],
                quantities: [],
              },
            },
            allIds: state.tables.allIds.concat(table),
          },
        };
      }
      return {
        ...state,
      };
    }
    case "ADD_ITEM": {
      let table = action.payload.table;
      let id = action.payload.id;

      if (state.tables.byId[table].items.indexOf(id) === -1) {
        return {
          ...state,
          tables: {
            ...state.tables,
            byId: {
              ...state.tables.byId,
              [table]: {
                ...state.tables.byId[table],
                items: [...state.tables.byId[table].items, id],
                quantities: [...state.tables.byId[table].quantities, 1],
              },
            },
          },
        };
      } else {
        const match = state.tables.byId[table].items.indexOf(id);
        const cpy = [...state.tables.byId[table].quantities];
        cpy[match] = cpy[match] + 1;

        return {
          ...state,
          tables: {
            ...state.tables,
            byId: {
              ...state.tables.byId,
              [table]: {
                ...state.tables.byId[table],
                items: [...state.tables.byId[table].items],
                quantities: cpy,
              },
            },
          },
        };
      }
    }
    case "REMOVE_ITEM": {
      let table = action.payload.table;
      let id = action.payload.id;

      const match = state.tables.byId[table].items.indexOf(id);
      const cpy = [...state.tables.byId[table].quantities];
      if (cpy[match] === 0) {
        cpy[match] = 0;
      } else {
        cpy[match] = cpy[match] - 1;
      }

      return {
        ...state,
        tables: {
          ...state.tables,
          byId: {
            ...state.tables.byId,
            [table]: {
              ...state.tables.byId[table],
              items: [...state.tables.byId[table].items],
              quantities: cpy,
            },
          },
        },
      };
    }
    case "ADD_CART_PRICE": {
      let table = action.payload.table;
      let cartPrice = action.payload.cartPrice;

      return {
        ...state,
        tables: {
          ...state.tables,
          byId: {
            ...state.tables.byId,
            [table]: {
              ...state.tables.byId[table],
              cartPrice: cartPrice,
            },
          },
        },
      };
    }
    default:
      return { ...state };
  }
};
