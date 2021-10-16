(() => {
var exports = {};
exports.id = 587;
exports.ids = [587];
exports.modules = {

/***/ 8073:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ useMediaQuery)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useMediaQuery(query) {
  const {
    0: matches,
    1: setMatches
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const media = window.matchMedia(query);

    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => {
      setMatches(media.matches);
    };

    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);
  return matches;
}

/***/ }),

/***/ 1038:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ tasker_app),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./styles/app/tasker_app.module.scss
var tasker_app_module = __webpack_require__(8989);
var tasker_app_module_default = /*#__PURE__*/__webpack_require__.n(tasker_app_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./styles/app/TabNav.module.scss
var TabNav_module = __webpack_require__(980);
var TabNav_module_default = /*#__PURE__*/__webpack_require__.n(TabNav_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./styles/app/TabsMenu.module.scss
var TabsMenu_module = __webpack_require__(9255);
var TabsMenu_module_default = /*#__PURE__*/__webpack_require__.n(TabsMenu_module);
;// CONCATENATED MODULE: ./components/tasker_app/TabsMenu.jsx







const TabsMenu = ({
  handleDeleteTabClick,
  handleNewTabClick,
  darkMode,
  tabsState,
  dispatch
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (TabsMenu_module_default()).container,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: darkMode ? [(TabsMenu_module_default()).tabsContainer, (TabsMenu_module_default()).darkMode].join(" ") : (TabsMenu_module_default()).tabsContainer,
        children: [/*#__PURE__*/jsx_runtime_.jsx("ul", {
          className: (TabsMenu_module_default()).tabsList,
          children: tabsState.tabs.map((tab, idx) => {
            return /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
              listid: idx,
              className: idx == tabsState.currentTabIdx ? (TabsMenu_module_default()).current : (TabsMenu_module_default()).none,
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: (TabsMenu_module_default()).tabClickSurface,
                onClick: () => dispatch({
                  type: 'changeCurrentTab',
                  payload: {
                    id: tab.id,
                    idx: idx
                  }
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                children: tab.name
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: (TabsMenu_module_default()).deleteTabWrapper,
                onClick: () => handleDeleteTabClick(tab, idx),
                children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                  src: "/img/app/delete.svg",
                  height: 10,
                  width: 10
                })
              })]
            }, idx);
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (TabsMenu_module_default()).newTabWrapper,
          children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            src: "/img/app/new-tab.svg",
            height: 35,
            width: 35,
            onClick: handleNewTabClick
          })
        })]
      })
    })
  });
};

/* harmony default export */ const tasker_app_TabsMenu = (TabsMenu);
// EXTERNAL MODULE: ./lib/useMediaQuery.js
var useMediaQuery = __webpack_require__(8073);
// EXTERNAL MODULE: external "uuid"
var external_uuid_ = __webpack_require__(1231);
;// CONCATENATED MODULE: ./lib/tasker_api_requests.js
//tabs
const fetchTabsRequest = async () => {
  try {
    const response = await fetch(`/api/tasker_app/tab/`);
    console.log('sent fetch');
    const {
      tabs: tabsData
    } = await response.json();
    console.log(tabsData);
    return await tabsData;
  } catch (error) {
    console.log(`failed fetching tabs: ${error}`);
  }
};
async function createTabRequest(user_id) {
  try {
    const tab = {
      tab: {
        user_id: user_id
      }
    };
    const response = await fetch('/api/tasker_app/tab/create', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(tab)
    });
    return await response.json();
  } catch (e) {
    console.log(`failed persisting new tab to db: ${e}`);
  }
}
async function deleteTabRequest(user_id, tab) {
  try {
    const response = await fetch('/api/tasker_app/tab/delete', {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        tab: {
          user_id: user_id,
          id: tab.id
        }
      })
    });
    if (response.ok) console.log('successfully deleted');
  } catch (e) {
    console.log(`failed to delete tab from db, error: ${e}`);
  }
}
async function updateTabRequest(tab) {
  try {
    const response = await fetch('api/tasker_app/tab/update', {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        tab: {
          id: tab.id,
          name: tab.name
        }
      })
    });
  } catch (e) {
    console.log(`failed to update tab in the db, error: ${e}`);
  }
} //////cards//////////cards//////////cards//////////cards//////////cards////////

async function createCardRequest(tab_id, card) {
  try {
    const response = await fetch('/api/tasker_app/card/create', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        card: {
          tab_id: tab_id,
          header: card.header
        }
      })
    });
    return await response.json();
  } catch (e) {
    console.log(`failed saving new card to the db, error: ${e}`);
  }
}
async function deleteCardRequest(id) {
  try {
    const response = await fetch('/api/tasker_app/card/delete', {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        card: {
          id: id
        }
      })
    });
    if (response.ok) console.log('successfully deleted card');
  } catch (e) {
    console.log(`failed to delete card from db, error: ${e}`);
  }
}
async function updateCardRequest(card) {
  try {
    const response = await fetch('/api/tasker_app/card/update', {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        card: {
          id: card.id,
          header: card.header,
          collapsed: card.collapsed
        }
      })
    });
    return await response.json();
  } catch (e) {
    console.log(`failed saving new card to the db, error: ${e}`);
  }
} //////items////////items////////items////////items////////items////////items//////

async function createItemRequest(card_id, item) {
  try {
    const response = await fetch('/api/tasker_app/item/create', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        cardItem: {
          card_id: card_id,
          text: item.text
        }
      })
    });
    return await response.json();
  } catch (e) {
    console.log(`failed saving new item to the db, error: ${e}`);
  }
}
async function deleteItemRequest(id) {
  try {
    const response = await fetch('/api/tasker_app/item/delete', {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        cardItem: {
          id: id
        }
      })
    });
    if (response.ok) console.log('successfully deleted item');
  } catch (e) {
    console.log(`failed to delete item from db, error: ${e}`);
  }
}
async function updateItemRequest(item) {
  console.log(item);

  try {
    const response = await fetch('/api/tasker_app/item/update', {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        item: {
          id: item.id,
          text: item.text,
          checked: item.checked
        }
      })
    });
    return await response.json();
  } catch (e) {
    console.log(`failed saving new card to the db, error: ${e}`);
  }
}
;// CONCATENATED MODULE: ./components/tasker_app/TabNav.jsx












const TabNav = ({
  guestMode,
  user_id,
  darkMode,
  tabsState,
  dispatch
}) => {
  const {
    0: tabEdit,
    1: setTabEdit
  } = (0,external_react_.useState)(false);
  const {
    0: editableTabIdx,
    1: setEditableTabIdx
  } = (0,external_react_.useState)(false);

  const toggleTabEdit = () => {
    setTabEdit(!tabEdit);
  };

  const {
    0: showTabMenu,
    1: setShowTabMenu
  } = (0,external_react_.useState)(false);

  const toggleTabMenu = () => setShowTabMenu(!showTabMenu);

  const currentTab = tabsState.tabs[tabsState.currentTabIdx];
  const isDesktop = (0,useMediaQuery/* useMediaQuery */.a)('(min-width: 769px)');
  const editNode = (0,external_react_.useRef)(null);
  const {
    0: editNodeVisible,
    1: setEditNodeVisible
  } = (0,external_react_.useState)(false);

  async function handleNewTabClick() {
    const newTabIndex = tabsState.tabs.length;
    const newTab = {
      id: (0,external_uuid_.v4)(),
      name: 'Untitled'
    };
    dispatch({
      type: 'addNewTab',
      payload: {
        tab: newTab
      }
    }); //optimistically add a new tab

    if (!guestMode) {
      //persist tab to db
      const tab = await createTabRequest(user_id);
      console.log(tab);
      dispatch({
        type: 'updateTabId',
        payload: {
          newTabIdx: newTabIndex,
          tabDbId: tab.dbid
        }
      });
    }
  }

  function handleDeleteTabClick(tab, idx) {
    dispatch({
      type: 'deleteTab',
      payload: {
        id: tab.id,
        idx: idx
      }
    }); // optimistic delete

    if (!guestMode && tabsState.tabs.length > 1) {
      //delete tab in db
      deleteTabRequest(user_id, tab);
    }
  }

  function handleTabUpdate(tab) {
    if (!guestMode) updateTabRequest(tab);
  }

  (0,external_react_.useEffect)(() => {
    if (!editNodeVisible) return;
    editNode.current.focus();
  }, [editNodeVisible]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
      className: (TabNav_module_default()).container,
      children: [!isDesktop && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (TabNav_module_default()).homeWrap,
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/menu",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                src: "/img/app/home.svg",
                width: 30,
                height: 30
              })
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (TabNav_module_default()).tab,
          children: !tabEdit ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              children: currentTab.name
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: (TabNav_module_default()).edit,
              children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                src: "/img/app/edit.svg",
                height: 16,
                width: 16,
                onClick: toggleTabEdit
              })
            })]
          }) : /*#__PURE__*/jsx_runtime_.jsx("input", {
            className: (TabNav_module_default()).tabInput,
            type: "text",
            value: currentTab.name,
            onChange: event => dispatch({
              type: 'changeTabName',
              payload: {
                tabId: currentTab.id,
                name: event.target.value
              }
            }),
            onBlur: () => {
              toggleTabEdit;
              handleTabUpdate(currentTab);
            }
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (TabNav_module_default()).tabsWrap,
          children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            src: "/img/app/tabs.svg",
            width: 30,
            height: 30,
            onClick: toggleTabMenu
          })
        })]
      }), isDesktop && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("ul", {
          className: (TabNav_module_default()).tabsList,
          children: tabsState.tabs.map((tab, index) => {
            return /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
              className: tabsState.currentTabIdx == index ? [(TabNav_module_default()).desktopTab, (TabNav_module_default()).desktopCurrent].join(" ") : (TabNav_module_default()).desktopTab,
              onClick: () => dispatch({
                type: 'changeCurrentTab',
                payload: {
                  id: tab.id,
                  idx: index
                }
              }),
              children: [tabEdit && editableTabIdx == index ? /*#__PURE__*/jsx_runtime_.jsx("input", {
                ref: el => {
                  editNode.current = el;
                  setEditNodeVisible(!!el);
                },
                className: (TabNav_module_default()).tabInput,
                type: "text",
                value: tab.name,
                onChange: event => dispatch({
                  type: 'changeTabName',
                  payload: {
                    tabId: tab.id,
                    name: event.target.value
                  }
                }),
                onBlur: () => {
                  toggleTabEdit;
                  handleTabUpdate(tab);
                },
                onClick: e => {
                  e.stopPropagation();
                }
              }) : /*#__PURE__*/jsx_runtime_.jsx("span", {
                children: tab.name
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: (TabNav_module_default()).tabButtons,
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: (TabNav_module_default()).deleteTabWrapper,
                  onClick: e => {
                    e.stopPropagation();
                    handleDeleteTabClick(tab, index);
                  },
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                    src: "/img/app/circled-x.svg",
                    height: 20,
                    width: 20
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: (TabNav_module_default()).edit,
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                    src: "/img/app/edit.svg",
                    height: 20,
                    width: 20,
                    onClick: e => {
                      e.stopPropagation();
                      toggleTabEdit();
                      setEditableTabIdx(index);
                    }
                  })
                })]
              })]
            }, tab.id);
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (TabNav_module_default()).newTabWrapper,
          children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            src: "/img/app/new-tab.svg",
            height: 30,
            width: 30,
            onClick: handleNewTabClick
          })
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: showTabMenu ? (TabNav_module_default()).showTabMenu : (TabNav_module_default()).hideTabMenu,
      children: /*#__PURE__*/jsx_runtime_.jsx(tasker_app_TabsMenu, {
        handleNewTabClick: handleNewTabClick,
        handleDeleteTabClick: handleDeleteTabClick,
        darkMode: darkMode,
        tabsState: tabsState,
        dispatch: dispatch
      })
    })]
  });
};

/* harmony default export */ const tasker_app_TabNav = (TabNav);
// EXTERNAL MODULE: ./styles/app/Card.module.scss
var Card_module = __webpack_require__(1397);
var Card_module_default = /*#__PURE__*/__webpack_require__.n(Card_module);
;// CONCATENATED MODULE: ./lib/queuedDbCall.js
// import { useEffect } from "react"
async function queuedDbCall(item, cb, ...cbParams) {
  console.log(`queued db call enter, called on: ${item}, callback: ${cb}(${cbParams})`);

  if (item.id[0] != 'T') {
    //if an items ID isn't a temporary set one denoted by T at the start
    console.log(`id: ${item.id} doesn't start with T, calling the cb and exitting`);
    cb(...cbParams);
    return;
  }

  const retry = setTimeout(() => {
    queuedDbCall(item, cb, ...cbParams);
  }, 500); // let firstRun = true
  // let finished = false
  // useEffect(() => {
  //     if (firstRun) {
  //         console.log(`useEffect active and first run cancelled, waiting for change in item.id`)
  //         firstRun = false
  //         return
  //     }
  //     console.log(`change in item.id triggered, calling hook again, id: ${id}`)
  //     useQueuedDbCall(item, cb, cbParams)
  //     finished = true
  //     console.log(`completed and now returning the function`)
  //     return
  // },[item.id])
  // if (finished) return
}
;// CONCATENATED MODULE: ./components/tasker_app/Card.jsx










const Card = props => {
  // list collapse
  const {
    0: collapsed,
    1: setCollapsed
  } = (0,external_react_.useState)(props.collapsed); // edit and set header

  const {
    0: editHeader,
    1: setEditHeader
  } = (0,external_react_.useState)(false);
  const {
    0: editItem,
    1: setEditItem
  } = (0,external_react_.useState)(false); // async function useQueuedDbCall(item, cb, ...cbParams) {
  //     console.log(`queued db call enter, called on: ${item}, callback: ${cb}(${cbParams})`)
  //     if (item.id[0] != 'T') { //if an items ID isn't a temporary set one denoted by T at the start
  //         console.log(`id: ${item.id} doesn't start with T, calling the cb and exitting`)
  //         cb(...cbParams)
  //         return
  //     }
  //     let firstRun = true
  //     let finished = false
  //     useEffect(() => {
  //         console.log('use effect triggered')
  //         return
  //         // if (firstRun) {
  //         //     console.log(`useEffect active and first run cancelled, waiting for change in item.id`)
  //         //     firstRun = false
  //         //     return
  //         // }
  //         // console.log(`change in item.id triggered, calling hook again, id: ${id}`)
  //         // useQueuedDbCall(item, cb, cbParams)
  //         // finished = true
  //         // console.log(`completed and now returning the function`)
  //         // return
  //     },[item])
  //     if (finished) return
  // }

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const editItemToggle = () => {
    setEditItem(!editItem);
  };

  const editHeaderToggle = () => {
    setEditHeader(!editHeader);
  };

  const textAreaGrandParent = (0,external_react_.useRef)(null); //pointing to the ul with all the card items

  const handleTextareaResizeAll = () => {
    //setting the textarea size to fit the content
    textAreaGrandParent.current.childNodes.forEach(li => {
      let textAreaNode = li.childNodes[2];
      textAreaNode.style.height = `${textAreaNode.scrollHeight}px`;
    });
  };

  const handleTextareaResize = e => {
    //increases the size of the text area as more text is added to fit
    e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
  };

  function handleDeleteCardClick() {
    props.cardsDispatch({
      type: 'deleteCard',
      payload: {
        cardidx: props.cardidx,
        tabid: props.tabid
      }
    });

    if (!props.guestMode) {
      //delete card in db
      deleteCardRequest(props.card.id);
    }
  }

  function handleDeleteItemClick(id) {
    props.cardsDispatch({
      type: 'removeCardItem',
      payload: {
        cardidx: props.cardidx,
        tabid: props.tabid,
        itemid: id
      }
    });

    if (!props.guestMode) {
      //delete item in db
      deleteItemRequest(id);
    }
  }

  function handleCardUpdate() {
    updateCardRequest(props.card);
  }

  function handleItemUpdate(item) {
    queuedDbCall(item, updateItemRequest, item); // updateItemRequest(item)
  }

  function handleItemToggle(item) {
    item.checked = !item.checked;
    console.log(item);
    updateItemRequest(item);
  }

  async function handleNewItemClick() {
    const newItem = {
      id: 'T' + (0,external_uuid_.v4)(),
      checked: false,
      text: ''
    };
    props.cardsDispatch({
      type: 'newCardItem',
      payload: {
        id: props.card.id,
        tabid: props.tabid,
        cardidx: props.cardidx,
        newItem: newItem
      }
    });

    if (!props.guestMode) {
      const newItemIndex = props.card.items.length;
      const item = await createItemRequest(props.card.id, newItem);
      console.log(`db id returned: ${item.dbid}`);
      props.cardsDispatch({
        type: 'updateItemId',
        payload: {
          tabid: props.tabid,
          cardidx: props.cardidx,
          itemidx: newItemIndex,
          newid: item.dbid
        }
      });
    }
  }

  let cardClass = (Card_module_default()).cardContainer;
  if (props.darkMode) cardClass = [(Card_module_default()).cardContainer, (Card_module_default()).darkMode].join(" ");
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: !collapsed ? cardClass : [(Card_module_default()).cardContainer, (Card_module_default()).collapsed].join(" "),
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
        children: [props.layoutSetting && !editHeader ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (Card_module_default()).headerTextContainer,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (Card_module_default()).headerText,
            children: props.card.header
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (Card_module_default()).editBtn,
            onClick: editHeaderToggle,
            children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
              src: "/img/app/edit.svg",
              height: 16,
              width: 16
            })
          })]
        }) : /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (Card_module_default()).headerTextContainer,
          children: /*#__PURE__*/jsx_runtime_.jsx("input", {
            className: (Card_module_default()).edit,
            type: "text",
            value: props.card.header,
            onChange: event => props.cardsDispatch({
              type: 'changeHeader',
              payload: {
                tabid: props.tabid,
                cardidx: props.cardidx,
                value: event.target.value
              }
            }),
            onBlur: () => {
              editHeaderToggle();
              if (!props.guestMode) handleCardUpdate();
            }
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (Card_module_default()).collapseBtn,
          onClick: toggleCollapsed,
          children: [" ", /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            src: !collapsed ? '/img/app/minus.svg' : '/img/app/plus.svg',
            height: 16,
            width: 16
          }), " "]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (Card_module_default()).deleteCardBtn,
          onClick: handleDeleteCardClick,
          children: [" ", /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            src: '/img/app/circled-x.svg',
            height: 16,
            width: 16
          }), " "]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
        className: (Card_module_default()).cardBody,
        children: [/*#__PURE__*/jsx_runtime_.jsx("ul", {
          ref: textAreaGrandParent,
          children: props.card.items.map((item, index) => {
            let pClass = !item.checked ? (Card_module_default()).itemText : [(Card_module_default()).itemText, (Card_module_default()).crossed].join(' ');
            let textAreaClass = !item.checked ? (Card_module_default()).editText : [(Card_module_default()).editText, (Card_module_default()).crossed].join(" ");
            return /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: (Card_module_default()).checkBox,
                children: item.checked ? /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                  src: "/img/app/checked.svg",
                  width: 16,
                  height: 16,
                  index: index,
                  onClick: () => {
                    props.cardsDispatch({
                      type: 'toggleCardItem',
                      payload: {
                        tabid: props.tabid,
                        idx: index,
                        checked: item.checked,
                        cardidx: props.cardidx
                      }
                    });
                    if (!props.guestMode) handleItemToggle(item);
                  }
                }) : /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                  src: "/img/app/unchecked.svg",
                  width: 16,
                  height: 16,
                  index: index,
                  onClick: () => {
                    props.cardsDispatch({
                      type: 'toggleCardItem',
                      payload: {
                        tabid: props.tabid,
                        idx: index,
                        checked: item.checked,
                        cardidx: props.cardidx
                      }
                    });
                    if (!props.guestMode) handleItemToggle(item);
                  }
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                onClick: editItemToggle,
                className: !editItem ? pClass : (Card_module_default()).hide,
                children: item.text
              }), /*#__PURE__*/jsx_runtime_.jsx("textarea", {
                onInput: handleTextareaResize,
                className: editItem ? textAreaClass : (Card_module_default()).hide,
                type: "text",
                onBlur: () => {
                  editItemToggle();
                  if (!props.guestMode) handleItemUpdate(item);
                },
                value: item.text,
                onChange: e => props.cardsDispatch({
                  type: 'editCardItem',
                  payload: {
                    idx: index,
                    cardidx: props.cardidx,
                    tabid: props.tabid,
                    value: e.target.value
                  }
                }),
                onFocus: handleTextareaResizeAll
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: (Card_module_default()).deleteWrapper,
                onClick: () => handleDeleteItemClick(item.id),
                children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                  src: "/img/app/delete.svg",
                  height: 10,
                  width: 10
                })
              })]
            }, item.id);
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (Card_module_default()).addItemWrapper,
          onClick: handleNewItemClick,
          children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            src: "/img/app/plus-item.svg",
            height: 10,
            width: 10
          })
        })]
      })]
    })
  });
};

/* harmony default export */ const tasker_app_Card = (Card);
// EXTERNAL MODULE: ./styles/app/Settings.module.scss
var Settings_module = __webpack_require__(4221);
var Settings_module_default = /*#__PURE__*/__webpack_require__.n(Settings_module);
;// CONCATENATED MODULE: ./components/tasker_app/Settings.jsx








const Settings = props => {
  const isDesktop = (0,useMediaQuery/* useMediaQuery */.a)('(min-width: 769px)');

  const handleLayoutClick = e => {
    props.setLayoutSetting(e.currentTarget.attributes.mode.value);
  };

  const handleDropdownChange = e => {
    props.setLayoutSetting(e.target.value);
  };

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: props.darkMode ? [(Settings_module_default()).settingsContainer, (Settings_module_default()).darkMode].join(" ") : (Settings_module_default()).settingsContainer,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
        className: (Settings_module_default()).optionsList,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          className: (Settings_module_default()).darkModeOption,
          children: [!props.darkMode ? /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            src: "/img/app/unchecked.svg",
            width: 16,
            height: 16,
            onClick: props.toggleDarkMode
          }) : /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            src: "/img/app/checked.svg",
            width: 16,
            height: 16,
            onClick: props.toggleDarkMode
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            children: "Dark Mode"
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          className: (Settings_module_default()).layoutSettingContainer,
          children: isDesktop ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "column-selector",
              children: "Card Columns"
            }), /*#__PURE__*/jsx_runtime_.jsx("select", {
              id: "column-selector",
              name: "layout",
              onChange: handleDropdownChange,
              value: props.layoutSetting,
              children: [...Array(12)].map((e, i) => {
                let val = i + 1;
                return /*#__PURE__*/jsx_runtime_.jsx("option", {
                  mode: val,
                  value: val,
                  children: val
                }, i);
              })
            })]
          }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              children: "Layout"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
              className: (Settings_module_default()).layoutModes,
              children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                className: props.layoutSetting == 1 ? (Settings_module_default()).currentLayout : (Settings_module_default()).layoutSvgWrap,
                mode: 1,
                onClick: handleLayoutClick,
                children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                  src: "/img/app/Single.svg",
                  width: 32,
                  height: 28
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                className: props.layoutSetting == 2 ? (Settings_module_default()).currentLayout : (Settings_module_default()).layoutSvgWrap,
                mode: 2,
                onClick: handleLayoutClick,
                children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                  src: "/img/app/Double.svg",
                  width: 32,
                  height: 28
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                className: props.layoutSetting == 3 ? (Settings_module_default()).currentLayout : (Settings_module_default()).layoutSvgWrap,
                mode: 3,
                onClick: handleLayoutClick,
                children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                  src: "/img/app/Tripple.svg",
                  width: 32,
                  height: 28
                })
              })]
            })]
          })
        })]
      })
    })
  });
};

/* harmony default export */ const tasker_app_Settings = (Settings);
;// CONCATENATED MODULE: ./lib/tabs.js
function getTabsData() {
  const tabPreset = [{
    id: 1,
    name: 'School',
    current: false
  }, {
    id: 2,
    name: 'Work',
    current: false
  }, {
    id: 3,
    name: 'Daily',
    current: true
  }, {
    id: 4,
    name: 'Exams',
    current: false
  }, {
    id: 5,
    name: 'Gym',
    current: false
  }];
  return tabPreset;
}
;// CONCATENATED MODULE: ./lib/cards.js
function getCardsData() {
  const cardItems1 = [{
    id: 1,
    checked: false,
    text: 'fix nightmode bkg'
  }, {
    id: 2,
    checked: true,
    text: 'fix tabmenu header overflow'
  }, {
    id: 3,
    checked: true,
    text: 'fix item length overflow'
  }, {
    id: 4,
    checked: false,
    text: 'fix header length overflow'
  }];
  const cardItems2 = [{
    id: 5,
    checked: true,
    text: 'Homework'
  }, {
    id: 6,
    checked: false,
    text: 'Exercise'
  }, {
    id: 7,
    checked: false,
    text: 'Walk dog'
  }];
  const cardsPreset = [{
    id: 111,
    header: 'Shopping List',
    items: cardItems1
  }, {
    id: 222,
    header: 'Tasks',
    items: cardItems2
  }];
  return cardsPreset;
}
;// CONCATENATED MODULE: ./reducers/tabsReducer.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const tabsReducer = (tabsState, action) => {
  switch (action.type) {
    case 'setTabs':
      const currentIdx = action.payload.currentIdx || tabsState.currentTabIdx;
      return {
        tabs: action.payload.tabs,
        currentTabIdx: action.payload.currentTabIdx
      };

    case 'addNewTab':
      return {
        tabs: [...tabsState.tabs, action.payload.tab],
        currentTabIdx: tabsState.currentTabIdx
      };

    case 'updateTabId':
      const updatedIdTabs = [...tabsState.tabs];

      const updatedTab = _objectSpread({}, tabsState.tabs[action.payload.newTabIdx]);

      updatedTab.id = action.payload.tabDbId;
      updatedIdTabs[action.payload.newTabIdx] = updatedTab;
      return {
        tabs: updatedIdTabs,
        currentTabIdx: tabsState.currentTabIdx
      };

    case 'deleteTab':
      if (tabsState.tabs.length <= 1) //can't delete a tab if it's the only one
        return {
          currentTabIdx: tabsState.currentTabIdx,
          tabs: tabsState.tabs
        };
      const currentTabId = tabsState.tabs[tabsState.currentTabIdx].id; //capture id of currentTab

      const newArr = tabsState.tabs.filter(tab => tab.id != action.payload.id); // maintaining current tab pointer

      if (action.payload.id == currentTabId) {
        //if the deleted tab is the currentTab
        return {
          tabs: newArr,
          currentTabIdx: 0
        };
      }

      if (action.payload.idx < tabsState.currentTabIdx) {
        //check for currentTab pointer shift
        for (let idx = 0; idx < tabsState.tabs.length; idx++) {
          //update pointer
          if (newArr[idx].id == currentTabId) return {
            tabs: newArr,
            currentTabIdx: idx
          };
        }
      }

      return {
        tabs: newArr,
        currentTabIdx: tabsState.currentTabIdx
      };

    case 'changeTabName':
      const nameChangedTabs = tabsState.tabs.map(tab => {
        if (tab.id == action.payload.tabId) return {
          id: tab.id,
          name: action.payload.name
        };
        return tab;
      });
      return {
        currentTabIdx: tabsState.currentTabIdx,
        tabs: nameChangedTabs
      };

    case 'changeCurrentTab':
      return {
        currentTabIdx: action.payload.idx,
        tabs: tabsState.tabs
      };

    default:
      console.log('default hit');
      return tabsState;
  }
};
;// CONCATENATED MODULE: ./reducers/cardsReducer.js
function cardsReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function cardsReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { cardsReducer_ownKeys(Object(source), true).forEach(function (key) { cardsReducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { cardsReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function cardsReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const cardsReducer = (cardsState, action) => {
  switch (action.type) {
    case 'setCards':
      console.log(`preset cards ${cardsState}`);
      console.log(`postset cards ${action.payload.cards}`);
      return action.payload.cards;

    case 'addNewCard':
      console.log('add new card hit');

      const newCards = cardsReducer_objectSpread({}, cardsState);

      if (!newCards[action.payload.tabid]) {
        newCards[action.payload.tabid] = [];
      }

      newCards[action.payload.tabid] = [...newCards[action.payload.tabid], action.payload.card];
      return newCards;

    case 'updateCardId':
      const updatedCardsId = cardsReducer_objectSpread({}, cardsState);

      updatedCardsId[action.payload.tabid][action.payload.idx].id = action.payload.newid;
      return updatedCardsId;

    case 'updateItemId':
      const updatedItemIds = cardsReducer_objectSpread({}, cardsState);

      console.log(`entered updateItemId reducer`);
      console.log(`tabid: ${action.payload.tabid}`);
      console.log(`cardidx: ${action.payload.cardidx}`);
      console.log(`items(non payload): ${updatedItemIds[action.payload.tabid][action.payload.cardidx]['items']}`);
      console.log(`itemidx: ${action.payload.itemidx}`);
      console.log(`new dbid: ${action.payload.newid}`);
      updatedItemIds[action.payload.tabid][action.payload.cardidx]['items'][action.payload.itemidx].id = action.payload.newid;
      return updatedItemIds;

    case 'deleteCard':
      const deletedCards = cardsReducer_objectSpread({}, cardsState);

      deletedCards[action.payload.tabid].splice(action.payload.cardidx, 1);
      return deletedCards;

    case 'changeHeader':
      const changedCards = cardsReducer_objectSpread({}, cardsState);

      changedCards[action.payload.tabid][action.payload.cardidx].header = action.payload.value;
      return changedCards;

    case 'newCardItem':
      const updatedCards = cardsReducer_objectSpread({}, cardsState);

      updatedCards[action.payload.tabid][action.payload.cardidx]['items'] = [...updatedCards[action.payload.tabid][action.payload.cardidx]['items'], action.payload.newItem];
      return updatedCards;

    case 'removeCardItem':
      const removedCards = cardsReducer_objectSpread({}, cardsState);

      removedCards[action.payload.tabid][action.payload.cardidx]['items'] = removedCards[action.payload.tabid][action.payload.cardidx]['items'].filter(item => item.id != action.payload.itemid);
      return removedCards;

    case 'toggleCardItem':
      const toggledCards = cardsReducer_objectSpread({}, cardsState); // console.log(`card idx:${action.payload.cardidx} tabid:${action.payload.tabid} itemidx:${action.payload.idx}`)


      toggledCards[action.payload.tabid][action.payload.cardidx]['items'][action.payload.idx]['checked'] = !action.payload.checked;
      return toggledCards;

    case 'editCardItem':
      const edittedItems = cardsReducer_objectSpread({}, cardsState);

      edittedItems[action.payload.tabid][action.payload.cardidx]['items'][action.payload.idx]['text'] = action.payload.value;
      return edittedItems;

    default:
      console.log('default');
      return cardsState;
  }
};
;// CONCATENATED MODULE: ./reducers/settingsReducer.js
function settingsReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function settingsReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { settingsReducer_ownKeys(Object(source), true).forEach(function (key) { settingsReducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { settingsReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function settingsReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const settingsReducer = (settings, action) => {
  switch (action.type) {
    case 'setSettings':
      console.log('settings set hit'); // console.log(`settings: ${action.payload.settings}`)

      return action.payload.settings;

    case 'toggleDarkMode':
      const darkModeToggledSettings = settingsReducer_objectSpread({}, settings);

      darkModeToggledSettings.darkMode = !settings.darkMode;
      return darkModeToggledSettings;

    case 'setLayout':
      const layoutChangedSettings = settingsReducer_objectSpread({}, settings);

      layoutChangedSettings.layout = action.payload.layout;
      return layoutChangedSettings;

    default:
      console.log('hit default');
      return settings;
  }
};
// EXTERNAL MODULE: ./styles/app/SideNav.module.scss
var SideNav_module = __webpack_require__(7131);
var SideNav_module_default = /*#__PURE__*/__webpack_require__.n(SideNav_module);
;// CONCATENATED MODULE: ./components/tasker_app/SideNav.jsx








const SideNav = ({
  darkMode
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: darkMode ? [(SideNav_module_default()).sideNavContainer, (SideNav_module_default()).darkMode].join(" ") : (SideNav_module_default()).sideNavContainer,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/menu",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                src: "/img/app/side-home.svg",
                width: 65,
                height: 60
              })
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          className: (SideNav_module_default()).current,
          children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            src: "/img/app/side-tasker.svg",
            width: 65,
            height: 65
          })
        })]
      })
    })
  });
};

/* harmony default export */ const tasker_app_SideNav = (SideNav);
// EXTERNAL MODULE: ./styles/app/Dialog.module.scss
var Dialog_module = __webpack_require__(559);
var Dialog_module_default = /*#__PURE__*/__webpack_require__.n(Dialog_module);
;// CONCATENATED MODULE: ./components/Dialog.jsx






const Dialog = ({
  children,
  darkMode,
  show,
  setShow
}) => {
  function toggleShow() {
    setShow(!show);
  }

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: darkMode ? [(Dialog_module_default()).dialogContainer, (Dialog_module_default()).darkMode].join(' ') : (Dialog_module_default()).dialogContainer,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (Dialog_module_default()).closeButton,
        onClick: toggleShow,
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          src: "/img/app/delete.svg",
          height: 10,
          width: 10
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: (Dialog_module_default()).guestModeMessage,
        children: children
      })]
    })
  });
};

/* harmony default export */ const components_Dialog = (Dialog);
// EXTERNAL MODULE: ./styles/app/UserPanel.module.scss
var UserPanel_module = __webpack_require__(2121);
var UserPanel_module_default = /*#__PURE__*/__webpack_require__.n(UserPanel_module);
;// CONCATENATED MODULE: ./components/UserPanel.jsx






const UserPanel = ({
  username,
  guestMode,
  darkMode,
  toggleLogin,
  toggleSignup,
  logoutUser
}) => {
  const {
    0: showPopup,
    1: setShowPopup
  } = (0,external_react_.useState)(false);

  function toggleShowPopup() {
    setShowPopup(!showPopup);
  }

  const popupClass = showPopup ? (UserPanel_module_default()).popupContainer : (UserPanel_module_default()).hide;

  function handleLoginClick() {
    toggleLogin();
    toggleShowPopup();
  }

  function handleLogoutClick() {
    logoutUser();
    toggleShowPopup();
  }

  function handleSignupClick() {
    toggleSignup();
    toggleShowPopup();
  }

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (UserPanel_module_default()).container,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        onClick: toggleShowPopup,
        className: guestMode ? [(UserPanel_module_default()).userContainer, (UserPanel_module_default()).guestIcon].join(' ') : (UserPanel_module_default()).userContainer,
        children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
          children: guestMode ? 'G' : username[0].toUpperCase()
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: darkMode ? [popupClass, (UserPanel_module_default()).darkMode].join(' ') : popupClass,
        children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
          children: guestMode ? `Welcome Guest` : `Welcome back, ${username}`
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (UserPanel_module_default()).buttons,
          children: guestMode ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
              onClick: handleLoginClick,
              children: "Login"
            }), /*#__PURE__*/jsx_runtime_.jsx("button", {
              onClick: handleSignupClick,
              children: "Signup"
            })]
          }) : /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: /*#__PURE__*/jsx_runtime_.jsx("button", {
              onClick: handleLogoutClick,
              children: "Logout"
            })
          })
        })]
      })]
    })
  });
};

/* harmony default export */ const components_UserPanel = (UserPanel);
// EXTERNAL MODULE: ./components/Login.jsx
var Login = __webpack_require__(2559);
;// CONCATENATED MODULE: external "js-cookie"
const external_js_cookie_namespaceObject = require("js-cookie");
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_namespaceObject);
// EXTERNAL MODULE: ./styles/app/LoadingOverlay.module.scss
var LoadingOverlay_module = __webpack_require__(8753);
var LoadingOverlay_module_default = /*#__PURE__*/__webpack_require__.n(LoadingOverlay_module);
// EXTERNAL MODULE: ./components/Loader.jsx
var Loader = __webpack_require__(4097);
;// CONCATENATED MODULE: ./components/LoadingOverlay.jsx





const LoadingOverlay = props => {
  const containerClass = props.show ? (LoadingOverlay_module_default()).overlayContainer : (LoadingOverlay_module_default()).hide;
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: props.darkMode ? [containerClass, (LoadingOverlay_module_default()).darkMode].join(" ") : containerClass,
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (LoadingOverlay_module_default()).loaderWrapper,
        children: /*#__PURE__*/jsx_runtime_.jsx(Loader/* default */.Z, {})
      })
    })
  });
};

/* harmony default export */ const components_LoadingOverlay = (LoadingOverlay);
// EXTERNAL MODULE: ./styles/app/Signup.module.scss
var Signup_module = __webpack_require__(9540);
var Signup_module_default = /*#__PURE__*/__webpack_require__.n(Signup_module);
;// CONCATENATED MODULE: ./components/Signup.jsx







const Signup = props => {
  const Username = (0,external_react_.useRef)(null);
  const Password = (0,external_react_.useRef)(null);
  const {
    0: message,
    1: setMessage
  } = (0,external_react_.useState)({
    color: '#52E9C5',
    msg: ''
  });
  const {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(false);

  async function handleFormSubmit(e) {
    e.preventDefault();
    setMessage('');
    setLoading(true);
    const response = await fetch('/api/user/create', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: {
          username: Username.current.value,
          password: Password.current.value
        }
      })
    });
    const json = await response.json();
    setLoading(false);

    if (response.ok) {
      // props.toggleShow()
      setMessage({
        color: '#52E9C5',
        msg: 'Success! you may now log in'
      });
      return;
    }

    if (!response.ok) {
      setMessage({
        color: '#ff8282',
        msg: 'unable to register, try again'
      });
      return;
    }
  }

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: props.darkMode ? [(Signup_module_default()).loginContainer, (Signup_module_default()).darkMode].join(' ') : (Signup_module_default()).loginContainer,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
        className: (Signup_module_default()).header,
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "Signup"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (Signup_module_default()).closeButton,
          onClick: props.toggleShow,
          children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            src: "/img/app/delete.svg",
            height: 10,
            width: 10
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: loading ? (Signup_module_default()).loadingWrapper : (Signup_module_default()).loadingWrapperHide,
        children: /*#__PURE__*/jsx_runtime_.jsx(Loader/* default */.Z, {})
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
        className: loading ? [(Signup_module_default()).userForm, (Signup_module_default()).userFormHide].join(' ') : (Signup_module_default()).userForm,
        action: "/api/user/login",
        method: "POST",
        children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
          htmlFor: "username",
          children: "Username"
        }), /*#__PURE__*/jsx_runtime_.jsx("input", {
          ref: Username,
          type: "text",
          name: "user[username]",
          id: "username"
        }), /*#__PURE__*/jsx_runtime_.jsx("label", {
          htmlFor: "password",
          children: "Password"
        }), /*#__PURE__*/jsx_runtime_.jsx("input", {
          ref: Password,
          type: "password",
          name: "user[password]",
          id: "password"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (Signup_module_default()).bottomRow,
          children: /*#__PURE__*/jsx_runtime_.jsx("button", {
            onClick: handleFormSubmit,
            children: "Signup"
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: (Signup_module_default()).errorMsg,
        style: {
          color: message.color
        },
        children: message.msg
      })]
    })
  });
};

/* harmony default export */ const components_Signup = (Signup);
;// CONCATENATED MODULE: ./pages/tasker_app.jsx















 // import { ReactQueryDevtools } from 'react-query-devtools'
// import { useQuery, useMutation, queryCache } from 'react-query'









async function getStaticProps() {
  const allTabsData = getTabsData();
  const allCardsData = getCardsData();
  return {
    props: {
      allTabsData,
      allCardsData
    }
  };
}

const Tasker_app = ({
  allTabsData,
  allCardsData
}) => {
  const {
    0: tabsState,
    1: dispatch
  } = (0,external_react_.useReducer)(tabsReducer, {
    tabs: allTabsData,
    currentTabIdx: 0
  });
  const {
    0: cardsState,
    1: cardsDispatch
  } = (0,external_react_.useReducer)(cardsReducer, {
    1: allCardsData
  });
  const {
    0: settings,
    1: settingsDispatch
  } = (0,external_react_.useReducer)(settingsReducer, {
    darkMode: false,
    layout: 2
  });
  const {
    0: guestMode,
    1: setGuestMode
  } = (0,external_react_.useState)(true);
  const {
    0: showGuestDialog,
    1: setShowGuestDialog
  } = (0,external_react_.useState)(true);
  const {
    0: loadingOverlay,
    1: setLoadingOverlay
  } = (0,external_react_.useState)(false);
  const {
    0: showLogin,
    1: setShowLogin
  } = (0,external_react_.useState)(false);

  function toggleShowLogin() {
    setShowLogin(!showLogin);
    setShowSignup(false);
  }

  const {
    0: showSignup,
    1: setShowSignup
  } = (0,external_react_.useState)(false);

  function toggleShowSignup() {
    setShowSignup(!showSignup);
    setShowLogin(false);
  }

  const {
    0: user,
    1: setUser
  } = (0,external_react_.useState)({
    username: 'guest',
    id: 0
  }); // const user_id = 1 //change this to update when user is set

  (0,external_react_.useEffect)(() => {
    //Load data
    const getData = async () => {
      setLoadingOverlay(true);
      let tabData = null;
      let tabIdxData = 0;
      let cardsData = {};

      if (guestMode) {
        console.log('guestmode');

        if (localStorage.getItem('tabs') !== null) {
          tabData = await JSON.parse(localStorage.getItem('tabs'));
          tabIdxData = await JSON.parse(localStorage.getItem('tabsIdx'));
          cardsData = await JSON.parse(localStorage.getItem('cards'));
        }
      } else {
        //fetch from db
        console.log('not guestmode');
        tabData = await JSON.parse(localStorage.getItem(`[${user.id}]tabs`));
        const storedTabIdx = await JSON.parse(localStorage.getItem(`[${user.id}]tabsIdx`));

        if (storedTabIdx !== null) {
          tabIdxData = storedTabIdx;
        } else {
          tabIdxData = 0;
        }

        tabData = await fetchTabsRequest();
        await tabData.forEach(tab => {
          cardsData[tab.id] = tab.Card;
        });
      }

      if (tabData && tabData !== null) dispatch({
        type: 'setTabs',
        payload: {
          tabs: tabData,
          currentTabIdx: tabIdxData
        }
      });
      if (cardsData && cardsData !== null) cardsDispatch({
        type: 'setCards',
        payload: {
          cards: cardsData
        }
      });
      let settingsData = await localStorage.getItem('settings');
      settingsData = await JSON.parse(settingsData);
      if (settingsData) settingsDispatch({
        type: 'setSettings',
        payload: {
          settings: settingsData
        }
      });
      setLoadingOverlay(false);
    };

    getData();
  }, [guestMode]); ////localstoring updates //////////////////////////////////////////////////////////////////

  const firstRunTabs = (0,external_react_.useRef)(true);
  (0,external_react_.useEffect)(() => {
    //localstoring tabs data
    if (firstRunTabs.current) {
      firstRunTabs.current = false;
      return;
    }

    if (!guestMode) {
      localStorage.setItem(`[${user.id}]tabs`, JSON.stringify(tabsState.tabs));
      localStorage.setItem(`[${user.id}]tabsIdx`, tabsState.currentTabIdx);
      return;
    }

    localStorage.setItem('tabs', JSON.stringify(tabsState.tabs));
    localStorage.setItem('tabsIdx', tabsState.currentTabIdx);
  }, [tabsState]);
  const firstRunCards = (0,external_react_.useRef)(true);
  (0,external_react_.useEffect)(() => {
    //localstoring card data
    if (firstRunCards.current) {
      firstRunCards.current = false;
      return;
    }

    if (!guestMode) {
      localStorage.setItem(`[${user.id}]cards`, JSON.stringify(cardsState));
      return;
    }

    localStorage.setItem('cards', JSON.stringify(cardsState));
  }, [cardsState]);
  const firstRunSettings = (0,external_react_.useRef)(true);
  (0,external_react_.useEffect)(() => {
    if (firstRunSettings.current) {
      firstRunSettings.current = false;
      console.log('avoided first settings run');
      return;
    }

    console.log('stored settings');
    localStorage.setItem('settings', JSON.stringify(settings));
  }, [settings]); //////////////////////////////////////////////////////////////////////////////////////////////

  function loginUser(user) {
    setUser(user);
    setGuestMode(false);
    setShowGuestDialog(false);
  }

  function logoutUser() {
    //clear local storage
    localStorage.removeItem(`[${user.id}]cards`);
    localStorage.removeItem(`[${user.id}]tabs`);
    localStorage.removeItem(`[${user.id}]tabsIdx`);
    setUser({
      username: 'guest',
      id: 0
    });
    setGuestMode(true);
    external_js_cookie_default().remove('auth');
  }

  async function handleNewCardClick(currentTabId) {
    let newCardIndex = 0;
    if (cardsState[currentTabId]) newCardIndex = cardsState[currentTabId].length; // const newCardIndex = cardsState[currentTabId].length

    const snapshotTabId = currentTabId;
    const newItem = {
      id: 'T' + (0,external_uuid_.v4)(),
      checked: false,
      text: ''
    };
    const newCard = {
      id: 'T' + (0,external_uuid_.v4)(),
      header: 'New Card',
      items: [newItem]
    };
    cardsDispatch({
      type: 'addNewCard',
      payload: {
        tabid: currentTabId,
        card: newCard
      }
    });

    if (!guestMode) {
      const card = await createCardRequest(snapshotTabId, newCard);
      cardsDispatch({
        type: 'updateCardId',
        payload: {
          tabid: snapshotTabId,
          idx: newCardIndex,
          newid: card.cardDbId
        }
      }); //update id after db returns

      cardsDispatch({
        type: 'updateItemId',
        payload: {
          tabid: snapshotTabId,
          cardidx: newCardIndex,
          itemidx: 0,
          newid: card.itemDbId
        }
      });
    }
  }

  const currentTabId = tabsState.tabs[tabsState.currentTabIdx].id; //ui state

  const {
    0: showSettings,
    1: setShowSettings
  } = (0,external_react_.useState)(false);

  const toggleShowSettings = () => {
    setShowSettings(!showSettings);
  };

  const darkMode = settings.darkMode;

  const toggleDarkMode = () => {
    settingsDispatch({
      type: 'toggleDarkMode'
    });
  };

  const isDesktop = (0,useMediaQuery/* useMediaQuery */.a)('(min-width: 769px');
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (tasker_app_module_default()).toggleBtn,
      children: /*#__PURE__*/jsx_runtime_.jsx("button", {
        onClick: () => {
          setLoadingOverlay(!loadingOverlay);
        },
        children: "toggle overlay"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (tasker_app_module_default()).loadingOverlayWrapper,
      children: /*#__PURE__*/jsx_runtime_.jsx(components_LoadingOverlay, {
        show: loadingOverlay,
        darkMode: darkMode
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: darkMode ? [(tasker_app_module_default()).bkgContainer, (tasker_app_module_default()).darkMode].join(" ") : (tasker_app_module_default()).bkgContainer
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (tasker_app_module_default()).container,
      children: [/*#__PURE__*/jsx_runtime_.jsx("nav", {
        ref: firstRunTabs,
        className: (tasker_app_module_default()).tabs,
        children: /*#__PURE__*/jsx_runtime_.jsx(tasker_app_TabNav, {
          guestMode: guestMode,
          user_id: user.id,
          darkMode: darkMode,
          tabsState: tabsState,
          dispatch: dispatch
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("aside", {
        className: (tasker_app_module_default()).sideNavWrapper,
        children: /*#__PURE__*/jsx_runtime_.jsx(tasker_app_SideNav, {
          darkMode: darkMode
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (tasker_app_module_default()).userPanelWrap,
        children: /*#__PURE__*/jsx_runtime_.jsx(components_UserPanel, {
          guestMode: guestMode,
          darkMode: darkMode,
          username: user.username,
          toggleLogin: toggleShowLogin,
          toggleSignup: toggleShowSignup,
          logoutUser: logoutUser
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (tasker_app_module_default()).settingsWrap,
        onClick: toggleShowSettings,
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          src: "/img/app/settings.svg",
          width: 30,
          height: 30,
          layout: "responsive"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        ref: firstRunSettings,
        className: showSettings ? (tasker_app_module_default()).settingsPanelWrapper : (tasker_app_module_default()).hideSettingsPanel,
        children: /*#__PURE__*/jsx_runtime_.jsx(tasker_app_Settings, {
          toggleDarkMode: toggleDarkMode,
          darkMode: darkMode,
          layoutSetting: settings.layout,
          setLayoutSetting: layout => {
            settingsDispatch({
              type: 'setLayout',
              payload: {
                layout: layout
              }
            });
          }
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (tasker_app_module_default()).newCardWrap,
        onClick: () => handleNewCardClick(currentTabId),
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          src: "/img/app/new-card.svg",
          width: 100,
          height: 100
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (tasker_app_module_default()).cardContainer,
        children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
          ref: firstRunCards,
          className: (tasker_app_module_default()).cards,
          style: {
            columnCount: settings.layout
          },
          children: cardsState[currentTabId] && cardsState[currentTabId].map((card, index) => {
            return /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
              className: (tasker_app_module_default()).card,
              children: [" ", /*#__PURE__*/jsx_runtime_.jsx(tasker_app_Card, {
                guestMode: guestMode,
                darkMode: darkMode,
                card: card,
                layoutSetting: settings.layout,
                cardidx: index,
                cardsState: cardsState,
                cardsDispatch: cardsDispatch,
                tabid: currentTabId
              }), " "]
            }, card.id);
          })
        })
      }), showGuestDialog && /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (tasker_app_module_default()).guestModeMessage,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(components_Dialog, {
          darkMode: darkMode,
          show: showGuestDialog,
          setShow: setShowGuestDialog,
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            style: {
              color: '#e77777'
            },
            children: "Warning!"
          }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), "You're using the app in Guest Mode, you may lose all your progress."]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: showLogin ? (tasker_app_module_default()).loginWrapper : (tasker_app_module_default()).loginWrapperHide,
        children: /*#__PURE__*/jsx_runtime_.jsx(Login/* default */.Z, {
          loginUser: loginUser,
          toggleShow: toggleShowLogin,
          darkMode: darkMode,
          setUser: setUser
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: showSignup ? (tasker_app_module_default()).loginWrapper : (tasker_app_module_default()).loginWrapperHide,
        children: /*#__PURE__*/jsx_runtime_.jsx(components_Signup, {
          toggleShow: toggleShowSignup,
          darkMode: darkMode
        })
      })]
    })]
  });
};

/* harmony default export */ const tasker_app = (Tasker_app);

/***/ }),

/***/ 1397:
/***/ ((module) => {

// Exports
module.exports = {
	"cardContainer": "Card_cardContainer__AdfA2",
	"hide": "Card_hide__1-F0-",
	"headerTextContainer": "Card_headerTextContainer__26XMN",
	"headerText": "Card_headerText__117pS",
	"editBtn": "Card_editBtn__3mJ1d",
	"edit": "Card_edit__3Fs5A",
	"deleteCardBtn": "Card_deleteCardBtn__195mI",
	"collapseBtn": "Card_collapseBtn__2B76h",
	"cardBody": "Card_cardBody__3e-OG",
	"crossed": "Card_crossed__3mPiy",
	"editText": "Card_editText__1yFZD",
	"deleteWrapper": "Card_deleteWrapper__1GV0v",
	"addItemWrapper": "Card_addItemWrapper__2Dkoa",
	"collapsed": "Card_collapsed__2dLrn",
	"darkMode": "Card_darkMode__1axxJ"
};


/***/ }),

/***/ 559:
/***/ ((module) => {

// Exports
module.exports = {
	"dialogContainer": "Dialog_dialogContainer__1GYZA",
	"closeButton": "Dialog_closeButton__30yAP",
	"darkMode": "Dialog_darkMode__3HFD0"
};


/***/ }),

/***/ 8753:
/***/ ((module) => {

// Exports
module.exports = {
	"hide": "LoadingOverlay_hide__1Eyaq",
	"overlayContainer": "LoadingOverlay_overlayContainer__1NCsA",
	"darkMode": "LoadingOverlay_darkMode__5Deo9"
};


/***/ }),

/***/ 4221:
/***/ ((module) => {

// Exports
module.exports = {
	"settingsContainer": "Settings_settingsContainer__2hyhi",
	"optionsList": "Settings_optionsList__3s01V",
	"darkModeOption": "Settings_darkModeOption__3-JVB",
	"layoutSettingContainer": "Settings_layoutSettingContainer__2en_q",
	"layoutModes": "Settings_layoutModes__2_gua",
	"currentLayout": "Settings_currentLayout__1ywrS",
	"darkMode": "Settings_darkMode__3aUmB"
};


/***/ }),

/***/ 7131:
/***/ ((module) => {

// Exports
module.exports = {
	"sideNavContainer": "SideNav_sideNavContainer__zBNyK",
	"current": "SideNav_current__33x9n",
	"darkMode": "SideNav_darkMode__3yUtf"
};


/***/ }),

/***/ 9540:
/***/ ((module) => {

// Exports
module.exports = {
	"loginContainer": "Signup_loginContainer__2Neer",
	"header": "Signup_header__7q2tp",
	"closeButton": "Signup_closeButton__2SjEl",
	"loadingWrapperHide": "Signup_loadingWrapperHide__20OF9",
	"loadingWrapper": "Signup_loadingWrapper__2yCcs",
	"userForm": "Signup_userForm__3ILtY",
	"bottomRow": "Signup_bottomRow__3ErKg",
	"checkContainer": "Signup_checkContainer__3ClF_",
	"checkbox": "Signup_checkbox__29Sbu",
	"customCheckbox": "Signup_customCheckbox__SfHQf",
	"userFormHide": "Signup_userFormHide__2RrLZ",
	"errorMsg": "Signup_errorMsg__bMyEz",
	"darkMode": "Signup_darkMode__a9s8L"
};


/***/ }),

/***/ 980:
/***/ ((module) => {

// Exports
module.exports = {
	"hideTabMenu": "TabNav_hideTabMenu__8Q39q",
	"showTabMenu": "TabNav_showTabMenu__6CNoC",
	"container": "TabNav_container__ELPXJ",
	"tab": "TabNav_tab__idO8E",
	"edit": "TabNav_edit__30_Bq",
	"tabInput": "TabNav_tabInput__2DAeL",
	"tabsList": "TabNav_tabsList__2aI7R",
	"tabClickBox": "TabNav_tabClickBox__2g6wy",
	"desktopTab": "TabNav_desktopTab__34A-J",
	"tabButtons": "TabNav_tabButtons__1ShWu",
	"desktopCurrent": "TabNav_desktopCurrent__3heVq",
	"newTabWrapper": "TabNav_newTabWrapper__2j8Mm"
};


/***/ }),

/***/ 9255:
/***/ ((module) => {

// Exports
module.exports = {
	"tabsContainer": "TabsMenu_tabsContainer__3HPsl",
	"tabClickSurface": "TabsMenu_tabClickSurface__bV93i",
	"current": "TabsMenu_current__1a1lB",
	"deleteTabWrapper": "TabsMenu_deleteTabWrapper__2RSh4",
	"newTabWrapper": "TabsMenu_newTabWrapper__3azZS",
	"darkMode": "TabsMenu_darkMode__2HYnV"
};


/***/ }),

/***/ 2121:
/***/ ((module) => {

// Exports
module.exports = {
	"hide": "UserPanel_hide__zKm2B",
	"buttons": "UserPanel_buttons__2teMI",
	"container": "UserPanel_container__2_HNj",
	"userContainer": "UserPanel_userContainer__GoRE7",
	"guestIcon": "UserPanel_guestIcon__Upgx7",
	"popupContainer": "UserPanel_popupContainer__1YAhq",
	"darkMode": "UserPanel_darkMode__1NIQw"
};


/***/ }),

/***/ 8989:
/***/ ((module) => {

// Exports
module.exports = {
	"loadingOverlayWrapper": "tasker_app_loadingOverlayWrapper__2eeJZ",
	"toggleBtn": "tasker_app_toggleBtn__3zXkD",
	"container": "tasker_app_container__Vmi8l",
	"tabs": "tasker_app_tabs__3wqYG",
	"userPanelWrap": "tasker_app_userPanelWrap__1r1ZA",
	"settingsWrap": "tasker_app_settingsWrap__oLUW3",
	"hideSettingsPanel": "tasker_app_hideSettingsPanel__1Ovk1",
	"settingsPanelWrapper": "tasker_app_settingsPanelWrapper__1497K",
	"newCardWrap": "tasker_app_newCardWrap__2BpwA",
	"cardContainer": "tasker_app_cardContainer__3PJyY",
	"cards": "tasker_app_cards__1u5J_",
	"card": "tasker_app_card__2EAzv",
	"guestModeMessage": "tasker_app_guestModeMessage__3scn8",
	"bkgContainer": "tasker_app_bkgContainer__3DGeK",
	"darkMode": "tasker_app_darkMode__3XUBE",
	"sideNavWrapper": "tasker_app_sideNavWrapper__1mWx_",
	"loginWrapperHide": "tasker_app_loginWrapperHide__2V5bL",
	"loginWrapper": "tasker_app_loginWrapper__aC-zR"
};


/***/ }),

/***/ 9325:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 822:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 6695:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 556:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 9297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 5282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 1231:
/***/ ((module) => {

"use strict";
module.exports = require("uuid");

/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,664,559], () => (__webpack_exec__(1038)));
module.exports = __webpack_exports__;

})();