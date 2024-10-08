'use strict'
;(self.webpackChunkauthform = self.webpackChunkauthform || []).push([
  [880],
  {
    4617: (e, t, r) => {
      r.d(t, { t: () => i, v: () => a })
      var n = r(3461),
        l = r(9254)
      function i(e) {
        const { isDisabled: t, isInvalid: r, isReadOnly: n, isRequired: i, ...o } = a(e)
        return {
          ...o,
          disabled: t,
          readOnly: n,
          required: i,
          'aria-invalid': (0, l.rq)(r),
          'aria-required': (0, l.rq)(i),
          'aria-readonly': (0, l.rq)(n),
        }
      }
      function a(e) {
        var t, r, i
        const a = (0, n.Uc)(),
          {
            id: o,
            disabled: s,
            readOnly: d,
            required: c,
            isRequired: u,
            isInvalid: v,
            isReadOnly: f,
            isDisabled: p,
            onFocus: h,
            onBlur: b,
            ...m
          } = e,
          y = e['aria-describedby'] ? [e['aria-describedby']] : []
        return (
          (null == a ? void 0 : a.hasFeedbackText) && (null == a ? void 0 : a.isInvalid) && y.push(a.feedbackId),
          (null == a ? void 0 : a.hasHelpText) && y.push(a.helpTextId),
          {
            ...m,
            'aria-describedby': y.join(' ') || void 0,
            id: null != o ? o : null == a ? void 0 : a.id,
            isDisabled: null != (t = null != s ? s : p) ? t : null == a ? void 0 : a.isDisabled,
            isReadOnly: null != (r = null != d ? d : f) ? r : null == a ? void 0 : a.isReadOnly,
            isRequired: null != (i = null != c ? c : u) ? i : null == a ? void 0 : a.isRequired,
            isInvalid: null != v ? v : null == a ? void 0 : a.isInvalid,
            onFocus: (0, l.Hj)(null == a ? void 0 : a.onFocus, h),
            onBlur: (0, l.Hj)(null == a ? void 0 : a.onBlur, b),
          }
        )
      }
    },
    3461: (e, t, r) => {
      r.d(t, { MJ: () => b, TP: () => f, Uc: () => h, eK: () => m })
      var n = r(7852),
        l = r(4554),
        i = r(3226),
        a = r(3761),
        o = r(6254),
        s = r(4550),
        d = r(9254),
        c = r(5043),
        u = r(579),
        [v, f] = (0, n.q)({
          name: 'FormControlStylesContext',
          errorMessage:
            'useFormControlStyles returned is \'undefined\'. Seems you forgot to wrap the components in "<FormControl />" ',
        }),
        [p, h] = (0, n.q)({ strict: !1, name: 'FormControlContext' })
      var b = (0, i.R)(function (e, t) {
        const r = (0, a.o5)('Form', e),
          n = (0, o.MN)(e),
          {
            getRootProps: i,
            htmlProps: f,
            ...h
          } = (function (e) {
            const { id: t, isRequired: r, isInvalid: n, isDisabled: i, isReadOnly: a, ...o } = e,
              s = (0, c.useId)(),
              u = t || 'field-'.concat(s),
              v = ''.concat(u, '-label'),
              f = ''.concat(u, '-feedback'),
              p = ''.concat(u, '-helptext'),
              [h, b] = (0, c.useState)(!1),
              [m, y] = (0, c.useState)(!1),
              [g, O] = (0, c.useState)(!1),
              x = (0, c.useCallback)(
                function () {
                  let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
                  return {
                    id: p,
                    ...(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}),
                    ref: (0, l.Px)(e, (e) => {
                      e && y(!0)
                    }),
                  }
                },
                [p],
              ),
              j = (0, c.useCallback)(
                function () {
                  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
                  return {
                    ...e,
                    ref: t,
                    'data-focus': (0, d.sE)(g),
                    'data-disabled': (0, d.sE)(i),
                    'data-invalid': (0, d.sE)(n),
                    'data-readonly': (0, d.sE)(a),
                    id: void 0 !== e.id ? e.id : v,
                    htmlFor: void 0 !== e.htmlFor ? e.htmlFor : u,
                  }
                },
                [u, i, g, n, a, v],
              ),
              P = (0, c.useCallback)(
                function () {
                  let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
                  return {
                    id: f,
                    ...(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}),
                    ref: (0, l.Px)(e, (e) => {
                      e && b(!0)
                    }),
                    'aria-live': 'polite',
                  }
                },
                [f],
              ),
              k = (0, c.useCallback)(
                function () {
                  let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
                  return {
                    ...(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}),
                    ...o,
                    ref: e,
                    role: 'group',
                    'data-focus': (0, d.sE)(g),
                    'data-disabled': (0, d.sE)(i),
                    'data-invalid': (0, d.sE)(n),
                    'data-readonly': (0, d.sE)(a),
                  }
                },
                [o, i, g, n, a],
              ),
              w = (0, c.useCallback)(function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                  t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
                return { ...e, ref: t, role: 'presentation', 'aria-hidden': !0, children: e.children || '*' }
              }, [])
            return {
              isRequired: !!r,
              isInvalid: !!n,
              isReadOnly: !!a,
              isDisabled: !!i,
              isFocused: !!g,
              onFocus: () => O(!0),
              onBlur: () => O(!1),
              hasFeedbackText: h,
              setHasFeedbackText: b,
              hasHelpText: m,
              setHasHelpText: y,
              id: u,
              labelId: v,
              feedbackId: f,
              helpTextId: p,
              htmlProps: o,
              getHelpTextProps: x,
              getErrorMessageProps: P,
              getRootProps: k,
              getLabelProps: j,
              getRequiredIndicatorProps: w,
            }
          })(n),
          b = (0, d.cx)('chakra-form-control', e.className)
        return (0, u.jsx)(p, {
          value: h,
          children: (0, u.jsx)(v, {
            value: r,
            children: (0, u.jsx)(s.B.div, { ...i({}, t), className: b, __css: r.container }),
          }),
        })
      })
      b.displayName = 'FormControl'
      var m = (0, i.R)(function (e, t) {
        const r = h(),
          n = f(),
          l = (0, d.cx)('chakra-form__helper-text', e.className)
        return (0, u.jsx)(s.B.div, {
          ...(null == r ? void 0 : r.getHelpTextProps(e, t)),
          __css: n.helperText,
          className: l,
        })
      })
      m.displayName = 'FormHelperText'
    },
    3441: (e, t, r) => {
      r.d(t, { k5: () => f })
      var n = r(5043),
        l = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 },
        i = n.createContext && n.createContext(l),
        a = ['attr', 'size', 'title']
      function o(e, t) {
        if (null == e) return {}
        var r,
          n,
          l = (function (e, t) {
            if (null == e) return {}
            var r = {}
            for (var n in e)
              if (Object.prototype.hasOwnProperty.call(e, n)) {
                if (t.indexOf(n) >= 0) continue
                r[n] = e[n]
              }
            return r
          })(e, t)
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e)
          for (n = 0; n < i.length; n++)
            (r = i[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]))
        }
        return l
      }
      function s() {
        return (
          (s = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t]
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
              }),
          s.apply(this, arguments)
        )
      }
      function d(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? d(Object(r), !0).forEach(function (t) {
                u(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : d(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                })
        }
        return e
      }
      function u(e, t, r) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ('object' != typeof e || !e) return e
              var r = e[Symbol.toPrimitive]
              if (void 0 !== r) {
                var n = r.call(e, t || 'default')
                if ('object' != typeof n) return n
                throw new TypeError('@@toPrimitive must return a primitive value.')
              }
              return ('string' === t ? String : Number)(e)
            })(e, 'string')
            return 'symbol' == typeof t ? t : t + ''
          })(t)) in e
            ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = r),
          e
        )
      }
      function v(e) {
        return e && e.map((e, t) => n.createElement(e.tag, c({ key: t }, e.attr), v(e.child)))
      }
      function f(e) {
        return (t) => n.createElement(p, s({ attr: c({}, e.attr) }, t), v(e.child))
      }
      function p(e) {
        var t = (t) => {
          var r,
            { attr: l, size: i, title: d } = e,
            u = o(e, a),
            v = i || t.size || '1em'
          return (
            t.className && (r = t.className),
            e.className && (r = (r ? r + ' ' : '') + e.className),
            n.createElement(
              'svg',
              s({ stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' }, t.attr, l, u, {
                className: r,
                style: c(c({ color: e.color || t.color }, t.style), e.style),
                height: v,
                width: v,
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              d && n.createElement('title', null, d),
              e.children,
            )
          )
        }
        return void 0 !== i ? n.createElement(i.Consumer, null, (e) => t(e)) : t(l)
      }
    },
    6720: (e, t, r) => {
      r.d(t, { mU9: () => l, mm2: () => i })
      var n = r(3441)
      function l(e) {
        return (0, n.k5)({
          tag: 'svg',
          attr: { viewBox: '0 0 24 24' },
          child: [
            { tag: 'path', attr: { fill: 'none', d: 'M0 0h24v24H0z' }, child: [] },
            {
              tag: 'path',
              attr: {
                d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
              },
              child: [],
            },
          ],
        })(e)
      }
      function i(e) {
        return (0, n.k5)({
          tag: 'svg',
          attr: { viewBox: '0 0 24 24' },
          child: [
            { tag: 'path', attr: { fill: 'none', d: 'M0 0h24v24H0z' }, child: [] },
            {
              tag: 'path',
              attr: {
                d: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z',
              },
              child: [],
            },
          ],
        })(e)
      }
    },
  },
])
//# sourceMappingURL=880.01ab208d.chunk.js.map
