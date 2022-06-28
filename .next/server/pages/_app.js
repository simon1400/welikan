"use strict";
(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 1098:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

;// CONCATENATED MODULE: external "uikit"
const external_uikit_namespaceObject = require("uikit");
// EXTERNAL MODULE: ./utility/graphql.js
var graphql = __webpack_require__(2399);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./data/translations.json
var translations = __webpack_require__(1877);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/MobileMenu/index.tsx




const MobileMenu = ({
  show
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: `mobile-menu${show ? ' active-menu' : ''}`,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
        className: "menu",
        children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "",
            children: "\u041F\u0443\u043D\u043A\u0442 \u043C\u0435\u043D\u044E"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "",
            children: "\u041F\u0443\u043D\u043A\u0442 \u043C\u0435\u043D\u044E"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "",
            children: "\u041F\u0443\u043D\u043A\u0442 \u043C\u0435\u043D\u044E"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "",
            children: "\u041F\u0443\u043D\u043A\u0442 \u043C\u0435\u043D\u044E"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "",
            children: "\u041F\u0443\u043D\u043A\u0442 \u043C\u0435\u043D\u044E"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "",
            children: "\u041F\u0443\u043D\u043A\u0442 \u043C\u0435\u043D\u044E"
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
        className: "info-menu",
        children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "",
            children: "8 (800) 999 99 99"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "",
            children: translations/* orderCall */.pk
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
        className: "soc-nav",
        children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/assets/twitter.svg",
              alt: "",
              "uk-svg": ""
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/assets/facebook.svg",
              alt: "",
              "uk-svg": ""
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/assets/github.svg",
              alt: "",
              "uk-svg": ""
            })
          })
        })]
      })]
    })
  });
};

/* harmony default export */ const components_MobileMenu = (MobileMenu);
;// CONCATENATED MODULE: ./components/Hamburger/index.tsx


const Hamburger = ({
  menu,
  handle
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("button", {
    className: `hamburger hamburger--spring${menu ? ' is-active' : ''}`,
    type: "button",
    onClick: () => handle(!menu),
    children: /*#__PURE__*/jsx_runtime_.jsx("span", {
      className: "hamburger-box",
      children: /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "hamburger-inner"
      })
    })
  });
};

/* harmony default export */ const components_Hamburger = (Hamburger);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(8074);
;// CONCATENATED MODULE: ./queries/topNav.ts

const topNavQuery = client_.gql`
  query TopNav {
    global {
      data{
        attributes{
          topNav{
            title
            url
          }
          phone
        }
      }
    }
  }
`;
/* harmony default export */ const queries_topNav = (topNavQuery);
;// CONCATENATED MODULE: ./layout/Header/index.tsx










const Header = () => {
  const {
    loading,
    error,
    data
  } = (0,client_.useQuery)(queries_topNav);
  const {
    0: menu,
    1: setMenu
  } = (0,external_react_.useState)(false);

  if (loading) {
    return null;
  }

  const topNav = data.global.data.attributes.topNav;
  const phone = data.global.data.attributes.phone;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "uk-container",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "header-wrap",
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "logo",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/assets/logo.png",
              alt: ""
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
          className: "desktopMenu",
          children: [/*#__PURE__*/jsx_runtime_.jsx("ul", {
            className: "uk-visible@m",
            children: topNav.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: item.url,
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  children: item.title
                })
              })
            }, index))
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "/ad",
              className: "button accent",
              children: translations/* orderService */.XK
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "contact-top uk-visible@m",
            children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "/asd",
              className: "button link",
              children: phone
            }), /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "/asd",
              children: translations/* orderCall */.pk
            })]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "control-top",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                href: "#modal-login",
                className: "button link",
                "uk-toggle": "",
                children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "/assets/user-alt.svg",
                  alt: "",
                  "uk-svg": ""
                }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "uk-visible@m",
                  children: translations/* login */.x4
                })]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "#modal-local",
                "uk-toggle": "",
                children: "RU"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "uk-visible@m",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                href: "#modal-local",
                "uk-toggle": "",
                children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "/assets/russia.png",
                  alt: ""
                }), "\u0420\u043E\u0441\u0441\u0438\u044F"]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "uk-hidden@m",
              children: /*#__PURE__*/jsx_runtime_.jsx(components_Hamburger, {
                handle: setMenu,
                menu: menu
              })
            })]
          })
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(components_MobileMenu, {
      show: menu
    })]
  });
};

/* harmony default export */ const layout_Header = (Header);
;// CONCATENATED MODULE: ./queries/footer.ts

const footerQuery = client_.gql`
  query Footer {
    global {
      data{
        attributes{
          footerNav{
            title
            item{
              title
              url
            }
          }
          techLinks{
            title
            url
          }
        }
      }
    }
  }
`;
/* harmony default export */ const footer = (footerQuery);
;// CONCATENATED MODULE: ./layout/Footer/index.tsx





const Footer = () => {
  const {
    loading,
    error,
    data
  } = (0,client_.useQuery)(footer);

  if (loading) {
    return null;
  }

  const footerNav = data.global.data.attributes.footerNav;
  const techLinks = data.global.data.attributes.techLinks;
  return /*#__PURE__*/jsx_runtime_.jsx("footer", {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "uk-container",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "uk-grid uk-child-width-1-4",
        "uk-grid": "",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "logo",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/assets/logo-foot.png",
              alt: ""
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "/asd",
                children: "\u0423\u0441\u043B\u043E\u0432\u0438\u044F \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0430 \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u044F"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "/asd",
                children: "\u0423\u0441\u043B\u043E\u0432\u0438\u044F \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0430 \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u044E\u0449\u0435\u0433\u043E"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "/asd",
                children: "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438"
              })
            })]
          })]
        }), footerNav.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx("div", {
          children: /*#__PURE__*/jsx_runtime_.jsx("nav", {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                children: item.title
              }), item.item.map((itemNav, indexNav) => /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: itemNav.url,
                  children: itemNav.title
                })
              }, "item-" + indexNav))]
            })
          })
        }, index)), /*#__PURE__*/jsx_runtime_.jsx("div", {
          children: /*#__PURE__*/jsx_runtime_.jsx("nav", {
            className: "soc-nav",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "",
                  children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "/assets/twitter.svg",
                    alt: "",
                    "uk-svg": ""
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "",
                  children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "/assets/facebook.svg",
                    alt: "",
                    "uk-svg": ""
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "",
                  children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "/assets/github.svg",
                    alt: "",
                    "uk-svg": ""
                  })
                })
              })]
            })
          })
        })]
      })
    })
  });
};

/* harmony default export */ const layout_Footer = (Footer);
;// CONCATENATED MODULE: ./components/Checkbox/index.tsx




const Checkbox = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "checkbox",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
        className: "uk-checkbox",
        type: "checkbox"
      }), translations/* agreePrivacy */.c8]
    })
  });
};

/* harmony default export */ const components_Checkbox = (Checkbox);
;// CONCATENATED MODULE: ./components/CheckIcon/index.tsx


const CheckIcon = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "check-icon",
    children: /*#__PURE__*/jsx_runtime_.jsx("img", {
      src: "/assets/check.svg",
      alt: "check icon",
      "uk-svg": ""
    })
  });
};

/* harmony default export */ const components_CheckIcon = (CheckIcon);
// EXTERNAL MODULE: ./components/Input/index.tsx
var Input = __webpack_require__(3157);
;// CONCATENATED MODULE: ./components/Modals/Auth/Container/index.tsx



const ContainerAuth = ({
  children,
  title,
  className = ''
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: className,
    children: [title && /*#__PURE__*/jsx_runtime_.jsx("h3", {
      children: title
    }), children]
  });
};

/* harmony default export */ const Container = (ContainerAuth);
;// CONCATENATED MODULE: ./components/Modals/Auth/SingUp/Step3/index.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const Step3 = () => {
  const {
    0: values,
    1: setValues
  } = (0,external_react_.useState)({
    name: '',
    password: '',
    description: ''
  });

  const handleChange = e => {
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      [e.target.name]: e.target.value
    }));
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container, {
    title: translations/* contactInfo */.ns,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "modal-input multi",
      children: [/*#__PURE__*/jsx_runtime_.jsx(Input/* default */.Z, {
        placeholder: translations/* fullName */.v2,
        name: "name",
        onChange: handleChange,
        value: values.name
      }), /*#__PURE__*/jsx_runtime_.jsx(components_CheckIcon, {})]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "modal-input multi",
      children: [/*#__PURE__*/jsx_runtime_.jsx(Input/* default */.Z, {
        placeholder: translations/* fullName */.v2,
        name: "name",
        onChange: handleChange,
        value: values.name
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: "",
          className: "button bare",
          children: translations/* confirm */.iG
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(components_Checkbox, {})]
  });
};

/* harmony default export */ const SingUp_Step3 = (Step3);
// EXTERNAL MODULE: ./components/Modals/Title/index.tsx
var Title = __webpack_require__(5094);
// EXTERNAL MODULE: ./components/Modals/Close/index.tsx
var Close = __webpack_require__(2100);
;// CONCATENATED MODULE: ./layout/Modals/Auth/SingUp/index.tsx






const SingUpModal = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    id: "modal-singup",
    className: "auth-modal xsmall-modal uk-flex-top",
    "uk-modal": "",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "uk-modal-dialog uk-modal-body uk-margin-auto-vertical",
      children: [/*#__PURE__*/jsx_runtime_.jsx(Close/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(Title/* default */.Z, {
        title: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F",
        subTitle: "\u0428\u0430\u0433 1/3"
      }), /*#__PURE__*/jsx_runtime_.jsx(SingUp_Step3, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "footer-modal",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: "",
          className: "button",
          children: "\u0414\u0430\u043B\u0435\u0435"
        })
      })]
    })
  });
};

/* harmony default export */ const SingUp = (SingUpModal);
;// CONCATENATED MODULE: ./layout/Modals/Wrap/index.tsx




const WrapModal = ({
  className = '',
  size = "",
  children,
  id,
  footer = false
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    id: id,
    className: `uk-flex-top ${className} ${size}`,
    "uk-modal": "",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "uk-modal-dialog uk-modal-body uk-margin-auto-vertical",
      children: [/*#__PURE__*/jsx_runtime_.jsx(Close/* default */.Z, {}), children, footer && /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "footer-modal",
        children: footer
      })]
    })
  });
};

/* harmony default export */ const Wrap = (WrapModal);
;// CONCATENATED MODULE: ./layout/Modals/Auth/Login/index.tsx
function Login_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function Login_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Login_ownKeys(Object(source), true).forEach(function (key) { Login_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Login_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Login_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const Login = () => {
  const {
    0: values,
    1: setValues
  } = (0,external_react_.useState)({
    name: '',
    password: '',
    description: ''
  });

  const handleChange = e => {
    setValues(Login_objectSpread(Login_objectSpread({}, values), {}, {
      [e.target.name]: e.target.value
    }));
  };

  const handleClose = () => {
    console.log(111);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Wrap, {
    className: "auth-modal",
    size: "xsmall-modal",
    id: "modal-login",
    footer: /*#__PURE__*/jsx_runtime_.jsx("a", {
      href: "",
      className: "button",
      children: translations/* login */.x4
    }),
    children: [/*#__PURE__*/jsx_runtime_.jsx(Title/* default */.Z, {
      title: "\u0412\u0445\u043E\u0434",
      subTitle: "\u0415\u0449\u0435 \u043D\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u044B? \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "modal-input",
      children: /*#__PURE__*/jsx_runtime_.jsx(Input/* default */.Z, {
        placeholder: "\u0424\u0418\u041E",
        name: "name",
        onChange: handleChange,
        value: values.name
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "modal-input",
      children: /*#__PURE__*/jsx_runtime_.jsx(Input/* default */.Z, {
        placeholder: "\u0424\u0418\u041E",
        name: "name",
        onChange: handleChange,
        value: values.name
      })
    })]
  });
};

/* harmony default export */ const Auth_Login = (Login);
;// CONCATENATED MODULE: ./layout/Modals/Localization/Language/index.tsx





const Language = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    id: "modal-local",
    className: "uk-flex-top",
    "uk-modal": "",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "uk-modal-dialog uk-modal-body uk-margin-auto-vertical",
      children: [/*#__PURE__*/jsx_runtime_.jsx(Close/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(Title/* default */.Z, {
        title: "\u0412\u044B\u0431\u043E\u0440 \u044F\u0437\u044B\u043A\u0430",
        search: true
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "content-modal",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
              href: "",
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                children: "AZ"
              }), "\u0410\u0437\u0435\u0440\u0431\u0430\u0439\u0434\u0436\u0430\u043D\u0441\u043A\u0438\u0439 "]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
              href: "",
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                children: "AZ"
              }), "\u0410\u0437\u0435\u0440\u0431\u0430\u0439\u0434\u0436\u0430\u043D\u0441\u043A\u0438\u0439 "]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
              href: "",
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                children: "AZ"
              }), "\u0410\u0437\u0435\u0440\u0431\u0430\u0439\u0434\u0436\u0430\u043D\u0441\u043A\u0438\u0439 "]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
              href: "",
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                children: "AZ"
              }), "\u0410\u0437\u0435\u0440\u0431\u0430\u0439\u0434\u0436\u0430\u043D\u0441\u043A\u0438\u0439 "]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
              href: "",
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                children: "AZ"
              }), "\u0410\u0437\u0435\u0440\u0431\u0430\u0439\u0434\u0436\u0430\u043D\u0441\u043A\u0438\u0439 "]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
              href: "",
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                children: "AZ"
              }), "\u0410\u0437\u0435\u0440\u0431\u0430\u0439\u0434\u0436\u0430\u043D\u0441\u043A\u0438\u0439 "]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
              href: "",
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                children: "AZ"
              }), "\u0410\u0437\u0435\u0440\u0431\u0430\u0439\u0434\u0436\u0430\u043D\u0441\u043A\u0438\u0439 "]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
              href: "",
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                children: "AZ"
              }), "\u0410\u0437\u0435\u0440\u0431\u0430\u0439\u0434\u0436\u0430\u043D\u0441\u043A\u0438\u0439 "]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
              href: "",
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                children: "AZ"
              }), "\u0410\u0437\u0435\u0440\u0431\u0430\u0439\u0434\u0436\u0430\u043D\u0441\u043A\u0438\u0439 "]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
              href: "",
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                children: "AZ"
              }), "\u0410\u0437\u0435\u0440\u0431\u0430\u0439\u0434\u0436\u0430\u043D\u0441\u043A\u0438\u0439 "]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
              href: "",
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                children: "AZ"
              }), "\u0410\u0437\u0435\u0440\u0431\u0430\u0439\u0434\u0436\u0430\u043D\u0441\u043A\u0438\u0439 "]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
              href: "",
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                children: "AZ"
              }), "\u0410\u0437\u0435\u0440\u0431\u0430\u0439\u0434\u0436\u0430\u043D\u0441\u043A\u0438\u0439 "]
            })
          })]
        })
      })]
    })
  });
};

/* harmony default export */ const Localization_Language = (Language);
// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(6155);
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);
;// CONCATENATED MODULE: ./components/BlockContent/index.tsx






const BlockContent = () => {
  const {
    0: password,
    1: setPassword
  } = (0,external_react_.useState)('');
  const {
    0: access,
    1: setAccess
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    setAccess(!!external_js_cookie_default().get("access"));
  }, []);

  const submit = () => {
    if (password === 'W!Z$np*^9EtU') {
      external_js_cookie_default().set("access", "234r523");
      setAccess(true);
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: access ? "uk-hidden" : "block-content",
    children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
      type: "password",
      value: password,
      onChange: e => setPassword(e.target.value)
    }), /*#__PURE__*/jsx_runtime_.jsx("button", {
      onClick: () => submit(),
      children: translations/* login */.x4
    })]
  });
};

/* harmony default export */ const components_BlockContent = (BlockContent);
;// CONCATENATED MODULE: ./pages/_app.tsx
function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(graphql/* WithGraphQL */.Y2, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(components_BlockContent, {}), /*#__PURE__*/jsx_runtime_.jsx(layout_Header, {}), /*#__PURE__*/jsx_runtime_.jsx(Component, _app_objectSpread({}, pageProps)), /*#__PURE__*/jsx_runtime_.jsx(layout_Footer, {}), /*#__PURE__*/jsx_runtime_.jsx(SingUp, {}), /*#__PURE__*/jsx_runtime_.jsx(Auth_Login, {}), /*#__PURE__*/jsx_runtime_.jsx(Localization_Language, {})]
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 8074:
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ 9239:
/***/ ((module) => {

module.exports = require("@apollo/client/link/context");

/***/ }),

/***/ 6155:
/***/ ((module) => {

module.exports = require("js-cookie");

/***/ }),

/***/ 9325:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1664,8803,2399,104], () => (__webpack_exec__(1098)));
module.exports = __webpack_exports__;

})();