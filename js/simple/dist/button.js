/*!
  * Bootstrap button.js v4.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
var Button = (function (Data, EventHandler, SelectorEngine) {
  'use strict';

  Data = Data && Data.hasOwnProperty('default') ? Data['default'] : Data;
  EventHandler = EventHandler && EventHandler.hasOwnProperty('default') ? EventHandler['default'] : EventHandler;
  SelectorEngine = SelectorEngine && SelectorEngine.hasOwnProperty('default') ? SelectorEngine['default'] : SelectorEngine;

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.3.1): util/index.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */
  var _window = window,
      jQuery = _window.jQuery; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'button';
  var VERSION = '4.3.1';
  var DATA_KEY = 'bs.button';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var ClassName = {
    ACTIVE: 'active',
    BUTTON: 'btn',
    FOCUS: 'focus'
  };
  var Selector = {
    DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
    DATA_TOGGLE: '[data-toggle="buttons"]',
    INPUT: 'input:not([type="hidden"])',
    ACTIVE: '.active',
    BUTTON: '.btn'
  };
  var Event = {
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY,
    FOCUS_DATA_API: "focus" + EVENT_KEY + DATA_API_KEY,
    BLUR_DATA_API: "blur" + EVENT_KEY + DATA_API_KEY
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Button =
  /*#__PURE__*/
  function () {
    function Button(element) {
      this._element = element;
      Data.setData(element, DATA_KEY, this);
    } // Getters


    var _proto = Button.prototype;

    // Public
    _proto.toggle = function toggle() {
      var triggerChangeEvent = true;
      var addAriaPressed = true;
      var rootElement = SelectorEngine.closest(this._element, Selector.DATA_TOGGLE);

      if (rootElement) {
        var input = SelectorEngine.findOne(Selector.INPUT, this._element);

        if (input) {
          if (input.type === 'radio') {
            if (input.checked && this._element.classList.contains(ClassName.ACTIVE)) {
              triggerChangeEvent = false;
            } else {
              var activeElement = SelectorEngine.findOne(Selector.ACTIVE, rootElement);

              if (activeElement) {
                activeElement.classList.remove(ClassName.ACTIVE);
              }
            }
          }

          if (triggerChangeEvent) {
            if (input.hasAttribute('disabled') || rootElement.hasAttribute('disabled') || input.classList.contains('disabled') || rootElement.classList.contains('disabled')) {
              return;
            }

            input.checked = !this._element.classList.contains(ClassName.ACTIVE);
            EventHandler.trigger(input, 'change');
          }

          input.focus();
          addAriaPressed = false;
        }
      }

      if (addAriaPressed) {
        this._element.setAttribute('aria-pressed', !this._element.classList.contains(ClassName.ACTIVE));
      }

      if (triggerChangeEvent) {
        this._element.classList.toggle(ClassName.ACTIVE);
      }
    };

    _proto.dispose = function dispose() {
      Data.removeData(this._element, DATA_KEY);
      this._element = null;
    } // Static
    ;

    Button._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = Data.getData(this, DATA_KEY);

        if (!data) {
          data = new Button(this);
        }

        if (config === 'toggle') {
          data[config]();
        }
      });
    };

    Button._getInstance = function _getInstance(element) {
      return Data.getData(element, DATA_KEY);
    };

    _createClass(Button, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }]);

    return Button;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(document, Event.CLICK_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {
    event.preventDefault();
    var button = event.target;

    if (!button.classList.contains(ClassName.BUTTON)) {
      button = SelectorEngine.closest(button, Selector.BUTTON);
    }

    var data = Data.getData(button, DATA_KEY);

    if (!data) {
      data = new Button(button);
      Data.setData(button, DATA_KEY, data);
    }

    data.toggle();
  });
  EventHandler.on(document, Event.FOCUS_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {
    var button = SelectorEngine.closest(event.target, Selector.BUTTON);

    if (button) {
      button.classList.add(ClassName.FOCUS);
    }
  });
  EventHandler.on(document, Event.BLUR_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {
    var button = SelectorEngine.closest(event.target, Selector.BUTTON);

    if (button) {
      button.classList.remove(ClassName.FOCUS);
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .button to jQuery only if jQuery is present
   */

  if (typeof jQuery !== 'undefined') {
    var JQUERY_NO_CONFLICT = jQuery.fn[NAME];
    jQuery.fn[NAME] = Button._jQueryInterface;
    jQuery.fn[NAME].Constructor = Button;

    jQuery.fn[NAME].noConflict = function () {
      jQuery.fn[NAME] = JQUERY_NO_CONFLICT;
      return Button._jQueryInterface;
    };
  }

  return Button;

}(Data, EventHandler, SelectorEngine));
//# sourceMappingURL=button.js.map
